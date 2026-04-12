import { cn } from "@/lib/utils";
import { challenges } from "@/db/schema";
import Image from "next/image";
import { useCallback } from "react";
import { useAudio, useKey } from "react-use";

type Props = {
    id: number;
    imageSrc: string | null;
    audioSrc: string | null;
    text: string;
    shortcut: string;
    selected?: boolean;
    onClick: () => void;
    disabled?: boolean;
    status?: "correct" | "wrong" | "none";
    type: typeof challenges.$inferSelect["type"];
}

export const Card =({
    id,
    imageSrc,
    audioSrc,
    text,
    shortcut,
    selected,
    onClick,
    status,
    disabled,
    type,
}: Props) => {
    const [audio, _, controls ] = useAudio({ src: audioSrc || "" });

    const handleClick = useCallback (() => {
        if (disabled) return;

        controls.play();
        onClick();
    }, [disabled, onClick, controls]);

    useKey(shortcut, handleClick, {}, [handleClick]);

    return (
        <div
        onClick={handleClick}
        className={cn(
            "h-full border-2 rounded-xl border-b-4 hover:bg-black/5 p-4 lg:p-6 cursor-pointer active:border-b-2",
            selected && "border-[#6E8FA6] bg-[#E4EEF4] hover:bg-[#D6E6EF]",
            selected && status === "correct" 
                && "border-[#789E88] bg-[#E6EFEA] hover:bg-[#DDEAE4]",
            selected && status === "wrong" 
                && "border-[#E54848] bg-[#F6E4E4] hover:bg-[#F0D6D6]",
            disabled && "pointer-events-none hover:bg-white",
            type === "ASSIST" && "lg:p-3 w-full"
        )}
        >
            {audio}
            {imageSrc && (
                <div
                className="relative aspect-square mb-4 max-h-[80px] lg:max-h-[150px] w-full"
                >
                    <Image src={imageSrc} fill alt={text} />
                </div>
            )}
            <div className={cn(
                "flex items-center justify-between",
                type === "ASSIST" && "flex-row-reverse",
            )}>
                {type === "ASSIST" && <div />}
                <p className={cn(
                    "text-neutral-600 text-sm lg:text-base",
                    selected && "text-[#6E8FA6]",
                    selected && status === "correct" 
                    && "text-[#789E88]",
                    selected && status === "wrong" 
                    && "text-[#E54848]",
                )}>
                    {text}
                </p>
                <div className={cn(
                    "lg:w-[30px] lg:h-[30px] w-[20px] h-[20px] border-2 flex items-center justify-center rounded-lg text-neutral-400 lg:text-[15px] text-xs font font-semibold",
                    selected && "border-[#6E8FA6] text-neutral-600",
                    selected && status === "correct" 
                    && "border-[#789E88] text-neutral-600",
                    selected && status === "wrong" 
                    && "border-[#E54848] text-neutral-600",
                )}>
                    {shortcut}
                </div>
            </div>
        </div>
    );
};