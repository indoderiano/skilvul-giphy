import { Header, Input, Pagination } from 'semantic-ui-react'
import loadingGif from '../assets/loading.gif'
import noresult from '../assets/no-results.png'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadGifs, loadTrendingGifs } from '../redux/actions'
import { useLocation } from 'react-router-dom'
import { OFFSET } from '../api/settings'
import Gifs from '../components/Gifs'

export default function Content () {
    const { loading, pagination, list } = useSelector(state => state.gifs)
    const { pathname } = useLocation()
    const dispatch = useDispatch()
    const [searchKey, setSearchKey] = useState('')
    const [delay, setDelay] = useState(0)
    const [timer, setTimer] = useState(null)

    const [activePage, setActivePage] = useState(1)

    useEffect(() => {
        if(pathname === '/ironman'){
            setSearchKey('iron man')
            setDelay(0)
        }else{
            dispatch(loadTrendingGifs(0, false))
            setDelay(1000)
        }
    },[])

    useEffect(() => {
        // ONLY TAKES EFFECT 1 SECOND AFTER INPUTING LAST LETTER OF INPUT
        clearTimeout(timer)
        let newTimer = setTimeout(() => {
            if (searchKey) {
                dispatch(loadGifs(searchKey, OFFSET))
            } else {
                dispatch(loadTrendingGifs(0, false))
            }
        }, delay)
        setTimer(newTimer)
    },[searchKey])

    useEffect(() => {
        let currentOffset = (activePage-1)*OFFSET
        if(searchKey){
            dispatch(loadGifs(searchKey, currentOffset, true))
        } else if ( pathname === '/search' ) {
            dispatch(loadTrendingGifs(currentOffset, false))
        }
    },[activePage])

    const displayHeader = () => {
        if(pathname === '/ironman'){
            return (
                <Header as='h1' style={{fontSize: '42px', fontWeight: '900', marginBottom: '40px'}}>
                    Iron Man
                </Header>
            )
        } else if(pathname === '/search'){
            return (
                <div
                    style={{marginBottom: '40px'}}
                >
                    <Input
                        icon='search'
                        placeholder='Search your giphys...'
                        size="massive"
                        style={{
                            minWidth: '300px'
                        }}
                        onChange={(e) => {
                            setSearchKey(e.target.value)
                        }}
                    />
                </div>
            )
        }
    }

    const displayPagination = () => {
        let totalPages = pagination.total_count?Math.ceil(pagination.total_count/OFFSET):0
        if (totalPages > 1) {
            return (
                <div>
                    <Pagination
                        style={{marginBottom: '2em', marginTop: '2em'}}
                        activePage={activePage}
                        onPageChange={(e, { activePage }) => setActivePage(activePage)}
                        totalPages={totalPages}
                    />
                </div>
            )
        } else {
            return null
        }
    }

    return (
        <div
            style={{
                padding: '40px 40px',
            }}
        >
            <div
                style={{
                    textAlign: 'center'
                }}
            >

                {displayHeader()}

                {
                    loading?
                    <img
                        src={loadingGif}
                        style={{
                            width: '200px'
                        }}
                        alt={'loading'}
                    />
                    :list.length === 0?
                    <img
                        src={noresult}
                        style={{
                            width: '40%'
                        }}
                        alt="no result"
                    />
                    :
                    <Gifs/>
                }

                {
                    displayPagination()
                }
                

            </div>
            
        </div>
    )
}