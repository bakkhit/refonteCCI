"use client";
import { useEffect, useState } from "react";
import LogoAnimation from "./component/firstLogoAnimation/logoAnimation";
import Accueil from "./acceuil/page";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const [showLogo, setShowLogo] = useState(true);
  const router = useRouter();
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowLogo(false), 3000); // 3 secondes
    return () => clearTimeout(timer);
  }, []);

  const handleRedirect = (path: string) => {
    setFade(true);
    setTimeout(() => {
      router.push(path);
    }, 400);
  };

  return (
    <div className="relative w-screen h-screen">
      <div
        className={`flex w-screen h-screen overflow-hidden relative transition-opacity duration-400 ${
          fade ? "opacity-0" : "opacity-100"
        }`}
      >
        <Image
          src="/logoCCI/campus.jpg"
          alt="Logo CCI"
          width={5000}
          height={1000}
          className="w-screen h-screen object-cover absolute"
        />
        <p
          className="absolute top-1/2 left-[20vw] transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold cursor-pointer transition-transform duration-300 hover:scale-120"
          onClick={() => handleRedirect("/digitalHome")}
        >
          Campus Digital
        </p>
        <p
          className="absolute top-1/2 right-[20vw] transform translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold cursor-pointer transition-transform duration-300 hover:scale-120"
          onClick={() => handleRedirect("/buisnessHome")}
        >
          Campus Buisness
        </p>
      </div>
      {showLogo && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <LogoAnimation />
        </div>
      )}
    </div>
  );
}
