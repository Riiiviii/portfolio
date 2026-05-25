import { Mail, Send } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import ContactLink from './contact-link'
import { z } from 'zod/v3'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { sendContactEmail } from '#/server/send-email'
import { toast } from 'sonner'

const formSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(50),
  email: z.string().trim().email('Invalid email').max(100),
  subject: z.string().trim().min(1, 'Subject is required').max(100),
  message: z.string().trim().min(1, 'Message is required').max(1000),
})

type FormFields = z.infer<typeof formSchema>

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await sendContactEmail({ data })
      toast.success("Message sent! I'll get back to you soon.")
      reset()
    } catch {
      toast.error('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="mt-40">
      <img
        src="contact.png"
        alt="contact title image"
        className="invert mix-blend-screen"
      />

      <div className="mt-5">
        <p className="text-term-text-dim">
          Have a project in mind or just want to connect? Feel free to reach out
          — I'm always open to new opportunities and conversations.
        </p>
      </div>

      <div className="mt-8 grid gap-12 md:grid-cols-[2fr_1fr]">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <Label
              htmlFor="name"
              className="text-term-text-muted text-xs uppercase tracking-widest"
            >
              Name
            </Label>
            <Input
              {...register('name')}
              id="name"
              placeholder="Your name"
              className="border-term-grey-3 bg-transparent text-term-text placeholder:text-term-text-muted focus-visible:border-term-white focus-visible:ring-0"
            />
            {errors.name && (
              <p className="text-xs text-red-400">{errors.name.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label
              htmlFor="email"
              className="text-term-text-muted text-xs uppercase tracking-widest"
            >
              Email
            </Label>
            <Input
              {...register('email')}
              id="email"
              type="email"
              placeholder="your@email.com"
              className="border-term-grey-3 bg-transparent text-term-text placeholder:text-term-text-muted focus-visible:border-term-white focus-visible:ring-0"
            />
            {errors.email && (
              <p className="text-xs text-red-400">{errors.email.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label
              htmlFor="email"
              className="text-term-text-muted text-xs uppercase tracking-widest"
            >
              Subject
            </Label>
            <Input
              {...register('subject')}
              id="subject"
              type="subject"
              placeholder="The subject"
              className="border-term-grey-3 bg-transparent text-term-text placeholder:text-term-text-muted focus-visible:border-term-white focus-visible:ring-0"
            />
            {errors.subject && (
              <p className="text-xs text-red-400">{errors.subject.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label
              htmlFor="message"
              className="text-term-text-muted text-xs uppercase tracking-widest"
            >
              Message
            </Label>
            <Textarea
              {...register('message')}
              id="message"
              placeholder="What's on your mind?"
              rows={5}
              className="border-term-grey-3 bg-transparent text-term-text placeholder:text-term-text-muted focus-visible:border-term-white focus-visible:ring-0"
            />
            {errors.message && (
              <p className="text-xs text-red-400">{errors.message.message}</p>
            )}
          </div>

          <Button
            variant="primary"
            className="mt-2 w-fit"
            disabled={isSubmitting}
          >
            <Send size={14} />
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <span className="text-term-text-muted text-xs uppercase tracking-widest">
              Email
            </span>
            <ContactLink
              href="mailto:riven.development@gmail.com"
              icon={<Mail size={14} />}
              label="riven.development@gmail.com"
            />
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-term-text-muted text-xs uppercase tracking-widest">
              Socials
            </span>
            <div className="flex flex-col gap-2">
              <ContactLink
                href="https://github.com/Riiiviii"
                icon={<FaGithub size={14} />}
                label="GitHub"
              />
              <ContactLink
                href="https://linkedin.com"
                icon={<FaLinkedin size={14} />}
                label="LinkedIn"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
