const Navbar = () => {
    return(
        <nav
            className="flex justify-center item-center p-3 bg-slate-800 gap-3"
        >
            <img className="w-8 h-8 " alt="globe" src="https://img.icons8.com/color/96/null/globe--v1.png"/>

            <span
                className="text-2xl text-white font-medium item-center "
            >
                my travel journal
            </span>
        </nav>
    )
}

export default Navbar