import React from 'react'

interface ShowcaseSectionProps {
	children: React.ReactNode
	className?: string
}

export function ShowcaseSection({ children, className = '' }: ShowcaseSectionProps) {
	return (
		<section className={`mb-12 bg-black rounded-lg shadow-sm p-6 ${className}`}>
			{children}
		</section>
	)
}

export function ShowcaseSectionTitle({ children }: { children: React.ReactNode }) {
	return (
		<h1 className="text-4xl font-bold mb-10 text-white">
			{children}
		</h1>
	)
}

export function ShowcaseSectionSubtitle({ children }: { children: React.ReactNode }) {
	return (
		<p className="text-lg text-gray-300 mb-8">
			{children}
		</p>
	)
}

export function ShowcaseSectionH1({ children }: { children: React.ReactNode }) {
	return (
		<h1 className="text-3xl font-bold mb-8 text-white">
			{children}
		</h1>
	)
}

export function ShowcaseSectionH2({ children }: { children: React.ReactNode }) {
	return (
		<h2 className="text-2xl font-semibold mb-6 text-white">
			{children}
		</h2>
	)
}

export function ShowcaseSectionH3({ children }: { children: React.ReactNode }) {
	return (
		<h3 className="text-xl font-semibold mb-4 text-white">
			{children}
		</h3>
	)
}