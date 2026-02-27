'use client';

import React, { useState, useEffect } from 'react';
import { 
  Zap, Moon, Sun, TerminalSquare, ArrowUpRight, 
  Server, Figma, Github, Linkedin, Mail, MapPin, Send,
  Link2
} from 'lucide-react';

const names: string[] = ['"Nitroi"', '"Vitor"', '"David"', '"Sabrina"', '"Kawan"', '"Antonio"', '"Deploying solutions"', '//', "'@ads/core'"];

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [payload, setPayload] = useState('');

  const hendleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault(); // Impede a página de recarregar
    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ nome, email, payload }),
      });
      if (response.ok) { alert('Email enviado!'); } 
      else { alert('Erro ao enviar'); }
    } catch (err) { alert('Erro no servidor'); }
  };

  return (
    // ESTA DIV CONTROLA O MODO ESCURO NO SITE TODO
    <div className={`${isDark ? 'dark' : ''} min-h-screen`}>
      
      {/* ESTA DIV É O FUNDO QUE MUDA DE COR */}
      <div className="bg-[#F4F4F4] text-[#1B262C] dark:bg-[#1B262C] dark:text-[#F4F4F4] font-sans transition-colors duration-300 min-h-screen relative">
        
        {/* Fundo Grid (Blueprint) */}
        <div 
          className="fixed inset-0 z-0 pointer-events-none opacity-[0.15] dark:opacity-30"
          style={{
            backgroundImage: isDark 
              ? 'linear-gradient(to right, #2C3E50 1px, transparent 1px), linear-gradient(to bottom, #2C3E50 1px, transparent 1px)' 
              : 'linear-gradient(to right, #BBE1FA 1px, transparent 1px), linear-gradient(to bottom, #BBE1FA 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Menu Superior */}
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-3xl backdrop-blur-md bg-[#F4F4F4]/70 dark:bg-[#1B262C]/80 border border-[#BBE1FA]/30 dark:border-[#2C3E50] rounded-full px-6 py-3 shadow-lg flex justify-between items-center">
          <img src="/logo-nitroi.png" alt="Logo" className="h-10 md:h-12" />
          
          <div className="hidden md:flex gap-6 items-center font-mono text-xs font-semibold">
            <a href="#inicio" className="hover:text-[#FF6B00]">./Início</a>
            <a href="#projetos" className="hover:text-[#FF6B00]">./Works</a>
            <a href="#equipe" className="hover:text-[#FF6B00]">./Equipe</a>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
              {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-blue-900" />}
            </button>
          </div>
        </nav>

        {/* CONTEÚDO PRINCIPAL */}
        <main className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto">
          
          <section id="inicio" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[60vh]">
            <div className="lg:col-span-6 flex flex-col gap-6">
              <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1]">
                Engenharia de Software <br />
                <span className="text-[#FF6B00]">Acelerada.</span>
              </h1>
              <p className="text-lg opacity-80">Projetamos e desenvolvemos arquiteturas de sistemas complexos e interfaces de alta performance.</p>
              <a href="#projetos" className="w-fit px-6 py-4 bg-[#FF6B00] text-white rounded font-bold hover:scale-105 transition-transform">Ver_Projetos()</a>
            </div>

            {/* Terminal de Código */}
            <div className="lg:col-span-6 bg-[#0F161A] p-6 rounded-xl border border-white/10 shadow-2xl font-mono text-sm">
               <div className="flex gap-2 mb-4"><div className="w-3 h-3 rounded-full bg-red-500"></div><div className="w-3 h-3 rounded-full bg-yellow-500"></div><div className="w-3 h-3 rounded-full bg-green-500"></div></div>
               <pre className="text-blue-400">
                 <code>
                   <span className="text-purple-400">const</span> nitroi = <span className="text-white">new Team();</span>{'\n'}
                   <span className="text-green-400">// Status: Ready to build...</span>{'\n'}
                   <span className="text-orange-400">await</span> nitroi.deploy();
                 </code>
               </pre>
            </div>
          </section>

          {/* Seção Projetos */}
          <section id="projetos" className="mt-20">
            <h2 className="text-2xl font-mono mb-8 text-[#FF6B00]">01 // PROJETOS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-[#0F161A] p-8 rounded-2xl border border-black/10 dark:border-white/10">
                <h3 className="text-2xl font-bold mb-4">Projeto Flashtech</h3>
                <p className="opacity-70 mb-6">E-commerce de hardware com foco em performance.</p>
                <a href="https://pojetos-faculdade-teste.vercel.app/" className="text-[#FF6B00] font-mono flex items-center gap-2">Visitar_Projeto <ArrowUpRight size={16}/></a>
              </div>
              <div className="bg-[#1B262C] dark:bg-[#2C3E50] text-white p-8 rounded-2xl flex flex-col justify-between">
                <h3 className="text-2xl font-bold">Precisa de um sistema?</h3>
                <a href="#contato" className="bg-[#FF6B00] w-fit px-4 py-2 rounded font-bold mt-4">Solicitar Análise</a>
              </div>
            </div>
          </section>

          {/* Seção Contato */}
          <section id="contato" className="mt-32 bg-[#1B262C] text-white p-10 rounded-3xl border border-white/10">
            <h2 className="text-3xl font-bold mb-6">Iniciar Conexão</h2>
            <form onSubmit={hendleSendEmail} className="grid grid-cols-1 gap-4">
              <input type="text" placeholder="Seu Nome" value={nome} onChange={(e)=>setNome(e.target.value)} className="bg-black/20 p-4 rounded border border-white/10 focus:border-[#FF6B00] outline-none" />
              <input type="email" placeholder="Seu Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="bg-black/20 p-4 rounded border border-white/10 focus:border-[#FF6B00] outline-none" />
              <textarea placeholder="Sua Mensagem" value={payload} onChange={(e)=>setPayload(e.target.value)} className="bg-black/20 p-4 rounded border border-white/10 focus:border-[#FF6B00] outline-none" rows={4}></textarea>
              <button type="submit" className="bg-[#FF6B00] py-4 rounded font-bold flex items-center justify-center gap-2">System.send() <Send size={18}/></button>
            </form>
          </section>

        </main>

        <footer className="text-center py-10 opacity-50 font-mono text-xs">
          <p>Copyright © 2026 Nitroi_ADS. Todos os blocos processados.</p>
        </footer>
      </div>
    </div>
  );
}