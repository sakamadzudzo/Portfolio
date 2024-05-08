// import useFetch from "http-react";
// import fetcher from "../components/utils/fetcher";
import sebas from "./../assets/img/Sebas_001.webp";
import cat1 from "./../assets/img/cat1.webp"
import { toast } from "react-toastify"

const Examples = () => {
    // const { data, loading, error, responseTime } = useFetch('http://localhost:3006/getuserall', {
    //     // refresh: '30 sec',
    //     fetcher
    // });

    // if (loading) return <p>Loading</p>

    // if (error) return <p>An error ocurred</p>

    // if (error) console.log(error)

    // toast.success("Testing toastify")

    return (
        <div className="wrapper">
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
                <div className="h-96 w-[19.2rem] rounded-2xl text-white dark:text-black text-sm font-medium shadow-sm overflow-hidden" style={{ backgroundImage: `url(${cat1})` }}>
                    <div className="h-full bg-gradient-to-t from-picton-950 relative">
                        <div className="text-4xl px-5 absolute bottom-5">
                            <div className="text-picton-50">Create</div>
                            <div className="text-picton-200">color scales</div>
                            <div className="text-picton-50">in seconds</div>
                        </div>
                    </div>
                </div>
                <div className="h-96 w-[19.2rem] rounded-2xl text-white dark:text-black text-sm font-medium shadow-sm overflow-hidden" style={{ backgroundImage: `url(${cat1})` }}>
                    <div className="h-full w-full relative">
                        <div className="text-4xl absolute bottom-2 left-2 w-[95%] px-4 py-3 bg-picton-900/90 rounded-2xl">
                            <div className="text-picton-50">Create</div>
                            <div className="text-picton-200">color scales</div>
                            <div className="text-picton-50">in seconds</div>
                        </div>
                    </div>
                </div>
                <div className="border border-picton-950/20 h-96 w-[19.2rem] rounded-2xl p-3 text-white dark:text-black text-sm font-medium shadow-sm">
                    <div className="text-black/70 font-bold">Buttons - Flat</div><br />
                    <div className="space-y-2">
                        <button className="h-10 w-[17rem] flex justify-center items-center text-lg rounded-lg bg-picton-500 hover:bg-picton-600 active:bg-picton-700 disabled:bg-picton-100 disabled:text-picton-400 cursor-pointer disabled:cursor-not-allowed">Default</button>
                        <button disabled className="h-10 w-[17rem] flex justify-center items-center text-lg rounded-lg bg-picton-500 hover:bg-picton-600 active:bg-picton-700 disabled:bg-picton-100 disabled:text-picton-400 cursor-pointer disabled:cursor-not-allowed">Disabled</button>
                        <button className="h-10 w-[17rem] flex justify-center items-center text-lg rounded-lg border border-picton-500 text-picton-500 hover:border-picton-600 hover:text-picton-600 active:border-picton-700 active:text-picton-700 disabled:border-picton-100 disabled:text-picton-100 cursor-pointer disabled:cursor-not-allowed">Default</button>
                        <button disabled className="h-10 w-[17rem] flex justify-center items-center text-lg rounded-lg border border-picton-500 text-picton-500 hover:border-picton-600 hover:text-picton-600 active:border-picton-700 active:text-picton-700 disabled:border-picton-100 disabled:text-picton-100 cursor-pointer disabled:cursor-not-allowed">Disabled</button>
                    </div>
                </div>
                <div className="border h-96 w-[19.2rem] rounded-2xl p-3 text-sm font-medium shadow-sm">
                    <div className="font-bold">Buttons - Themed</div><br />
                    <div className="space-y-2">
                        <button className="h-10 w-[17rem] flex justify-center items-center text-lg rounded-lg cursor-pointer disabled:cursor-not-allowed bg-light-950 disabled:bg-light-200 hover:bg-light-900 active:bg-light-800 text-light-50 disabled:text-light-950 dark:bg-dark-950 dark:disabled:bg-dark-200 dark:hover:bg-dark-900 dark:active:bg-dark-800 dark:text-dark-50 dark:disabled:text-dark-950">Default</button>
                        <button disabled className="h-10 w-[17rem] flex justify-center items-center text-lg rounded-lg cursor-pointer disabled:cursor-not-allowed bg-light-950 disabled:bg-light-200 hover:bg-light-900 active:bg-light-800 text-light-50 disabled:text-light-950 dark:bg-dark-950 dark:disabled:bg-dark-200 dark:hover:bg-dark-900 dark:active:bg-dark-800 dark:text-dark-50 dark:disabled:text-dark-950">Disabled</button>
                        <button className="h-10 w-[17rem] flex justify-center items-center text-lg rounded-lg cursor-pointer disabled:cursor-not-allowed border text-light-950 border-light-950 disabled:border-light-200 disabled:text-light-200 hover:border-light-900 hover:text-light-900 active:border-light-700 active:text-light-700 dark:text-dark-950 dark:border-dark-950 dark:disabled:border-dark-200 dark:disabled:text-dark-200 dark:hover:border-dark-800 dark:hover:text-dark-800 dark:active:border-dark-700 dark:active:text-dark-700">Default</button>
                        <button disabled className="h-10 w-[17rem] flex justify-center items-center text-lg rounded-lg cursor-pointer disabled:cursor-not-allowed border text-light-950 border-light-950 disabled:border-light-200 disabled:text-light-200 hover:border-light-900 hover:text-light-900 active:border-light-700 active:text-light-700 dark:text-dark-950 dark:border-dark-950 dark:disabled:border-dark-200 dark:disabled:text-dark-200 dark:hover:border-dark-800 dark:hover:text-dark-800 dark:active:border-dark-700 dark:active:text-dark-700">Disabled</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Examples;