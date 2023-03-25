import '../../css/common/Contents2.css';
import cont2Left from '../../images/cont2-1.png';
import cont2Right from '../../images/cont2-2.png';

function Contents2() {
    return (
        <div id='cont2'>
            <img src={cont2Left} alt='cont2-img' />
            <img src={cont2Right} alt='cont2-img' />
        </div>
    )
}

export default Contents2