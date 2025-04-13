export const sortByName = (data, direction = 'asc') => {
  return [...data].sort((a, b) =>
    direction === 'asc'
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
  )
}