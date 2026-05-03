import type { FC } from "hono/jsx";
import { Icon } from "../Icon";

// Dummy data for inboxes
const DUMMY_INBOXES = [
  {
    id: 1,
    name: "CS Support Utama",
    channel: "WhatsApp",
    channelIcon: "MessageCircle",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  },
  {
    id: 2,
    name: "Email Info",
    channel: "Email",
    channelIcon: "Mail",
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    id: 3,
    name: "Instagram DM",
    channel: "Sosmed",
    channelIcon: "Instagram",
    color: "text-pink-500",
    bg: "bg-pink-500/10"
  }
];

export const KotakMasuk: FC = () => {
  return (
    <div class="space-y-6 pb-6">
      {/* Header */}
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-xl font-bold text-[var(--text-primary)] m-0">Kotak Masuk</h2>
          <p class="text-sm text-[var(--text-muted)] mt-1 mb-0">Kelola saluran masuk dari berbagai platform.</p>
        </div>
        <button
          onclick="document.getElementById('modal-tambah-inbox').classList.remove('hidden')"
          class="flex items-center gap-2 bg-[var(--accent)] hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors border-none shadow-sm cursor-pointer"
        >
          <Icon name="Plus" size={16} />
          Tambah Kotak Masuk
        </button>
      </div>

      {/* Main Content - Table */}
      <div class="bg-[var(--bg-nav)] border border-[var(--border-subtle)] rounded-xl overflow-hidden shadow-sm">
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="border-b border-[var(--border-subtle)] bg-[var(--bg-body)]">
                <th class="px-6 py-3 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">Nama</th>
                <th class="px-6 py-3 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider text-right">Aksi</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[var(--border-subtle)]">
              {DUMMY_INBOXES.map((inbox) => (
                <tr class="hover:bg-[var(--bg-nav-hover)] transition-colors group">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center gap-4">
                      <div class={`w-10 h-10 rounded-lg flex items-center justify-center ${inbox.bg} ${inbox.color}`}>
                        <Icon name={inbox.channelIcon as any} size={20} />
                      </div>
                      <div>
                        <div class="text-sm font-semibold text-[var(--text-primary)]">{inbox.name}</div>
                        <div class="text-xs text-[var(--text-muted)] font-medium mt-0.5">{inbox.channel}</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div class="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button class="p-1.5 text-[var(--text-muted)] hover:text-[var(--accent)] bg-transparent border-none cursor-pointer rounded-md hover:bg-[var(--bg-body)] transition-colors" title="Pengaturan Kotak Masuk">
                        <Icon name="Settings" size={16} />
                      </button>
                      <button class="p-1.5 text-[var(--text-muted)] hover:text-red-500 bg-transparent border-none cursor-pointer rounded-md hover:bg-red-500/10 transition-colors" title="Hapus">
                        <Icon name="Trash2" size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Multi-step Modal */}
      <div id="modal-tambah-inbox" class="hidden fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
        <div class="bg-[var(--bg-nav)] border border-[var(--border-subtle)] w-full max-w-4xl h-[600px] rounded-2xl shadow-2xl flex overflow-hidden scale-in-center animate-in zoom-in-95 duration-200">

          {/* Left Side: Steps Navigation */}
          <div class="w-64 bg-[var(--bg-body)] border-r border-[var(--border-subtle)] p-8 flex flex-col gap-8">
            <div class="flex items-center gap-2 mb-4">
              <div class="w-8 h-8 rounded-lg bg-[var(--accent)] text-white flex items-center justify-center">
                <Icon name="Inbox" size={18} />
              </div>
              <span class="font-bold text-[var(--text-primary)]">Tambah Inbox</span>
            </div>

            <nav class="space-y-6">
              {[
                { step: 1, label: "Pilih Channel", icon: "Radio" },
                { step: 2, label: "Buat Kotak Masuk", icon: "Layout" },
                { step: 3, label: "Tambahkan Agen", icon: "Users" },
                { step: 4, label: "Selesai", icon: "CheckCircle" },
              ].map((s) => (
                <div id={`step-nav-${s.step}`} class={`flex items-center gap-4 transition-all ${s.step === 1 ? 'opacity-100' : 'opacity-40'}`}>
                  <div class={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold ${s.step === 1 ? 'border-[var(--accent)] text-[var(--accent)] bg-[var(--accent)]/10' : 'border-[var(--border-subtle)] text-[var(--text-muted)]'}`}>
                    {s.step}
                  </div>
                  <div class="flex flex-col">
                    <span class="text-sm font-bold text-[var(--text-primary)]">{s.label}</span>
                  </div>
                </div>
              ))}
            </nav>
          </div>

          {/* Right Side: Step Content */}
          <div class="flex-1 flex flex-col relative">
            <button
              onclick="document.getElementById('modal-tambah-inbox').classList.add('hidden')"
              class="absolute top-4 right-4 p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] bg-transparent border-none cursor-pointer"
            >
              <Icon name="X" size={20} />
            </button>

            {/* Content Container */}
            <div class="flex-1 p-12 overflow-y-auto" id="modal-step-content">

              {/* Step 1: Pilih Channel */}
              <div id="step-content-1" class="space-y-6">
                <div>
                  <h2 class="text-2xl font-bold text-[var(--text-primary)] m-0">Pilih Saluran</h2>
                  <p class="text-sm text-[var(--text-muted)] mt-2">Pilih platform yang ingin Anda hubungkan sebagai kotak masuk baru.</p>
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <div class="p-6 border-2 border-[var(--accent)] bg-[var(--accent)]/5 rounded-2xl cursor-pointer flex flex-col gap-3">
                    <div class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                      <Icon name="MessageCircle" size={24} />
                    </div>
                    <div class="font-bold text-[var(--text-primary)]">WhatsApp</div>
                    <p class="text-xs text-[var(--text-muted)]">Hubungkan nomor WhatsApp via QR Code atau API.</p>
                  </div>
                  <div class="p-6 border-2 border-[var(--border-subtle)] bg-[var(--bg-body)] rounded-2xl opacity-50 cursor-not-allowed flex flex-col gap-3 relative overflow-hidden">
                    <div class="absolute top-2 right-2 px-2 py-0.5 bg-[var(--border-subtle)] text-[10px] font-bold rounded uppercase tracking-wider">Coming Soon</div>
                    <div class="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
                      <Icon name="Mail" size={24} />
                    </div>
                    <div class="font-bold text-[var(--text-primary)]">Email & Sosmed</div>
                    <p class="text-xs text-[var(--text-muted)]">Integrasi Gmail, Outlook, Instagram, dan Facebook.</p>
                  </div>
                </div>
              </div>

              {/* Step 2: Buat Kotak Masuk */}
              <div id="step-content-2" class="hidden space-y-8">
                <div>
                  <h2 class="text-2xl font-bold text-[var(--text-primary)] m-0">Detail Kotak Masuk</h2>
                  <p class="text-sm text-[var(--text-muted)] mt-2">Beri nama kotak masuk Anda dan hubungkan perangkat.</p>
                </div>
                <div class="space-y-4">
                  <div>
                    <label class="block text-xs font-bold text-[var(--text-muted)] uppercase tracking-widest mb-2">Nama Kotak Masuk</label>
                    <input type="text" placeholder="Contoh: CS Utama, Sales Team" class="w-full bg-[var(--bg-body)] border border-[var(--border-subtle)] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[var(--accent)]" />
                  </div>
                  <div class="flex flex-col items-center gap-6 p-8 bg-[var(--bg-body)] border border-[var(--border-subtle)] border-dashed rounded-2xl">
                    <div class="relative w-48 h-48 bg-white p-2 rounded-xl">
                      <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=ProjekBre" class="w-full h-full blur-[2px] opacity-40" alt="QR Code" />
                      <div class="absolute inset-0 flex items-center justify-center">
                        <button class="bg-[var(--accent)] text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg border-none cursor-pointer hover:scale-105 transition-transform">
                          Scan QR Code
                        </button>
                      </div>
                    </div>
                    <p class="text-xs text-[var(--text-muted)] text-center max-w-[250px]">
                      Buka WhatsApp di ponsel Anda &gt; Perangkat Tertaut &gt; Tautkan Perangkat.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3: Tambahkan Agen */}
              <div id="step-content-3" class="hidden space-y-6">
                <div>
                  <h2 class="text-2xl font-bold text-[var(--text-primary)] m-0">Tambahkan Agen</h2>
                  <p class="text-sm text-[var(--text-muted)] mt-2">Pilih anggota tim yang dapat mengakses kotak masuk ini.</p>
                </div>
                <div class="space-y-2">
                  {[
                    { name: "Diana Putri", role: "Agent" },
                    { name: "Bagas Wiratama", role: "Agent" },
                    { name: "Rina Kartika", role: "Supervisor" },
                  ].map(agent => (
                    <label class="flex items-center justify-between p-4 bg-[var(--bg-body)] border border-[var(--border-subtle)] rounded-xl cursor-pointer hover:border-[var(--accent)]/50 transition-colors">
                      <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center font-bold text-xs">
                          {agent.name.charAt(0)}
                        </div>
                        <div>
                          <div class="text-sm font-bold text-[var(--text-primary)]">{agent.name}</div>
                          <div class="text-[10px] text-[var(--text-muted)]">{agent.role}</div>
                        </div>
                      </div>
                      <input type="checkbox" class="w-5 h-5 rounded border-[var(--border-subtle)]" />
                    </label>
                  ))}
                </div>
              </div>

              {/* Step 4: Selesai */}
              <div id="step-content-4" class="hidden flex flex-col items-center justify-center py-12 text-center space-y-6">
                <div class="w-20 h-20 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-2 animate-bounce">
                  <Icon name="CheckCircle" size={48} />
                </div>
                <div>
                  <h2 class="text-2xl font-bold text-[var(--text-primary)] m-0">Berhasil Dibuat!</h2>
                  <p class="text-sm text-[var(--text-muted)] mt-2 max-w-sm">
                    Kotak masuk WhatsApp Anda telah berhasil dikonfigurasi dan siap digunakan untuk menerima pesan.
                  </p>
                </div>
                <button
                  onclick="document.getElementById('modal-tambah-inbox').classList.add('hidden'); goToStep(1)"
                  class="bg-[var(--accent)] text-white px-8 py-3 rounded-xl text-sm font-bold shadow-lg border-none cursor-pointer mt-4"
                >
                  Selesai & Tutup
                </button>
              </div>

            </div>

            {/* Footer Actions */}
            <div class="px-12 py-6 border-t border-[var(--border-subtle)] flex items-center justify-between bg-[var(--bg-body)]/50" id="modal-footer-actions">
              <button
                id="btn-prev"
                onclick="prevStep()"
                class="hidden px-6 py-2.5 text-sm font-bold text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors border-none bg-transparent cursor-pointer"
              >
                Kembali
              </button>
              <div class="flex-1"></div>
              <button
                id="btn-next"
                onclick="nextStep()"
                class="bg-[var(--accent)] text-white px-8 py-2.5 rounded-xl text-sm font-bold shadow-lg border-none cursor-pointer hover:bg-blue-600 transition-colors"
              >
                Lanjutkan
              </button>
            </div>
          </div>
        </div>

        {/* Modal Logic */}
        <script dangerouslySetInnerHTML={{
          __html: `
          let currentStep = 1;
          const totalSteps = 4;

          function goToStep(step) {
            // Hide all contents
            for (let i = 1; i <= totalSteps; i++) {
              document.getElementById('step-content-' + i).classList.add('hidden');
              
              // Update Nav
              const nav = document.getElementById('step-nav-' + i);
              const dot = nav.querySelector('div');
              if (i < step) {
                nav.style.opacity = '1';
                dot.className = 'w-8 h-8 rounded-full border-2 border-emerald-500 text-white bg-emerald-500 flex items-center justify-center text-xs font-bold';
                dot.innerHTML = '✓';
              } else if (i === step) {
                nav.style.opacity = '1';
                dot.className = 'w-8 h-8 rounded-full border-2 border-[var(--accent)] text-[var(--accent)] bg-[var(--accent)]/10 flex items-center justify-center text-xs font-bold';
                dot.innerHTML = i;
              } else {
                nav.style.opacity = '0.4';
                dot.className = 'w-8 h-8 rounded-full border-2 border-[var(--border-subtle)] text-[var(--text-muted)] flex items-center justify-center text-xs font-bold';
                dot.innerHTML = i;
              }
            }

            // Show current content
            document.getElementById('step-content-' + step).classList.remove('hidden');
            currentStep = step;

            // Footer controls
            const btnPrev = document.getElementById('btn-prev');
            const btnNext = document.getElementById('btn-next');
            const footer = document.getElementById('modal-footer-actions');

            if (step === 1) btnPrev.classList.add('hidden');
            else btnPrev.classList.remove('hidden');

            if (step === totalSteps) {
              footer.classList.add('hidden');
            } else {
              footer.classList.remove('hidden');
              btnNext.innerHTML = (step === totalSteps - 1) ? 'Buat Kotak Masuk' : 'Lanjutkan';
            }
          }

          function nextStep() {
            if (currentStep < totalSteps) goToStep(currentStep + 1);
          }

          function prevStep() {
            if (currentStep > 1) goToStep(currentStep - 1);
          }
        `}} />
      </div>
    </div>
  );
};
