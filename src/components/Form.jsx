import { useState } from 'react';

export default function Form() {
    const [activeTab, setActiveTab] = useState('sale');

    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-full h-full flex flex-col">
            {/* Tabs */}
            <div className="flex justify-evenly space-x-8 mb-[10px]" role="tablist">
                <button
                    onClick={() => setActiveTab('sale')}
                    className={`pb-2 font-normal text-lg relative ${
                        activeTab === 'sale' 
                            ? 'text-[#3A0CA3]' 
                            : 'text-gray-600 hover:text-[#3A0CA3]'
                    }`}
                    role="tab"
                    aria-selected={activeTab === 'sale'}
                    aria-label="Rechercher des propriétés à vendre"
                >
                    For Sale
                    {activeTab === 'sale' && (
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#3A0CA3]"></div>
                    )}
                </button>
                <button
                    onClick={() => setActiveTab('rent')}
                    className={`pb-2 font-normal text-lg relative ${
                        activeTab === 'rent' 
                            ? 'text-[#3A0CA3]' 
                            : 'text-gray-600 hover:text-[#3A0CA3]'
                    }`}
                    role="tab"
                    aria-selected={activeTab === 'rent'}
                    aria-label="Rechercher des propriétés à louer"
                >
                    For Rent
                    {activeTab === 'rent' && (
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#3A0CA3]"></div>
                    )}
                </button>
            </div>
            <div className="h-[1px] bg-gray-200 mt-6 mb-6"></div>

            <form>
                <div className="mb-4">
                    <label className="block text-[#4B5563] text-sm font-normal mb-2" htmlFor="location">
                        Location
                    </label>
                    <input
                        type="text"
                        id="location"
                        placeholder="New York, San Francisco, etc."
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-normal"
                        aria-label="Entrez la ville ou la région où vous souhaitez trouver une propriété"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-[#4B5563] text-sm font-normal mb-2" htmlFor="property-type">
                        Property Type
                    </label>
                    <select
                        id="property-type"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-normal"
                        defaultValue=""
                        aria-label="Sélectionnez le type de propriété que vous recherchez"
                    >
                        <option value="" disabled>Select Property Type</option>
                        <option value="flat">Flat</option>
                        <option value="house">House</option>
                        <option value="domain">Domain</option>
                        <option value="castle">Castle</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-[#4B5563] text-sm font-normal mb-2" htmlFor="rooms">
                        Rooms
                    </label>
                    <select
                        id="rooms"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-normal"
                        defaultValue=""
                        aria-label="Sélectionnez le nombre de pièces souhaité"
                    >
                        <option value="" disabled>Select Rooms</option>
                        <option value="1">1 Room</option>
                        <option value="2">2 Rooms</option>
                        <option value="3">3 Rooms</option>
                        <option value="4">4 Rooms</option>
                        <option value="5">5 Rooms</option>
                        <option value="6">6+ Rooms</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="mt-6 bg-[#3A0CA3] hover:bg-[#3A0CA3]/90 text-white font-normal py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    aria-label="Lancer la recherche de propriétés"
                >
                    Search
                </button>
            </form>
        </div>
    )
}