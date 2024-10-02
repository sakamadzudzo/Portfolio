import { useEffect } from "react";

const Home = () => {

    useEffect(() => {
        document.title = 'TechBrandz - Home';
    }, []);

    return (
        <>
            <div className="wrapper">
                <div className="grid grid-cols-2 gap-1 h-full w-full">
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
                            <li>Proper navigation</li>
                            <li>Product with pictures and videos</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;