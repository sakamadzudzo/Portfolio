import { useEffect } from "react";

export const NotFound = () => {
    useEffect(() => {
        document.title = 'TechBrandz - 404';
    }, []);

    return (
        <div className="w-full h-full flex justify-center items-center">
            Route not found
        </div>
    )
}