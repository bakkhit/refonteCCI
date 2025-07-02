import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <div className='mb-[5vw]'>
            <div className='w-full h-[5vw] bg-white shadow-2xl z-10 relative flex items-center'>
                <Image
                    src="/logoCCI/buisnessLogo.jpg"
                    alt="Logo CCI"
                    width={1000}
                    height={1000}
                    className='w-[4.5vw] h-[4.5vw] ml-[8vw] bottom-0 absolute'
                />
                <div className='flex gap-[8vw] ml-auto mr-[4vw] items-center'>
                    <Link href="/plannings" className="text-black font-medium text-2xl transition-transform duration-300 hover:scale-120">PLANNINGS</Link>
                    <Link href="/notes" className="text-black font-medium text-2xl transition-transform duration-300 hover:scale-120">NOTES</Link>
                    <Link href="/communications" className="text-black font-medium text-2xl transition-transform duration-300 hover:scale-120">COMMUNICATIONS</Link>
                    <Link href="/apprentissage" className="text-black font-medium text-2xl transition-transform duration-300 hover:scale-120">APPRENTISSAGE</Link>
                    <Link href="/profile" className="text-black font-medium text-2xl transition-transform duration-300 hover:scale-120">
                        <Image src="/image/profileIcon.jpg"
                            alt="Logo CCI"
                            width={1000}
                            height={1000}
                            className='w-[3vw] h-[3vw]' />
                    </Link>
                </div>
            </div>
            <div className='w-[20vw] h-[5vw] bg-white rounded-b-2xl shadow-2xl absolute z-20'>
                <p className='text-black text-center font-serif-sans font-md text-3xl translate-y-1/2'>Campus Business</p>
            </div>
        </div>
    );
}