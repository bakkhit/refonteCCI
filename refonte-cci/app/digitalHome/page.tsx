import Image from 'next/image';
import Header from '../component/digitalHeader/header';
import VitrineDigital from '../component/vitrineDigital/vitrine';
import '../globals.css';

export default function DigitalHome() {
    return (
    <div className='bg-gray-300 w-full pb-[3vw]'>
        <Header/>
        <VitrineDigital />
    </div>
  );
}