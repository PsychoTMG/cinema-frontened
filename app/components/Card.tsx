
type CardProps = {
    title: string;
};

const Card = ({ title }: CardProps) => {
    return (
        <div className="flex p-4 rounded-2xl w-45 h-45 bg-catalog cursor-pointer">
            {title}
        </div>
    )
}

export default Card