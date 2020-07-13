import React from 'react';
import { Grid, Typography, Link } from '@material-ui/core';
import style from './style';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';


export default function Informacion() {
	const classes = style();
	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef<HTMLButtonElement>(null);
  
	const handleToggle = () => {
	  setOpen((prevOpen) => !prevOpen);
	};
  
	const handleClose = (event: React.MouseEvent<EventTarget>) => {
	  if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
		return;
	  }
  
	  setOpen(false);
	};
  
	function handleListKeyDown(event: React.KeyboardEvent) {
	  if (event.key === 'Tab') {
		event.preventDefault();
		setOpen(false);
	  }
	}
  
	// return focus to the button when we transitioned from !open -> open
	const prevOpen = React.useRef(open);
	React.useEffect(() => {
	  if (prevOpen.current === true && open === false) {
		anchorRef.current!.focus();
	  }
  
	  prevOpen.current = open;
	}, [open]);
  
	return(
	  <div className={classes.root}>
			
		  <Button
		  	color="inherit"
			ref={anchorRef}
			aria-controls={open ? 'menu-list-grow' : undefined}
			aria-haspopup="true"
			onClick={handleToggle}
		  >
			Información
		  </Button>
		  <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
			{({ TransitionProps, placement }) => (
			  <Grow
				{...TransitionProps}
				style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
			  >
				<Paper>
				  <ClickAwayListener onClickAway={handleClose}>
					<MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown} >
					  <MenuItem onClick={handleClose} >¿Qué hacemos?</MenuItem>
					  <MenuItem onClick={handleClose} >
						  <Link href="/emprendedor/quienes_somos" className={classes.link}> ¿Quiénes Somos?</Link>
						  </MenuItem>
					  <MenuItem onClick={handleClose}>Noticias</MenuItem>
					  <MenuItem onClick={handleClose}>
					  <Link href="/emprendedor/contactanos" className={classes.link}>Contáctanos</Link>
						  </MenuItem>
					</MenuList>
				  </ClickAwayListener>
				</Paper>
			  </Grow>
			)}
		  </Popper>
		</div>
	  
	);
  }

