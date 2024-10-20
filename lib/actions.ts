'use server'
import { z } from 'zod'
import { Resend } from 'resend'
import { ContactFormSchema, NewsletterFormSchema } from '@/lib/schemas';
import ContactFormTempete from '@/emails/ConactFormTemplete'
type ContactFormInputs = z.infer<typeof ContactFormSchema>
type NewsletterFormInputs = z.infer<typeof NewsletterFormSchema>
const resend = new Resend('re_AQZKXFFK_BDp1CZc7FH22QAKojxeKDkq5')

export const sendEmail = async(data:ContactFormInputs)=>{
    const results=ContactFormSchema.safeParse(data)
    if (results.error) {
        return { error: results.error.format() }
      }
try {


    // const { name, email, message } = results.data
    // console.log("🚀 ~ sendEmail ~ results.data:", results.data)
    // const { data, error } = await resend.emails.send({
    //   from: 'asad.softwaredeveloper@resend.dev',
    //   to: [email],
    //   cc: ['asad.softwaredeveloper@gmail.com'],
    //   subject: 'Contact form submission',
    //   text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    //   react: ContactFormTempete({ name, email, message })
    // })

    // if (!data || error) {
    //     console.log(' Resending error >>>>',error)
    //     throw new Error('Failed to send email')
    //   }
  
      return { success: true }

} catch (error:any) {
    console.log("error while sending an email >>>>>> ",error.message)
    return {error:error.message}
}
}
export async function subscribe(data: NewsletterFormInputs) {
    const result = NewsletterFormSchema.safeParse(data)
  
    if (result.error) {
      return { error: result.error.format() }
    }
  
    try {
    //   const { email } = result.data
    //   const { data, error } = await resend.contacts.create({
    //     email: email,
    //     audienceId: process.env.RESEND_AUDIENCE_ID as string
    //   })
  
    //   if (!data || error) {
    //     throw new Error('Failed to subscribe')
    //   }
  
      // TODO: Send a welcome email
  
      return { success: true }
    } catch (error) {
      return { error }
    }
  }