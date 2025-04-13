import { useCallback, useRef } from 'react'
import { useParams, Link, useSearchParams } from 'react-router'

import { SortButtons } from '@features/sort/ui/SortButtons'
import { useInfiniteScroll } from '@shared/hooks/useInfiniteScroll'
import { sortByName } from '@shared/lib/sort'

export function Category() {
  const { category } = useParams()

  const { data, isLoading, error, hasMore, setData, setPageNumber } =
    useInfiniteScroll(category)

  const observer = useRef()

  const lastNodeRef = useCallback(
    (node) => {
      if (isLoading) return

      if (observer.current) observer.current.disconnect()

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prev) => prev + 1)
        }
      })

      if (node) observer.current.observe(node)
    },
    [isLoading, hasMore]
  )

  const [searchParams, setSearchParams] = useSearchParams({ _sort: '' })
  const sort = searchParams.get('_sort')

  const setSortData = (options, data) => {
    if (sort === options) {
      searchParams.delete('_sort')
      setSearchParams(searchParams)
      return
    }

    switch (options) {
      case 'asc':
        setSearchParams({ _sort: 'asc' })
        setData(sortByName(data, 'asc'))
        break
      case 'desc':
        setSearchParams({ _sort: 'desc' })
        setData(sortByName(data, 'desc'))
        break
    }
  }

  const sortedData = sort ? sortByName(data, sort) : data

  if (data.length === 0 && !isLoading) {
    return (
      <>
        <p>Ой, тут пусто...</p>
      </>
    )
  }

  return (
    <>
      <SortButtons
        sort={sort}
        onSort={(direction) => setSortData(direction, data)}
      />
      <ul style={{ scrollBehavior: 'smooth' }}>
        {sortedData.map((item, index) => {
          if (data.length - 10 === index + 1) {
            return (
              <li ref={lastNodeRef} key={item.id}>
                <Link to={item.id.toString()}>{item.name}</Link>
              </li>
            )
          } else {
            return (
              <li key={item.id}>
                <Link to={item.id.toString()}>{item.name}</Link>
              </li>
            )
          }
        })}
        {isLoading && <p>Загрузка данных...</p>}
        {error && <p>Произошла ошибка: {error}</p>}
      </ul>
    </>
  )
}
