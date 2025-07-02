"use client";
import Image from 'next/image';
import { useEffect, useState } from "react";
import { supabase } from "../../../supabaseClient";

export default function Actu() {
    const [actu, setActu] = useState<any>(null);

    useEffect(() => {
        async function fetchActu() {
            const { data } = await supabase
                .from("actualites")
                .select("Actualites, Localisation, Horraires")
                .eq("id_campus", 2)
                .limit(1)
                .single();

            setActu(data);
        }
        fetchActu();
    }, []);

    return (
        <div>
            <div className='w-[43vw] h-[16vw] bg-[url(/image/actu.svg)] bg-cover relative'>
                <div className='absolute w-fit h-fit bottom-[1vw] left-[1vw]'>
                    {actu && (
                        <div className='italic'>
                            <div className="font-semibold">{actu.Actualites}</div>
                            <div>
                                <span className="text-[0.9vw] text-gray-500">{actu.Localisation}</span>
                                {" · "}
                                <span className="text-[0.9vw] text-gray-500">{actu.Horraires}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}