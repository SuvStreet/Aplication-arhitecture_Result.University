import { Group } from '@mantine/core'
import { Button } from '@shared/ui/components'

import s from './style.module.css'

export const SortButtons = ({ sort, onSort }) => {
  return (
    <Group justify="center" className={s.sortGroupButtons}>
      <Button
        variant="filled"
        color={sort === 'asc' ? 'green' : 'gray'}
        onClick={() => onSort('asc')}
      >
        Сортировать по А-Я
      </Button>

      <Button
        variant="filled"
        color={sort === 'desc' ? 'green' : 'gray'}
        onClick={() => onSort('desc')}
      >
        Сортировать по Я-А
      </Button>
    </Group>
  )
}
