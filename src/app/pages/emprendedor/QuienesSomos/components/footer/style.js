import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    contenido: {
        display: 'flex',
        position: 'relative',
    },

    root: {
        background: '#16244b',
        marginTop: '7%',
    
    },

    columna2: {
        color: '#FFFFFF',
        marginTop: '3%',
        lineHeight: '160%',
        //marginLeft: '12%',
    },

    imagen: {
        width: '100%',
        //paddingLeft: '7%',
        marginTop: '2%',
    },

    imacont: {
       display:"block",
        margin:"auto",
        //paddingLeft: '7%',
        //marginTop: '2%',
    },


    lista: {
        listStyleType: 'none',
        paddingLeft: '0',
    },

    foot: {
        //marginTop: '3%',
        textAlign: 'center',
        paddingBottom: '1%',
        color: '#FFFFFF',
    },

}));