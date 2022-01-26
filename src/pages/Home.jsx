import { Header, Grid, Card, Image, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import ironman from '../assets/iron-man.webp'

export default function Pick () {

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignContent: 'center',
                padding: '0 20%',
                overflow: 'hidden',
            }}
        >
            <div
                style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '4em 0 2em 0',
                }}
            >
                <Header as='h1' style={{fontSize: '42px', fontWeight: '900'}}>Welcome</Header>
                <Header
                    as='h4'
                    style={{
                        fontSize: '21px',
                        fontWeight: '500',
                        marginTop: '0px',
                    }}
                >
                    Giphy Search App by <span style={{fontWeight: '900'}}>Indo Halim</span>
                </Header>
            </div>
            <Grid
                columns={2}
                stackable
                style={{
                    flex: 4,
                    padding: '0 0 10%'
                }}
            >
                <Grid.Column
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 'auto',
                        textAlign: 'center'
                    }}
                >
                    <Card
                        link
                        as={Link}
                        to='/ironman'
                    >
                        <Card.Content>
                            <Image
                                src={ironman}
                                style={{
                                    marginBottom: '20px',
                                }}
                            />
                            <Card.Header style={{fontSize: '32px'}}>Iron Man</Card.Header>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                
                <Grid.Column
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 'auto',
                        textAlign: 'center'
                    }}
                >
                    <Card
                        link
                        as={Link}
                        to='/search'
                    >
                        <Card.Content>
                            <div
                                style={{
                                    fontSize: '150px',
                                    marginBottom: '20px',
                                    height: '262px',
                                }}
                            >
                                <Icon
                                    name='search'
                                    style={{
                                        // display: 'inline-block',
                                        position: 'absolute',
                                        top: '65%',
                                        left: '50%',
                                        transform: 'translate(-50%,-50%)',
                                        color: 'rgba(0,0,0,.65)'
                                    }}
                                />
                            </div>
                            <Card.Header style={{fontSize: '32px'}}>Search</Card.Header>
                        </Card.Content>
                    </Card>
                </Grid.Column>

            </Grid>
        </div>
    )
}