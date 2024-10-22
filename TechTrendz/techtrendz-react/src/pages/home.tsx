import { useEffect } from "react";
import { NavLink, useOutletContext } from "react-router-dom";
import { OverlayContextType } from "../components/Layout";

const Home = () => {
    const { setLoading, setEmpty } = useOutletContext<OverlayContextType>();

    useEffect(() => {
        document.title = 'TechBrandz - Home';
    }, []);

    useEffect(() => {
        setLoading(false)
        setEmpty(false)
    }, [setEmpty, setLoading])

    return (
        <>
            <div className="wrapper flex-col gap-1">
                <div className="grid grid-cols-2 gap-1 h-2/3 w-full">
                    <div className="border rounded-md h-full flex flex-col items-center">
                        <div className="font-medium underline">Tech Stack</div>
                        <div className="flex gap-2 w-1/2">
                            <div className="font-normal w-1/2 flex justify-end">Frontend Development</div>
                            <div className="w-1/2">
                                <div>React + TS</div>
                                <div>Tailwind</div>
                            </div>
                        </div>
                        <div className="flex gap-2 w-1/2">
                            <div className="font-normal w-1/2 flex justify-end">Backend Development</div>
                            <div className="w-1/2">Spring Boot</div>
                        </div>
                        <div className="flex gap-2 w-1/2">
                            <div className="font-normal w-1/2 flex justify-end">Containerization</div>
                            <div className="w-1/2">Docker</div>
                        </div>
                        <div className="flex gap-2 w-1/2">
                            <div className="font-normal w-1/2 flex justify-end">Backend Hosting</div>
                            <div className="w-1/2">Back4app</div>
                        </div>
                        <div className="flex gap-2 w-1/2">
                            <div className="font-normal w-1/2 flex justify-end">Frontend Hosting</div>
                            <div className="w-1/2">Netlify</div>
                        </div>
                        <div className="flex gap-2 w-1/2">
                            <div className="font-normal w-1/2 flex justify-end">Misc</div>
                            <div className="w-1/2">cron-job.org</div>
                        </div>
                        {/* </div> */}
                    </div>
                    <div className="border rounded-md h-full flex flex-col items-center">
                        <div className="font-medium underline">ToDo</div>
                        <ul className="flex-col items-center list-item list-disc">
                            <li>Home/Landing page (with multiple components)<br />
                                1. new, hot (frequented), pick of the day
                            </li>
                            <li>Profile page</li>
                            <li>Mobile apps</li>
                            <li>Profile icon with circular pic</li>
                        </ul>
                    </div>
                </div>
                <div className="h-1/3 w-full border rounded-md list-item list-disc list-inside px-5 pt-2">
                    <NavLink to={`about`} about="About page">About</NavLink>
                </div>
            </div>
        </>
    )
}

export default Home;