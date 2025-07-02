"use client";
import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";

function LoginDigitalInner() {
  const searchParams = useSearchParams();
  const campus = searchParams.get("campus") || "digital";
  const isDigital = campus === "digital";
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [emailPrefix, setEmailPrefix] = useState("");
  const fullEmail = `${emailPrefix}@formation-cci.fr`;
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (password.length < 6) {
      setError("Le mot de passe doit contenir au moins 6 caractères.");
      return;
    }
    setLoading(true);
    try {
      if (isRegister) {
        const { data, error } = await supabase.auth.signUp({
          email: fullEmail,
          password,
        });
        if (!error && data.user) {
          router.push(isDigital ? "/digitalHome" : "/businessHome");
          return;
        }
        if (error) throw error;
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: fullEmail,
          password,
        });
        if (!error && data.user) {
          router.push(isDigital ? "/digitalHome" : "/businessHome");
          return;
        }
        if (error) throw error;
      }
    } catch (err: any) {
      setError(
        err?.message === "Email not confirmed"
          ? "Votre email n'est pas confirmé. Merci de vérifier vos paramètres Supabase."
          : err?.message || "Erreur inconnue"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(/image/${isDigital ? "digital.webp" : "business.webp"})`,
      }}
    >
      <div className="flex items-center justify-center min-h-screen opacity-95">
        <form
          onSubmit={handleSubmit}
          className={`${
            isDigital ? "bg-cyan-400" : "bg-pink-400"
          } bg-opacity-80 rounded-xl p-10 w-[400px] flex flex-col gap-6 shadow-2xl`}
        >
          <h2 className="text-3xl font-bold text-center mb-2">
            {isRegister ? "Inscription" : "Connexion"}
          </h2>
          <div className="flex items-center border border-gray-300 rounded-lg px-2 py-2 bg-transparent">
            <input
              className="flex-1 border-none outline-none bg-transparent"
              type="text"
              placeholder="Email"
              value={emailPrefix}
              onChange={(e) => setEmailPrefix(e.target.value)}
              required
            />
            <span className="pl-2 text-black">@formation-cci.fr</span>
          </div>
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full mt-3 p-2 rounded border border-gray-300"
          />
          {error && (
            <div className="text-red-600 text-sm text-center">{error}</div>
          )}
          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white rounded py-2 mt-2 disabled:opacity-50"
          >
            {loading
              ? "Chargement..."
              : isRegister
              ? "S'inscrire"
              : "Se connecter"}
          </button>
          <button
            type="button"
            onClick={() => setIsRegister(!isRegister)}
            className="underline text-sm mt-2"
          >
            {isRegister
              ? "Déjà un compte ? Se connecter"
              : "Pas encore de compte ? S'inscrire"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function LoginDigital() {
  return (
    <Suspense fallback={null}>
      <LoginDigitalInner />
    </Suspense>
  );
}