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
        <button class="flex items-center gap-2 bg-[var(--accent)] hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors border-none shadow-sm cursor-pointer">
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
    </div>
  );
};
