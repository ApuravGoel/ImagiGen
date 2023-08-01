import React,{useState,useEffect}from 'react'
import FormField from '../components/FormField'
import Loader from './Loader';
import Card from '../components/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
    const [loading , setLoading] = useState(false);
    const [allPosts,setAllPosts] = useState(null);
    const [searchText, setSearchText] = useState('abc');
    const RenderCards = ({data, title}) => {
        if(data ?. length > 0) return data.map((post) => <Card key={post._id} {...post}/>)
        return(
            <h2 className='mt-5'>{title}</h2>
        )
    }
  return (
    <section className="mx-auto p-2">
        <div >
            <h1 >The Community Showcase</h1>
            <p >Browse through collections of images</p>
        </div>
        <div><FormField/></div>
        <div className="mt-15">
            {
                loading ? (<div class="d-flex justify-content-center">
                    <Loader/>
                </div>) 
                : (
                    <>
                    {searchText && (
                        <h3>Showing results for {searchText}</h3>
                    )
                    }
                    </>
                )
            }
        </div>
        <Container>
            <Row>
                <Col xs={{span:2,offset:3}} lg={{span:4,offset:3}} sm={{span:3,offset:3}}>
                    {
                        (searchText ? (
                            <RenderCards data = {[]} title = "NO search found"/>
                        ):
                        (<RenderCards data={{}} title="No posts found"/>))
                    }
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Home
