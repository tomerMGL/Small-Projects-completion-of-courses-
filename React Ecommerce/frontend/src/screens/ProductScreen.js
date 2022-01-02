import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import Rating from '../components/Rating';
import {Link} from 'react-router-dom'; 
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { detailsProduct } from '../actions/productActions';

export default function ProductScreen(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const productDetails = useSelector( state => state.productDetails);
    const [qty, setQty] = useState(1);
    const { loading, error, product} = productDetails;

    useEffect( () => {
        dispatch(detailsProduct(productId));
    }, [dispatch, productId] );

    const addToCartHandler = () =>{
        props.history.push(`/cart/${productId}?qty=${qty}`)
    }

    return (
        <div>
        {loading ? <LoadingBox></LoadingBox> 
        :
         error ? <MessageBox variant="danger">{error}</MessageBox> 
         :
            <div>
                    <Link to="/">חזור לדף הבית</Link>

                        <div className="row top">
                            <div className="col-2">
                                <img className="large" src={product.image} alt={product}></img>
                            </div>
                            <div className="col-1">
                                <ul>
                                    <li><h1>{product.name}</h1></li>
                                    <li><Rating rating={product.rating} numReviews={product.numReviews} ></Rating></li>
                                    <li>מחיר : {product.price}</li>
                                    <li><p>{product.description}</p></li>
                                </ul>
                            </div>
                            <div className="col-1">
                                <div className="card_product_page card-body">
                                    <ul>
                                        <li>
                                            <div className="row">
                                                <div>מחיר</div>
                                                <div className="price">{product.price}</div>

                                            </div>
                                            <div className="row">
                                                <div>סטטוס</div>
                                                <div className="price">
                                                    {product.countInStock > 0? (<span className="success">זמין במלאי</span>)
                                                    :
                                                    (<span className="error" >חסר במלאי</span>)
                                                    }
                                                </div>
                                            </div>
                                        </li>
                                        {
                                            product.countInStock > 0 && (
                                                <>
                                                <li>
                                                    <div className="row">
                                                        <div>כמות</div>
                                                        <div>
                                                            <select value={qty} onChange={e => setQty(e.target.value)}>
                                                                {
                                                                    [...Array(product.countInStock).keys()].map(x => (
                                                                        <option key={x+1} value={x+1}>{x+1}</option>
                                                                    ))
                                                                }
                                                            </select>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                <button onClick={addToCartHandler} className="primary block">הוסף לעגלה</button>
                                                </li>
                                                </>
                                            )
                                        }

                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
          }


     </div>
      
    )
}
