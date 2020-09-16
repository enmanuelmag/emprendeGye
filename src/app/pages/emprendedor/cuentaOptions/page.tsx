import React from 'react';
import style from './style';
import { 
    Paper, 
    Popper, 
    MenuItem, 
    MenuList, 
    Grow,
    ClickAwayListener,
    Link
} from '@material-ui/core';

import { deleteEmprendedorCuenta } from '../../../../redux/actions/emprendedorCuenta';
import { useDispatch } from 'react-redux';

export default function Cuenta() {
  const classes = style();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const dispatch = useDispatch();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const emprendedorCuenta = JSON.parse(localStorage.getItem("emprendedorCuenta") || "{}");

  const handleCloseDelete = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      console.log("id",emprendedorCuenta.idEmprendedor);
      console.log("DELETING",dispatch(deleteEmprendedorCuenta({idEmprendedorC: emprendedorCuenta.idEmprendedor})));
      localStorage.removeItem("emprendedorCuenta");
      return;
    }

    setOpen(false);
  };

  const handleCloseCerrarSesion = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
        localStorage.removeItem("emprendedorCuenta");
      return;
    }

    setOpen(false);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
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

  return (
      <Link
        color="inherit"
        ref = {anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        onClick = {handleToggle}
        className = {classes.link}
      >
        Cuenta
        <Popper
            open = {open}
            anchorEl = {anchorRef.current}
            role = {undefined}
            transition
            disablePortal
        >
            {({ TransitionProps, placement }) => (
            <Grow
                {...TransitionProps}
                style={{
                transformOrigin:
                    placement === 'bottom' ? 'center top' : 'center bottom',
                }}
            >
                <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                    className={classes.dropMenuPaper}
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                    >
                    <MenuItem onClick={handleClose}>
                        <Link
                        href="/emprendedor/cuenta"
                        className={classes.link}
                        >
                        {' '}
                        Ver perfil
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseDelete}>
                        <Link
                        href="/"
                        className={classes.link}
                        >
                        {' '}
                        Eliminar cuenta
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseCerrarSesion}>
                        <Link
                        href="/login"
                        className={classes.link}
                        >
                        {' '}
                        Cerrar sesión
                        </Link>
                    </MenuItem>
                    </MenuList>
                </ClickAwayListener>
                </Paper>
            </Grow>
            )}
        </Popper>
    </Link>
  );
}