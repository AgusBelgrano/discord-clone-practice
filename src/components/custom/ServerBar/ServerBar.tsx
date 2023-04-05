import './ServerBar.css';
import serverImage from './../../../assets/images/serverImage.png';

const ServerBar = () => {
    return (
        <div className='serverbar'>
            <div className="server-list">
                <div className="server">
                    <div className="server-image">
                        <img src={serverImage} />
                    </div>
                    <span>Direct Messages</span>
                </div>
                <hr />
                <div className="server first-server">
                    <div className="server-image">
                        <img src={serverImage} />
                    </div>
                    <span>Server Name</span>
                </div>
                <div className="server">
                    <div className="server-image">
                        <img src={serverImage} />
                    </div>
                    <span>Server Name</span>
                </div>
                <div className="server">
                    <div className="server-image">
                        <img src={serverImage} />
                    </div>
                    <span>Server Name</span>
                </div>
                <div className="server">
                    <div className="server-image">
                        <img src={serverImage} />
                    </div>
                    <span>Server Name</span>
                </div>
            </div>
        </div>
    )
}

export default ServerBar