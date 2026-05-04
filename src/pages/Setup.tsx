import type { FC } from "hono/jsx";
import { Icon } from "../components/Icon";

export const Setup: FC = () => {
  return (
    <html lang="id">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Setup — Projek Bre</title>
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
        <link rel="stylesheet" href="/static/styles.css" />
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            try {
              var theme = localStorage.getItem('theme');
              if (theme === 'light') {
                document.documentElement.classList.add('light');
              }
            } catch (e) {}
          })();
        `}} />
      </head>
      <body class="m-0 min-h-screen bg-[var(--bg-body)] text-[var(--text-primary)] font-[system-ui,-apple-system,sans-serif] flex items-center justify-center p-6 relative overflow-hidden">
        
        {/* Decorative Background */}
        <div class="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[var(--accent)]/5 rounded-full blur-[150px] pointer-events-none"></div>
        <div class="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div class="w-full max-w-lg bg-[var(--bg-nav)] border border-[var(--border-subtle)] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-500">
          
          {/* Setup Header & Progress */}
          <div class="px-8 pt-8 pb-5 border-b border-[var(--border-subtle)] bg-[var(--bg-body)]/30">
            <div class="flex items-center justify-between mb-6">
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-lg bg-[var(--accent)] text-white flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <Icon name="Settings" size={20} />
                </div>
                <div>
                  <h1 class="text-lg font-bold text-[var(--text-primary)] m-0 leading-tight">Instalasi</h1>
                  <p class="text-[var(--text-muted)] text-[10px] m-0">Konfigurasi awal Projek Bre</p>
                </div>
              </div>
              <div class="text-[var(--text-muted)] text-[10px] font-bold uppercase tracking-widest" id="step-indicator">
                Step <span class="text-[var(--accent)]">1</span> / 4
              </div>
            </div>

            {/* Progress Bar */}
            <div class="flex gap-1.5">
              {[1, 2, 3, 4].map(i => (
                <div 
                  id={`step-progress-${i}`} 
                  class={`h-1 flex-1 rounded-full transition-all duration-500 ${i === 1 ? 'bg-[var(--accent)] shadow-[0_0_8px_rgba(59,130,246,0.5)]' : 'bg-[var(--border-subtle)]'}`}
                ></div>
              ))}
            </div>
          </div>

          {/* Setup Content Area */}
          <div class="flex-1 p-8 relative min-h-[380px]">
            
            {/* Step 1: Welcome & Site Info */}
            <div id="setup-step-1" class="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
              <div class="text-center space-y-2">
                <div class="text-3xl">👋</div>
                <h2 class="text-xl font-bold text-[var(--text-primary)] tracking-tight">Selamat Datang!</h2>
                <p class="text-[var(--text-muted)] text-xs max-w-xs mx-auto leading-relaxed">
                  Mari persiapkan beberapa hal sebelum memulai penggunaan CRM.
                </p>
              </div>

              <div class="space-y-3 pt-2">
                <div>
                  <label class="block text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest mb-1.5 px-1">Nama Bisnis</label>
                  <input type="text" placeholder="Contoh: Projek Bre CRM" class="w-full bg-[var(--bg-body)] border border-[var(--border-subtle)] rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-all" />
                </div>
                <div>
                  <label class="block text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest mb-1.5 px-1">URL Aplikasi</label>
                  <input type="text" value="https://crm.projekbre.id" class="w-full bg-[var(--bg-body)] border border-[var(--border-subtle)] rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-all opacity-70" readonly />
                </div>
              </div>
            </div>

            {/* Step 2: System Configuration */}
            <div id="setup-step-2" class="hidden space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
               <h2 class="text-lg font-bold text-[var(--text-primary)]">Konfigurasi</h2>
               <p class="text-xs text-[var(--text-muted)]">Pilih preferensi dasar operasional Anda.</p>
               
               <div class="space-y-2.5 mt-4">
                 <div class="p-4 border border-[var(--border-subtle)] rounded-xl bg-[var(--bg-body)] flex items-center justify-between group hover:border-[var(--accent)] transition-colors cursor-pointer">
                    <div class="flex items-center gap-3">
                      <div class="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center"><Icon name="Globe" size={18} /></div>
                      <div>
                        <div class="text-xs font-bold">Zona Waktu</div>
                        <div class="text-[9px] text-[var(--text-muted)]">Jakarta (GMT+7)</div>
                      </div>
                    </div>
                    <Icon name="ChevronRight" size={14} class="text-[var(--text-muted)]" />
                 </div>

                 <div class="p-4 border border-[var(--border-subtle)] rounded-xl bg-[var(--bg-body)] flex items-center justify-between group hover:border-[var(--accent)] transition-colors cursor-pointer">
                    <div class="flex items-center gap-3">
                      <div class="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center"><Icon name="Languages" size={18} /></div>
                      <div>
                        <div class="text-xs font-bold">Bahasa Utama</div>
                        <div class="text-[9px] text-[var(--text-muted)]">Bahasa Indonesia</div>
                      </div>
                    </div>
                    <Icon name="ChevronRight" size={14} class="text-[var(--text-muted)]" />
                 </div>

                 <div class="p-4 border border-[var(--border-subtle)] rounded-xl bg-[var(--bg-body)] flex items-center justify-between group hover:border-[var(--accent)] transition-colors cursor-pointer">
                    <div class="flex items-center gap-3">
                      <div class="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center"><Icon name="Database" size={18} /></div>
                      <div>
                        <div class="text-xs font-bold">Penyimpanan</div>
                        <div class="text-[9px] text-[var(--text-muted)]">PostgreSQL (Local)</div>
                      </div>
                    </div>
                    <Icon name="Check" size={14} class="text-emerald-500" />
                 </div>
               </div>
            </div>

            {/* Step 3: Admin Account */}
            <div id="setup-step-3" class="hidden space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
               <h2 class="text-lg font-bold text-[var(--text-primary)]">Admin</h2>
               <p class="text-xs text-[var(--text-muted)]">Akun ini akan memiliki akses penuh ke sistem.</p>
               
               <div class="space-y-3 mt-4">
                 <div class="grid grid-cols-2 gap-3">
                    <div>
                      <label class="block text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest mb-1.5 px-1">Nama</label>
                      <input type="text" placeholder="Billy" class="w-full bg-[var(--bg-body)] border border-[var(--border-subtle)] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[var(--accent)]" />
                    </div>
                    <div>
                      <label class="block text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest mb-1.5 px-1">Email</label>
                      <input type="email" placeholder="billy@example.com" class="w-full bg-[var(--bg-body)] border border-[var(--border-subtle)] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[var(--accent)]" />
                    </div>
                 </div>
                 <div>
                    <label class="block text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest mb-1.5 px-1">Password</label>
                    <input type="password" placeholder="••••••••" class="w-full bg-[var(--bg-body)] border border-[var(--border-subtle)] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[var(--accent)]" />
                 </div>
                 <div>
                    <label class="block text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest mb-1.5 px-1">Konfirmasi</label>
                    <input type="password" placeholder="••••••••" class="w-full bg-[var(--bg-body)] border border-[var(--border-subtle)] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[var(--accent)]" />
                 </div>
               </div>
            </div>

            {/* Step 4: Finishing */}
            <div id="setup-step-4" class="hidden flex flex-col items-center justify-center h-full text-center space-y-5 animate-in fade-in zoom-in-95 duration-700">
               <div class="w-20 h-20 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center animate-bounce duration-[2000ms]">
                 <Icon name="PartyPopper" size={40} />
               </div>
               <div>
                 <h2 class="text-2xl font-black text-[var(--text-primary)]">Hampir Selesai!</h2>
                 <p class="text-[var(--text-muted)] text-xs max-w-xs mx-auto mt-2 leading-relaxed">
                   Sistem sedang menyiapkan basis data dan konfigurasi akhir Anda.
                 </p>
               </div>
               <div class="w-full max-w-[200px] h-1.5 bg-[var(--bg-body)] rounded-full overflow-hidden mt-2">
                 <div class="h-full bg-emerald-500 animate-[progress_3s_ease-in-out_forwards]"></div>
               </div>
            </div>

          </div>

          {/* Setup Footer Actions */}
          <div class="px-8 py-6 border-t border-[var(--border-subtle)] bg-[var(--bg-body)]/30 flex items-center justify-between" id="setup-footer">
            <button 
              id="btn-prev" 
              onclick="prevSetupStep()" 
              class="hidden px-4 py-2 text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest hover:text-[var(--text-primary)] transition-colors border-none bg-transparent cursor-pointer"
            >
              Kembali
            </button>
            <div class="flex-1"></div>
            <button 
              id="btn-next" 
              onclick="nextSetupStep()" 
              class="bg-[var(--accent)] text-white px-8 py-3 rounded-xl text-xs font-bold shadow-xl shadow-blue-500/20 hover:bg-blue-600 transform active:scale-95 transition-all border-none cursor-pointer"
            >
              Lanjutkan
            </button>
          </div>

        </div>

        {/* Setup Logic */}
        <script dangerouslySetInnerHTML={{ __html: `
          let currentSetupStep = 1;
          const totalSetupSteps = 4;

          function updateSetupUI() {
            // Update Step Content
            for (let i = 1; i <= totalSetupSteps; i++) {
              const content = document.getElementById('setup-step-' + i);
              const progress = document.getElementById('step-progress-' + i);
              if (i === currentSetupStep) {
                content.classList.remove('hidden');
                progress.className = 'h-1.5 flex-1 rounded-full transition-all duration-500 bg-[var(--accent)] shadow-[0_0_8px_rgba(59,130,246,0.5)]';
              } else {
                content.classList.add('hidden');
                if (i < currentSetupStep) {
                  progress.className = 'h-1.5 flex-1 rounded-full bg-emerald-500 transition-all duration-500';
                } else {
                  progress.className = 'h-1.5 flex-1 rounded-full bg-[var(--border-subtle)] transition-all duration-500';
                }
              }
            }

            // Update Indicator
            document.getElementById('step-indicator').innerHTML = 'Langkah <span class="text-[var(--accent)]">' + currentSetupStep + '</span> dari ' + totalSetupSteps;

            // Footer Buttons
            const btnPrev = document.getElementById('btn-prev');
            const btnNext = document.getElementById('btn-next');
            const footer = document.getElementById('setup-footer');

            if (currentSetupStep === 1) btnPrev.classList.add('hidden');
            else btnPrev.classList.remove('hidden');

            if (currentSetupStep === totalSetupSteps) {
              btnNext.innerHTML = 'Buka Dashboard';
              btnNext.onclick = () => window.location.href = '/login';
            } else {
              btnNext.innerHTML = (currentSetupStep === 3) ? 'Selesaikan Instalasi' : 'Lanjutkan';
              btnNext.onclick = nextSetupStep;
            }
          }

          function nextSetupStep() {
            if (currentSetupStep < totalSetupSteps) {
              currentSetupStep++;
              updateSetupUI();
            }
          }

          function prevSetupStep() {
            if (currentSetupStep > 1) {
              currentSetupStep--;
              updateSetupUI();
            }
          }
        `}} />

      </body>
    </html>
  );
};
