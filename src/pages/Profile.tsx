import type { FC } from "hono/jsx";
import { Layout } from "../components/Layout";
import { Icon } from "../components/Icon";

export const Profile: FC = () => {
  return (
    <Layout title="Profil Saya — Projek Bre" active="/profile">
      <div class="max-w-4xl mx-auto space-y-6">
        
        {/* Profile Header Card */}
        <div class="bg-[var(--bg-nav)] border border-[var(--border-subtle)] rounded-xl overflow-hidden shadow-sm relative">
          <div class="h-32 bg-gradient-to-r from-[var(--accent)] to-blue-600"></div>
          <div class="px-8 pb-8 flex flex-col sm:flex-row items-end gap-6 -mt-12 relative z-10">
            <div class="relative">
              <div class="w-32 h-32 rounded-2xl bg-[var(--bg-body)] border-4 border-[var(--bg-nav)] flex items-center justify-center text-[var(--accent)] text-4xl font-bold shadow-lg overflow-hidden">
                B
                {/* <img src="..." class="w-full h-full object-cover" /> */}
              </div>
              <button class="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-[var(--bg-nav)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-primary)] hover:text-[var(--accent)] shadow-sm cursor-pointer transition-colors">
                <Icon name="Camera" size={16} />
              </button>
            </div>
            <div class="flex-1 mb-2">
              <h1 class="text-2xl font-bold text-[var(--text-primary)] m-0">Billy</h1>
              <p class="text-[var(--text-muted)] m-0 flex items-center gap-2 mt-1">
                <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-purple-500/10 text-purple-500 border border-purple-500/20">
                  Administrator
                </span>
                <span class="w-1 h-1 rounded-full bg-[var(--border-subtle)]"></span>
                billy@projekbre.com
              </p>
            </div>
            <div class="mb-2">
              <button class="bg-[var(--accent)] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors border-none shadow-sm cursor-pointer flex items-center gap-2">
                <Icon name="UserCheck" size={16} />
                Simpan Profil
              </button>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column - Main Info */}
          <div class="lg:col-span-2 space-y-6">
            
            {/* Informasi Pribadi */}
            <div class="bg-[var(--bg-nav)] border border-[var(--border-subtle)] rounded-xl shadow-sm overflow-hidden">
              <div class="px-6 py-4 border-b border-[var(--border-subtle)] flex items-center gap-2">
                <Icon name="User" size={18} class="text-[var(--text-muted)]" />
                <h3 class="font-bold text-[var(--text-primary)] m-0 text-sm uppercase tracking-wider">Informasi Pribadi</h3>
              </div>
              <div class="p-6 space-y-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-bold text-[var(--text-muted)] uppercase tracking-widest mb-1.5">Nama Lengkap</label>
                    <input type="text" value="Billy" class="w-full bg-[var(--bg-body)] border border-[var(--border-subtle)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors" />
                  </div>
                  <div>
                    <label class="block text-xs font-bold text-[var(--text-muted)] uppercase tracking-widest mb-1.5">Alamat Email</label>
                    <input type="email" value="billy@projekbre.com" class="w-full bg-[var(--bg-body)] border border-[var(--border-subtle)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors" />
                  </div>
                  <div>
                    <label class="block text-xs font-bold text-[var(--text-muted)] uppercase tracking-widest mb-1.5">Nomor Telepon</label>
                    <input type="text" value="+62 812 3456 7890" class="w-full bg-[var(--bg-body)] border border-[var(--border-subtle)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors" />
                  </div>
                  <div>
                    <label class="block text-xs font-bold text-[var(--text-muted)] uppercase tracking-widest mb-1.5">Jabatan</label>
                    <input type="text" value="Lead Developer" class="w-full bg-[var(--bg-body)] border border-[var(--border-subtle)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors" />
                  </div>
                </div>
                <div>
                  <label class="block text-xs font-bold text-[var(--text-muted)] uppercase tracking-widest mb-1.5">Bio Singkat</label>
                  <textarea rows={3} class="w-full bg-[var(--bg-body)] border border-[var(--border-subtle)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none">Membangun masa depan CRM yang lebih baik dan efisien.</textarea>
                </div>
              </div>
            </div>

            {/* Keamanan */}
            <div class="bg-[var(--bg-nav)] border border-[var(--border-subtle)] rounded-xl shadow-sm overflow-hidden">
              <div class="px-6 py-4 border-b border-[var(--border-subtle)] flex items-center gap-2">
                <Icon name="ShieldLock" size={18} class="text-[var(--text-muted)]" />
                <h3 class="font-bold text-[var(--text-primary)] m-0 text-sm uppercase tracking-wider">Keamanan Akun</h3>
              </div>
              <div class="p-6 space-y-4">
                <div class="flex items-center justify-between p-4 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-body)]">
                  <div class="flex items-center gap-4">
                    <div class="w-10 h-10 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center">
                      <Icon name="KeyRound" size={20} />
                    </div>
                    <div>
                      <h4 class="text-sm font-bold text-[var(--text-primary)] m-0">Ubah Kata Sandi</h4>
                      <p class="text-xs text-[var(--text-muted)] m-0 mt-0.5">Terakhir diubah 3 bulan yang lalu</p>
                    </div>
                  </div>
                  <button class="px-3 py-1.5 text-xs font-bold text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white border border-[var(--accent)]/30 rounded-lg transition-all cursor-pointer bg-transparent">
                    Perbarui
                  </button>
                </div>
                
                <div class="flex items-center justify-between p-4 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-body)]">
                  <div class="flex items-center gap-4">
                    <div class="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                      <Icon name="Smartphone" size={20} />
                    </div>
                    <div>
                      <h4 class="text-sm font-bold text-[var(--text-primary)] m-0">Autentikasi 2 Faktor</h4>
                      <p class="text-xs text-[var(--text-muted)] m-0 mt-0.5">Berikan perlindungan ekstra pada akun Anda</p>
                    </div>
                  </div>
                  <button class="px-3 py-1.5 text-xs font-bold text-emerald-500 hover:bg-emerald-500 hover:text-white border border-emerald-500/30 rounded-lg transition-all cursor-pointer bg-transparent">
                    Aktifkan
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column - Sidebar info */}
          <div class="space-y-6">
            
            {/* Notifikasi & Preferensi */}
            <div class="bg-[var(--bg-nav)] border border-[var(--border-subtle)] rounded-xl shadow-sm overflow-hidden">
              <div class="px-6 py-4 border-b border-[var(--border-subtle)]">
                <h3 class="font-bold text-[var(--text-primary)] m-0 text-sm uppercase tracking-wider">Preferensi</h3>
              </div>
              <div class="p-6 space-y-6">
                <div class="space-y-3">
                  <h4 class="text-xs font-bold text-[var(--text-muted)] uppercase tracking-widest">Notifikasi</h4>
                  <div class="space-y-3">
                    {[
                      { label: 'Pesan Baru', enabled: true },
                      { label: 'Laporan Mingguan', enabled: true },
                      { label: 'Login Terdeteksi', enabled: false },
                    ].map(pref => (
                      <label class="flex items-center justify-between cursor-pointer group">
                        <span class="text-sm text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">{pref.label}</span>
                        <div class={`w-9 h-5 rounded-full relative transition-colors ${pref.enabled ? 'bg-[var(--accent)]' : 'bg-[var(--border-subtle)]'}`}>
                          <div class={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${pref.enabled ? 'right-1' : 'left-1'}`}></div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <hr class="border-[var(--border-subtle)]" />

                <div class="space-y-3">
                  <h4 class="text-xs font-bold text-[var(--text-muted)] uppercase tracking-widest">Statistik Sesi</h4>
                  <div class="p-3 bg-[var(--bg-body)] rounded-lg space-y-2">
                    <div class="flex justify-between text-xs">
                      <span class="text-[var(--text-muted)]">Login terakhir</span>
                      <span class="font-bold text-[var(--text-primary)]">Hari ini, 19:45</span>
                    </div>
                    <div class="flex justify-between text-xs">
                      <span class="text-[var(--text-muted)]">IP Address</span>
                      <span class="font-bold text-[var(--text-primary)]">192.168.1.102</span>
                    </div>
                    <div class="flex justify-between text-xs">
                      <span class="text-[var(--text-muted)]">Perangkat</span>
                      <span class="font-bold text-[var(--text-primary)]">Chrome (Linux)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Logout Action */}
            <button class="w-full flex items-center justify-center gap-3 p-4 bg-red-500/5 hover:bg-red-500 text-red-500 hover:text-white border border-red-500/20 rounded-xl transition-all font-bold text-sm cursor-pointer group">
              <Icon name="LogOut" size={20} class="group-hover:translate-x-1 transition-transform" />
              Keluar dari Akun
            </button>

          </div>

        </div>

      </div>
    </Layout>
  );
};
