const Header = () => {
    return(
        <header>
            <div className="flex items-center gap-4 sm:justify-around border-b border-amber-400 p-2">         
                <img 
                    src="/logo.png" 
                    alt="header"
                    className="h-15 w-auto rounded-full sm:h-24 sm:w-24"
                /> 
                <h2 className="text-xl sm:text-3xl">Passenger Testing</h2>
            </div>
        </header>
    )
}

export default Header