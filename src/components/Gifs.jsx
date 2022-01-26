import { Card, Image } from 'semantic-ui-react'
import { useSelector } from'react-redux'
import loadingGif from '../assets/loading.gif'

export default function Gifs () {
    const { list } = useSelector(state => state.gifs)

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
                textAlign: 'center'
            }}
        >

            {renderGiphys()}


        </div>
            
        
    )
}