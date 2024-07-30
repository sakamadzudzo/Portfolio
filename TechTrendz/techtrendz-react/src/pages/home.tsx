import { useEffect } from "react";

const Home = () => {

    useEffect(() => {
        document.title = 'TechBrandz - Home';
    }, []);

    return (
        <>
            <div className="wrapper">Home is here!</div>
        </>
    )
}

export default Home;