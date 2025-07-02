"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Accueil() {
  const router = useRouter();
  const [fade, setFade] = useState(false);

  const handleRedirect = (path: string) => {
    setFade(true);
    setTimeout(() => {
      router.push(path);
    }, 400);
  };

  return (
    <div>
      <div
        className={`flex w-screen h-screen overflow-hidden relative transition-opacity duration-400 ${
          fade ? "opacity-0" : "opacity-100"
        }`}
      >
        <Image
          src="/logoCCI/campus.jpg"
          alt="Logo CCI"
          width={1000}
          height={1000}
          className="w-screen h-screen object-cover absolute"
        />
        <p
          className="absolute top-1/2 left-[20vw] transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold cursor-pointer transition-transform duration-300 hover:scale-120"
          onClick={() => handleRedirect("/loginDigital?campus=digital")}
        >
          Campus Digital
        </p>
        <p
          className="absolute top-1/2 right-[20vw] transform translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold cursor-pointer transition-transform duration-300 hover:scale-120"
          onClick={() => handleRedirect("/loginDigital?campus=business")}
        >
          Campus Business
        </p>
      </div>
    </div>
  );
}