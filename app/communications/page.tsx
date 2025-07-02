"use client";
import { useState } from "react";

export default function Communication() {
    const [form, setForm] = useState({
        campus: "",
        prenom: "",
        nom: "",
        telephone: "",
        mail: "",
        promo: "",
        destinataire: "",
        message: "",
        pieceJointe: null as File | null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm(prev => ({ ...prev, pieceJointe: e.target.files ? e.target.files[0] : null }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (form.campus === "digital") {
            alert("Message envoyé à l'administration du campus Digital!");
        } else if (form.campus === "business") {
            alert("Message envoyé à l'administration du campus Business!");
        } else {
            alert("Veuillez choisir un campus.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <form className="bg-white p-8 rounded shadow-md w-full max-w-lg" onSubmit={handleSubmit}>
                <h2 className="text-3xl font-bold mb-6 text-center text-black">Contacter l'administration</h2>
                <div className="mb-4">
                    <label className="block mb-1 text-black font-semibold">Campus</label>
                    <select
                        name="campus"
                        value={form.campus}
                        onChange={handleChange}
                        required
                        className="w-full border px-3 py-2 rounded text-black focus:outline-blue-400 transition cursor-pointer"
                    >
                        <option value="">Sélectionner</option>
                        <option value="digital">Digital</option>
                        <option value="business">Business</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block mb-1 text-black font-semibold">Prénom</label>
                    <input
                        type="text"
                        name="prenom"
                        value={form.prenom}
                        onChange={handleChange}
                        required
                        className="w-full border px-3 py-2 rounded text-black focus:outline-blue-400 transition"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1 text-black font-semibold">Nom</label>
                    <input
                        type="text"
                        name="nom"
                        value={form.nom}
                        onChange={handleChange}
                        required
                        className="w-full border px-3 py-2 rounded text-black focus:outline-blue-400 transition"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1 text-black font-semibold">Téléphone</label>
                    <input
                        type="tel"
                        name="telephone"
                        value={form.telephone}
                        onChange={handleChange}
                        required
                        className="w-full border px-3 py-2 rounded text-black focus:outline-blue-400 transition"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1 text-black font-semibold">Mail</label>
                    <input
                        type="email"
                        name="mail"
                        value={form.mail}
                        onChange={handleChange}
                        required
                        className="w-full border px-3 py-2 rounded text-black focus:outline-blue-400 transition"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1 text-black font-semibold">Promo actuelle</label>
                    <select
                        name="promo"
                        value={form.promo}
                        onChange={handleChange}
                        required
                        className="w-full border px-3 py-2 rounded text-black focus:outline-blue-400 transition cursor-pointer"
                    >
                        <option value="">Sélectionner</option>
                        <option value="B1">B1</option>
                        <option value="B2">B2</option>
                        <option value="B3">B3</option>
                        <option value="M1">M1</option>
                        <option value="M2">M2</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block mb-1 text-black font-semibold">Destinataire</label>
                    <input
                        type="text"
                        name="destinataire"
                        value={form.destinataire}
                        onChange={handleChange}
                        required
                        className="w-full border px-3 py-2 rounded text-black focus:outline-blue-400 transition"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1 text-black font-semibold">Votre message</label>
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        className="w-full border px-3 py-2 rounded text-black focus:outline-blue-400 transition"
                        rows={4}
                    />
                </div>
                <div className="mb-6">
                    <label className="block mb-1 text-black font-semibold">Pièce jointe</label>
                    <div className="border border-dashed border-gray-400 rounded p-4 flex flex-col items-center bg-gray-100">
                        <input
                            type="file"
                            name="pieceJointe"
                            onChange={handleFileChange}
                            className="w-full text-black cursor-pointer"
                        />
                        {form.pieceJointe && (
                            <span className="mt-2 text-black text-sm">
                                Fichier sélectionné : {form.pieceJointe.name}
                            </span>
                        )}
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition cursor-pointer font-semibold text-lg"
                >
                    Envoyer
                </button>
            </form>
        </div>
    );
}