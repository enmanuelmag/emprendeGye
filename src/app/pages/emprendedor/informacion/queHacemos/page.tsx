import React from 'react';
import { Grid, Card, Typography } from '@material-ui/core';
import style from './style';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function QuienesSomos() {
	const classes = style();
	const [expanded, setExpanded] = React.useState(false);
			const handleExpandClick = () => {
			  setExpanded(!expanded);
			};
	return (
<<<<<<< HEAD
		<div className={classes.contenedor}>
		
		<Grid item xs={12} lg={12} className={classes.titulo}>
						<Typography className={classes.frases1} variant='h5'>
							¿Qué hacemos?
						</Typography>

						<Typography variant="body1" className={classes.info}>
						Nuestra plataforma web y móvil acompaña al emprendedor guayaquileño a lo largo de su emprendimiento,
brindándole diferentes herramientas para satisfacer las necesidades en temas de
contactos, mentorías y financiación teniendo como objetivo que de esta manera nuevas empresas nazcan, crezcan, sobrevivan y escalen en la
ciudad de Guayaquil. Por tal motivo cuenta con las siguientes interfaces:
          </Typography>

					</Grid>

		<Grid container spacing={3}>

		<Grid item xs={12} md={6} lg={4}>
			  <Card className={classes.root}>
			  <CardMedia
        className={classes.media}
		image="assets/sesion.jpg"/>          
				<CardContent>
				  <Typography variant="body1" color="textSecondary" component="p">
					INICIO SESIÓN
					<IconButton
					className={clsx(classes.expand, {
					  [classes.expandOpen]: expanded,
					})}
					onClick={handleExpandClick}
					aria-expanded={expanded}>
					<ExpandMoreIcon />
				  </IconButton>
				  </Typography>
				  </CardContent>
				<Collapse in={expanded} timeout="auto" unmountOnExit>
				  <CardContent>
					<Typography paragraph>
					En esta interfaz el emprendedor ingresa a la plataforma con sus credenciales.
					</Typography>
				  </CardContent>
				</Collapse>
			  </Card>
			  </Grid>


		<Grid item xs={12} md={6} lg={4}>
			  <Card className={classes.root}>
			  <CardMedia
        className={classes.media}
		image="assets/dashboard.jpg" />            
				<CardContent>
				  <Typography variant="body1" color="textSecondary" component="p">
					DASHBOARD
					<IconButton
					className={clsx(classes.expand, {
					  [classes.expandOpen]: expanded,
					})}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
				  >
					<ExpandMoreIcon />
				  </IconButton>
				  </Typography>
				  
				  </CardContent>
				<Collapse in={expanded} timeout="auto" unmountOnExit>
				  <CardContent>
					<Typography paragraph>
					Muestra el avance del emprendimiento en el “viaje del emprendedor” (gráfico basado en la
curva de startup que ubica al emprendedor en un punto), actividades para subir de nivel
(avanzar en el viaje), frases motivadoras, notificaciones, eventos o reuniones; y
retroalimentación de otros emprendedores, mentores y empresarios.

					</Typography>
				  </CardContent>
				</Collapse>
			  </Card>
			  </Grid>





<Grid item xs={12} md={6} lg={4}>
<Card className={classes.root}>
<CardMedia
        className={classes.media}
		image="assets/info.jpg"
      />
<CardContent>
<Typography variant="body2" color="textSecondary" component="p">
  INFORMACIÓN
  <IconButton
  className={clsx(classes.expand, {
	[classes.expandOpen]: expanded,
  })}
  onClick={handleExpandClick}
  aria-expanded={expanded}
>
  <ExpandMoreIcon />
</IconButton>
</Typography>

</CardContent>
<Collapse in={expanded} timeout="auto" unmountOnExit>
<CardContent>
  <Typography paragraph>
En esta sección el usuario podrá escoger entre diferentes opciones: ¿Quiénes Somos? que muestra el objetivo de nuestra
plataforma we y los datos del equipo de desarrollo, ¿Noticias? que mostrará las últimas novedades relacionandas con la plataforma
y Contáctanos que mostrará el formulario a llenar y un mapa donde se encontrarán las ubicaciones de nuestras oficinas.
  </Typography>
</CardContent>
</Collapse>
</Card>
</Grid>


<Grid item xs={12} md={6} lg={4}>
<Card className={classes.root}>
<CardMedia
        className={classes.media}
		image="assets/ecosistema.jpg"
      />
<CardContent>
<Typography variant="body2" color="textSecondary" component="p">
  ECOSISTEMA
  <IconButton
  className={clsx(classes.expand, {
	[classes.expandOpen]: expanded,
  })}
  onClick={handleExpandClick}
  aria-expanded={expanded}
  aria-label="show more"
>
  <ExpandMoreIcon />
</IconButton>
</Typography>

</CardContent>
<Collapse in={expanded} timeout="auto" unmountOnExit>
<CardContent>
  <Typography paragraph>
  El usuario puede encontrar personas que comparten intereses y emprendimientos similares,
así como capacitaciones y eventos relacionadas con sus áreas de interés. Esto beneficia al
emprendedor ya que le permite conocer todas las oportunidades disponibles.

  </Typography>
</CardContent>
</Collapse>
</Card>
</Grid>

<Grid item xs={12} md={6} lg={4}>
			  <Card className={classes.root}>

			  <CardMedia
        className={classes.media}
		image="assets/aprendizaje.jpg"
      />
			              
				<CardContent>
				  <Typography variant="body2" color="textSecondary" component="p">
					APRENDIZAJE
					<IconButton
					className={clsx(classes.expand, {
					  [classes.expandOpen]: expanded,
					})}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
				  >
					<ExpandMoreIcon />
				  </IconButton>
				  </Typography>
				  
				  </CardContent>
				<Collapse in={expanded} timeout="auto" unmountOnExit>
				  <CardContent>
					<Typography paragraph>
					Sección que contará con información de cursos, talleres y conferencias relacionadas con el
emprendimiento y temas del interés del usuario.
La existencia de información gratuita de casos de emprendimiento como: “Guayaquil
Emprende” del Programa Aprendamos, “Emprendedores Exitosos” de AEI y un sin número
de contenido.
					</Typography>
				  </CardContent>
				</Collapse>
			  </Card>
			  </Grid>
		
=======
		<Grid container className={classes.root}>

			<Grid item xs={12}>
				<Typography className={classes.title} variant='h5'>
					¿Qué hacemos?
			</Typography>
			</Grid>
			<Grid container justify="center" alignItems="flex-start" spacing={3}>
				<Grid container item xs={12} md={5}>
					<Image />
				</Grid>
				<Grid item xs={12} md={5}>
					<Typography className={classes.info} variant="body1">
						Dado el rango variado de emprendedores dentro de Guayaquil en distintas áreas se debe priorizar que la solución sea comprensible, dinámica y evidente sin exceso o carencia de funcionalidades que distraigan al emprendedor al igual que diseños muy complejos que conllevan a que el emprendedor abandone la plataforma digital y pierda oportunidades de desarrollo.
						Por eso la plataforma EmprendeGye presenta al usuario una interfaz intuitiva con herramientas fáciles de usar que cumplan sus necesidades dependiendo de la etapa de la curva del emprendimiento en la que se encuentre, integrando diferentes actores tanto públicos como privados en este proceso.
				</Typography>

				</Grid>
			</Grid>


		</Grid>
	);
}
>>>>>>> 1f0f1165ea073bee62de25ee379fd3e67d40629a


		<Grid item xs={12} md={6} lg={4}>
			  <Card className={classes.root}>

			  <CardMedia
        className={classes.media}
		image="assets/herramientas.jpg"
      />
			              
				<CardContent>
				  <Typography variant="body2" color="textSecondary" component="p">
					HERRAMIENTAS
					
					<IconButton
					className={clsx(classes.expand, {
					  [classes.expandOpen]: expanded,
					})}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
				  >
					<ExpandMoreIcon />
				  </IconButton>
				  </Typography>
				  
				  </CardContent>
				<Collapse in={expanded} timeout="auto" unmountOnExit>
				  <CardContent>
					<Typography paragraph>
					Sección en la cual el usuario podrá encontrar herramientas digitales que lo ayudarán a
monitorear el avance y crecimiento de su emprendimiento. (TIR, VAN, Business model
canvas, proyección de clientes, registro de ventas, etc.).

					</Typography>
				  </CardContent>
				</Collapse>
			  </Card>
			  </Grid>

			  <Grid item xs={12} md={6} lg={4}>
			  <Card className={classes.root}>

			  <CardMedia
        className={classes.media}
		image="assets/notas.jpg"
      />
			              
				<CardContent>
				  <Typography variant="body2" color="textSecondary" component="p">
					NOTAS
					<IconButton
					className={clsx(classes.expand, {
					  [classes.expandOpen]: expanded,
					})}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
				  >
					<ExpandMoreIcon />
				  </IconButton>
				  </Typography>
				  
				  </CardContent>
				<Collapse in={expanded} timeout="auto" unmountOnExit>
				  <CardContent>
					<Typography paragraph>
					Un espacio privado en donde un emprendedor puede escribir comentarios, poner fotos,
enlaces web y organizar actividades con el objetivo de obtener ideas y de mejorar la
productividad.
					</Typography>
				  </CardContent>
				</Collapse>
			  </Card>
			  </Grid>


			  <Grid item xs={12} md={6} lg={4}>
<Card className={classes.root}>
<CardMedia
        className={classes.media}
		image="assets/cuenta.jpg"
      />
<CardContent>
<Typography variant="body2" color="textSecondary" component="p">
  CUENTA
  <IconButton
  className={clsx(classes.expand, {
	[classes.expandOpen]: expanded,
  })}
  onClick={handleExpandClick}
  aria-expanded={expanded}
  aria-label="show more"
>
  <ExpandMoreIcon />
</IconButton>
</Typography>

</CardContent>
<Collapse in={expanded} timeout="auto" unmountOnExit>
<CardContent>
  <Typography paragraph>
  El usuario puede  acceder a la configuración de su cuenta y los datos ingresados en el registro a la
plataforma. .

  </Typography>
</CardContent>
</Collapse>
</Card>
</Grid>
			  </Grid>
</div>

			);
		  }

	
