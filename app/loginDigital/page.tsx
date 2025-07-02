"use client"
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { supabase } from '../../lib/supabaseClient';

export default function LoginDigital() {
  const searchParams = useSearchParams();
  const campus = searchParams.get("campus") || "digital";
  const isDigital = campus === "digital";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [emailPrefix, setEmailPrefix] = useState("");
  const fullEmail = emailPrefix + "@formation-cci.fr";
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
          // Redirection après inscription réussie
          router.push(isDigital ? "/digitalHome" : "/buisnessHome");
          return;
        }
        if (error) throw error;
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: fullEmail,
          password,
        });
        if (!error && data.user) {
          // Redirection après connexion réussie
          router.push(isDigital ? "/digitalHome" : "/buisnessHome");
          return;
        }
        if (error) throw error;
      }
    } catch (err: any) {
      setError(err.message === "Email not confirmed" ? "Votre email n'est pas confirmé. Merci de vérifier vos paramètres Supabase (désactivez la confirmation par email dans le dashboard)." : err.message);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div
      className="fixed inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(/image/${isDigital ? "buisness.webp" : "digital.webp"})` }}
    >
      <div className="flex items-center justify-center min-h-screen opacity-95">
        <form
          onSubmit={handleSubmit}
          className={`${isDigital ? "bg-cyan-400" : "bg-pink-400"} bg-opacity-80 rounded-xl p-10 w-[400px] flex flex-col gap-6 shadow-2xl`}
        >
          <h2 className="text-3xl font-bold text-center mb-2">{isRegister ? "Inscription" : "Connexion"}</h2>
          <div style={{ display: 'flex', alignItems: 'center', textWrap: 'nowrap', border: '1px solid #ccc', borderRadius: 8, padding: '8px', background: 'none', }}>
            <input
              style={{maxWidth: '50%', flex: 1, border: 'none', outline: 'none', padding: '8px', borderRadius: 4, background: 'none', }}
              type="text"
              placeholder="Email"
              value={emailPrefix}
              onChange={e => setEmailPrefix(e.target.value)}
              required
            />
            <span style={{ color: '#000', paddingLeft: '-12px'}}>@formation-cci.fr</span>
          </div>
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={{ width: '100%', marginTop: 12, padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
          />
          {/* Password input and submit button */}
          <button type="submit" disabled={loading}>{isRegister ? "S'inscrire" : "Se connecter"}</button>
          <button type="button" onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? "Déjà un compte ? Se connecter" : "Pas encore de compte ? S'inscrire"}
          </button>
        </form>
      </div>
    </div>
  );
}