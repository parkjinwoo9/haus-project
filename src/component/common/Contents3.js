import '../../css/common/Contents3.css';
import cont3Left from '../../images/cont3-1.png';
import cont3Right from '../../images/cont3-2.png';

function Contents3() {
    return (
        <div id='cont3'>
            <img src={cont3Left} alt='cont3-1' />
            <img className='cont3-2' src={cont3Right} alt='cont3-2' />
        </div>
    )
}

export default Contents3;