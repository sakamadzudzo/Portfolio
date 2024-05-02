import useFetch from "http-react";
import fetcher from "../components/utils/fetcher";
import sebas from "./../assets/img/Sebas_001.webp";
import xbox from "./../assets/img/Xbox series X.jpg"
import cat1 from "./../assets/img/cat1.webp"

const Examples = () => {
    // const { data, loading, error, responseTime } = useFetch('http://localhost:3006/getuserall', {
    //     // refresh: '30 sec',
    //     fetcher
    // });

    // if (loading) return <p>Loading</p>

    // if (error) return <p>An error ocurred</p>

    // if (error) console.log(error)

    return (
        <div className="h-screen w-full flex justify-center items-center">
            <div className="h-full w-full grid grid-cols-2 p-3 gap-y-9">
                <div className="bg-gradient-to-br from-picton-500/95 to to-picton-800 border border-picton-600 h-96 w-[19.2rem] rounded-2xl p-3 text-white dark:text-black shadow-sm">
                    <div className="font-semibold">Customers</div><br /><br /><br /><br />
                    <div className="text-6xl">1.553</div><br />
                    <div className="font-medium">New customers in past 30 days</div>
                </div>
                <div className="border border-picton-950/20 h-96 w-[19.2rem] rounded-2xl p-3 text-white dark:text-black text-sm font-medium shadow-sm">
                    <div className="text-black/70 font-bold">Today</div><br />
                    <div className="space-y-2 overflow-y-scroll">
                        <div className="bg-picton-200 rounded-md flex border-l-8 border-picton-600 p-2">
                            <div className="space-y-1">
                                <div className="text-picton-950">Design system meeting</div>
                                <div className="text-picton-900 text-xs">9 - 10 AM</div><br />
                                <div className="flex flex-row -space-x-2">
                                    <div className="h-7 aspect-square bg-picton-600 rounded-full border-2 border-white overflow-hidden flex justify-center items-center">
                                        <img src={sebas} alt="sebas" className="h10 aspect-square" />
                                    </div>
                                    <div className="h-7 aspect-square bg-picton-600 rounded-full border-2 border-white overflow-hidden"></div>
                                    <div className="h-7 aspect-square bg-picton-600 rounded-full border-2 border-white overflow-hidden"></div>
                                    <div className="h-7 aspect-square bg-picton-600 rounded-full border-2 border-white flex justify-center items-center">+1</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-picton-200 rounded-md flex border-l-8 border-picton-600 p-2">
                            <div className="space-y-1">
                                <div className="text-picton-950">Lunch</div>
                                <div className="text-picton-900 text-xs">1 - 2 PM</div>
                            </div>
                        </div>
                        <div className="bg-picton-200 rounded-md flex border-l-8 border-picton-600 p-2">
                            <div className="space-y-1">
                                <div className="text-picton-950">Design review</div>
                                <div className="text-picton-900 text-xs">3 - 4 PM</div><br />
                                <div className="flex flex-row -space-x-2">
                                    <div className="h-7 aspect-square bg-picton-600 rounded-full border-2 border-white overflow-hidden">
                                        <img src={sebas} alt="sebas" />
                                    </div>
                                    <div className="h-7 aspect-square bg-picton-600 rounded-full border-2 border-white overflow-hidden"></div>
                                    <div className="h-7 aspect-square bg-picton-600 rounded-full border-2 border-white overflow-hidden"></div>
                                    <div className="h-7 aspect-square bg-picton-600 rounded-full border-2 border-white flex justify-center items-center">+1</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border border-picton-950/20 h-96 w-[19.2rem] rounded-2xl text-white dark:text-black text-sm font-medium shadow-sm bg-[url('./../img/cat1.webp')]">
                    <div className="h-full bg-gradient-to-t from-picton-600 relative">
                        <img src={cat1} alt="A portrait of a cat" className="object-fill opacity-30 absolute" />
                        <div className="text-lg z-10">
                            <div className="text-picton-50">Create</div>
                            <div>color scales</div>
                            <div className="text-picton-50">in seconds</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Examples;