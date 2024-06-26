import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import IconSun from './icons/IconSun';
import IconMoon from './icons/IconMoon';

const Layout = () => {
    const [dark, setDark] = useState(false);
    const [loaded, setLoaded] = useState(false)
    // <a href="https://www.freepik.com/free-photo/3d-network-particle-flow-background_8021362.htm#fromView=search&page=1&position=8&uuid=3d5b2be2-1056-406c-b487-93812cb7c32a">Image by kjpargeter on Freepik</a>

    useEffect(() => {
        if (!loaded) {
            if (localStorage.getItem("theme") === "1") {
                setDark(true)
            } else {
                setDark(false)
            }
            setLoaded(true)
        } else {
            if (dark) {
                localStorage.setItem("theme", "1")
            } else {
                localStorage.setItem("theme", "0")
            }
        }
    }, [dark, loaded])

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
            <div className={`relative h-screen w-full ${dark ? 'dark' : ''} bg-light-50 dark:bg-dark-50`}>
                <button className="absolute top-2 right-2 focus:outline-none" onClick={() => setDark(!dark)}>
                    <div className="flex h-7 border rounded-lg overflow-hidden">
                        <div className="bg-light-200 dark:bg-transparent">
                            <IconSun className="h-full py-1 px-1" />
                        </div>
                        <div className="border"></div>
                        <div className="bg-transparent dark:bg-dark-100">
                            <IconMoon className="h-full py-1 px-1 -rotate-45" />
                        </div>
                    </div>
                </button>
                {/* <div className="opacity-90 -z-50 absolute top-0 left-0 h-full w-full" style={{ backgroundImage: `url(${bg})` }}></div> */}
                <Outlet />
            </div>
        </>
    )
}

export default Layout;