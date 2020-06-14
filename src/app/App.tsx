import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const pedir = () => {
		async function hola() {
			let response = await fetch('/ping');

			let { data } = await response.json();

			if (data === 'pong') {
				alert(
					'Si estas viendo esto, el backend y frontend esta bien conectados, Happy Hacking!'
				);
			}
		}

		hola();
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
				<button onClick={pedir}>
					Chequear de conexión de Backend con Frontend
				</button>
			</header>
			{/* Aqui iria los routers para los tres tipo de usuario, cada uno redigiria a un login */}
		</div>
	);
}

export default App;
