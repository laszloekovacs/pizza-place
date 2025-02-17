import { useState } from 'react'
import './App.css'

export default function PizzaShopApp() {
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

	const [cartItems, setCartItems] = useState<string[]>([])

	const addItem = (item: string) => {
		setCartItems([...cartItems, item])
	}

	return (
		<>
			<h1>The Code Oven</h1>
			<ol data-testid='menu-list'>
				{pizzas.map(x => (
					<li>
						{x}
						<button onClick={() => addItem(x)}>Add to Cart</button>
					</li>
				))}
			</ol>
			<div data-testid='shopping-cart'>
				<ol>
					{cartItems.map(x => (
						<li>{x}</li>
					))}
				</ol>
				<button disabled>Place My Order</button>
			</div>
		</>
	)
}
