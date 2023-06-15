import './ServerBar.css';
import serverImage from './../../../assets/images/serverImage.png';
import { Server } from '../../../interfaces/guild.interface';
import Add from '../../../assets/icons/Add';
import { useState } from 'react';
import BsModal from '../../common/BsModal/BsModal';

const ServerBar = () => {

    const [showModal, setShowModal] = useState<boolean>(false);

    const servers: Server[] = [
        {
            name: "Server name",
            icon: serverImage
        },
        {
            name: "Server name",
            icon: serverImage
        },
        {
            name: "Server name",
            icon: serverImage
        },
        {
            name: "Server name",
            icon: serverImage
        },
    ];

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <div className='serverbar'>
            <div className="server-list">
                <div className="server">
                    <div className="server-image">
                        <img src={serverImage} />
                    </div>
                    <span className='serverName'>Direct Messages</span>
                </div>
                <hr />
                {servers.map(server => <div className='server'>
                    <div className='server-image'>
                        <img src={server.icon} />
                    </div>
                    <span className='serverName'>{server.name}</span>
                </div>)}
                <div className='server' onClick={() => openModal()}>
                    <div className='server-image addServer'>
                        <Add />
                    </div>
                    <span className='serverName'>Add a Server</span>
                </div>
            </div>
            <BsModal close={() => closeModal()} show={showModal} title='Add server' />
        </div>
    )
}

export default ServerBar