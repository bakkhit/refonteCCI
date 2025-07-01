import Image from "next/image";

export default function EtudiantBuisness() {
    return (
        <div className="w-[97vw] h-[30vw] m-[1vw] bg-[#9499EF] rounded-xl overflow-hidden">
            <Image src={"/image/etudiantBuisness.jpg"} width={1000} height={1000} alt="William John le Goat" className="rounded-r-full -translate-x-[0.3vw] h-full w-auto"/>
        </div>
    );
}