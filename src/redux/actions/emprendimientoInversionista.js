export const GET_ALL_EMPINVERSIONISTA_START = 'GET_ALL_EMPINVERSIONISTA_START'
export const GET_ALL_EMPINVERSIONISTA_ERROR = 'GET_ALL_EMPINVERSIONISTA_ERROR'
export const GET_ALL_EMPINVERSIONISTA_COMPLETE = 'GET_ALL_EMPINVERSIONISTA_COMPLETE'

//Son llamadas por los componentes
export const getAllEmpInversionista = ({idInversionista}) => ({
    type: GET_ALL_EMPINVERSIONISTA_START, idInversionista
})