
type ElemProps = {
    showCatalog: (value: boolean) => void;
    activeButton: boolean;
}

const Button = ({ showCatalog, activeButton }: ElemProps) => {
    return (
        <div onClick={() => showCatalog(true)}
            className={`flex items-center justify-center w-41 h-12 absolute  bottom-1 bg-gray-400 rounded-xl
         ${activeButton ? "hidden" : ''}`}>
            Показать больше
        </div>
    )
}

export default Button