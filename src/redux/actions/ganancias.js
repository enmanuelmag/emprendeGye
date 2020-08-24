export const GET_ALLGANANCIAS_START = 'GET_ALLGANANCIAS_START'
export const GET_ALLGANANCIAS_ERROR = 'GET_ALLGANANCIAS_ERROR'
export const GET_ALLGANANCIAS_COMPLETE = 'GET_ALLGANANCIAS_COMPLETE'

export const getGanancias = ({inicio, fin}) => ({
    type: GET_ALLGANANCIAS_START, inicio, fin
})
