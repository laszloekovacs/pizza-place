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
	return (
		<>
			<h1>The Code Oven</h1>
			<ol>
				{pizzas.map(x => (
					<li>{x}</li>
				))}
			</ol>
			<div data-testid='shopping-cart'>
				<button disabled>Place My Order</button>
			</div>
		</>
	)
}
