import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Slide, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Header } from './Header';
import { LoadingOverlay } from './LoadingOverlay';

type OverlayContextType = { setLoading: Function, setEmpty: Function }

const Layout = () => {
    const [dark, setDark] = useState(false)
    const [loaded, setLoaded] = useState(false)
    const [loading, setLoading] = useState(false)
    const [empty, setEmpty] = useState(false)

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
            <div className={`relative h-dvh w-full overflow-hidden ${dark ? 'dark' : ''} bg-light-50 dark:bg-dark-50`}>
                <Header dark={dark} setDark={setDark} key={`header`} />
                <LoadingOverlay className="" loading={loading} empty={empty}>
                    <Outlet context={{ setLoading, setEmpty } satisfies OverlayContextType} />
                </LoadingOverlay>
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
export type { OverlayContextType };