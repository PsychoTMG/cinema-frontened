
const BurgerIcon = ({ active }: { active: boolean }) => {
    return (
        <div className="relative w-5 h-5 flex items-center justify-center">
            <span className={`absolute h-0.5 w-5 bg-white transition-all duration-300 ${active ? 'rotate-45' : '-translate-y-2'}`} />
            <span className={`absolute h-0.5 w-5 bg-white transition-all duration-300 ${active ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`absolute h-0.5 w-5 bg-white transition-all duration-300 ${active ? '-rotate-45' : 'translate-y-2'}`} />
        </div>
    )
}

export default BurgerIcon