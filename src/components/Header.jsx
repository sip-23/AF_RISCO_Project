import React from 'react';

const Header = ({ heading = "Heading" }) => {
    return (
        <header className="fixed top-0 left-0 right-0 bg-white w-full h-fit px-6 py-4 flex items-center justify-between z-50 border-b-2 border-primary">
            <div className="flex flex-1 items-center justify-between">
                <img 
                    className="w-[200px] h-fit" 
                    src="https://www.corporateimage.co.za/wp-content/uploads/2022/04/Alexforbes-new-logo.png" 
                    alt="Alexforbes-new-logo" 
                />
                <h1 className="max-w-[47%] text-black text-4xl font-bold text-center trancate">{heading}</h1>
                <div className="flex flex-col gap-2 w-[250px]">
                    <button className="bg-[#124E57] text-white p-1 text-sm hover:opacity-90 transition-opacity">
                        Group Governance
                    </button>
                    <button className="bg-[#15808D] text-white p-1 text-sm hover:opacity-90 transition-opacity">
                        Risk Analytics and Advisory
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;