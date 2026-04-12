"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export const Promo = () => {
    return (
        <div className="border-2 rounded-xl p-4 space-y-4">
            <div className="space-y-2">
                <div className="flex items-center gap-x-2">
                    <Image
                    src="/heart.svg"
                    alt="Heart"
                    height={26}
                    width={26}
                    />
                    <h3 className="font-bold text-lg">
                        run out heart? 
                    </h3>
                </div>
                <p className="text-muted-foreground">Get more on shop!</p>
            </div>
            
            <Button
            asChild
            variant="primary"
            className="w-full"
            size="lg"
            >
            <Link href="/shop">
             Go to shop
             </Link>
            </Button>
        </div>
    );
}