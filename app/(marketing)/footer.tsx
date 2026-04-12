import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <div className="max-w-screen-lg mx-auto flex items-center justify-center h-full gap-4">
                <Button size="lg" variant="ghost" className="w-1xl gap-4">
                    <Image 
                        src="/gb flag.svg" 
                        alt="english" 
                        height={32} 
                        width={40} 
                        className="mr-4 rounded-md"
                    />
                    English
                </Button>
                <Button size="lg" variant="ghost" className="w-1xl gap-4">
                    <Image 
                        src="/wh.svg" 
                        alt="sign" 
                        height={32} 
                        width={40} 
                        className="mr-4 rounded-md"
                    />
                    Sign Language
                </Button>
                <Button size="lg" variant="ghost" className="w-1xl gap-4">
                    <Image 
                        src="/br flag.svg" 
                        alt="sign" 
                        height={32} 
                        width={40} 
                        className="mr-4 rounded-md"
                    />
                    Brazil
                </Button>
                <Button size="lg" variant="ghost" className="w-1xl gap-4">
                    <Image 
                        src="/id flag.svg" 
                        alt="sign" 
                        height={32} 
                        width={40} 
                        className="mr-4 rounded-md"
                    />
                    Indonesia
                </Button>
            </div>
        </footer>
    );
};