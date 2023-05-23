// @vitest-environment jsdom

import App from './App.jsx'
import { render, screen } from '@testing-library/react'
import { describe } from 'vitest'

describe('simple test', () => {
	const wrapper = render(<App />)
	expect(screen.getByText("Bug Reproduction")).toBeInDocument()
})
