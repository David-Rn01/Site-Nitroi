'use client';

import React, { useState, useEffect } from 'react';
import { 
  Zap, Moon, Sun, TerminalSquare, ArrowUpRight, 
  Server, Figma, Github, Linkedin, Mail, MapPin, Send 
} from 'lucide-react';

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

  return (
    <div className="min-h-screen bg-[#F4F4F4] text-[#1B262C] dark:bg-[#1B262C] dark:text-[#F4F4F4] font-sans antialiased relative selection:bg-[#FF6B00] selection:text-white transition-colors duration-300">
      
      {/* Fundo Grid Dinâmico (Blueprint) */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.15] dark:opacity-30"
        style={{
          backgroundImage: isDark 
            ? 'linear-gradient(to right, #2C3E50 1px, transparent 1px), linear-gradient(to bottom, #2C3E50 1px, transparent 1px)' 
            : 'linear-gradient(to right, #BBE1FA 1px, transparent 1px), linear-gradient(to bottom, #BBE1FA 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 5%, black 40%, black 60%, transparent 95%)',
          maskImage: 'linear-gradient(to bottom, transparent, black, transparent)'
        }}
      />

      {/* Floating Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-3xl backdrop-blur-md bg-[#F4F4F4]/70 dark:bg-[#1B262C]/80 border border-[#BBE1FA]/30 dark:border-[#2C3E50] rounded-full px-6 py-3 shadow-lg flex justify-between items-center transition-colors duration-300">
        
        <div className="flex items-center">
          <img 
            src="/logo-nitroi.png" 
            alt="Logo Nitroi" 
            className="w-auto h-12 md:h-16 object-contain drop-shadow-md"
          />
        </div>

        <div className="hidden md:flex gap-6 items-center font-mono text-xs uppercase font-semibold">
          <a href="#inicio" className="hover:text-[#FF6B00] transition-colors">./Início</a>
          <a href="#projetos" className="hover:text-[#FF6B00] transition-colors">./Work</a>
          <a href="#equipe" className="hover:text-[#FF6B00] transition-colors">./Equipe</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#contato" className="hidden md:block px-4 py-2 bg-[#1B262C] dark:bg-[#F4F4F4] text-[#F4F4F4] dark:text-[#1B262C] text-sm font-bold rounded-full hover:bg-[#FF6B00] dark:hover:bg-[#FF6B00] hover:text-white dark:hover:text-white transition-colors">
            [ INIT ]
          </a>
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Alternar Tema"
          >
            {isDark ? (
              <Moon className="w-5 h-5 text-[#BBE1FA] hover:text-[#FF6B00]" />
            ) : (
              <Sun className="w-5 h-5 text-[#1B262C] hover:text-[#FF6B00]" />
            )}
          </button>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col gap-32">
        
        {/* Hero Section */}
        <section id="inicio" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[70vh]">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="font-mono text-[#FF6B00] text-sm font-semibold tracking-wider flex items-center gap-2">
              <span className="w-8 h-px bg-[#FF6B00]"></span> SYSTEM.ONLINE // ADS
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
              Engenharia <br />
              de Software <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-orange-400">Acelerada.</span>
            </h1>
            
            <p className="text-lg text-[#1B262C]/70 dark:text-[#BBE1FA] max-w-lg">
              Não fazemos apenas sites. Projetamos e desenvolvemos arquiteturas de sistemas complexos, APIs robustas e interfaces de alta performance.
            </p>
            
            <div className="flex gap-4 mt-4 font-mono">
              <a href="#projetos" className="px-6 py-4 bg-[#FF6B00] text-white rounded font-bold hover:shadow-[4px_4px_0px_rgba(27,38,44,1)] dark:hover:shadow-[4px_4px_0px_rgba(187,225,250,0.5)] transition-all active:translate-y-1 active:translate-x-1 active:shadow-none flex items-center gap-2">
                Ver_Projetos() <TerminalSquare className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative mt-10 lg:mt-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#FF6B00] to-purple-600 rounded-xl blur opacity-20 dark:opacity-40 animate-pulse"></div>
            <div className="relative bg-[#F4F4F4] dark:bg-[#0F161A] rounded-xl border border-[#BBE1FA]/40 dark:border-[#2C3E50] shadow-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#BBE1FA]/20 dark:border-[#2C3E50] bg-black/5 dark:bg-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-4 font-mono text-xs text-[#1B262C]/50 dark:text-[#BBE1FA]/50">~/nitroi/core/init.ts</div>
              </div>
              <div className="p-6 overflow-x-auto text-sm md:text-base font-mono leading-relaxed">
                <pre>
                  <code className="text-[#1B262C] dark:text-[#BBE1FA]">
                    <span className="text-purple-600 dark:text-purple-400">import</span> {'{ Team, Skillset }'} <span className="text-purple-600 dark:text-purple-400">from</span> <span className="text-green-600 dark:text-green-400">'@ads/core'</span>;{'\n\n'}
                    <span className="text-[#FF6B00]">const</span> nitroi = <span className="text-purple-600 dark:text-purple-400">new</span> Team({`{`}{'\n'}
                    {'  '}name: <span className="text-green-600 dark:text-green-400">"Nitroi"</span>,{'\n'}
                    {'  '}members: [{'\n'}
                    {'    '}<span className="text-green-600 dark:text-green-400">"Vitor"</span>, <span className="text-green-600 dark:text-green-400">"David"</span>, <span className="text-green-600 dark:text-green-400">"Sabrina"</span>,{'\n'}
                    {'    '}<span className="text-green-600 dark:text-green-400">"Kauan"</span>, <span className="text-green-600 dark:text-green-400">"Antonio"</span>{'\n'}
                    {'  '}],{'\n'}
                    {'  '}status: <span className="text-blue-600 dark:text-blue-400">"Deploying Solutions"</span>{'\n'}
                    {`}`});{'\n\n'}
                    <span className="text-[#1B262C]/50 dark:text-[#BBE1FA]/50">// Inicializando matriz de análise...</span>{'\n'}
                    <span className="text-blue-600 dark:text-blue-400">await</span> nitroi.execute(Skillset.FULLSTACK);{'\n'}
                    <span className="text-[#FF6B00] font-bold animate-pulse">_</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-[#BBE1FA]/30 dark:bg-[#2C3E50] relative">
          <div className="absolute -top-3 left-0 bg-[#F4F4F4] dark:bg-[#1B262C] px-2 font-mono text-xs text-[#BBE1FA] dark:text-[#2C3E50] font-bold">01 // PROJETOS</div>
        </div>

        <section id="projetos" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 group bg-white dark:bg-[#0F161A] rounded-2xl border border-[#BBE1FA]/30 dark:border-[#2C3E50] p-8 hover:border-[#FF6B00] dark:hover:border-[#FF6B00] transition-colors relative overflow-hidden flex flex-col justify-between min-h-[300px]">
            <div className="absolute right-0 top-0 w-64 h-64 bg-[#FF6B00]/5 rounded-full blur-3xl group-hover:bg-[#FF6B00]/10 transition-colors"></div>
            <div className="relative z-10 flex justify-between items-start">
              <div className="p-3 bg-[#FF6B00]/10 rounded-lg text-[#FF6B00] w-fit mb-6">
                <Zap className="w-8 h-8" />
              </div>
              <span className="font-mono text-xs px-3 py-1 border border-[#BBE1FA]/30 dark:border-[#2C3E50] rounded-full">v1.0.0_Live</span>
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-3">Projeto Flashtech</h3>
              <p className="text-[#1B262C]/70 dark:text-[#BBE1FA] max-w-md mb-6">Plataforma de gestão integrada com análise de dados em tempo real. Arquitetura desenhada para zero latência.</p>
              <a href="#" className="font-mono text-sm text-[#FF6B00] flex items-center gap-2 hover:underline">
                Ver_Repositório <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-1 group bg-white dark:bg-[#0F161A] rounded-2xl border border-[#BBE1FA]/30 dark:border-[#2C3E50] p-8 hover:border-[#FF6B00] dark:hover:border-[#FF6B00] transition-colors flex flex-col justify-between">
            <div>
              <Server className="w-8 h-8 text-[#1B262C]/50 dark:text-[#BBE1FA] mb-6 group-hover:text-[#FF6B00] transition-colors" />
              <h3 className="text-xl font-bold mb-2">API Gateway</h3>
              <p className="text-sm text-[#1B262C]/70 dark:text-[#BBE1FA]">Microsserviço de roteamento para aplicações de alta demanda.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2 font-mono text-xs">
              <span className="px-2 py-1 bg-black/5 dark:bg-white/5 rounded">Node.js</span>
              <span className="px-2 py-1 bg-black/5 dark:bg-white/5 rounded">Docker</span>
            </div>
          </div>

          <div className="md:col-span-1 group bg-white dark:bg-[#0F161A] rounded-2xl border border-[#BBE1FA]/30 dark:border-[#2C3E50] p-8 hover:border-[#FF6B00] dark:hover:border-[#FF6B00] transition-colors flex flex-col justify-between">
            <div>
              <Figma className="w-8 h-8 text-[#1B262C]/50 dark:text-[#BBE1FA] mb-6 group-hover:text-[#FF6B00] transition-colors" />
              <h3 className="text-xl font-bold mb-2">Design System</h3>
              <p className="text-sm text-[#1B262C]/70 dark:text-[#BBE1FA]">Biblioteca de componentes padronizados para UI/UX ágil.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2 font-mono text-xs">
              <span className="px-2 py-1 bg-black/5 dark:bg-white/5 rounded">Figma</span>
              <span className="px-2 py-1 bg-black/5 dark:bg-white/5 rounded">React</span>
            </div>
          </div>

          <div className="md:col-span-2 group bg-[#1B262C] dark:bg-[#2C3E50] text-[#F4F4F4] rounded-2xl border border-[#1B262C] dark:border-[#2C3E50] p-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Precisa de um sistema sob medida?</h3>
              <p className="text-[#BBE1FA]">Nossa equipe analisa seus processos corporativos e desenvolve a solução ideal.</p>
            </div>
            <a href="#contato" className="whitespace-nowrap px-6 py-3 bg-[#FF6B00] text-white rounded font-bold hover:bg-orange-600 transition-colors">
              Solicitar Análise
            </a>
          </div>
        </section>

        <div className="w-full h-px bg-[#BBE1FA]/30 dark:bg-[#2C3E50] relative">
          <div className="absolute -top-3 left-0 bg-[#F4F4F4] dark:bg-[#1B262C] px-2 font-mono text-xs text-[#BBE1FA] dark:text-[#2C3E50] font-bold">02 // EQUIPE_ADS</div>
        </div>

        <section id="equipe" className="w-full">
          <div className="flex flex-col border-t border-b border-[#BBE1FA]/30 dark:border-[#2C3E50] divide-y divide-[#BBE1FA]/30 dark:divide-[#2C3E50] font-mono">
            <div className="grid grid-cols-12 gap-4 py-4 text-xs text-[#1B262C]/50 dark:text-[#BBE1FA] uppercase tracking-wider hidden md:grid">
              <div className="col-span-4">Nome_Membro</div>
              <div className="col-span-4"> Especialidade </div>
              <div className="col-span-4 text-right">Acesso</div>
            </div>

            {[
              { name: 'Kawan', role: 'Lead_Developer', initial: 'K' },
              { name: 'Vitor', role: 'Systems_Analyst', initial: 'V' },
              { name: 'Sabrina', role: 'UI/UX_Frontend', initial: 'S' },
              { name: 'David', role: 'Backend_Engineer', initial: 'D' },
              { name: 'Kauan', role: 'Backend_Engineer', initial: 'K' },
              { name: 'Antonio', role: 'DevOps_Cloud', initial: 'A' }
            ].map((member, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-4 py-6 items-center group hover:bg-black/5 dark:hover:bg-white/5 transition-colors px-2 md:px-0">
                <div className="md:col-span-4 flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#BBE1FA]/30 dark:bg-[#0F161A] rounded flex items-center justify-center font-bold text-lg group-hover:text-[#FF6B00] transition-colors border border-transparent group-hover:border-[#FF6B00]/30">{member.initial}</div>
                  <span className="text-xl font-bold font-sans">{member.name}</span>
                </div>
                <div className="md:col-span-4 text-[#1B262C]/70 dark:text-[#BBE1FA] text-sm mt-2 md:mt-0">
                  <span className="text-[#FF6B00]">{'>'}</span> {member.role}
                </div>
                <div className="md:col-span-4 flex md:justify-end gap-3 mt-4 md:mt-0 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="#" className="p-2 bg-white dark:bg-[#2C3E50] border border-[#BBE1FA]/30 dark:border-[#2C3E50] rounded hover:text-[#FF6B00] transition-colors"><Github className="w-4 h-4" /></a>
                  <a href="#" className="p-2 bg-white dark:bg-[#2C3E50] border border-[#BBE1FA]/30 dark:border-[#2C3E50] rounded hover:text-[#FF6B00] transition-colors"><Linkedin className="w-4 h-4" /></a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contato" className="bg-[#1B262C] rounded-3xl p-8 md:p-16 border border-[#2C3E50] text-[#F4F4F4] overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
            <div>
              <div className="font-mono text-[#FF6B00] text-sm mb-4">03 // INICIAR_CONEXÃO</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto para compilar a sua ideia?</h2>
              <p className="text-[#BBE1FA] mb-8">Envie-nos uma requisição e a nossa equipe entrará em contato para discutirmos a arquitetura técnica do seu projeto.</p>
              
              <div className="flex flex-col gap-4 font-mono text-sm text-[#BBE1FA]">
                <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-[#FF6B00]" /> root@nitroi.dev</div>
                <div className="flex items-center gap-3"><MapPin className="w-5 h-5 text-[#FF6B00]" /> Sistema Distribuído / Remoto</div>
              </div>
            </div>

            <form 
              className="flex flex-col gap-4" 
              onSubmit={(e) => { 
                e.preventDefault(); 
                alert('POST /api/contact - Sucesso!'); 
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="font-mono text-xs text-[#BBE1FA]">const nome = </label>
                  <input type="text" placeholder="'Seu Nome'" className="bg-[#0F161A] border border-[#2C3E50] p-3 rounded text-white font-mono focus:border-[#FF6B00] focus:outline-none transition-colors" required />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-mono text-xs text-[#BBE1FA]">const email = </label>
                  <input type="email" placeholder="'email@empresa.com'" className="bg-[#0F161A] border border-[#2C3E50] p-3 rounded text-white font-mono focus:border-[#FF6B00] focus:outline-none transition-colors" required />
                </div>
              </div>
              <div className="flex flex-col gap-1 mt-2">
                <label className="font-mono text-xs text-[#BBE1FA]">const payload = </label>
                <textarea rows={4} placeholder="'Descreva a sua necessidade técnica...'" className="bg-[#0F161A] border border-[#2C3E50] p-3 rounded text-white font-mono focus:border-[#FF6B00] focus:outline-none transition-colors" required></textarea>
              </div>
              <button type="submit" className="mt-4 py-4 bg-[#FF6B00] text-white font-bold rounded font-mono hover:bg-orange-600 transition-colors flex justify-center items-center gap-2">
                System.send() <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </section>

      </main>

      <footer className="text-center py-8 font-mono text-xs text-[#1B262C]/50 dark:text-[#BBE1FA]/50">
        <p>Copyright © 2026 Nitroi_ADS. Todos os blocos processados.</p>
      </footer>
    </div>
  );
}