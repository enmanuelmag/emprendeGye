export const GET_EMPRENDEDOR_START = 'GET_EMPRENDEDOR_START'
export const GET_EMPRENDEDOR_ERROR = 'GET_EMPRENDEDOR_ERROR'
export const GET_EMPRENDEDOR_COMPLETE = 'GET_EMPRENDEDOR_COMPLETE'

export const UPDATE_EMPRENDEDOR_START = 'UPDATE_EMPRENDEDOR_START'
export const UPDATE_EMPRENDEDOR_ERROR = 'UPDATE_EMPRENDEDOR_ERROR'
export const UPDATE_EMPRENDEDOR_COMPLETE = 'UPDATE_EMPRENDEDOR_COMPLETE'

export const CREATE_EMPRENDEDOR_START = 'CREATE_EMPRENDEDOR_START'
export const CREATE_EMPRENDEDOR_ERROR = 'CREATE_EMPRENDEDOR_ERROR'
export const CREATE_EMPRENDEDOR_COMPLETE = 'CREATE_EMPRENDEDOR_COMPLETE'

export const DELETE_EMPRENDEDOR_START = 'DELETE_EMPRENDEDOR_START'
export const DELETE_EMPRENDEDOR_ERROR = 'DELETE_EMPRENDEDOR_ERROR'
export const DELETE_EMPRENDEDOR_COMPLETE = 'DELETE_EMPRENDEDOR_COMPLETE'

//Son llamadas por los componentes
export const getEmprendedor = ({idEmprendedor}) => ({
    type: GET_EMPRENDEDOR_START, idEmprendedor
})
export const deleteEmprendedor = ({idEmprendedor}) => ({
    type: DELETE_EMPRENDEDOR_START, idEmprendedor
})

export const updateEmprendedor = (emprendedor) => ({
    type: UPDATE_EMPRENDEDOR_START, emprendedor
})

export const createEmprendedor = (emprendedor) => ({
    type: CREATE_EMPRENDEDOR_START, emprendedor
})

