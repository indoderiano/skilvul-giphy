import { UPDATE_LIST, LOADING } from './types'

const initialState = {
    list: [],
    pagination: {
        total_count: 0,
        count: 0,
        offset: 0,
    },
    loading: false
}

export default function reducer (state = initialState, action) {
    switch(action.type) {
        case UPDATE_LIST:
            return {...state, ...action.payload, loading: false}
        case LOADING:
            return {...state, loading:true}
        default:
            return state
    }
}
