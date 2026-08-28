const Header = () => {
    return(
        <header>
            <div className="flex items-center justify-center border-b p-3 gap-3 sm:gap-6">         
                <img 
                    src="/logo.png" 
                    alt="header"
                    className="h-30 w-auto rounded-full sm:h-24 sm:w-24"
                /> 
                <h1 className="text-xl sm:text-3xl">What kind of passenger are you?</h1>
            </div>
        </header>
    )
}

export default Header