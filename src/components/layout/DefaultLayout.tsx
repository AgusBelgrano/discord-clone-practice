import './styles.css';
import { Outlet } from 'react-router-dom'
import { TitleBar } from '../custom/TitleBar/TitleBar'

const DefaultLayout = () => {
    return (
        <div className='w-100 h-100 overflow-y-auto'>
                <TitleBar />
            <div className="default-layout-container pt-4">
                <Outlet />
            </div>
        </div>
    )
}

export default DefaultLayout