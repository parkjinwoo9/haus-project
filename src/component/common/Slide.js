import '../../css/common/Slide.css';
import slide1 from '../../images/slide1.png';
import slide2 from '../../images/slide2.png';
import slide3 from '../../images/slide3.png';
import slide4 from '../../images/slide4.png';
import slide5 from '../../images/slide5.png';
import slide6 from '../../images/slide6.png';

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



function Slide (){

    const settings = {
        arrows:false,
        dots:false,
        infinite:true,
        speed:500,
        slidesToShow:5,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:1000,
        pauseOnHover: false,
    }
    
    const slideList=[
        {id:1, img:slide1, contents:'FALL WINTER 2023 COLLECTION'},
        {id:2, img:slide2, contents:'FALL WINTER 2023 CAMPAIGN'},
        {id:3, img:slide3, contents:'HAUS MAGAZINE 2023'},
        {id:4, img:slide4, contents:'SPRING SUMMER 2024 COLLECTION'},
        {id:5, img:slide5, contents:'SPRING SUMMER 2024 CAMPAIGN'},
        {id:6, img:slide6, contents:'HAUS MAGAZINE 2024'},
    ]

    const result = slideList.map(
        (data)=>(<div id='slide-element'>
            <img src={data.img}/><br/>
            <p>{data.contents}</p>
        </div>)
    )

    return(
        <div id='slide'>
            <Slider {...settings}>
                {result}
            </Slider>
        </div>
    )
}

export default Slide;