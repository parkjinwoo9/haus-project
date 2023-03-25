import '../../css/router/ShoppingBasket.css';
import { useState } from 'react';

function ShoppingBasket() {

    const [counter, setCounter] = useState(0)

    return (
        <div id='shopping-basket'>
            <div id='shop-header'>
                <a>장바구니</a><a></a>
            </div>
            <div id='shop-info'>
                <div className='good-info'><a>상품 정보</a></div>
                <div className='quantity'><a>수량</a></div>
                <div className='price'><a>주문금액</a></div>
                <div className='shipping'><a>배송 정보</a></div>
            </div>
            <div id='good-list'>

            </div>
            <div id='go-shopping'>
                <a href='/'>계속 쇼핑하기</a>
            </div>
        </div>
    )
}

export default ShoppingBasket;