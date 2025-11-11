import React from 'react';

const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 right-0 w-full bg-white h-20 flex items-center border-t-2 border-primary p-4 z-50">
            <img 
                className="w-[220px] h-16 ml-auto" 
                src="../src/assets/Khusela_banner.png" 
                alt="Khusela-logo" 
            />
        </footer>
    );
};

export default Footer;