import './App.css'

export default function PizzaShopApp() {
	return (
		<>
			<h1>The Code Oven</h1>
			<ol>
				{new Array(8).fill(0).map(x => (
					<li>{x}</li>
				))}
			</ol>
		</>
	)
}
