import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'
import { IconLesser } from './icons/IconLesser';
import { IconGreater } from './icons/IconGreater';
import { MyFile } from '../types/types';

export const MediaDisplay = ({
    className,
    files
}: {
    className?: string,
    files: MyFile[]
}) => {
    const [mediaFiles, setMediaFiles] = useState<MyFile[]>([]);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    useEffect(() => {
        setMediaFiles(files)
    }, [files]);
    return (
        <div className={`${className} overflow-hidden relative`} ref={emblaRef} >
            <div className="flex w-full h-full">
                {mediaFiles.map((file, index) => (
                    <div key={index} className="flex-none w-full h-full">
                        {file.type.includes('image') ? (
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
            <button onClick={scrollNext} className="absolute top-[45%] right-0 h-8 aspect-square neg-icon"><IconGreater /></button>
        </div >
    );
};