'use client'

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

/* ------------------------------------------------------------------ */
/*  Context                                                            */
/* ------------------------------------------------------------------ */

type ContactModalContextValue = {
  open: boolean
  setOpen: (open: boolean) => void
}

const ContactModalContext = createContext<ContactModalContextValue | null>(null)

export function useContactModal() {
  const ctx = useContext(ContactModalContext)
  if (!ctx) {
    throw new Error('useContactModal must be used within ContactModalProvider')
  }
  return ctx
}

/* ------------------------------------------------------------------ */
/*  Provider                                                           */
/* ------------------------------------------------------------------ */

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <ContactModalContext.Provider value={{ open, setOpen }}>
      <ContactModalDialog open={open} onOpenChange={setOpen} />
      {children}
    </ContactModalContext.Provider>
  )
}

/* ------------------------------------------------------------------ */
/*  Dialog (internal)                                                  */
/* ------------------------------------------------------------------ */

function ContactModalDialog({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [role, setRole] = useState('')
  const [message, setMessage] = useState('')

  // Reset form when dialog closes
  useEffect(() => {
    if (!open) {
      setName('')
      setEmail('')
      setCompany('')
      setRole('')
      setMessage('')
    }
  }, [open])

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      if (!role) return
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nRole: ${role}\n\n${message}`
      )
      const subject = encodeURIComponent('Welluber enquiry')
      window.location.href = `mailto:contact@welluber.com?subject=${subject}&body=${body}`
      onOpenChange(false)
    },
    [name, email, company, role, message, onOpenChange]
  )

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle className="font-[family-name:var(--font-bricolage)] text-xl font-bold tracking-tight text-foreground">
            Talk to Us
          </DialogTitle>
          <DialogDescription className="font-[family-name:var(--font-inter)] text-sm text-muted-foreground">
            Tell us a little about yourself and we&apos;ll be in touch within one business day.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="contact-name" className="font-[family-name:var(--font-inter)] text-sm font-medium">
              Full name
            </Label>
            <Input
              id="contact-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Sarah Lim"
              required
              className="font-[family-name:var(--font-inter)]"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="contact-email" className="font-[family-name:var(--font-inter)] text-sm font-medium">
              Work email
            </Label>
            <Input
              id="contact-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="sarah@company.com"
              required
              className="font-[family-name:var(--font-inter)]"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="contact-company" className="font-[family-name:var(--font-inter)] text-sm font-medium">
              Company
            </Label>
            <Input
              id="contact-company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Acme Sdn Bhd"
              className="font-[family-name:var(--font-inter)]"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="contact-role" className="font-[family-name:var(--font-inter)] text-sm font-medium">
              I am…
            </Label>
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger id="contact-role" className="font-[family-name:var(--font-inter)]">
                <SelectValue placeholder="Select one" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hr">An HR / Benefits leader</SelectItem>
                <SelectItem value="provider">A wellness provider</SelectItem>
                <SelectItem value="broker">A broker / consultant</SelectItem>
                <SelectItem value="other">Something else</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="contact-message" className="font-[family-name:var(--font-inter)] text-sm font-medium">
              Message
            </Label>
            <Textarea
              id="contact-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="What would you like to know?"
              rows={4}
              className="font-[family-name:var(--font-inter)] resize-none"
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-lg bg-[color:var(--color-brand)] px-6 py-2.5 font-[family-name:var(--font-inter)] text-sm font-medium text-white transition-colors duration-150 hover:bg-[color:var(--color-brand-dark)] active:scale-[0.98]"
          >
            Send message
          </button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
