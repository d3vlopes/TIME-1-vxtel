import { Button } from 'components/Button'

import { Plan } from '..'

import styles from '../styles.module.scss'

export const renderPlans = (plan: Plan) => (
  <div className={styles.planContainer} key={`Plan-${plan.name}`}>
    <header className={styles.planHeader}>
      <h3>{plan.name}</h3>
    </header>
    <p>{plan.description}</p>
    <Button variant="secondary">Contratar agora</Button>
  </div>
)
