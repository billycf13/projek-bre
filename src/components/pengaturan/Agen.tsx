import type { FC } from "hono/jsx";
import { Icon } from "../Icon";

// Dummy data for agents
const DUMMY_AGENTS = [
  {
    id: 1,
    name: "Billy",
    email: "billy@projekbre.com",
    role: "Admin",
    verified: true,
    avatar: "B"
  },
  {
    id: 2,
    name: "Siti Nurhaliza",
    email: "siti@projekbre.com",
    role: "Agen",
    verified: true,
    avatar: "S"
  },
  {
    id: 3,
    name: "Budi Santoso",
    email: "budi@projekbre.com",
    role: "Agen",
    verified: false,
    avatar: "B"
  }
];

export const Agen: FC = () => {
  return (
    <div class="space-y-6 pb-6">
      {/* Header */}
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-xl font-bold text-[var(--text-primary)] m-0">Daftar Agen</h2>
          <p class="text-sm text-[var(--text-muted)] mt-1 mb-0">Kelola anggota tim yang dapat mengakses kotak masuk.</p>
        </div>
        <button class="flex items-center gap-2 bg-[var(--accent)] hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors border-none shadow-sm cursor-pointer">
          <Icon name="Plus" size={16} />
          Tambah Agen
        </button>
      </div>

      {/* Main Content - Table */}
      <div class="bg-[var(--bg-nav)] border border-[var(--border-subtle)] rounded-xl overflow-hidden shadow-sm">
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="border-b border-[var(--border-subtle)] bg-[var(--bg-body)]">
                <th class="px-6 py-3 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">Nama</th>
                <th class="px-6 py-3 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">Role</th>
                <th class="px-6 py-3 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">Terverifikasi</th>
                <th class="px-6 py-3 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider text-right">Aksi</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[var(--border-subtle)]">
              {DUMMY_AGENTS.map((agent) => (
                <tr class="hover:bg-[var(--bg-nav-hover)] transition-colors group">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center gap-3">
                      <div class="w-9 h-9 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center font-bold text-sm">
                        {agent.avatar}
                      </div>
                      <div>
                        <div class="text-sm font-medium text-[var(--text-primary)]">{agent.name}</div>
                        <div class="text-xs text-[var(--text-muted)]">{agent.email}</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span class={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${agent.role === 'Admin'
                        ? 'bg-purple-500/10 text-purple-500 border-purple-500/20'
                        : 'bg-blue-500/10 text-[var(--accent)] border-blue-500/20'
                      }`}>
                      {agent.role}
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    {agent.verified ? (
                      <span class="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-500">
                        <Icon name="BadgeCheck" size={16} />
                        Terverifikasi
                      </span>
                    ) : (
                      <span class="inline-flex items-center gap-1.5 text-xs font-medium text-amber-500">
                        <Icon name="Clock" size={16} />
                        Menunggu
                      </span>
                    )}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div class="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button class="p-1.5 text-[var(--text-muted)] hover:text-[var(--accent)] bg-transparent border-none cursor-pointer rounded-md hover:bg-[var(--bg-body)] transition-colors" title="Edit">
                        <Icon name="Pencil" size={16} />
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
