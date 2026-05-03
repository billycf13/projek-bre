import type { FC } from "hono/jsx";
import { Icon } from "../Icon";

// Revised dummy data for specific integrations
const INTEGRATIONS = [
  {
    id: "clickwhatsapp",
    name: "ClickWhatsapp",
    subtitle: "Odoo Addons",
    description: "Integrasikan database pelanggan Odoo Anda dengan sistem CRM melalui ClickWhatsapp untuk sinkronisasi kontak dan pesan.",
    connected: true,
    icon: "Smartphone",
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    id: "n8n",
    name: "n8n.io",
    subtitle: "Workflow Automation",
    description: "Hubungkan webhook CRM Anda ke n8n untuk mengotomatisasi alur kerja, notifikasi, dan pemrosesan data eksternal.",
    connected: true,
    icon: "Activity",
    color: "text-red-500",
    bg: "bg-red-500/10"
  }
];

export const Integrasi: FC = () => {
  return (
    <div class="space-y-6 pb-6">
      {/* Header */}
      <div>
        <h2 class="text-xl font-bold text-[var(--text-primary)] m-0">Integrasi</h2>
        <p class="text-sm text-[var(--text-muted)] mt-1 mb-0">Kelola koneksi antara Projek Bre dengan layanan pihak ketiga.</p>
      </div>

      {/* Main Content - Grid */}
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        {INTEGRATIONS.map((item) => (
          <div class="bg-[var(--bg-nav)] border border-[var(--border-subtle)] rounded-xl p-5 shadow-sm hover:border-[var(--accent)]/50 transition-all flex flex-col justify-between">
            <div>
              <div class="flex items-start justify-between mb-4">
                <div class={`w-12 h-12 rounded-xl flex items-center justify-center ${item.bg} ${item.color}`}>
                  <Icon name={item.icon as any} size={24} />
                </div>
                {item.connected ? (
                  <span class="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-md border border-emerald-500/20">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_4px_rgba(16,185,129,0.5)]"></span>
                    Terhubung
                  </span>
                ) : (
                  <span class="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] bg-[var(--bg-body)] px-2 py-1 rounded-md border border-[var(--border-subtle)]">
                    Tersedia
                  </span>
                )}
              </div>
              <div class="mb-2">
                <h3 class="text-base font-bold text-[var(--text-primary)] m-0">{item.name}</h3>
                <span class="text-[10px] text-[var(--text-muted)] font-semibold uppercase tracking-widest">{item.subtitle}</span>
              </div>
              <p class="text-sm text-[var(--text-muted)] leading-relaxed">
                {item.description}
              </p>
            </div>
            
            <div class="mt-6 flex items-center justify-between">
              <button class={`text-sm font-semibold border-none bg-transparent cursor-pointer transition-colors ${item.connected ? 'text-red-500 hover:text-red-400' : 'text-[var(--accent)] hover:text-blue-400'}`}>
                {item.connected ? 'Putuskan Koneksi' : 'Hubungkan Sekarang'}
              </button>
              <button class="p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] bg-[var(--bg-body)] rounded-lg border border-[var(--border-subtle)] cursor-pointer transition-colors">
                <Icon name="Settings" size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Info Card */}
      <div class="bg-[var(--bg-nav)] border border-[var(--border-subtle)] rounded-xl p-5 mt-4 flex items-center gap-4">
        <div class="w-10 h-10 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center flex-shrink-0">
          <Icon name="Info" size={20} />
        </div>
        <p class="text-xs text-[var(--text-muted)] m-0">
          Integrasi di atas memungkinkan sinkronisasi data secara *real-time*. Pastikan kunci API dan konfigurasi webhook Anda sudah benar untuk menjaga stabilitas koneksi.
        </p>
      </div>
    </div>
  );
};
