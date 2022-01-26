import { Header, Input, Pagination, Card, Image } from 'semantic-ui-react'
import loadingGif from '../assets/loading.gif'
import noresult from '../assets/no-results.png'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadGifs, loadTrendingGifs } from '../redux/actions'
import { useLocation } from 'react-router-dom'
import { OFFSET } from '../api/settings'

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

    const renderGiphys = () => {
        return list.map((data, index) => {
            return (
                <Card
                    link
                    style={{
                        display: 'inline-grid',
                        margin: '10px'
                    }}
                    key={index}
                >
                    <Card.Content>
                        <Image
                            src={data.images?.original?.url}
                            style={{
                                marginBottom: '20px',
                                minHeight: '100px',
                                backgroundImage: 'url(' + loadingGif + ')',
                                backgroundSize: "100%",
                                backgroundPositoin: 'center center',
                                backgroundRepeat: 'no-repeat'
                            }}
                        />
                        <Card.Header style={{fontSize: '24px'}}>{data.title}</Card.Header>
                    </Card.Content>
                </Card>
            )
        })
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
                    <div>
                        {
                            renderGiphys()
                        }
                    </div>
                }
                
            </div>
            
        </div>
    )
}