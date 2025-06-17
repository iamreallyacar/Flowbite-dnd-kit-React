import React from 'react'
import { Card } from 'flowbite-react'

interface ShowcaseSectionProps {
  children: React.ReactNode
  className?: string
}

interface ShowcaseTextProps {
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

// Main page title (largest heading)
export function ShowcasePageTitle({ children, className = '' }: ShowcaseTextProps) {
  return (
    <h1 className={`text-4xl font-bold mb-2 text-white ${className}`}>
      {children}
    </h1>
  )
}

// Main title for showcase sections (largest)
export function ShowcaseTitle({ children, className = '' }: ShowcaseTextProps) {
  return (
    <h1 className={`text-4xl font-bold mb-10 text-white ${className}`}>
      {children}
    </h1>
  )
}

// Section heading (3xl)
export function ShowcaseHeading({ children, className = '' }: ShowcaseTextProps) {
  return (
    <h1 className={`text-3xl font-bold mb-8 text-white ${className}`}>
      {children}
    </h1>
  )
}

// Subsection heading (2xl)
export function ShowcaseSubheading({ children, className = '' }: ShowcaseTextProps) {
  return (
    <h2 className={`text-2xl font-semibold mb-6 text-white ${className}`}>
      {children}
    </h2>
  )
}

// Component subsection (xl)
export function ShowcaseSubsection({ children, className = '' }: ShowcaseTextProps) {
  return (
    <h3 className={`text-xl font-semibold mb-4 text-white ${className}`}>
      {children}
    </h3>
  )
}

// Small section header (lg)
export function ShowcaseSectionHeader({ children, className = '' }: ShowcaseTextProps) {
  return (
    <h4 className={`text-lg font-medium mb-3 text-white ${className}`}>
      {children}
    </h4>
  )
}

// Card/item title (base size)
export function ShowcaseItemTitle({ children, className = '' }: ShowcaseTextProps) {
  return (
    <h5 className={`text-base font-semibold mb-2 text-white ${className}`}>
      {children}
    </h5>
  )
}

// Small title/label (sm)
export function ShowcaseLabel({ children, className = '' }: ShowcaseTextProps) {
  return (
    <h6 className={`text-sm font-semibold text-white mb-1 ${className}`}>
      {children}
    </h6>
  )
}

// ===== TEXT CONTENT COMPONENTS =====

// Large descriptive text
export function ShowcaseDescription({ children, className = '' }: ShowcaseTextProps) {
  return (
    <p className={`text-lg text-gray-300 mb-8 ${className}`}>
      {children}
    </p>
  )
}

// Regular paragraph text
export function ShowcaseText({ children, className = '' }: ShowcaseTextProps) {
  return (
    <p className={`text-gray-300 mb-6 ${className}`}>
      {children}
    </p>
  )
}

// Small descriptive text
export function ShowcaseSmallText({ children, className = '' }: ShowcaseTextProps) {
  return (
    <p className={`text-sm text-gray-400 mb-4 ${className}`}>
      {children}
    </p>
  )
}

// Extra small text for captions/notes
export function ShowcaseCaptionText({ children, className = '' }: ShowcaseTextProps) {
  return (
    <p className={`text-xs text-gray-500 ${className}`}>
      {children}
    </p>
  )
}

// ===== SPECIALIZED TEXT COMPONENTS =====

// Status/metric value (large numbers)
export function ShowcaseMetricValue({ children, className = '' }: ShowcaseTextProps) {
  return (
    <div className={`text-2xl font-bold text-white ${className}`}>
      {children}
    </div>
  )
}

// Metric label
export function ShowcaseMetricLabel({ children, className = '' }: ShowcaseTextProps) {
  return (
    <div className={`text-sm text-gray-400 ${className}`}>
      {children}
    </div>
  )
}

// Form labels
export function ShowcaseFormLabel({ children, className = '' }: ShowcaseTextProps) {
  return (
    <label className={`block text-sm font-medium text-gray-300 mb-1 ${className}`}>
      {children}
    </label>
  )
}

// Success text
export function ShowcaseSuccessText({ children, className = '' }: ShowcaseTextProps) {
  return (
    <span className={`text-sm text-green-400 ${className}`}>
      {children}
    </span>
  )
}

// Warning text
export function ShowcaseWarningText({ children, className = '' }: ShowcaseTextProps) {
  return (
    <span className={`text-sm text-yellow-400 ${className}`}>
      {children}
    </span>
  )
}

// Error text
export function ShowcaseErrorText({ children, className = '' }: ShowcaseTextProps) {
  return (
    <span className={`text-sm text-red-400 ${className}`}>
      {children}
    </span>
  )
}

// Info/primary text
export function ShowcaseInfoText({ children, className = '' }: ShowcaseTextProps) {
  return (
    <span className={`text-sm text-blue-400 ${className}`}>
      {children}
    </span>
  )
}

// Muted/secondary text
export function ShowcaseMutedText({ children, className = '' }: ShowcaseTextProps) {
  return (
    <span className={`text-gray-500 ${className}`}>
      {children}
    </span>
  )
}

// ===== COLORED STATUS COMPONENTS =====

// Green status text (success/available/active)
export function ShowcaseGreenText({ children, className = '' }: ShowcaseTextProps) {
  return (
    <span className={`text-green-400 font-medium ${className}`}>
      {children}
    </span>
  )
}

// Yellow status text (warning/pending)
export function ShowcaseYellowText({ children, className = '' }: ShowcaseTextProps) {
  return (
    <span className={`text-yellow-400 font-medium ${className}`}>
      {children}
    </span>
  )
}

// Red status text (error/inactive/critical)
export function ShowcaseRedText({ children, className = '' }: ShowcaseTextProps) {
  return (
    <span className={`text-red-400 font-medium ${className}`}>
      {children}
    </span>
  )
}

// Blue status text (info/scheduled)
export function ShowcaseBlueText({ children, className = '' }: ShowcaseTextProps) {
  return (
    <span className={`text-blue-400 font-medium ${className}`}>
      {children}
    </span>
  )
}

// ===== INTERACTIVE TEXT =====

// Link text
export function ShowcaseLinkText({ children, className = '', ...props }: ShowcaseTextProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={`text-blue-400 hover:text-blue-300 underline ${className}`} {...props}>
      {children}
    </a>
  )
}

// Button text
export function ShowcaseButtonText({ children, className = '' }: ShowcaseTextProps) {
  return (
    <span className={`text-sm font-medium ${className}`}>
      {children}
    </span>
  )
}

export function ShowcaseThemeProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
