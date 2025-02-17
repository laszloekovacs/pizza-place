import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PizzaShopApp from './PizzaShopApp.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<PizzaShopApp />
	</StrictMode>
)
