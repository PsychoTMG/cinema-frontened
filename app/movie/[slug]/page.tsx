'use client'
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { Content } from "@/app/types/catalog";

const api = process.env.NEXT_PUBLIC_API_URL;

const MoviePage = () => {
    const { slug } = useParams<{ slug: string }>();
    const [movie, setMovie] = useState<Content | null>(null);
    const [watch, setWatch] = useState(false);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const res = await axios.get<Content>(`${api}/movie/${slug}`);
                setMovie(res.data);
            } catch (err) {
                console.error("Ошибка при загрузке фильма:", err);
            }
        };

        if (slug) fetchMovie();
    }, [slug]);

    if (!movie) return <div className="p-10 text-center text-white">Загрузка...</div>;

    return (
        <div>
            {watch && (
                <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
                    <button
                        onClick={() => setWatch(false)}
                        className="absolute top-6 right-6 z-[110] bg-white/10 hover:bg-white/30 text-white px-4 py-2 rounded-lg backdrop-blur-md transition-all"
                    >
                        ✕ Закрыть
                    </button>
                    <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${movie.youtubeId}?autoplay=1&controls=1&rel=0`}
                        title={movie.title}
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    />
                </div>
            )}

            <div className="relative h-65 w-full ">
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#00000056] to-transparent z-10 pointer-events-none" />

                <iframe
                    className="w-full h-full pointer-events-none"
                    src={`https://www.youtube.com/embed/${movie.youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${movie.youtubeId}`}
                    title={movie.title}
                    allow="autoplay; encrypted-media"
                />
            </div>
            <div className="pl-3 z-10">
                <h1 className="text-2xl font-bold uppercase mb-2">
                    {movie.title}
                </h1>
                <div className="flex gap-3 text-sm items-center mb-4">
                    <span className="bg-[#12b77c] px-2 rounded-[5px]">
                        {Number(movie.rating).toFixed(1)}
                    </span>
                    <span className="text-gray-400">{movie.year}</span>
                    <span className="text-gray-400">{movie.genre}</span>
                </div>

                <button
                    onClick={() => setWatch(true)}
                    className="bg-white text-black px-6 py-2 rounded-xl font-bold hover:bg-[#4bb12c] hover:text-white transition-all uppercase text-xs shadow-lg shadow-white/5"
                >
                    Смотреть со звуком
                </button>
            </div>

            {/* Описание */}
            <div className="px-3 py-10">
                <div className="border-b border-white/10 mb-4">
                    <h2 className="text-lg relative inline-block pb-4 after:content-[''] after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[2px] after:bg-[#5d0ef5]">
                        Описание
                    </h2>
                </div>
                <p className="text-gray-300 font-light">
                    {movie.description}
                </p>
            </div>
        </div>
    );
}

export default MoviePage;