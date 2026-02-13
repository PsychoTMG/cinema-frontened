'use client'

import { useState } from "react";
import Button from "../components/Button";

interface Props {
    children: React.ReactNode;
}

export default function CatalogWrapper({ children }: Props) {
    const [activeButton, setActiveButton] = useState(false);
    const showCatalog = () => setActiveButton(true);

    return (
        <div className="flex flex-col items-center w-full">
            <div
                className={`grid grid-cols-2 gap-1.5 mt-7 overflow-hidden transition-all duration-700 ease-in-out
                ${activeButton ? 'max-h-[2000px]' : 'max-h-60'}`}
            >
                {children}
            </div>

            <Button showCatalog={showCatalog} activeButton={activeButton} />
        </div>
    );
}