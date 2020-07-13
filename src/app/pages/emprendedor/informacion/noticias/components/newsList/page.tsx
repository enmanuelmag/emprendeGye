import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import style from './style';

export default function QuienesSomos() {
	const classes = style();
	
	return(
		<List className={classes.root}>
		<ListItem alignItems="flex-start">
		  <ListItemAvatar>
			<Avatar alt="Remy Sharp" src="https://www.eluniverso.com/sites/default/files/styles/nota_ampliada_normal_foto/public/fotos/2020/07/-_diario_que_-_vida_financiera_2.jpg?itok=rhaPSOWL" />
		  </ListItemAvatar>
		  <ListItemText
			primary="Titulo 1"
			secondary={
			  <React.Fragment>
				<Typography
				  component="span"
				  variant="body2"
				  className={classes.inline}
				  color="textPrimary"
				>
				  Autor 1
				</Typography>
				{" — Descripcion 1"}
			  </React.Fragment>
			}
		  />
		</ListItem>
		<Divider variant="inset" component="li" />
		<ListItem alignItems="flex-start">
		  <ListItemAvatar>
			<Avatar alt="Travis Howard" src="https://www.eluniverso.com/sites/default/files/styles/nota_ampliada_normal_foto/public/fotos/2020/07/-_que_quito_-_operativos_2.jpg?itok=YP4TpMBJ" />
		  </ListItemAvatar>
		  <ListItemText
			primary="Titulo 2"
			secondary={
			  <React.Fragment>
				<Typography
				  component="span"
				  variant="body2"
				  className={classes.inline}
				  color="textPrimary"
				>
				  Autor 2
				</Typography>
				{" — Descripcion 2…"}
			  </React.Fragment>
			}
		  />
		</ListItem>
		<Divider variant="inset" component="li" />
		<ListItem alignItems="flex-start">
		  <ListItemAvatar>
			<Avatar alt="Cindy Baker" src="https://www.eluniverso.com/sites/default/files/styles/nota_ampliada_normal_foto/public/fotos/2020/06/-_queguayaquil_-_atm_operativo_vehiculos.jpg?itok=c3ruqd7P" />
		  </ListItemAvatar>
		  <ListItemText
			primary="Titulo 3"
			secondary={
			  <React.Fragment>
				<Typography
				  component="span"
				  variant="body2"
				  className={classes.inline}
				  color="textPrimary"
				>
				  Autor 3
				</Typography>
				{' — Descripcion 3…'}
			  </React.Fragment>
			}
		  />
		</ListItem>
	  </List>
	);
  }


/*<div className={classes.root}>
		
		  <Button
			ref={anchorRef}
			aria-controls={open ? 'menu-list-grow' : undefined}
			aria-haspopup="true"
			onClick={handleToggle}
		  >
			Toggle Menu Grow
		  </Button>
		  <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
			{({ TransitionProps, placement }) => (
			  <Grow
				{...TransitionProps}
				style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
			  >
				<Paper>
				  <ClickAwayListener onClickAway={handleClose}>
					<MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
					  <MenuItem onClick={handleClose}>Profile</MenuItem>
					  <MenuItem onClick={handleClose}>My account</MenuItem>
					  <MenuItem onClick={handleClose}>Logout</MenuItem>
					</MenuList>
				  </ClickAwayListener>
				</Paper>
			  </Grow>
			)}
		  </Popper>
		</div>
	  */