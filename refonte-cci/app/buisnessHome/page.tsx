import Image from 'next/image';
import Header from '../component/buisnessHeader/header'
import VitrineBuisness from '../component/vitrineBuisness/vitrine';
import '../globals.css';

export default function BuisnessHome() {
    return (
    <div className='bg-gray-300 w-full pb-[3vw]'>
        <Header/>
        <VitrineBuisness/>
    </div>
  );
}