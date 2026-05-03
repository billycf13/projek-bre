import type { FC } from "hono/jsx";
import { Layout } from "../components/Layout";
import { Icon } from "../components/Icon";

const SCHEDULED_POSTS = [
  {
    id: 1,
    title: "Promo Lebaran 2026",
    content: "Dapatkan diskon hingga 50% untuk semua produk kami selama bulan Syawal! Jangan sampai ketinggalan.",
    channels: ["Instagram", "WhatsApp"],
    time: "Besok, 09:00",
    status: "Pending",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=300&h=200&fit=crop"
  },
  {
    id: 2,
    title: "Tips CRM Efisien",
    content: "Tahukah Anda bahwa respon cepat dapat meningkatkan konversi hingga 3x lipat? Gunakan fitur Jawaban Cepat kami!",
    channels: ["LinkedIn", "Twitter"],
    time: "Senin, 14 Mei, 10:30",
    status: "Draft",
    image: null
  },
  {
    id: 3,
    title: "Update Fitur v2.1",
    content: "Kami baru saja merilis pembaruan untuk sistem integrasi n8n. Cek selengkapnya di dashboard Anda.",
    channels: ["Instagram", "Facebook", "WhatsApp"],
    time: "12 Mei 2026, 08:00",
    status: "Scheduled",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop"
  }
];

export const Schedule: FC = () => {
  return (
    <Layout title="Penjadwalan Konten — Projek Bre" active="/schedule">
      <div class="max-w-6xl mx-auto space-y-6">
        
        {/* Header */}
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-2xl font-bold text-[var(--text-primary)] m-0">Schedule</h1>
            <p class="text-sm text-[var(--text-muted)] mt-1">Kelola dan jadwalkan konten media sosial Anda dalam satu tempat.</p>
          </div>
          <button class="bg-[var(--accent)] text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-600 transition-all border-none shadow-lg shadow-blue-500/20 cursor-pointer flex items-center gap-2">
            <Icon name="CalendarPlus" size={18} />
            Buat Jadwal Baru
          </button>
        </div>

        {/* View Switcher */}
        <div class="flex items-center gap-2 p-1 bg-[var(--bg-nav)] border border-[var(--border-subtle)] rounded-xl w-fit">
          <button class="px-4 py-1.5 rounded-lg text-xs font-bold bg-[var(--bg-body)] text-[var(--accent)] shadow-sm border-none cursor-pointer">Daftar</button>
          <button class="px-4 py-1.5 rounded-lg text-xs font-bold text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors border-none bg-transparent cursor-pointer">Kalender</button>
        </div>

        {/* List of Scheduled Posts */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SCHEDULED_POSTS.map(post => (
            <div class="bg-[var(--bg-nav)] border border-[var(--border-subtle)] rounded-2xl overflow-hidden shadow-sm flex flex-col group hover:border-[var(--accent)]/50 transition-all">
              {post.image ? (
                <div class="h-40 overflow-hidden relative">
                  <img src={post.image} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={post.title} />
                  <div class="absolute top-3 left-3 flex gap-1">
                    {post.channels.map(ch => (
                      <div class="bg-black/40 backdrop-blur-md text-white p-1.5 rounded-lg border border-white/10" title={ch}>
                         <Icon name={ch === 'Instagram' ? 'Instagram' : ch === 'WhatsApp' ? 'MessageCircle' : ch === 'LinkedIn' ? 'Linkedin' : 'Twitter'} size={14} />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div class="h-40 bg-[var(--bg-body)] flex items-center justify-center border-b border-[var(--border-subtle)] relative">
                   <Icon name="Image" size={40} class="text-[var(--border-subtle)]" />
                   <div class="absolute top-3 left-3 flex gap-1 text-[var(--text-primary)]">
                    {post.channels.map(ch => (
                      <div class="bg-[var(--bg-nav)] text-[var(--text-primary)] p-1.5 rounded-lg border border-[var(--border-subtle)] shadow-sm" title={ch}>
                         <Icon name={ch === 'Instagram' ? 'Instagram' : ch === 'WhatsApp' ? 'MessageCircle' : ch === 'LinkedIn' ? 'Linkedin' : 'Twitter'} size={14} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div class="p-5 flex-1 flex flex-col">
                <div class="flex items-center justify-between mb-2">
                  <span class={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md ${
                    post.status === 'Pending' ? 'text-amber-500 bg-amber-500/10 border border-amber-500/20' : 
                    post.status === 'Draft' ? 'text-[var(--text-muted)] bg-[var(--bg-body)] border border-[var(--border-subtle)]' : 
                    'text-emerald-500 bg-emerald-500/10 border border-emerald-500/20'
                  }`}>
                    {post.status}
                  </span>
                  <div class="flex items-center gap-1.5 text-[var(--text-muted)] text-[10px] font-medium">
                    <Icon name="Clock" size={12} />
                    {post.time}
                  </div>
                </div>
                
                <h3 class="text-base font-bold text-[var(--text-primary)] mb-2 line-clamp-1">{post.title}</h3>
                <p class="text-sm text-[var(--text-muted)] line-clamp-3 mb-6 leading-relaxed flex-1 italic">
                  "{post.content}"
                </p>
                
                <div class="flex items-center justify-between pt-4 border-t border-[var(--border-subtle)] mt-auto">
                  <div class="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div class="w-6 h-6 rounded-full bg-[var(--bg-body)] border-2 border-[var(--bg-nav)] flex items-center justify-center text-[10px] font-bold">
                        <Icon name="User" size={10} />
                      </div>
                    ))}
                  </div>
                  <div class="flex items-center gap-1">
                    <button class="p-1.5 text-[var(--text-muted)] hover:text-[var(--accent)] bg-transparent border-none cursor-pointer rounded-lg hover:bg-[var(--bg-body)] transition-colors">
                      <Icon name="Pencil" size={16} />
                    </button>
                    <button class="p-1.5 text-[var(--text-muted)] hover:text-red-500 bg-transparent border-none cursor-pointer rounded-lg hover:bg-red-500/10 transition-colors">
                      <Icon name="Trash2" size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Add New Mock Card */}
          <button class="bg-[var(--bg-nav)] border-2 border-dashed border-[var(--border-subtle)] rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:border-[var(--accent)] hover:bg-[var(--accent)]/5 transition-all group cursor-pointer h-full min-h-[350px]">
            <div class="w-12 h-12 rounded-full bg-[var(--bg-body)] text-[var(--text-muted)] group-hover:text-[var(--accent)] flex items-center justify-center transition-colors">
              <Icon name="Plus" size={24} />
            </div>
            <div class="text-center">
              <div class="text-sm font-bold text-[var(--text-primary)]">Jadwalkan Postingan</div>
              <p class="text-xs text-[var(--text-muted)] mt-1 max-w-[150px]">Klik untuk menambah antrean konten baru</p>
            </div>
          </button>
        </div>

      </div>
    </Layout>
  );
};
