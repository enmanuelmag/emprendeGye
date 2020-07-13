import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import style from './style';

const noticias = [
	{
		"src": "https://www.eluniverso.com/sites/default/files/styles/nota_ampliada_normal_foto/public/fotos/2020/06/-_queguayaquil_-_atm_operativo_vehiculos.jpg?itok=c3ruqd7P"
		, "titulo": "Titulo 1",
		"descripcion": "Descripcion 1",
		"autor": "Autor 1"

	},
	{
		"src": "https://www.eluniverso.com/sites/default/files/styles/nota_ampliada_normal_foto/public/fotos/2020/07/-_que_quito_-_operativos_2.jpg?itok=YP4TpMBJ"
		, "titulo": "Titulo 2",
		"descripcion": "Descripcion 2",
		"autor": "Autor 2"
	},
	{
		"src": "https://www.eluniverso.com/sites/default/files/styles/nota_ampliada_normal_foto/public/fotos/2020/07/-_diario_que_-_vida_financiera_2.jpg?itok=rhaPSOWL"
		, "titulo": "Titulo3",
		"descripcion": "Descripcion 3",
		"autor": "Autor 3"
	}

]

export default function QuienesSomos() {
	const classes = style();

	return (
		<Paper className={classes.root} >
			<List className={classes.list}>
				{
					noticias.map((obj, index) => {
						return (
							<>
							<ListItem alignItems="flex-start">
								<ListItemAvatar>
									<Avatar className={classes.avatar} variant='square' sizes='medium' alt="Remy Sharp" src={obj.src} />
								</ListItemAvatar>
								<ListItemText
									primary={obj.titulo}
									secondary={
										<React.Fragment>
											<Typography
												component="span"
												variant="body2"
												className={classes.inline}
												color="textPrimary"
											>
												{obj.autor}
											</Typography>
											{"- " + obj.descripcion}
										</React.Fragment>
									}
								/>
							</ListItem>
							{ (index <=noticias.length -2 ) ? (
								<Divider variant="inset" component="li" />
							):<></>}
							</>
						)

					})
				}

			</List>
		</Paper>
	);
}
