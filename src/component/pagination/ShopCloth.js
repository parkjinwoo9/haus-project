import '../../css/pagination/ShopCloth.css';


function ShopCloth(props) {
    return (
        <div id='shop-cloth'>

                <img src={props.img} />
                <p>{props.title}</p>
                <p>{props.price}</p>

        </div>
    )
}
export default ShopCloth;