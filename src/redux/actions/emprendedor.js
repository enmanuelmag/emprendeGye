export const GET_EMPRENDEDOR_START = 'GET_EMPRENDEDOR_START'
export const GET_EMPRENDEDOR_ERROR = 'GET_EMPRENDEDOR_ERROR'
export const GET_EMPRENDEDOR_COMPLETE = 'GET_EMPRENDEDOR_COMPLETE'

export const UPDATE_EMPRENDEDOR_START = 'UPDATE_EMPRENDEDOR_START'
export const UPDATE_EMPRENDEDOR_ERROR = 'UPDATE_EMPRENDEDOR_ERROR'
export const UPDATE_EMPRENDEDOR_COMPLETE = 'UPDATE_EMPRENDEDOR_COMPLETE'


export const getEmprendedor = ({idEmprendedor}) => ({
    type: GET_EMPRENDEDOR_START, idEmprendedor
})

export const updateEmprendedor = (emprendedor) => ({
    type: UPDATE_EMPRENDEDOR_START, emprendedor
})
