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
import { CheckCircle } from '@phosphor-icons/react'

/* ------------------------------------------------------------------ */
/*  Context                                                            */
/* ------------------------------------------------------------------ */

type ContactModalContextValue = {
  open: boolean
  setOpen: (open: boolean) => void
  initialReason: string | undefined
  setInitialReason: (reason: string | undefined) => void
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
  const [initialReason, setInitialReason] = useState<string | undefined>(undefined)
  return (
    <ContactModalContext.Provider value={{ open, setOpen, initialReason, setInitialReason }}>
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
  const { initialReason, setInitialReason } = useContactModal()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [company, setCompany] = useState('')
  const [role, setRole] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')

  // Reset form when dialog closes
  useEffect(() => {
    if (!open) {
      setName('')
      setEmail('')
      setPhone('')
      setCompany('')
      setRole('')
      setMessage('')
      setStatus('idle')
      setInitialReason(undefined)
    }
  }, [open, setInitialReason])

  // Apply initial reason when dialog opens
  useEffect(() => {
    if (open && initialReason) {
      setRole(initialReason)
    }
  }, [open, initialReason])

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      if (!role) return
      setStatus('submitting')
      // TODO: wire to API — replace this stub with a real POST call
      console.log({ name, email, phone, company, role, message })
      setTimeout(() => {
        setStatus('success')
      }, 400)
    },
    [name, email, phone, company, role, message]
  )

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px]">
        {status === 'success' ? (
          <div className="flex flex-col items-center py-6 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50">
              <CheckCircle size={24} weight="fill" className="text-emerald-500" />
            </div>
            <h3 className="mt-4 font-[family-name:var(--font-bricolage)] text-xl font-bold text-foreground">
              Message sent
            </h3>
            <p className="mt-2 max-w-xs font-[family-name:var(--font-inter)] text-sm text-muted-foreground">
              Thank you. We&apos;ll be in touch within one business day.
            </p>
            <button
              onClick={() => onOpenChange(false)}
              className="mt-6 rounded-lg bg-[color:var(--color-brand)] px-6 py-2.5 font-[family-name:var(--font-inter)] text-sm font-medium text-white transition-colors hover:bg-[color:var(--color-brand-dark)]"
            >
              Close
            </button>
          </div>
        ) : (
          <>
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
                <Label htmlFor="contact-phone" className="font-[family-name:var(--font-inter)] text-sm font-medium">
                  Phone number
                </Label>
                <Input
                  id="contact-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+60 12-345 6789"
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
                disabled={status === 'submitting'}
                className="mt-2 w-full rounded-lg bg-[color:var(--color-brand)] px-6 py-2.5 font-[family-name:var(--font-inter)] text-sm font-medium text-white transition-colors duration-150 hover:bg-[color:var(--color-brand-dark)] active:scale-[0.98] disabled:opacity-60"
              >
                {status === 'submitting' ? 'Sending…' : 'Send message'}
              </button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
