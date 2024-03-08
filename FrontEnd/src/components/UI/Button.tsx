import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

const Button = ({ children, variant = 'primary', ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={`${
        variant === 'primary' ? 'bg-red-500 hover:bg-red-600' : 'bg-red-400 hover:bg-red-500'
      } text-xs whitespace-nowrap border flex-1 shadow-md rounded-lg px-5 py-2 font-bold text-white ${
        rest.className
      }`}
    >
      {children}
    </button>
  )
}

export default Button
