import { ButtonHTMLAttributes } from 'react'
import { setClass } from 'utils/setClass'
import styles from './styles.module.scss'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium' | 'fullWidth'
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={setClass(
        ['container', `button-${variant}`, `button-${size}`],
        styles,
      )}
      {...rest}
    >
      <span>{children}</span>
    </button>
  )
}
