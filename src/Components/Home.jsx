import { useSelector } from "react-redux"
import ProductCard from '../bootstrap/ProductCard'
import { Container, Row, Col } from 'react-bootstrap'
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { productFetch } from "../features/Products";
import Loader from "../utils/Loader";
export default function Home() {
    const productslice = useSelector((store) => store.products);
    const dispatch = useDispatch()
    const [pagination, setPagination] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [items,setitems] = useState(productslice.items)
    

    // function datafetch(){
    //      dispatch(productFetch(productslice.step))

    // }
    useEffect(()=>{
        setitems(productslice.items)
    },[items,dispatch,productslice.items])
    useEffect(() => {
        async function scroll() {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement
               
            if (scrollTop + clientHeight + 10 > scrollHeight && !isLoading) {
                setIsLoading(true)
                try {
                    await new Promise((res)=>setTimeout(res,1000));
                    
                    await dispatch(productFetch(productslice.step))
                }
                finally {
                    setIsLoading(false)
                }


            }
        }
        window.addEventListener('scroll', scroll);
        return () => {
            window.removeEventListener('scroll', scroll)
        }


    }, [dispatch, isLoading])
    return (
        <>
               
            <Container>
                <Row >
                    {
                        productslice.items && productslice.items.map((item, index) => (
                            <Col key={item.key} sm={12} lg={4} style={{ margin: "20px 0" }} className="d-flex justify-content-center align-items-center">
                                <ProductCard key={item.key} item={item} style={{ margin: "0px", padding: "0px" }} 
                                />
                            </Col>
                        )
                        )
                    }
                    </Row>
                    
                     {
                        
                productslice.status === "pending"||
                isLoading==true?
                <div style={{width:"100%",textAlign:"center",marginTop:"80px"}}><Loader/></div>:null
                }
               
            </Container>
           
        </>
    )
}

