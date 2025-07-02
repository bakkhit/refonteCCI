"use client";
import { useEffect, useState } from "react";
import { supabase } from "../../../supabaseClient";

export default function EmploiTache() {
    const [matiere, setMatiere] = useState<string>("");
    const [intervenant, setIntervenant] = useState<string>("");
    const [horaireDe, setHoraireDe] = useState<string>("");
    const [horaireA, setHoraireA] = useState<string>("");
    const [salle, setSalle] = useState<string>("");
    const [annotation, setAnnotation] = useState<string>("");

    useEffect(() => {
        async function fetchData() {
            // 1. Récupère le programme (horaires et id_salles)
            const { data: prog, error: progErr } = await supabase
                .from("programes")
                .select("*")
                .eq("id_matieres", 1)
                .single();
            if (!prog) return;

            setHoraireDe(prog.De);
            setHoraireA(prog.A);

            // 2. Récupère la matière
            const { data: mat, error: matErr } = await supabase
                .from("matieres")
                .select("Matieres")
                .eq("id", 1)
                .single();
            setMatiere(mat?.Matieres || "");

            // 3. Récupère l'intervenant
            const { data: intv, error: intvErr } = await supabase
                .from("intervenants")
                .select("Intervenants")
                .eq("id_matieres", 1)
                .single();
            setIntervenant(intv?.Intervenants || "");

            // 4. Récupère la salle
            const { data: salleData, error: salleErr } = await supabase
                .from("salles")
                .select("Salles")
                .eq("id", prog.id_salles)
                .single();
            setSalle(salleData?.Salles || "");

            // 5. Récupère l'annotation du campus 1
            const { data: annotationData, error: annotationErr } = await supabase
                .from("annotations") // adapte le nom de la table si besoin
                .select("Annotations")     // adapte le nom de la colonne si besoin
                .eq("id_campus", 1)
                .single();
            setAnnotation(annotationData?.Annotations || "");
        }
        fetchData();
    }, []);

    return (
        <div>
            <div className="w-[27.5vw] h-[44vw] bg-[url('/image/emploiTache.svg')] bg-cover"></div>
            <div className="absolute top-[6vw] left-[3vw] w-fit h-fit text-[1vw] flex items-center text-white font-lg justify-center text-center">
                3 <br /> mai
            </div>
            <div className="absolute top-[12.5vw] left-[2.5vw] w-fit h-fit text-[1vw] flex items-center text-white font-lg justify-center text-center">
                {horaireDe} <br /> - <br /> {horaireA}
            </div>
            <div className="absolute top-[4vw] left-[7vw] w-fit h-fit text-[1.25vw] flex items-center text-black font-bold justify-center text-center">
                {matiere}
            </div>
            <div className="absolute top-[6vw] left-[7vw] w-fit h-fit text-[1.25vw] flex items-center text-black font-bold justify-center text-center">
                Intervenant : {intervenant}
            </div>
            <div className="absolute top-[12.5vw] left-[7vw] w-fit h-fit text-[1vw] flex items-center text-blue-500 font-thin justify-center text-center">
                {salle}
            </div>
            <div className="absolute top-[20vw] left-[7vw] w-[65%] h-fit text-black">
                <span className="font-semibold text-[1vw]">Annotation:</span> <br />
                <div
                    className="mt-2 max-h-[16vw] text-[0.9vw] overflow-y-auto"
                    dangerouslySetInnerHTML={{
                        __html: annotation
                            .replace(/\n\n/g, '<br /><br />')
                            .replace(/\n/g, '<br />')
                    }}
                />
            </div>
        </div>
    );
}