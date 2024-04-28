'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'

type Props = {
    children: React.ReactNode
}
const FormSubmit = ({children}:Props) => {
    const status = useFormStatus()

    if(status.pending){
        return <button disabled>Creating Post...</button>
    }
  return (
    <button>{children}</button>
  )
}

export default FormSubmit