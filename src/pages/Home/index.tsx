import { Table } from 'components/Table'
import { calculatePrice } from 'services/calculatePrice'

import { formatPrice } from 'utils/formatPrice'

export const Home = () => {
  const { finalValueWithPlan, finalValueWithoutPlan } = calculatePrice(
    '016',
    '011',
    40,
    30,
  )
  const dataBody = [
    '016',
    '011',
    '30',
    'FaleMais30',
    formatPrice(finalValueWithPlan),
    formatPrice(finalValueWithoutPlan),
  ]

  return <Table dataBody={dataBody} />
}
