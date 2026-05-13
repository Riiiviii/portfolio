import { createServerFn } from '@tanstack/react-start'
import { Resend } from 'resend'
import { z } from 'zod/v3'

const resend = new Resend(process.env.RESEND_API_KEY)

const contactSchema = z.object({
  name: z.string().trim().min(1).max(50),
  email: z.string().trim().email().max(100),
  subject: z.string().trim().min(1).max(100),
  message: z.string().trim().min(1).max(1000),
})

export const sendContactEmail = createServerFn({ method: 'POST' })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'riven.development@gmail.com',
      replyTo: data.email,
      subject: `[Portfolio] ${data.subject}`,
      text: `From: ${data.name} <${data.email}>\n\n${data.message}`,
    })

    if (error) throw new Error(error.message)

    return { success: true }
  })
