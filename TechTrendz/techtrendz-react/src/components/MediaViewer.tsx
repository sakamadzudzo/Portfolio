import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'
import cat from './../assets/img/cat1.webp'
import wave from './../assets/img/3d-network-particle-flow-background.jpg'
import { IconLesserBg } from './icons/IconLesserBg';
import { IconLesser } from './icons/IconLesser';
import { IconGreater } from './icons/IconGreater';

interface MediaFile {
    url: string;
    type: 'image' | 'video';
}

export const MediaDisplay = ({
    className
}: {
    className?: string
}) => {
    const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

    // Function to fetch media files from the backend
    const fetchMediaFiles = async () => {
        // Example API call
        // const response = await fetch('/api/media');
        // const data = await response.json();

        // Assuming the backend sends an array of media files with `url` and `type`
        setMediaFiles([{ url: cat, type: "image" }, { url: wave, type: "image" }]);
    };

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    useEffect(() => {
        fetchMediaFiles();
    }, []);

    return (
        <div className={`${className} overflow-hidden relative`} ref={emblaRef}>
            <div className="flex w-full h-full">
                {mediaFiles.map((file, index) => (
                    <div key={index} className="flex-none w-full h-full">
                        {file.type === 'image' ? (
                            <img
                                src={file.url}
                                alt={`media-${index}`}
                                className="w-full h-full object-fill"
                            />
                        ) : (
                            <video controls className="w-full h-full object-contain">
                                <source src={file.url} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}
                    </div>
                ))}
            </div>
            <button onClick={scrollPrev} className="absolute top-[45%] left-0 h-8 aspect-square neg-icon"><IconLesser /></button>
            <button onClick={scrollNext} className="absolute top-[45%] left-0 h-8 aspect-square neg-icon"><IconGreater /></button>
        </div>
    );
};