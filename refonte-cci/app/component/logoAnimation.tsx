import Image from "next/image";
import "./logoAnimation.css";

export default function LogoAnimation() {
  return (
    <div className="w-[30vw] h-[30vw] items-top justify-center flex">
      <Image src="/logoCCI/static.png" alt="Logo CCI" width={1000} height={1000} className="static w-[30vw] absolute"/>
      <Image src="/logoCCI/1.png" alt="Logo CCI" width={1000} height={1000} className="img1 w-[7.20vw] mr-[22.8vw] mt-[8.35vw] absolute"/>
      <Image src="/logoCCI/2.png" alt="Logo CCI" width={1000} height={1000} className="img2 w-[13.45vw] mr-[15.9vw] mt-[0.08vw] absolute"/>
      <Image src="/logoCCI/3.png" alt="Logo CCI" width={1000} height={1000} className="img3 w-[6.8vw] mt-[11.6vw] absolute"/>
      <Image src="/logoCCI/4.png" alt="Logo CCI" width={1000} height={1000} className="img4 w-[5.68vw] mr-[10.52vw] mt-[14.99vw] absolute"/>
      <Image src="/logoCCI/5.png" alt="Logo CCI" width={1000} height={1000} className="img5 w-[11.4vw] mr-[0.08vw] mt-[17.25vw] absolute"/>
      <Image src="/logoCCI/6.png" alt="Logo CCI" width={1000} height={1000} className="img6 w-[21.7vw] mr-[0.08vw] mt-[22vw] absolute"/>
    </div>
  )
}