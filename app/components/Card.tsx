import Image from "next/image";

type CardProps = {
    id?: number
    title: string;
    imageUrl: string
};

const Card = ({ title, imageUrl }: CardProps) => {
    return (
        <div className="relative size-[180px] cursor-pointer overflow-hidden rounded-2xl transition-transform hover:scale-105 active:scale-95">
            <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover"
                sizes="180px"
            />
        </div>
    )
}

export default Card