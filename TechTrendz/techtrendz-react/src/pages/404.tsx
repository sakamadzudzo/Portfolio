import { useEffect } from "react";

export const NotFound = () => {
    useEffect(() => {
        document.title = 'TechBrandz - 404';
    }, []);

    return (
        <div className="wrapper">
            Route not found
        </div>
    )
}