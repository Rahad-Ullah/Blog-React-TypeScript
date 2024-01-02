
const Navbar = () => {
    return (
        <div className="py-6 shadow-lg sticky top-0 z-50 bg-white">
            <div className="flex justify-between items-center gap-6 w-4/5 mx-auto">
                <div>
                    <h1 className="text-3xl font-bold text-purple-600">{'<Dev News/>'}</h1>
                </div>
                <div>
                    <ul className="flex gap-6 items-center">
                        <li><a className="font-medium hover:text-purple-600" href="#">Home</a></li>
                        <li><a className="font-medium hover:text-purple-600" href="#">Latest</a></li>
                        <li><a className="font-medium hover:text-purple-600" href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;