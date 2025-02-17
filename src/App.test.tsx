import { render, screen, within } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { describe, expect, it } from 'vitest'
import PizzaShopApp from './PizzaShopApp'

describe('The Application', () => {
	it('renders application heading', () => {
		render(<PizzaShopApp />)
		const heading = screen.getByText('The Code Oven')
		expect(heading).toBeInTheDocument()
	})

	it('renders menu list', () => {
		render(<PizzaShopApp />)
		const menuList = screen.getByRole('list')
		const menuItems = within(menuList).getAllByRole('listitem')

		expect(menuItems.length).toEqual(8)
	})
})
