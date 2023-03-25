import "../../css/common/Header.css";
import cart from "../../images/cart.png";
import login from "../../images/login.png";
import search from "../../images/search.png";
import logo from "../../images/logo.jpg";
import insta from '../../images/insta.png';
import hemburger from '../../images/hemburger.png';


import SearchBox from './SearchBox';
import $ from "jquery";
import { useState,useEffect } from "react";




function Header() {
  //반응형
  const [isToggled, setIsToggled] = useState(false);
  const [show,setShow] = useState(false);
  
  // const [scrollPosition,setScrollPosition]=useState(0);
  // const updateScroll = () => {
  //   setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  // }
  // useEffect(()=>{
  //   window.addEventListener('scroll',updateScroll)
  // },[])
  useEffect(()=>{
    $(window).on('scroll',function(){
      if($(window).scrollTop()>120){
        $('#header').addClass('active');
      }else{
        $('#header').removeClass('active');
      }
    })
  },[])

  // 제이쿼리 말고 useState로 펼쳐지는 메뉴 구현해야댐 이거 오류많음
  // useEffect(() => {
  //   $(".menu>ul").on({
  //     mouseenter: function () {
  //       var idx = $(this).index();
  //       $(".menu>ul").eq(idx).find("#menu-wrap").slideDown('slow');
  //     },
  //     mouseleave: function () {
  //       $(".menu>ul").find("#menu-wrap").slideUp('slow');
  //     },
  //   });
  // }, []);

  
  // className={scrollPosition < 200? "header":"change_header"}
  const ToBasket = () => {
    window.location.href='/shoppingbasket'
  }
  const ToMap = () => {
    window.location.href='/map'
  }
  const ToShop = () => {
    window.location.href='/shop'
  }
  return (
    <div id="header" >
      <div id="header-left">
        <div id='toggleBtn'>
          <img src={hemburger} style={{cursor:'pointer'}} onClick={()=>{setIsToggled(!isToggled)}}/>
        </div>
        {isToggled ? (
        <ul className='toggleMenus'>
          <div className="out" onClick={()=>setIsToggled(!isToggled)}>x</div>
          <li className='toggle_menu'>
            <a href='/shop'>SHOP</a>
          </li>
          <li className='toggle_menu'>
            <a href='/shop'>COLLECTION</a>
          </li>
          <li className='toggle_menu'>
            <a href='/shop'>JOURNAL</a>
          </li>
        </ul>):null}
        <nav class="menu" >
          <ul>
            <li>
              <a onClick={ToShop}>SHOP</a>
            </li>
            <li>
              <a href="/">COLLECTIONS</a>
            </li>
            <li>
              <a href="/">JOURNAL</a>
            </li>
            <div id="menu-wrap">
                <div className="shop">
                  <span className="bold" onClick={ToShop}>SHOP</span>
                </div>
                <div className="collection">
                  <span className="bold">COLLECTION</span>
                  <li>
                    <a>SPRING SUMMER 2023</a>
                  </li>
                  <li>
                    <a>WINTER 2022 CAPSULE</a>
                  </li>
                  <li>
                    <a>FALL WINTER 2022</a>
                  </li>
                  <li>
                    <a>SUMMER 2022 RESORT</a>
                  </li>
                  <li>
                    <a>WINTER 2021 CAPSULE</a>
                  </li>
                  <li>
                    <a>FALL WITER 2021</a>
                  </li>
                  <li>
                    <a>SUMMER 2021 RESORT</a>
                  </li>
                </div>
                <div className="journal">
                  <span className="bold">JOURNAL</span>
                  <li>
                    <a>NOTICE</a>
                  </li>
                  <li>
                    <a>QNA</a>
                  </li>
                  <li>
                    <a>REVIEW</a>
                  </li>
                  <li>
                    <a onClick={ToMap} style={{cursor:'pointer'}}>MAP</a>
                  </li>
                </div>

            </div>
          </ul>
        </nav>
      </div>

      <div id="header-center">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div id="header-right">
        <div id="header-util">
          <img src={search} alt="search-icon" onClick={()=>setShow(true)}/>
          <img src={login} alt="login-icon" />
          <img src={cart} alt="cart-icon" onClick={ToBasket}/>
          <a href='https://www.instagram.com/haus_kr/'><img src={insta} alt='insta-icon'/></a>
        </div>
      </div>
      <div id='main-wrapper'>
        {show ? <SearchBox setShow={setShow}/> : null}
      </div>
    </div>
  );
}

export default Header;
