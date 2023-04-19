import './Sidebar.css'
import serverImage from './../../../assets/images/serverImage.png'
import { FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';
import MicrophoneMuted from '../../../assets/icons/MicrophoneMuted';
import Microphone from '../../../assets/icons/Microphone';
import Headphone from '../../../assets/icons/Headphone';
import HeadphoneSlash from '../../../assets/icons/HeadphoneSlash';
import Settings from '../../../assets/icons/Settings';
import { useAppSelector } from '../../../app/hooks';
import { useNavigate } from 'react-router';

const Sidebar = () => {

    const [isMuted, setIsMuted] = useState<boolean>(false);
    const [isDeafen, setIsDeafen] = useState<boolean>(false);
    const user = useAppSelector((state) => state.auth.user);
    const navigate = useNavigate();

    return (
        <div className="sidebar-container text-light">
            <div className="topbar">
                <h5>Server name</h5>
                <FaChevronDown />
            </div>
            <div className="content">

            </div>
            <section className="sidebar-footer">
                <div className="voice-panel">

                </div>
                <div className="user-minimal-info">
                    <div className="avatar-wrapper">
                        <div className="user-image">
                            <img src={serverImage} alt="" />
                        </div>
                        <div className="nameTag">
                            <span className='name'>{user?.username}</span>
                            <span className='tag'>User tag</span>
                        </div>
                    </div>
                    <div className="actions">
                        <button className='button' onClick={() => setIsMuted(!isMuted)}>{!isMuted ? <Microphone /> : <MicrophoneMuted />}</button>
                        <button className='button' onClick={() => setIsDeafen(!isDeafen)}>{!isDeafen ? <Headphone /> : <HeadphoneSlash />}</button>
                        <button className='button' onClick={() => navigate('/config')}><Settings /></button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Sidebar