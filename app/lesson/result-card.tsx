import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
    value: number;
    variant: "points" | "hearts";
};

export const ResultCard = ({ value, variant }: Props) => {
    const imageSrc = variant === "hearts" ? "/heart.svg" : "/points.svg";

    return (
        <div className={cn(
            "rounded-2xl border-2 w-full",
            variant === "points" && "bg-[#E8BE55] border-[#E8BE55]",
            variant === "hearts" && "bg-[#E54848] border-[#E54848]",
        )}>
           <div className={cn(
            "p-1.5 text-white rounded-t-xl font-bold text-center uppercase text-xs",
            variant === "hearts" && "bg-[#E54848]",
            variant === "points" && "bg-[#E8BE55]"
           )}>
            {variant === "hearts" ? "Hearts Left" : "Total XP"}
           </div>
           <div className={cn(
            "rounded-2xl bg-white items-center flex justify-center p-6 font-bold text-lg",
            variant === "hearts" && "text-[#E54848]",
            variant === "points" && "text-[#E8BE55]"
           )}>
            <Image
            alt="Icon"
            src={imageSrc}
            height={30}
            width={30}
            className="mr-1.5"
            />
             {value}
           </div>
        </div>
    );
};