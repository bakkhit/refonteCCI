"use client";
import Image from 'next/image';
import { useEffect, useState } from "react";
import { supabase } from "../../../supabaseClient";

export default function Rendu() {
    const [matiere, setMatiere] = useState<any>(null);
    const [rendu, setRendu] = useState<any>(null);

    useEffect(() => {
        async function fetchRendu() {
            // 1. Récupère les matières du campus 2 (buisness)
            const { data: matieres } = await supabase
                .from("matieres")
                .select("*")
                .eq("id_campus", 2);

            if (!matieres || matieres.length === 0) return;

            // 2. Prend la première matière (ou adapte selon ton besoin)
            const matiereBuisness = matieres[0];
            setMatiere(matiereBuisness);

            // 3. Récupère le rendu le plus récent pour cette matière
            const { data: renduData } = await supabase
                .from("rendus")
                .select("*")
                .eq("id_matieres", matiereBuisness.id)
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