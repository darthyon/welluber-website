'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { WhatsappLogo, EnvelopeSimple } from '@phosphor-icons/react'

const WHATSAPP_URL =
  'https://wa.me/601154554312?text=Hi%20WellUber%20team%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20corporate%20wellness%20platform.'
const EMAIL_URL =
  'mailto:norman.leaw@welluber.com?subject=WellUber%20Enquiry&body=Hi%20Norman%2C%0A%0AI%27d%20like%20to%20learn%20more%20about%20WellUber.%0A%0AThanks.'

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
      <ContactChoiceDialog open={open} onOpenChange={setOpen} />
      {children}
    </ContactModalContext.Provider>
  )
}

/* ------------------------------------------------------------------ */
/*  Choice Card Dialog                                                 */
/* ------------------------------------------------------------------ */

function ContactChoiceDialog({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[420px]">
        <DialogHeader className="text-center">
          <DialogTitle className="font-poppins text-xl font-bold tracking-tight text-foreground">
            Talk to Us
          </DialogTitle>
          <DialogDescription className="font-geist text-sm text-muted-foreground">
            Choose how you&apos;d like to reach us.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6 grid gap-4">
          {/* WhatsApp */}
          <button
            onClick={() => {
              window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer')
              onOpenChange(false)
            }}
            className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 text-left transition-all duration-150 hover:border-brand hover:bg-brand-faint hover:shadow-sm active:scale-[0.98]"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-50">
              <WhatsappLogo size={24} weight="fill" className="text-emerald-600" />
            </div>
            <div>
              <p className="font-geist text-sm font-semibold text-gray-900">WhatsApp</p>
              <p className="font-geist text-sm text-gray-500">Chat with us directly</p>
            </div>
          </button>

          {/* Email */}
          <button
            onClick={() => {
              window.location.href = EMAIL_URL
              onOpenChange(false)
            }}
            className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 text-left transition-all duration-150 hover:border-brand hover:bg-brand-faint hover:shadow-sm active:scale-[0.98]"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-faint">
              <EnvelopeSimple size={24} weight="fill" className="text-brand" />
            </div>
            <div>
              <p className="font-geist text-sm font-semibold text-gray-900">Email</p>
              <p className="font-geist text-sm text-gray-500">Send us a message</p>
            </div>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
