import { useState } from 'react'
import './App.css'

const pizzas = [
	'Margherita Pizza',
	'Pepperoni Pizza',
	'Veggie Supreme Pizza',
	'Chicken BBQ Pizza',
	'Spicy Meat Feast Pizza',
	'Pasta Primavera',
	'Caesar Salad',
	'Chocolate Lava Cake'
]

export default function PizzaShopApp() {
	const [cartItems, setCartItems] = useState<string[]>([])

	const addItem = (item: string) => {
		setCartItems([...cartItems, item])
	}

	return (
		<>
			<h1>The Code Oven</h1>
			<MenuList onAddMenuItem={addItem} />
			<ShoppingCart cartItems={cartItems} />
		</>
	)
}

const MenuList = ({
	onAddMenuItem
}: {
	onAddMenuItem: (item: string) => void
}) => {
	return (
		<div data-testid='menu-list'>
			<ol>
				{pizzas.map(item => (
					<li key={item}>
						{item}
						<button onClick={() => onAddMenuItem(item)}>Add</button>
					</li>
				))}
			</ol>
		</div>
	)
}

const ShoppingCart = ({ cartItems }: { cartItems: string[] }) => {
	return (
		<div data-testid='shopping-cart'>
			<ol>
				{cartItems.map(item => (
					<li key={item}>{item}</li>
				))}
			</ol>
			<button disabled={cartItems.length === 0}>Place My Order</button>
		</div>
	)
}
