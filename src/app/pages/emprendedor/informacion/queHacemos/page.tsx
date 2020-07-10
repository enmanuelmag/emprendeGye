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


export default function QuienesSomos() {
	
	return(
	<> </>
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