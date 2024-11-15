import React, { useState, useEffect } from "react";

const AnchorNavbar = (props) => {
    const { href, className, svg, text } = props;
    const [svgSize, setSvgSize] = useState(16); // Ukuran default

    useEffect(() => {
        const updateSvgSize = () => {
            setSvgSize(window.innerWidth >= 1280 ? 20 : 16); // Set ukuran SVG berdasarkan lebar layar
        };

        updateSvgSize(); // Set ukuran saat komponen pertama kali dimuat
        window.addEventListener("resize", updateSvgSize); // Update ukuran ketika layar diubah

        // Bersihkan event listener saat komponen di-unmount
        return () => window.removeEventListener("resize", updateSvgSize);
    }, []);

    // Salin SVG dan tambahkan atribut width dan height
    const updatedSvg = React.cloneElement(svg, {
        width: svgSize,
        height: svgSize,
    });

    return (
        <a
            href={href}
            className={className}
        >
            {updatedSvg}
            <span>{text}</span>
        </a>
    );
};

export default AnchorNavbar;
