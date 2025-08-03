import { Container, Row, Col } from 'react-bootstrap'
import UncontrolledExample from '../bootstrap/ImgCarousel'
import { useParams } from 'react-router'
import { FetchOne } from '../utils/FetchOne';
import { useEffect } from 'react';
import { useState } from 'react';
import ProductCard from '../utils/ProductCard';
import Card from 'react-bootstrap/Card';
export default function ProductDetails() {
    const [product, setProduct] = useState({});
    const [image, setImg] = useState([])
    const [review, setreview] = useState([])
    const id = useParams().id;
    var length;
    async function data(id) {
        const resp = await FetchOne(id);
        if (resp.status == "success") {
            setProduct(resp.data)
            setImg(resp.data.images)
            setreview(resp.data.reviews);
            // const im=product.images;
            // console.log(im.length)
            // console.log(resp.data.images.length)
            // length=resp.data.images;
            // console.log("review",review)
        }
    }
    useEffect(() => {
        data(id)
    }, [])
    return (
        <>
            <Container className='mt-4'>

                <Row>
                    <Col lg={5}>
                        {
                            image && <UncontrolledExample images={image} />
                        }

                    </Col>
                    <Col xs={12} lg={7} className='ps-4' >
                        {
                            product ? <ProductCard product={product} /> : null
                        }

                    </Col>
                </Row>
               
                <Row className='ms-0' >
                     <h2 style={{ border: "none" }}><svg style={{ marginBottom: "8px" }} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" className="bi bi-person-check-fill" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0" />
                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg> Customer Reviews</h2>
                    {
                        review ? review.map((item, index) => (
                                <>
                                <div style={{border:"1px solid gray",display:"flex",marginTop:"17px",padding:"15px 10px"}}>
                                <Col lg={7}>
                                
                                    <div key={index}  >

                                    <p style={{ fontWeight: "700", fontSize: "20px" }}><img style={{ width: "25px", height: "25px" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACu0lEQVR4nO2ZS2sTURTHr28FRUSoC4ViMHPOxLYqRUVcuPEruNKFKPgV+gHEKoiCC4WCILhoaXzW+t50Ydvk3MRdVXBRF924sCAIvmrzl5m0SYa8JnHuZEbyh7OcM7//OfdO7rlRqquuujImCB9zQsVV0PwCws9VHIUsD0K4AM1ALnlExU3Q9NSFd4MmVZwEbR8qVb8U1mEVF0F4wgvPgPBjFQdBUgerq+8aKDj7QkVd0PSwCr5kgh6oKAti74fwcn0DXEDGGlBRFTSn68KXY1xFUcimUg2rX+7CMvLUr6ImCI35qP7qXhhVURIySdtX9Su7oLmvM7AziR7krOMQOgvhSyvr/pNv+HI4z6TdHE4uJ+dMoicYyDf9O4pnGToF4SEIj0B4GsJf2wBtNX5A07tiYegKNF+Atk9CJxPNwYWGoWkxBMg2gxYdxvoGPu7bBOEnnQflevESs3u2NO7CXGojND2KACw8IfQMU72b/e2B/OAGCN+P0NKZdFaHL/iSibRaB6G7nYfncaegLcF7TGi+08FlM4qpE+vbgi+ZgFoDoZsdWDa3AbX2n+A9JjTfCK/yPBIYvMeE0PUQDNxy3hUovMeI5osGK3/VGHjbJ0//G3YsFPiiAb5noAPpMA18MGDgfTjwznlJ01LwBmip5V/btq9NTG3ibPKAeQPaOmPuK0SnQzBAlw0aGDZvwOS8IDxh3oDmeZ9AC8Vx0I0Fn8/Mm4WfS22tee/p/Zp8cefoismpOCQ5Ruhzkw4UME3bzBnI20cbrN9v7hCeT2xvUoChhpcDOYN/hiBrn68B/ss9PWb6dvnOI7xz5cbhe40OnjNnoPI0KvTbndiy1t62880md7vHdOGfFQauBUtd+UKh1yt7II2MnQws71u71+2i5j/Q9CqovNUvcpeKuetxZKwB5x2m8nfV1f+ov0WA2bF0AkOGAAAAAElFTkSuQmCC" alt="filled-star--v1" /> 
                                             {item.rating} - {item.reviewerName}</p> 
                
                                             <p style={{ fontWeight: "600" }}>{item.comment}</p>
                                    </div>
                                </Col>
                                <Col lg={5} className='ms-3 pr-0'>
                                 <p style={{ fontWeight: "600", fontSize: "15px", color: "grey"}}>{item.date} | {item.reviewerEmail}</p> 
                                    
                                      
                                
                                </Col>
                                </div>
                                </>
                         

                        )) : null
                    }
                </Row>

            </Container>
        </>
    )
}
  


                                         


  