import { z } from 'zod'
import { type FormType } from '../types/Form'

const formSchema = z.object({
  prelude: z.string().min(1, { message: 'This field is required' })
})

interface ErrorValidate {
  path: string
  message: string
}

export function validateForm (formData: FormType): boolean | ErrorValidate {
  const result = formSchema.safeParse(formData)

  if (!result.success) {
    const jsonResult = JSON.parse(result.error.message)[0]
    return {
      path: jsonResult.path[0],
      message: jsonResult.message
    }
  }

  return result.success
}
