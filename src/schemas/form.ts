import { z } from 'zod'
import { type FormType } from '../types/Form'

// console.log(data.title.split(/\r\n|\r|\n/).length)

// Max line characters: columns
// const normalize = (text: string): string => text.replaceAll('\r\n', '\n')
// title: z.string().transform(normalize).pipe(z.string().max(2, { message: 'This field text can\'t have more than 2 lines.' }))

const normalize = (text: string): string => text.replaceAll('\r\n', '\n')
// const normalize = (text: string): string[] => text.split(/\r\n|\r|\n/)
// const normalize = (text: string): number => text.split(/\r\n|\r|\n/).length

const formSchema = z.object({
  prelude: z.string().min(1, { message: 'This field is required' }),
  title: z.string().min(1, { message: 'This field is required' })
})
  .and(
    z.object({
      title: z.string().transform(normalize).pipe(z.string().max(2, { message: 'This field text can\'t have more than 2 lines.' }))
      // title: z.string().transform((text) => text.split(/\r\n|\r|\n/).length).pipe(z.number().max(2, { message: 'This field text can\'t have more than 2 lines.' }))
    })
  )

interface ErrorValidate {
  path: string
  message: string
}

export function validateForm (formData: FormType): boolean | ErrorValidate[] {
  const result = formSchema.safeParse(formData)

  if (!result.success) {
    // There are errors in validation
    const jsonResult = JSON.parse(result.error.message)
    const errorResult: ErrorValidate[] = []

    for (let i = 0; i < jsonResult.length; i++) {
      const path = jsonResult[i].path[0]
      const message = jsonResult[i].message

      errorResult.push({ path, message })
    }

    return errorResult
  }

  return result.success
}
