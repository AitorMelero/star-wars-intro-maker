import { z } from 'zod'
import { type ErrorValidate, type FormType } from '../types/Form'

const formSchema = z.object({
  prelude: z.string()
    .min(1, { message: 'This field is required' })
    .transform(text => text.split(/\r\n|\r|\n/).length).refine(
      (val) => val <= 2,
      { message: 'This field text can\'t have more than 2 lines.' }
    ),
  title: z.string()
    .min(1, { message: 'This field is required' })
    .transform(text => text.split(/\r\n|\r|\n/).length).refine(
      (val) => val <= 2,
      { message: 'This field text can\'t have more than 2 lines.' }
    ),
  episode: z.string()
    .min(1, { message: 'This field is required' }),
  episodeTitle: z.string()
    .min(1, { message: 'This field is required' }),
  crawlText: z.string()
    .min(1, { message: 'This field is required' })
})

export function validateForm (formData: FormType): true | ErrorValidate[] {
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
