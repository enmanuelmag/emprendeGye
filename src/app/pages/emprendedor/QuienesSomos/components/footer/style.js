import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    contenido: {
        display: 'flex',
        position: 'relative',
    },

    root: {
        background: '#16244b',
        marginTop: '3%',
    },

    columna: {
        color: '#FFFFFF',
        marginTop: '3%',
        marginLeft: '27%',
        lineHeight: '160%',
    },

    columna2: {
        color: '#FFFFFF',
        marginTop: '3%',
        marginLeft: '13%',
        lineHeight: '160%',
    },

    imagen: {
        width: '16%',
        paddingLeft: '7%',
        marginTop: '2%',
    },

    lista: {
        listStyleType: 'none',
        paddingLeft: '0',
    },

    foot: {
        marginTop: '3%',
        textAlign: 'center',
        paddingBottom: '1%',
        color: '#FFFFFF',
    },

}));