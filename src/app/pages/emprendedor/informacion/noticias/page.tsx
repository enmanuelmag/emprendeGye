import React from 'react';
import { Grid } from '@material-ui/core';
import style from './style';
import NewsList from './components/newsList';
import NewsPrimary from "./components/newsPrimary";

export default function QuienesSomos() {
	const classes = style();

	return(
	<Grid container className={classes.root} justify="center"
	alignItems="center"> 
		<Grid direction="row" justify="center" alignItems="flex-start" 
		className={classes.root} item xs={12} md={8} > 
			
			<Grid container item justify="center"  xs={12}>
				<NewsPrimary />
			</Grid>
		</Grid>
		<Grid direction="row"
  justify="center"
  alignItems="flex-start" className={classes.root} item xs={12} md={4} > 
			
			<Grid container item justify="center" xs={12}>
				<NewsList/>
			</Grid>
		</Grid>

	</Grid>
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