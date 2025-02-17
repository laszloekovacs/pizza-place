import { render, screen, within, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { describe, expect, it, beforeEach } from 'vitest'
import PizzaShopApp from './PizzaShopApp'

beforeEach(() => {
	cleanup()
})

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

		expect(
			within(menuItems[0]).getByText('Margherita Pizza')
		).toBeInTheDocument()
		expect(
			within(menuItems[1]).getByText('Pepperoni Pizza')
		).toBeInTheDocument()
		expect(
			within(menuItems[2]).getByText('Veggie Supreme Pizza')
		).toBeInTheDocument()
	})

	it('renders a shopping cart', () => {
		render(<PizzaShopApp />)

		const shoppingCartContainer = screen.getByTestId('shopping-cart')
		const placeOrderButton = within(shoppingCartContainer).getByRole('button')

		expect(placeOrderButton).toBeInTheDocument()
		expect(placeOrderButton).toHaveTextContent('Place My Order')
		expect(placeOrderButton).toBeDisabled()
	})
})
