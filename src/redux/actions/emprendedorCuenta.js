export const GET_EMPCUENTA_START = 'GET_EMPCUENTA_START'
export const GET_EMPCUENTA_ERROR = 'GET_EMPCUENTA_ERROR'
export const GET_EMPCUENTA_COMPLETE = 'GET_EMPCUENTA_COMPLETE'

export const UPDATE_EMPCUENTA_START = 'UPDATE_EMPCUENTA_START'
export const UPDATE_EMPCUENTA_ERROR = 'UPDATE_EMPCUENTA_ERROR'
export const UPDATE_EMPCUENTA_COMPLETE = 'UPDATE_EMPCUENTA_COMPLETE'

export const CREATE_EMPCUENTA_START = 'CREATE_EMPCUENTA_START'
export const CREATE_EMPCUENTA_ERROR = 'CREATE_EMPCUENTA_ERROR'
export const CREATE_EMPCUENTA_COMPLETE = 'CREATE_EMPCUENTA_COMPLETE'

export const DELETE_EMPCUENTA_START = 'DELETE_EMPCUENTA_START'
export const DELETE_EMPCUENTA_ERROR = 'DELETE_EMPCUENTA_ERROR'
export const DELETE_EMPCUENTA_COMPLETE = 'DELETE_EMPCUENTA_COMPLETE'

//Son llamadas por los componentes
export const getEmprendedorCuenta = (emprendedorC) => ({
    type: GET_EMPCUENTA_START, emprendedorC
})

export const deleteEmprendedorCuenta = ({idEmprendedorC}) => ({
    type: DELETE_EMPCUENTA_START, idEmprendedorC
})

export const updateEmprendedorCuenta = (emprendedorC) => ({
    type: UPDATE_EMPCUENTA_START, emprendedorC
})

export const createEmprendedorCuenta = (emprendedorC) => ({
    type: CREATE_EMPCUENTA_START, emprendedorC
})