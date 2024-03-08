import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  // Additional props specific to Input component can be defined here
  label?: string
  hasError?: boolean
  errorMessage?: string
  focus?: boolean
}

const Input = ({ label, hasError, errorMessage, focus, ...rest }: InputProps) => {
  return (
    <div className="relative w-full">
      {label && (
        <label
          className={`absolute left-4 pointer-events-none transition-all ${
            focus ? 'text-[10px] top-1' : 'text-sm translate-x-0 -translate-y-1/2 top-1/2'
          } ${hasError ? 'text-red-500' : ''}`}
          htmlFor={rest.name}
        >
          {hasError ? errorMessage : label}
        </label>
      )}
      <input
        className={`w-full px-4 pt-4 shadow-md pb-1 rounded-lg border outline-none text-sm ${
          hasError ? 'border-warm-red text-warm-red' : 'border-gray-300'
        }`}
        {...rest}
      />
    </div>
  )
}

export default Input
