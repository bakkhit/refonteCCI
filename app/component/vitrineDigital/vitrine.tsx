import Image from 'next/image';
import EtudiantDigital from './etudiantDigital/etudiant';
import EmploiTache from './emploiTache/emploiTache';
import Rendu from './rendu/rendu';
import Actu from './actualité/actualité';

export default function VitrineDigital() {
  return (
    <div className='mt-[10vw]'>
      <div className='flex column'>
        <Image
          src={"/image/motifBackground.svg"}
          width={100}
          height={100}
          alt="motif"
          className="absolute -top-[13vw] right-0 w-[50vw] h-fit z-0"
        />
        <Image
          src={"/image/motifBackground.svg"}
          width={100}
          height={100}
          alt="motif"
          className="absolute top-[15vw] right-0 w-[50vw] h-fit z-0"
        />
        <Image
          src={"/image/motifBackground.svg"}
          width={100}
          height={100}
          alt="motif"
          className="absolute top-[38vw] right-0 w-[50vw] h-fit z-0"
        />
      </div>
      <div className='z-10 relative'>
        <EtudiantDigital />
        <div className='absolute top-[3vw] right-[3vw]'>
          <EmploiTache />
        </div>
        <div className='flex ml-[2vw]'>
          <Actu />
          <Rendu />
        </div>
      </div>
    </div>
  );
}