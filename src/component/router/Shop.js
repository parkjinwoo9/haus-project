import "../../css/router/Shop.css";
import clothList1 from "../../shopImages/clothe1.jpg";
import clothList2 from "../../shopImages/clothe2.jpg";
import clothList3 from "../../shopImages/clothe3.jpg";
import clothList4 from "../../shopImages/clothe4.jpg";
import clothList5 from "../../shopImages/clothe5.jpg";
import clothList6 from "../../shopImages/clothe6.jpg";
import clothList7 from "../../shopImages/clothe7.jpg";
import clothList8 from "../../shopImages/clothe8.jpg";
import clothList9 from "../../shopImages/clothe9.jpg";
import clothList10 from "../../shopImages/clothe10.jpg";
import clothList11 from "../../shopImages/clothe11.jpg";
import clothList12 from "../../shopImages/clothe12.jpg";
import clothList13 from "../../shopImages/clothe13.jpg";
import clothList14 from "../../shopImages/clothe14.jpg";
import clothList15 from "../../shopImages/clothe15.jpg";
import clothList16 from "../../shopImages/clothe16.jpg";
import clothList17 from "../../shopImages/clothe17.jpg";
import clothList18 from "../../shopImages/clothe18.jpg";
import clothList19 from "../../shopImages/clothe19.jpg";
import clothList20 from "../../shopImages/clothe20.jpg";
import clothList21 from "../../shopImages/clothe21.jpg";
import clothList22 from "../../shopImages/clothe22.jpg";

import mainCloth from "../../shopImages/main-cloth.jpg";
import ShopClothList from "../pagination/ShopClothList";
import ShopPagination from "../pagination/ShopPagination";
import { useState } from "react";



function Shop(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [shopPerPage, setShopPerPage] = useState(8);
  const [shopList, setShopList] = useState([
    {
      id: 1,
      img: clothList1,
      title: "BROADCLOTH WOOL CAVALRY JACKET BLACK",
      price: "295,000원",
    },
    {
      id: 2,
      img: clothList2,
      title: "OLD DYEING CAMPAIGN HOODIE JACKET SMOKE",
      price: "159,000원",
    },
    {
      id: 3,
      img: clothList3,
      title: "RUSTIC WOOL CANDY NEP SWEATER MIDNIGHT",
      price: "155,000원",
    },
    {
      id: 4,
      img: clothList4,
      title: "CRAFT COTTON CHORE JACKET CREAM WHITE ",
      price: "315,000원",
    },
    {
      id: 5,
      img: clothList5,
      title: "COWHIDE SUEDE BIKER JACKET TOBACCO ",
      price: "598,000원",
    },
    {
      id: 6,
      img: clothList6,
      title: "DESTROYED WASH MINER DENIM PANTS WASHED BLACK ",
      price: "189,000원",
    },
    {
      id: 7,
      img: clothList7,
      title: "OLD DYEING CAMPAIGN HOODIE JACKET ANTHRACITE",
      price: "159,000원",
    },
    {
      id: 8,
      img: clothList8,
      title: "BOTANIC STRIPE V-NECK KNIT SWEATER MELANGE GREY/LEMON ",
      price: "149,000원",
    },
    {
      id: 9,
      img: clothList9,
      title: "BROADCLOTH WOOL CAVALRY JACKET CAMEL ",
      price: "295,000원",
    },
    {
      id: 10,
      img: clothList10,
      title: "DOUBLE CLOSURE SMOKING JACKET BLACK",
      price: "325,000원",
    },
    {
      id: 11,
      img: clothList11,
      title: "70’S WIDE-LEG WOOL POPLIN TROUSERS DESERT",
      price: "175,000원",
    },
    {
      id: 12,
      img: clothList12,
      title: "RUSTIC WOOL CANDY NEP SWEATER MIDNIGHT NAVY",
      price: "155,000원",
    },
    {
      id: 13,
      img: clothList13,
      title: "BOTANIC STRIPE V-NECK KNIT SWEATER BROWN/TURQUOISE ",
      price: "149,000원",
    },
    {
      id: 14,
      img: clothList14,
      title: "COWHIDE LEATHER BIKER JACKET BLACK ",
      price: "625,000원",
    },
    {
      id: 15,
      img: clothList15,
      title: "DESTROYED WASH MINER DENIM PANTS LIGHT BLUE",
      price: "189,000원",
    },
    {
      id: 16,
      img: clothList16,
      title: "70’S WIDE-LEG WOOL POPLIN TROUSERS FRENCH GREEN",
      price: "439,000원",
    },
    {
      id: 17,
      img: clothList17,
      title: "CLASP HOLD CABAN COAT CRACKED BLACK ",
      price: "175,000원",
    },
    {
      id: 18,
      img: clothList18,
      title: "STRAIGHT PIQUE TRACK PANTS TAN",
      price: "145,000원",
    },
    {
      id: 19,
      img: clothList19,
      title: "CRAFT COTTON CHORE JACKET BLACK",
      price: "315,000원",
    },
    {
      id: 20,
      img: clothList20,
      title: "STRAIGHT PIQUE TRACK PANTS BLACK",
      price: "175,000원",
    },
    {
      id: 21,
      img: clothList21,
      title: "OLD DYEING CAMPAIGN HOODIE JACKET FADED NAVY ",
      price: "159,000원",
    },
    {
      id: 22,
      img: clothList22,
      title: "70’S WIDE-LEG WOOL FLAP TROUSERS BLACK",
      price: "175,000원",
    },
  ]);

  const currentShopList = () => {
    const startIndex = (currentPage - 1) * shopPerPage;
    const endIndex = startIndex + shopPerPage;
    const slicedList = shopList.slice(startIndex, endIndex);
    return slicedList;
  };

  return (
    <div id="shop">
      <div id="main-clothes">
        <div id="main-clothes-header">
          SS23 COLLECTION 'VILLA ROSE'<br />
          MENSWEAR

        </div>
        <div id="main-clothes-img">
          <img src={mainCloth} alt="mainImg" />
        </div>
      </div>

      <div id="p">
        <p>
          23 봄 여름 남성 컬렉션
          <br />
          <br />
          레디 투 웨어
        </p>
      </div>
      <div id="clothes-list">
        <ShopClothList shopList={currentShopList(props.shopList)} />
        <ShopPagination
          total={shopList.length}
          shopPerPage={shopPerPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default Shop;
