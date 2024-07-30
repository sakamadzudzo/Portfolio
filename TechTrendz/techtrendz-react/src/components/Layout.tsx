import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Slide, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Header } from './Header';

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
            {/* <ToastContainer
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
            /> */}
            <div className={`relative h-dvh w-full overflow-hidden ${dark ? 'dark' : ''} bg-light-50 dark:bg-dark-50`}>
                <Header dark={dark} setDark={setDark} key={`header`} />
                <Outlet />
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick={true}
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable
                    pauseOnHover={false}
                    theme={dark ? "dark" : "light"}
                    transition={Slide}
                />
            </div>
        </>
    )
}

export default Layout;