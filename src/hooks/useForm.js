import { useState } from 'react'

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState)

  const handleInputChange = (event) => {
    const {value, name} = event.target
    setForm({...form, [name]: value})
  }

  const clear = () => {
    setForm(initialState)
  }

  const setFields = (newValues) => {
    setForm(newValues)
  }

  return [form, handleInputChange, clear, setFields]
}

export default useForm
