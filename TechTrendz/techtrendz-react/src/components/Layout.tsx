import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import bg from "../assets/img/3d-network-particle-flow-background.jpg"
import IconSun from './icons/IconSun';
import IconMoon from './icons/IconMoon';

const Layout = () => {
    const [dark, setDark] = useState(false);
    // <a href="https://www.freepik.com/free-photo/3d-network-particle-flow-background_8021362.htm#fromView=search&page=1&position=8&uuid=3d5b2be2-1056-406c-b487-93812cb7c32a">Image by kjpargeter on Freepik</a>

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnHover
                theme="light"
                pauseOnFocusLoss={false}
                draggable={false}
            />
            <div className={`relative h-screen w-full ${dark ? 'dark' : ''}`} style={{ backgroundImage: `url(${bg})` }}>
                <button className="absolute top-2 right-2 sun dark:moon focus:outline-none" onClick={() => setDark(!dark)}>
                    <div className="flex gap-1 h-7 border border-picton-500 px-1 rounded-lg">
                        <div className="shadow-inner dark:shadow-none">
                            <IconSun className="fill-picton-500 dark:fill-picton-800 h-full py-1" />
                        </div>
                        <div className="border border-picton-500"></div>
                        <div className="shadow-none dark:shadow-inner">
                            <IconMoon className="fill-picton-700 dark:fill-picton-400 h-full py-1 -rotate-45" />
                        </div>
                    </div>
                </button>
                <Outlet />
            </div>
        </>
    )
}

export default Layout;