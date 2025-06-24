import Image from "next/image";
import "./logoAnimation.css";
import { useEffect, useState } from "react";

export default function LogoAnimation() {
  const [showText, setShowText] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const show = setTimeout(() => setShowText(true), 1000); // Texte apparaît à 1s
    const hide = setTimeout(() => setShowText(false), 2000); // Texte disparaît à 2s
    const fade = setTimeout(() => setFadeOut(true), 2000); // Fade out commence à 5s
    return () => {
      clearTimeout(show);
      clearTimeout(hide);
      clearTimeout(fade);
    };
  }, []);

  return (
    <div
      className={`bg-black w-screen h-screen flex items-center justify-center relative overflow-hidden flex-col transition-opacity duration-2000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="w-[30vw] h-[30vw] items-top justify-center flex relative">
        <Image
          src="/logoCCI/static.png"
          alt="Logo CCI"
          width={1000}
          height={1000}
          className="static w-[30vw] absolute"
        />
        <Image
          src="/logoCCI/1.png"
          alt="Logo CCI"
          width={1000}
          height={1000}
          className="img1 w-[7.20vw] mr-[22.8vw] mt-[8.35vw] absolute"
        />
        <Image
          src="/logoCCI/2.png"
          alt="Logo CCI"
          width={1000}
          height={1000}
          className="img2 w-[13.45vw] mr-[15.9vw] mt-[0.08vw] absolute"
        />
        <Image
          src="/logoCCI/3.png"
          alt="Logo CCI"
          width={1000}
          height={1000}
          className="img3 w-[6.8vw] mt-[11.6vw] absolute"
        />
        <Image
          src="/logoCCI/4.png"
          alt="Logo CCI"
          width={1000}
          height={1000}
          className="img4 w-[5.68vw] mr-[10.52vw] mt-[14.99vw] absolute"
        />
        <Image
          src="/logoCCI/5.png"
          alt="Logo CCI"
          width={1000}
          height={1000}
          className="img5 w-[11.4vw] mr-[0.08vw] mt-[17.25vw] absolute"
        />
        <Image
          src="/logoCCI/6.png"
          alt="Logo CCI"
          width={1000}
          height={1000}
          className="img6 w-[21.7vw] mr-[0.08vw] mt-[22vw] absolute"
        />
      </div>
      <p
        className={`mt-8 text-white text-5xl font-sans font-bold transition-opacity duration-500 ${
          showText ? "opacity-100" : "opacity-0"
        }`}
      >
        L’Ecole by cci Haute-Savoie
      </p>
    </div>
  );
}