import type { FC } from "hono/jsx";
import { Layout } from "../components/Layout";
import { Icon } from "../components/Icon";

const CAMPAIGNS = [
  {
    id: 1,
    name: "Ramadan Flash Sale",
    type: "Broadcast WhatsApp",
    status: "Running",
    sent: 12500,
    delivered: "98%",
    opened: "85%",
    date: "4 Mei 2026",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  },
  {
    id: 2,
    name: "Newsletter Mei 2026",
    type: "Email Marketing",
    status: "Completed",
    sent: 45000,
    delivered: "99.5%",
    opened: "24%",
    date: "1 Mei 2026",
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    id: 3,
    name: "Promo Weekend Akhir Bulan",
    type: "SMS Blast",
    status: "Draft",
    sent: 0,
    delivered: "-",
    opened: "-",
    date: "Belum dijadwalkan",
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  }
];

export const Kampanye: FC = () => {
  return (
    <Layout title="Kampanye Marketing — Projek Bre" active="/kampanye">
      <div class="max-w-6xl mx-auto space-y-6">
        
        {/* Header */}
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-2xl font-bold text-[var(--text-primary)] m-0">Kampanye</h1>
            <p class="text-sm text-[var(--text-muted)] mt-1">Kelola dan pantau performa kampanye pemasaran Anda di berbagai platform.</p>
          </div>
          <button class="bg-[var(--accent)] text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-600 transition-all border-none shadow-lg shadow-blue-500/20 cursor-pointer flex items-center gap-2">
            <Icon name="Megaphone" size={18} />
            Buat Kampanye Baru
          </button>
        </div>

        {/* Stats Grid */}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "Total Terkirim", value: "57.5k", icon: "Send" },
            { label: "Rata-rata Terbuka", value: "42.8%", icon: "Eye" },
            { label: "Klik Tautan", value: "8.4k", icon: "MousePointer2" },
          ].map(stat => (
            <div class="bg-[var(--bg-nav)] border border-[var(--border-subtle)] p-5 rounded-2xl flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-[var(--bg-body)] text-[var(--accent)] flex items-center justify-center shadow-sm">
                <Icon name={stat.icon as any} size={22} />
              </div>
              <div>
                <div class="text-xs text-[var(--text-muted)] font-bold uppercase tracking-widest">{stat.label}</div>
                <div class="text-xl font-bold text-[var(--text-primary)] mt-0.5">{stat.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Campaign List Table */}
        <div class="bg-[var(--bg-nav)] border border-[var(--border-subtle)] rounded-2xl overflow-hidden shadow-sm">
          <div class="px-6 py-4 border-b border-[var(--border-subtle)] bg-[var(--bg-body)] flex items-center justify-between">
            <h3 class="text-sm font-bold text-[var(--text-primary)] m-0 uppercase tracking-wider">Daftar Kampanye</h3>
            <div class="flex items-center gap-2">
              <button class="p-1.5 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors bg-transparent border-none cursor-pointer">
                <Icon name="Filter" size={16} />
              </button>
              <button class="p-1.5 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors bg-transparent border-none cursor-pointer">
                <Icon name="Search" size={16} />
              </button>
            </div>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest border-b border-[var(--border-subtle)] bg-[var(--bg-body)]">
                  <th class="px-6 py-3">Nama Kampanye</th>
                  <th class="px-6 py-3">Status</th>
                  <th class="px-6 py-3 text-center">Terkirim</th>
                  <th class="px-6 py-3 text-center">Delivered</th>
                  <th class="px-6 py-3 text-center">Opened</th>
                  <th class="px-6 py-3 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[var(--border-subtle)]">
                {CAMPAIGNS.map(camp => (
                  <tr class="hover:bg-[var(--bg-nav-hover)] transition-colors group">
                    <td class="px-6 py-4">
                      <div class="flex items-center gap-3">
                        <div class={`w-10 h-10 rounded-lg flex items-center justify-center ${camp.bg} ${camp.color} flex-shrink-0`}>
                          <Icon name={camp.type.includes('WhatsApp') ? 'MessageCircle' : camp.type.includes('Email') ? 'Mail' : 'Smartphone'} size={20} />
                        </div>
                        <div>
                          <div class="text-sm font-bold text-[var(--text-primary)]">{camp.name}</div>
                          <div class="text-[10px] text-[var(--text-muted)] font-medium mt-0.5">{camp.type} • {camp.date}</div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4">
                      <span class={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                        camp.status === 'Running' ? 'text-blue-500 bg-blue-500/10 border-blue-500/20' : 
                        camp.status === 'Completed' ? 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20' : 
                        'text-[var(--text-muted)] bg-[var(--bg-body)] border-[var(--border-subtle)]'
                      }`}>
                        {camp.status === 'Running' && <span class="w-1 h-1 rounded-full bg-blue-500 animate-pulse"></span>}
                        {camp.status}
                      </span>
                    </td>
                    <td class="px-6 py-4 text-center text-sm font-medium text-[var(--text-primary)]">
                      {camp.sent.toLocaleString()}
                    </td>
                    <td class="px-6 py-4 text-center">
                      <div class="text-sm font-medium text-[var(--text-primary)]">{camp.delivered}</div>
                      <div class="w-16 h-1 bg-[var(--bg-body)] rounded-full mx-auto mt-1 overflow-hidden">
                        <div class="h-full bg-emerald-500" style={`width: ${camp.delivered === '-' ? '0' : camp.delivered}`}></div>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-center">
                      <div class="text-sm font-medium text-[var(--text-primary)]">{camp.opened}</div>
                      <div class="w-16 h-1 bg-[var(--bg-body)] rounded-full mx-auto mt-1 overflow-hidden">
                        <div class="h-full bg-blue-500" style={`width: ${camp.opened === '-' ? '0' : camp.opened}`}></div>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-right">
                      <div class="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                         <button class="p-1.5 text-[var(--text-muted)] hover:text-[var(--accent)] bg-transparent border-none cursor-pointer rounded-lg hover:bg-[var(--bg-body)] transition-colors">
                           <Icon name="BarChart3" size={16} />
                         </button>
                         <button class="p-1.5 text-[var(--text-muted)] hover:text-[var(--accent)] bg-transparent border-none cursor-pointer rounded-lg hover:bg-[var(--bg-body)] transition-colors">
                           <Icon name="MoreVertical" size={16} />
                         </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </Layout>
  );
};
