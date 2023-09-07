import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App'
import { Provider } from 'react-redux';
import { store } from './store';

const getOrCreateRootElement = (Id: string) => {
	const result = document.getElementById(Id);

	if (result) {
		return result;
	}

	const div = document.createElement("div");
	div.id = Id;

	document.body.appendChild(div);

	return div;
}

const rootElement = getOrCreateRootElement("root");
const root = createRoot(rootElement);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
