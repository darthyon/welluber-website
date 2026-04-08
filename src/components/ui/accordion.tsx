'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

interface AccordionContextValue {
  value: string | null
  onValueChange: (value: string) => void
  collapsible: boolean
}

const AccordionContext = React.createContext<AccordionContextValue>({
  value: null,
  onValueChange: () => {},
  collapsible: false,
})

interface AccordionProps {
  type?: 'single'
  collapsible?: boolean
  defaultValue?: string
  className?: string
  children: React.ReactNode
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ type = 'single', collapsible = false, defaultValue, className, children }, ref) => {
    const [value, setValue] = React.useState<string | null>(defaultValue ?? null)

    const onValueChange = (newValue: string) => {
      if (collapsible && value === newValue) {
        setValue(null)
      } else {
        setValue(newValue)
      }
    }

    return (
      <AccordionContext.Provider value={{ value, onValueChange, collapsible }}>
        <div ref={ref} className={className}>
          {children}
        </div>
      </AccordionContext.Provider>
    )
  }
)
Accordion.displayName = 'Accordion'

interface AccordionItemProps {
  value: string
  className?: string
  children: React.ReactNode
}

interface AccordionItemContextValue {
  value: string
  isOpen: boolean
  onToggle: () => void
}

const AccordionItemContext = React.createContext<AccordionItemContextValue>({
  value: '',
  isOpen: false,
  onToggle: () => {},
})

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ value, className, children }, ref) => {
    const { value: activeValue, onValueChange } = React.useContext(AccordionContext)
    const isOpen = activeValue === value

    return (
      <AccordionItemContext.Provider
        value={{ value, isOpen, onToggle: () => onValueChange(value) }}
      >
        <div ref={ref} className={cn('border-b border-gray-200', className)}>
          {children}
        </div>
      </AccordionItemContext.Provider>
    )
  }
)
AccordionItem.displayName = 'AccordionItem'

interface AccordionTriggerProps {
  className?: string
  children: React.ReactNode
}

const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ className, children }, ref) => {
    const { value, isOpen, onToggle } = React.useContext(AccordionItemContext)
    const contentId = `accordion-content-${value}`

    return (
      <button
        ref={ref}
        onClick={onToggle}
        className={cn(
          'flex w-full items-center justify-between py-4 text-left',
          className
        )}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        {children}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 256 256"
          className={cn(
            'shrink-0 text-gray-500 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
          fill="currentColor"
        >
          <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
        </svg>
      </button>
    )
  }
)
AccordionTrigger.displayName = 'AccordionTrigger'

interface AccordionContentProps {
  className?: string
  children: React.ReactNode
}

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, children }, ref) => {
    const { value, isOpen } = React.useContext(AccordionItemContext)
    const contentId = `accordion-content-${value}`

    return (
      <div
        ref={ref}
        id={contentId}
        role="region"
        className={cn(
          'overflow-hidden transition-all duration-200',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
          className
        )}
      >
        <div className="pb-4">{children}</div>
      </div>
    )
  }
)
AccordionContent.displayName = 'AccordionContent'

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
