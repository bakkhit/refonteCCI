import Image from "next/image";
import LogoAnimation from "./component/logoAnimation";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <LogoAnimation />
    </div>
  );
}
