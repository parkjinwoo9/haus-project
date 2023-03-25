import '../../css/common/Home.css';
import Footer from './Footer';
import Contents1 from './Contents1';
import Contents2 from './Contents2';
import Contents3 from './Contents3';
import Slide from './Slide';
import MainVideo from './MainVideo';

function Home() {
    return (
        <div id='home'>
            <MainVideo />
            <Contents1 />
            <Slide />
            <Contents2 />
            <Contents3 />
            <Footer />
        </div>
    )
}

export default Home;