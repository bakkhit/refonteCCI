"use client";
import { useEffect, useState } from "react";
import LogoAnimation from "./component/firstLogoAnimation/logoAnimation";
import Accueil from "./page/Accueil";

export default function Home() {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLogo(false), 3000); // 3 secondes
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      {showLogo ? <LogoAnimation /> : <Accueil />}
    </div>
  );
}
