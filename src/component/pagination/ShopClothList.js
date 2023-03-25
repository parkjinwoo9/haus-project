import '../../css/pagination/ShopClothList.css';
import ShopCloth from './ShopCloth';
import { Link } from 'react-router-dom';

function ShopClothList(props) {

    const result = props.shopList.map(
        (product, id) => (
            <Link exact={true} to={`/detail/${product.id}`}>
                <ShopCloth id={product.id} img={product.img} title={product.title}
                    price={product.price} />
            </Link>
        )
    )
    return (
        <div id='shop-clothe-list'>
            {result}
        </div>
    )
}
export default ShopClothList;