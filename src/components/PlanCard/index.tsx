import { renderPlans } from './templates/renderPlans'

import styles from './styles.module.scss'

export interface Plan {
  name: string
  description: string
}

export interface PlanCardProps {
  plans: Plan[]
}

export const PlanCard = ({ plans }: PlanCardProps) => {
  return <div className={styles.container}>{plans.map(renderPlans)}</div>
}
