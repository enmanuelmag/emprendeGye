import React from 'react';

import './App.css';
import { Container } from '@material-ui/core';

import Emprendedor from './pages/emprendedor/cuenta';

function App() {
	return (
		<div className='App'>
			<Container>
				<Emprendedor />
			</Container>
			{/* Aqui iria los routers para los tres tipo de usuario, cada uno redigiria a un login */}
		</div>
	);
}

export default App;
