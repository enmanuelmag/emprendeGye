import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import style from './style';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
//import tileData from './tileData';

const tile = {
	"img": "https://www.eluniverso.com/sites/default/files/styles/powgallery_1280/public/fotos/2020/07/5b601d8a-d6c9-4d29-93c2-94b5e3399884.jpg?itok=5V9kpuC_",
	"title": "Este lunes 13 de julio, en semáforo rojo circulan carros con placas terminadas en 1, 2, 3 y 7; en amarillo, placas impares",
	"author": "Escritor",

}

export default function QuienesSomos() {
	const classes = style();

	return(
		<Paper className={classes.root}>
		<GridListTile  key={tile.img} className={classes.gridTile}>
			
		<img src={tile.img} alt={tile.title} className={classes.img}/>
			<GridListTileBar
			title={tile.title}
			subtitle={<span>by: {tile.author}</span>}
			actionIcon={
				<IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
				<InfoIcon />
				</IconButton>
			}
			/>
	  	</GridListTile>
	  </Paper>
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