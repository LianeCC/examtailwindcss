export default function Navbar() {
    return (
        <nav className="bg-white/50 backdrop-blur-lg">
            <div className="container mx-auto px-[50px] py-4 mt-2">
                <div className="flex justify-between items-center">
                    {/* Nav links */}
                    <ul className="flex space-x-8">
                        <li><a href="#home" className="text-gray-700 hover:text-[#3A0CA3]">Home</a></li>
                        <li><a href="#about" className="text-gray-700 hover:text-[#3A0CA3]">About</a></li>
                        <li><a href="#listings" className="text-gray-700 hover:text-[#3A0CA3]">Listings</a></li>
                        <li><a href="#services" className="text-gray-700 hover:text-[#3A0CA3]">Services</a></li>
                        <li><a href="#blogs" className="text-gray-700 hover:text-[#3A0CA3]">Blogs</a></li>
                    </ul>

                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="bg-[#3A0CA3] rounded-full p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                        </div>
                        <span className="text-2xl font-bold text-gray-800">Rezilla</span>
                    </div>

                    {/* Login/Register Add Listing */}
                    <div className="flex items-center space-x-10">
                        <a href="#login" className="text-gray-700 hover:text-[#3A0CA3]">Login/Register</a>
                        <button className="bg-[#3A0CA3] text-white px-7 py-3 rounded-[30px] hover:bg-[#3A0CA3]/90">
                            Add Listing
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}