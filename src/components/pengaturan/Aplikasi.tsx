import type { FC } from "hono/jsx";
import { Icon } from "../Icon";

export const Aplikasi: FC = () => {
  return (
    <div class="space-y-6">
      
      {/* Profil Aplikasi */}
      <div class="bg-[var(--bg-nav)] border border-[var(--border-subtle)] rounded-xl overflow-hidden shadow-sm">
        <div class="px-6 py-4 border-b border-[var(--border-subtle)] flex items-center gap-2">
          <Icon name="MonitorSmartphone" size={18} class="text-[var(--text-muted)]" />
          <h3 class="font-bold text-[var(--text-primary)] m-0">Profil Aplikasi</h3>
        </div>
        <div class="p-6 space-y-5">
          <div class="flex flex-col sm:flex-row gap-6">
            {/* Logo */}
            <div class="flex flex-col gap-2 flex-shrink-0">
              <label class="text-sm font-medium text-[var(--text-primary)]">Logo Aplikasi</label>
              <div class="w-24 h-24 bg-[var(--bg-body)] border border-dashed border-[var(--border-subtle)] rounded-lg flex flex-col items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors cursor-pointer relative group">
                <Icon name="ImagePlus" size={24} class="mb-1" />
                <span class="text-[10px] font-medium">Unggah</span>
                <input type="file" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept="image/*" />
              </div>
            </div>
            
            {/* Nama & URL */}
            <div class="flex-1 space-y-4">
              <div>
                <label class="block text-sm font-medium text-[var(--text-primary)] mb-1.5">Nama Aplikasi</label>
                <input type="text" value="Projek Bre CRM" class="w-full bg-[var(--bg-body)] border border-[var(--border-subtle)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors" />
              </div>
              <div>
                <label class="block text-sm font-medium text-[var(--text-primary)] mb-1.5">URL Dasar (Base URL)</label>
                <input type="text" value="https://app.projekbre.com" class="w-full bg-[var(--bg-body)] border border-[var(--border-subtle)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors" />
                <p class="text-xs text-[var(--text-muted)] mt-1.5">URL utama yang digunakan untuk webhook internal dan tautan publik.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preferensi Sistem */}
      <div class="bg-[var(--bg-nav)] border border-[var(--border-subtle)] rounded-xl overflow-hidden shadow-sm">
        <div class="px-6 py-4 border-b border-[var(--border-subtle)] flex items-center gap-2">
          <Icon name="Settings2" size={18} class="text-[var(--text-muted)]" />
          <h3 class="font-bold text-[var(--text-primary)] m-0">Preferensi Sistem</h3>
        </div>
        <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label class="block text-sm font-medium text-[var(--text-primary)] mb-1.5">Zona Waktu</label>
            <div class="relative">
              <select class="w-full bg-[var(--bg-body)] border border-[var(--border-subtle)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors appearance-none pr-10">
                <option value="Asia/Jakarta" selected>Asia/Jakarta (WIB)</option>
                <option value="Asia/Makassar">Asia/Makassar (WITA)</option>
                <option value="Asia/Jayapura">Asia/Jayapura (WIT)</option>
              </select>
              <div class="absolute inset-y-0 right-3 flex items-center pointer-events-none text-[var(--text-muted)]">
                <Icon name="ChevronDown" size={16} />
              </div>
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-[var(--text-primary)] mb-1.5">Bahasa Default</label>
            <div class="relative">
              <select class="w-full bg-[var(--bg-body)] border border-[var(--border-subtle)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors appearance-none pr-10">
                <option value="id" selected>Bahasa Indonesia</option>
                <option value="en">English (US)</option>
              </select>
              <div class="absolute inset-y-0 right-3 flex items-center pointer-events-none text-[var(--text-muted)]">
                <Icon name="ChevronDown" size={16} />
              </div>
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-[var(--text-primary)] mb-1.5">Format Tanggal</label>
            <div class="relative">
              <select class="w-full bg-[var(--bg-body)] border border-[var(--border-subtle)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors appearance-none pr-10">
                <option value="DD/MM/YYYY" selected>DD/MM/YYYY (31/12/2026)</option>
                <option value="MM/DD/YYYY">MM/DD/YYYY (12/31/2026)</option>
                <option value="YYYY-MM-DD">YYYY-MM-DD (2026-12-31)</option>
              </select>
              <div class="absolute inset-y-0 right-3 flex items-center pointer-events-none text-[var(--text-muted)]">
                <Icon name="ChevronDown" size={16} />
              </div>
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-[var(--text-primary)] mb-1.5">Format Waktu</label>
            <div class="relative">
              <select class="w-full bg-[var(--bg-body)] border border-[var(--border-subtle)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors appearance-none pr-10">
                <option value="24h" selected>24 Jam (14:30)</option>
                <option value="12h">12 Jam (02:30 PM)</option>
              </select>
              <div class="absolute inset-y-0 right-3 flex items-center pointer-events-none text-[var(--text-muted)]">
                <Icon name="ChevronDown" size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pengaturan SMTP */}
      <div class="bg-[var(--bg-nav)] border border-[var(--border-subtle)] rounded-xl overflow-hidden shadow-sm">
        <div class="px-6 py-4 border-b border-[var(--border-subtle)] flex items-center justify-between">
          <div class="flex items-center gap-2">
            <Icon name="Mail" size={18} class="text-[var(--text-muted)]" />
            <h3 class="font-bold text-[var(--text-primary)] m-0">Pengaturan SMTP</h3>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs font-medium text-[var(--text-muted)]">Status:</span>
            <span class="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_4px_rgba(16,185,129,0.5)]"></span>
              Terkoneksi
            </span>
          </div>
        </div>
        <div class="p-6">
          <p class="text-sm text-[var(--text-muted)] mb-5">
            Konfigurasi server email yang digunakan untuk mengirim notifikasi, reset password, dan fitur email lainnya ke pengguna.
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div class="md:col-span-2">
              <label class="block text-sm font-medium text-[var(--text-primary)] mb-1.5">Host SMTP</label>
              <input type="text" placeholder="smtp.example.com" value="smtp.mailgun.org" class="w-full bg-[var(--bg-body)] border border-[var(--border-subtle)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors" />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-[var(--text-primary)] mb-1.5">Port SMTP</label>
              <input type="number" placeholder="587" value="587" class="w-full bg-[var(--bg-body)] border border-[var(--border-subtle)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors" />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-[var(--text-primary)] mb-1.5">Enkripsi</label>
              <div class="relative">
                <select class="w-full bg-[var(--bg-body)] border border-[var(--border-subtle)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors appearance-none pr-10">
                  <option value="none">Tidak ada</option>
                  <option value="ssl">SSL / Implicit TLS</option>
                  <option value="tls" selected>STARTTLS (Recommended)</option>
                </select>
                <div class="absolute inset-y-0 right-3 flex items-center pointer-events-none text-[var(--text-muted)]">
                  <Icon name="ChevronDown" size={16} />
                </div>
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-[var(--text-primary)] mb-1.5">Username (Email)</label>
              <input type="text" placeholder="no-reply@projekbre.com" value="postmaster@projekbre.com" class="w-full bg-[var(--bg-body)] border border-[var(--border-subtle)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors" />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-[var(--text-primary)] mb-1.5">Password</label>
              <div class="relative">
                <input type="password" value="secretpassword123" class="w-full bg-[var(--bg-body)] border border-[var(--border-subtle)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors pr-10" />
                <button class="absolute right-2 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-primary)] bg-transparent border-none cursor-pointer p-1">
                  <Icon name="EyeOff" size={16} />
                </button>
              </div>
            </div>

            <div class="md:col-span-2 pt-2 border-t border-[var(--border-subtle)] mt-2">
              <label class="block text-sm font-medium text-[var(--text-primary)] mb-1.5">Nama Pengirim (From Name)</label>
              <input type="text" placeholder="Misal: Projek Bre Support" value="Projek Bre Notifikasi" class="w-full bg-[var(--bg-body)] border border-[var(--border-subtle)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors" />
            </div>
          </div>

          <div class="flex items-center justify-between pt-4">
            <button class="text-sm font-medium text-[var(--text-primary)] bg-[var(--bg-body)] hover:bg-[var(--bg-nav-hover)] border border-[var(--border-subtle)] px-4 py-2 rounded-lg transition-colors cursor-pointer flex items-center gap-2">
              <Icon name="Send" size={14} />
              Test Koneksi
            </button>
            <p class="text-xs text-[var(--text-muted)] m-0">Terakhir sukses: Hari ini, 14:02</p>
          </div>
        </div>
      </div>

      {/* Save Actions */}
      <div class="flex items-center justify-end gap-3 pt-2 pb-6">
        <button class="px-5 py-2.5 text-sm font-medium text-[var(--text-primary)] bg-[var(--bg-nav)] hover:bg-[var(--bg-nav-hover)] border border-[var(--border-subtle)] rounded-lg cursor-pointer transition-colors shadow-sm">
          Batal
        </button>
        <button class="px-5 py-2.5 text-sm font-medium text-white bg-[var(--accent)] hover:bg-blue-600 border-none rounded-lg shadow-sm cursor-pointer transition-colors flex items-center gap-2">
          <Icon name="Save" size={16} />
          Simpan Perubahan
        </button>
      </div>

    </div>
  );
};
