import Header from './Components/Header';
import './App.css'
import { Outlet } from 'react-router-dom';
const Root = () => {
    return (
        <div className='mx-5 lg:mx-24'>
            <Header></Header>
            <Outlet />
        </div>
    );
};

export default Root;<Header></Header>