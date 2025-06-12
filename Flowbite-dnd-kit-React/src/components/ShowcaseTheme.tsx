import React from 'react'
import { Card } from 'flowbite-react'

interface ShowcaseSectionProps {
  children: React.ReactNode
  className?: string
}

export function ShowcaseCard({ children, className = "", ...props }: React.ComponentProps<typeof Card>) {
  return (
    <Card 
      className={`mb-12 bg-black border-gray-700 ${className}`}
      {...props}
    >
      {children}
    </Card>
  )
}

// Alternative showcase section using Card component
export function FlowbiteShowcaseSection({ children, className = '' }: ShowcaseSectionProps) {
  return (
    <ShowcaseCard className={className}>
      {children}
    </ShowcaseCard>
  )
}

// ===== HEADING COMPONENTS =====

// Main title for showcase sections (largest)
export function ShowcaseTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-4xl font-bold mb-10 text-white">
      {children}
    </h1>
  )
}

export function ShowcaseHeading({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-3xl font-bold mb-8 text-white">
      {children}
    </h1>
  )
}

export function ShowcaseSubheading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-semibold mb-6 text-white">
      {children}
    </h2>
  )
}

export function ShowcaseSubsection({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xl font-semibold mb-4 text-white">
      {children}
    </h3>
  )
}

export function ShowcaseDescription({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-lg text-gray-300 mb-8">
      {children}
    </p>
  )
}

export function ShowcaseText({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-gray-300 mb-6">
      {children}
    </p>
  )
}

export function ShowcaseThemeProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
