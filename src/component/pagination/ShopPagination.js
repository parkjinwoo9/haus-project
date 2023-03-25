import "../../css/pagination/ShopPagination.css";

function ShopPagination(props) {

    const { total, shopPerPage } = props //비구조화할당 편하다....
    const endPage = Math.ceil(total / shopPerPage)
    //22/10 올림해주면됨..
    let pageNumbers = []
    for (var i = 1; i <= endPage; i++) {
        pageNumbers.push(i)
    }
    console.log(pageNumbers)
    const result = pageNumbers.map(
        (page) => (<span id='shp' onClick={() => pageClick(page)}>{page}</span>)
    )

    const pageClick = (page) => {
        props.setCurrentPage(page)//postMain으로 넘겨야댐
    }
    return (
        <div id='shop-pagination'>
            {result}
        </div>
    )
}

export default ShopPagination;