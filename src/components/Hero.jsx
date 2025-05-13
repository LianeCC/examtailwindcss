import Form from './Form.jsx';

export default function HeroSection() {
    return (
        <div className="w-[1280px] h-[480px] mt-[64px] mb-[80px] mx-auto">
            <h1 className="text-2xl font-medium mb-4 tracking-[1.6px] text-[#4361EE] uppercase">REAL ESTATE</h1>

            <div className="container mx-auto flex flex-col md:flex-row items-stretch justify-between gap-20 h-full">
                
                {/* content */}
                <div className="w-1/2 flex flex-col justify-between">
                    <div>
                        <p className="font-bold text-4xl mb-8">Find a perfect home you love..!</p>
                        <p className="font-normal text-lg mb-12 text-[#6B7280]">Etiam eget elementum elit. Aenean dignissim dapibus vestibulum. Integer a dolor eu sapien sodales vulputate ac in purus.</p>
                    </div>
                    <div className="relative w-[528px] h-[301px]">
                        <img 
                            src="/image-accueil.png" 
                            alt="intérieur d'une chambre luxueuse"
                            className="relative z-[2] w-full h-[301px] object-cover rounded-[20px] block"
                            style={{
                                boxShadow: '0px 0px 10px 3px rgba(0, 0, 0, 0.25)'
                            }}
                        />  
                        <div
                            className="absolute -top-8 -right-6 w-[48px] h-[48px] rounded-full z-[1]"
                            style={{ background: "linear-gradient(225deg,rgba(36, 61, 173, 0.84) 0%, rgba(232, 232, 232, 0.9) 100%" }}
                        ></div>
                    </div>
                </div>
                
                {/* Form */}
                <div className="w-1/2 flex flex-col h-full">
                    <Form />
                </div>
            </div>
        </div>
    )
}