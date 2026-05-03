import type { FC } from "hono/jsx";
import { Icon } from "../Icon";

// Dummy data for connected social media accounts
const CONNECTED_ACCOUNTS = [
  { 
    id: 1, 
    platform: "Instagram", 
    username: "@projekbre.id", 
    status: "Connected", 
    icon: "Instagram",
    color: "text-pink-500",
    bg: "bg-pink-500/10"
  },
  { 
    id: 2, 
    platform: "Facebook", 
    username: "Projek Bre Official", 
    status: "Connected", 
    icon: "Facebook",
    color: "text-blue-600",
    bg: "bg-blue-600/10"
  },
  { 
    id: 3, 
    platform: "Twitter / X", 
    username: "@projekbre", 
    status: "Disconnected", 
    icon: "Twitter",
    color: "text-[var(--text-primary)]",
    bg: "bg-[var(--bg-body)]"
  },
  { 
    id: 4, 
    platform: "LinkedIn", 
    username: "Projek Bre Indonesia", 
    status: "Connected", 
    icon: "Linkedin",
    color: "text-blue-700",
    bg: "bg-blue-700/10"
  },
  { 
    id: 5, 
    platform: "TikTok", 
    username: "projekbre_official", 
    status: "Connected", 
    icon: "TikTok",
    color: "text-[var(--text-primary)]",
    bg: "bg-[var(--bg-body)]"
  },
  { 
    id: 6, 
    platform: "YouTube Shorts", 
    username: "Projek Bre", 
    status: "Connected", 
    icon: "Youtube",
    color: "text-red-600",
    bg: "bg-red-600/10"
  },
];

export const SosialMedia: FC = () => {
  return (
    <div class="space-y-6 pb-6">
      {/* Header */}
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-xl font-bold text-[var(--text-primary)] m-0">Sosial Media</h2>
          <p class="text-sm text-[var(--text-muted)] mt-1 mb-0">Kelola akun sosial media yang terhubung untuk fitur penjadwalan konten.</p>
        </div>
        <button class="flex items-center gap-2 bg-[var(--accent)] hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors border-none shadow-sm cursor-pointer">
          <Icon name="Plus" size={16} />
          Hubungkan Akun Baru
        </button>
      </div>

      {/* Account Grid */}
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        {CONNECTED_ACCOUNTS.map((acc) => (
          <div class="bg-[var(--bg-nav)] border border-[var(--border-subtle)] rounded-xl p-5 shadow-sm hover:border-[var(--accent)]/50 transition-all flex flex-col justify-between">
            <div class="flex items-start justify-between mb-6">
              <div class="flex items-center gap-4">
                <div class={`w-12 h-12 rounded-xl flex items-center justify-center ${acc.bg} ${acc.color}`}>
                  <Icon name={acc.icon as any} size={24} />
                </div>
                <div>
                  <h3 class="text-base font-bold text-[var(--text-primary)] m-0">{acc.platform}</h3>
                  <p class="text-sm text-[var(--text-muted)] m-0 mt-0.5">{acc.username}</p>
                </div>
              </div>
              <div class="flex flex-col items-end gap-2">
                <span class={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${acc.status === 'Connected' ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'}`}>
                  {acc.status}
                </span>
              </div>
            </div>
            
            <div class="flex items-center justify-between pt-4 border-t border-[var(--border-subtle)]">
              <button class="text-xs font-bold text-[var(--accent)] hover:underline bg-transparent border-none cursor-pointer">
                Pengaturan
              </button>
              <button class="p-1.5 text-[var(--text-muted)] hover:text-red-500 bg-transparent border-none cursor-pointer rounded-lg hover:bg-red-500/10 transition-colors" title="Putuskan Koneksi">
                <Icon name="Unlink" size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Info Box */}
      <div class="bg-amber-500/5 border border-amber-500/20 rounded-xl p-4 flex gap-4">
        <div class="text-amber-500 flex-shrink-0">
          <Icon name="AlertCircle" size={20} />
        </div>
        <p class="text-xs text-amber-700 leading-relaxed m-0">
          Beberapa platform seperti Instagram memerlukan akun tipe **Business** atau **Creator** yang terhubung dengan Facebook Page untuk dapat dijadwalkan secara otomatis melalui API.
        </p>
      </div>
    </div>
  );
};
