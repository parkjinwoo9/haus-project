import '../../css/common/MainVideo.css';
import Video from '../../video/haus-video.mp4';

function MainVideo() {
    return (
        <div id='main-video'>
            <div id='video-wrapper'>
                <video muted autoPlay loop>
                    <source src={Video} type='video/mp4'></source>
                </video>
            </div>
        </div>
    )
}
export default MainVideo;