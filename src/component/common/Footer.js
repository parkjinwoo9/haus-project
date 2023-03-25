import "../../css/common/Footer.css";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div id="footer">
      <div id='represent'>
        HAUS. 583, Yangcheon-ro, Gangseo-gu, Seoul, Republic of Korea<br />
        COMMUNICATION SALES BUSINESS REPORT 2023 - SEOUL GANGSEO - 1603<br />
        +82, 010) .9917. 1880. HAUS@STCO.CO.KR<br />
        MON - FRI   PM 14:00 - 18:00.  SAT. SUN. RED - DAY OFF<br />
        COPYRIGHT ⓒ HAUS
      </div>
      <div id='terms-of-use'>
        <Link to='/privacy'><a>TERMS OF USE</a></Link>
      </div>
    </div>
  );
}

export default Footer;
