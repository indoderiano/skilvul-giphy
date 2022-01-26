import { Header, Input, Pagination } from 'semantic-ui-react'
import loadingGif from '../assets/loading.gif'
import noresult from '../assets/no-results.png'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadGifs, loadTrendingGifs } from '../redux/actions'
import { useLocation } from 'react-router-dom'
import { OFFSET } from '../api/settings'

export default function Content () {

    return (
        <div>
            CONTENT
            
        </div>
    )
}