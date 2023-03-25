import '../../css/detail/Detail.css';
import size from '../../images/size.png';

import { useParams } from 'react-router-dom';
import axios from 'axios'
import { useEffect, useState } from 'react';



function Detail() {

    const [product, setProduct] = useState([])
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(
                `https://2f99851f-d291-4e75-a3ed-3d69e01bcba6.mock.pstmn.io/detail/${id}`
            ).then(function (result) {
                setProduct(result.data)
            }).catch(function (error) {
                console.error(error)
            })
    }, [])
    console.log(product)
    return (
        <div id='detail'>
            <div id='detail-img'>
                <img src={product.img} />
            </div>
            <div id='detail-info'>
                <h2>{product.title}</h2>
                <h4>{product.price}</h4>
                <img src={size} alt='size'/>
                <div className='buy'>BUY NOW</div>
                <div className='add'>ADD TO BAG</div>
            </div>
        </div>
    )
}
export default Detail;