import { UPDATE_LIST, LOADING } from '../reducer/types'
import axios from 'axios'
import { URL, URL_TRENDING } from '../../api/settings'

const limit = 9

export const updateList = (payload) => {
    return {type: UPDATE_LIST, payload}
}

export const stateLoading = () => {
    return {type: LOADING}
}

export const loadGifs = (searchKey, offset, changePage) => {
    return (dispatch) => {

        dispatch(stateLoading())

        axios({
            method: 'GET',
            url: `${URL}?api_key=${process.env.REACT_APP_GIPHYS_KEY}&q=${searchKey}&limit=${limit}&offset=${offset}`
        })
        .then((res) => {
            
            let {data, pagination} = res.data
            
            if (changePage) {
                // IN CASE OF CHANGING PAGE, NO NEED TO UPDATE PAGINATION
                // IN ORDER TO AVOID ERROR WHEN REQUEST DATA RETURNS EMPTY ARRAY WHEN CHANGING PAGE
                dispatch(updateList({list: data}))
            } else {
                dispatch(updateList({list: data, pagination}))
            }

        })
        .catch((err) => {
            console.log(err)
        })
    }
}


export const loadTrendingGifs = (offset, changePage) => {
    return (dispatch) => {

        dispatch(stateLoading())

        axios({
            method: 'GET',
            url: `${URL_TRENDING}?api_key=${process.env.REACT_APP_GIPHYS_KEY}&limit=${limit}&offset=${offset}`
        })
        .then((res) => {
            
            let {data, pagination} = res.data
            
            if (changePage) {
                dispatch(updateList({list: data}))
            } else {
                dispatch(updateList({list: data, pagination}))
            }

        })
        .catch((err) => {
            console.log(err)
        })
    }
}