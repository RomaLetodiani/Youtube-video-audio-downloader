import { useEffect, useState } from 'react'

export const useInput = (validate: (value: string) => boolean) => {
  const [value, setValue] = useState('')
  const [touched, setTouched] = useState(false)
  const [focus, setFocus] = useState(false)

  const isValid = validate(value)
  const hasError = !isValid && touched

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const onBlur = () => {
    setTouched(true)
    !value && setFocus(false)
  }

  const onFocus = () => {
    setFocus(true)
  }

  useEffect(() => {
    value && setFocus(true)
  }, [value])

  return {
    value,
    focus,
    onChange,
    onBlur,
    onFocus,
    hasError,
  }
}
