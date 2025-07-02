"use client";
import { useEffect, useState } from "react";
import { supabase } from "../../../../lib/supabaseClient";

export default function Rendu() {
  const [matiere, setMatiere] = useState<any>(null);
  const [rendu, setRendu] = useState<any>(null);

  useEffect(() => {
    async function fetchRendu() {
      const { data: matieres } = await supabase
        .from("matieres")
        .select("*")
        .eq("id_campus", 1);

      if (!matieres || matieres.length === 0) return;

      const matiereDigitale = matieres[0];
      setMatiere(matiereDigitale);

      const { data: renduData } = await supabase
        .from("rendus")
        .select("*")
        .eq("id_matieres", matiereDigitale.id)
        .order("Date", { ascending: false })
        .limit(1)
        .single();

      setRendu(renduData);
    }
    fetchRendu();
  }, []);

  return (
    <div>
      <div className='relative w-[23vw] h-[16vw] bg-[url(/image/rendu.svg)] bg-cover'>
        <div className='absolute bottom-[1vw] left-[1.5vw] w-fit h-fit italic'>
          {matiere && <div className='font-semibold'>Prochain rendu : {matiere.Matieres}</div>}
          {rendu && <div className='text-gray-500'>{rendu.Date}</div>}
        </div>
      </div>
    </div>
  );
}