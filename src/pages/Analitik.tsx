import type { FC } from "hono/jsx";
import { Layout } from "../components/Layout";
import { Icon } from "../components/Icon";

export const Analitik: FC = () => {
  return (
    <Layout title="Analitik — Projek Bre" active="/analitik">
      <div class="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-2xl font-bold text-[var(--text-primary)] m-0">Analitik</h1>
            <p class="text-sm text-[var(--text-muted)] mt-1">Pantau performa pesan dan tim Anda secara real-time.</p>
          </div>
          <div class="flex items-center gap-2">
            <button class="bg-[var(--bg-nav)] border border-[var(--border-subtle)] text-[var(--text-primary)] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[var(--bg-nav-hover)] transition-colors cursor-pointer flex items-center gap-2">
              <Icon name="Calendar" size={16} />
              7 Hari Terakhir
              <Icon name="ChevronDown" size={14} />
            </button>
            <button class="bg-[var(--accent)] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors border-none shadow-sm cursor-pointer flex items-center gap-2">
              <Icon name="Download" size={16} />
              Ekspor Data
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Total Percakapan", value: "1,284", change: "+12.5%", icon: "MessageSquare", up: true },
            { label: "Pesan Terkirim", value: "8,432", change: "+8.2%", icon: "Send", up: true },
            { label: "Waktu Respon Rata-rata", value: "4m 12s", change: "-2.4%", icon: "Clock", up: false },
            { label: "Tingkat Penyelesaian", value: "94.2%", change: "+1.2%", icon: "CheckCircle2", up: true },
          ].map((stat) => (
            <div class="bg-[var(--bg-nav)] border border-[var(--border-subtle)] p-5 rounded-xl shadow-sm">
              <div class="flex items-center justify-between mb-3">
                <div class="p-2 bg-[var(--bg-body)] rounded-lg text-[var(--accent)]">
                  <Icon name={stat.icon as any} size={20} />
                </div>
                <span class={`text-xs font-bold px-2 py-0.5 rounded-full ${stat.up ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'}`}>
                  {stat.change}
                </span>
              </div>
              <h3 class="text-2xl font-bold text-[var(--text-primary)] mb-1">{stat.value}</h3>
              <p class="text-xs text-[var(--text-muted)] font-medium uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Charts Row */}
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Chart - Trends */}
          <div class="lg:col-span-2 bg-[var(--bg-nav)] border border-[var(--border-subtle)] rounded-xl p-6 shadow-sm">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-sm font-bold text-[var(--text-primary)] m-0 uppercase tracking-wider">Tren Percakapan Harian</h3>
              <div class="flex items-center gap-4">
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 rounded-full bg-[var(--accent)]"></span>
                  <span class="text-xs text-[var(--text-muted)]">Minggu ini</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 rounded-full bg-[var(--border-subtle)]"></span>
                  <span class="text-xs text-[var(--text-muted)]">Minggu lalu</span>
                </div>
              </div>
            </div>
            {/* SVG Mock Chart */}
            <div class="h-64 w-full relative pt-4">
               <svg class="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                 {/* Grid Lines */}
                 <line x1="0" y1="0" x2="100" y2="0" stroke="var(--border-subtle)" stroke-width="0.1" />
                 <line x1="0" y1="10" x2="100" y2="10" stroke="var(--border-subtle)" stroke-width="0.1" />
                 <line x1="0" y1="20" x2="100" y2="20" stroke="var(--border-subtle)" stroke-width="0.1" />
                 <line x1="0" y1="30" x2="100" y2="30" stroke="var(--border-subtle)" stroke-width="0.1" />
                 <line x1="0" y1="40" x2="100" y2="40" stroke="var(--border-subtle)" stroke-width="0.2" />
                 
                 {/* Areas */}
                 <path d="M0 40 L0 25 L15 28 L30 15 L45 20 L60 8 L75 18 L90 12 L100 15 L100 40 Z" fill="var(--accent)" fill-opacity="0.1" />
                 
                 {/* Lines */}
                 <path d="M0 25 L15 28 L30 15 L45 20 L60 8 L75 18 L90 12 L100 15" fill="none" stroke="var(--accent)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                 <path d="M0 32 L15 30 L30 35 L45 28 L60 30 L75 32 L90 28 L100 30" fill="none" stroke="var(--border-subtle)" stroke-width="0.5" stroke-dasharray="1" />
               </svg>
               {/* Labels */}
               <div class="flex justify-between mt-4 px-1">
                 {['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'].map(day => (
                   <span class="text-[10px] text-[var(--text-muted)] font-medium">{day}</span>
                 ))}
               </div>
            </div>
          </div>

          {/* Side Chart - Channels */}
          <div class="bg-[var(--bg-nav)] border border-[var(--border-subtle)] rounded-xl p-6 shadow-sm">
            <h3 class="text-sm font-bold text-[var(--text-primary)] mb-6 uppercase tracking-wider">Distribusi Saluran</h3>
            <div class="flex flex-col items-center justify-center h-64 gap-6">
               {/* CSS Donut Pie */}
               <div class="relative w-32 h-32 rounded-full border-[12px] border-[var(--bg-body)] flex items-center justify-center" style="background: conic-gradient(var(--accent) 0% 65%, #10b981 65% 85%, #f59e0b 85% 100%)">
                  <div class="absolute inset-0 w-24 h-24 m-auto bg-[var(--bg-nav)] rounded-full flex flex-col items-center justify-center shadow-inner">
                    <span class="text-xl font-bold">1.2k</span>
                    <span class="text-[8px] text-[var(--text-muted)] font-bold uppercase tracking-tighter">Pesan</span>
                  </div>
               </div>
               
               {/* Legend */}
               <div class="w-full space-y-3 pt-4">
                 {[
                   { label: 'WhatsApp', percent: '65%', color: 'bg-[var(--accent)]' },
                   { label: 'Email', percent: '20%', color: 'bg-emerald-500' },
                   { label: 'Sosmed', percent: '15%', color: 'bg-amber-500' },
                 ].map(item => (
                   <div class="flex items-center justify-between">
                     <div class="flex items-center gap-2">
                       <span class={`w-2 h-2 rounded-full ${item.color}`}></span>
                       <span class="text-xs text-[var(--text-muted)]">{item.label}</span>
                     </div>
                     <span class="text-xs font-bold text-[var(--text-primary)]">{item.percent}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>

        </div>

        {/* Bottom Section - Top Agents */}
        <div class="bg-[var(--bg-nav)] border border-[var(--border-subtle)] rounded-xl overflow-hidden shadow-sm">
          <div class="px-6 py-4 border-b border-[var(--border-subtle)] bg-[var(--bg-body)] flex items-center justify-between">
            <h3 class="text-sm font-bold text-[var(--text-primary)] m-0 uppercase tracking-wider">Peringkat Agen Teraktif</h3>
            <button class="text-[var(--accent)] text-xs font-bold hover:underline bg-transparent border-none cursor-pointer">Lihat Semua</button>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest border-b border-[var(--border-subtle)]">
                  <th class="px-6 py-3">Agen</th>
                  <th class="px-6 py-3">Percakapan</th>
                  <th class="px-6 py-3">Respon Rata-rata</th>
                  <th class="px-6 py-3">Kepuasan</th>
                  <th class="px-6 py-3 text-right">Efisiensi</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[var(--border-subtle)]">
                {[
                  { name: 'Billy', conv: 452, time: '1m 24s', rating: 4.9, eff: 98 },
                  { name: 'Siti Nurhaliza', conv: 384, time: '2m 10s', rating: 4.8, eff: 94 },
                  { name: 'Budi Santoso', conv: 215, time: '3m 45s', rating: 4.5, eff: 88 },
                ].map(agent => (
                  <tr class="hover:bg-[var(--bg-nav-hover)] transition-colors">
                    <td class="px-6 py-4">
                      <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center font-bold text-xs">
                          {agent.name.charAt(0)}
                        </div>
                        <span class="text-sm font-medium text-[var(--text-primary)]">{agent.name}</span>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-sm text-[var(--text-muted)] font-medium">{agent.conv}</td>
                    <td class="px-6 py-4 text-sm text-[var(--text-muted)]">{agent.time}</td>
                    <td class="px-6 py-4">
                      <div class="flex items-center gap-1 text-amber-500">
                        <Icon name="Star" size={14} />
                        <span class="text-sm font-bold text-[var(--text-primary)]">{agent.rating}</span>
                      </div>
                    </td>
                    <td class="px-6 py-4">
                      <div class="flex items-center justify-end gap-3">
                        <div class="flex-1 max-w-[100px] h-1.5 bg-[var(--bg-body)] rounded-full overflow-hidden">
                          <div class="h-full bg-emerald-500 rounded-full" style={`width: ${agent.eff}%`}></div>
                        </div>
                        <span class="text-xs font-bold text-[var(--text-primary)] w-8 text-right">{agent.eff}%</span>
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
