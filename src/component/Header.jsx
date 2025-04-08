function Header() {
    return (
        <div className="flex justify-between px-5 items-center h-16 bg-[#1b3c62] text-white">
            <img src="./vite.svg" alt="user-1" className="h-10 w-10" />
            <div className="text-3xl">Assessments</div>
            <div className="flex gap-2 items-center">
                <img
                    src="./user.jpg"
                    alt="user-1"
                    className="h-10 w-10 rounded-full"
                />
                <div className="flex flex-col">
                    <span>Tushar M.</span>
                    <span className="text-gray-400 text-sm">
                        Project Manager
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Header;
