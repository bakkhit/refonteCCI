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
    <div className="relative w-screen h-screen">
      <Accueil />
      {showLogo && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <LogoAnimation />
        </div>
      )}
    </div>
  );
}
