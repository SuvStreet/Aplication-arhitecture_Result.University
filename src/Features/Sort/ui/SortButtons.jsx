export const SortButtons = ({ sort, onSort }) => {
  return (
    <div className="sortGroupButtons">
      <button
        className={sort === 'asc' ? 'activeSort' : ''}
        onClick={() => onSort('asc')}
      >
        Сортировать по А-Я
      </button>
      <button
        className={sort === 'desc' ? 'activeSort' : ''}
        onClick={() => onSort('desc')}
      >
        Сортировать по Я-А
      </button>
    </div>
  )
}
