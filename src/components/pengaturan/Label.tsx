import type { FC } from "hono/jsx";
import { Icon } from "../Icon";

// Dummy data for labels
const DUMMY_LABELS = [
  {
    id: 1,
    name: "Prioritas Tinggi",
    color: "#ef4444", // Red-500
    usage: 12
  },
  {
    id: 2,
    name: "Prospek Baru",
    color: "#3b82f6", // Blue-500
    usage: 45
  },
  {
    id: 3,
    name: "Selesai",
    color: "#10b981", // Emerald-500
    usage: 128
  },
  {
    id: 4,
    name: "Follow Up",
    color: "#f59e0b", // Amber-500
    usage: 8
  }
];

export const Label: FC = () => {
  return (
    <div class="space-y-6 pb-6">
      {/* Header */}
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-xl font-bold text-[var(--text-primary)] m-0">Label</h2>
          <p class="text-sm text-[var(--text-muted)] mt-1 mb-0">Kelola label untuk mengkategorikan pesan dan kontak.</p>
        </div>
        <button class="flex items-center gap-2 bg-[var(--accent)] hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors border-none shadow-sm cursor-pointer">
          <Icon name="Plus" size={16} />
          Tambah Label
        </button>
      </div>

      {/* Main Content - Table */}
      <div class="bg-[var(--bg-nav)] border border-[var(--border-subtle)] rounded-xl overflow-hidden shadow-sm">
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="border-b border-[var(--border-subtle)] bg-[var(--bg-body)]">
                <th class="px-6 py-3 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">Nama Label</th>
                <th class="px-6 py-3 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">Penggunaan</th>
                <th class="px-6 py-3 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider text-right">Aksi</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[var(--border-subtle)]">
              {DUMMY_LABELS.map((label) => (
                <tr class="hover:bg-[var(--bg-nav-hover)] transition-colors group">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center gap-3">
                      <div 
                        class="w-3 h-3 rounded-full shadow-sm" 
                        style={`background-color: ${label.color}`}
                      ></div>
                      <span class="text-sm font-medium text-[var(--text-primary)]">{label.name}</span>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span class="text-sm text-[var(--text-muted)]">{label.usage} pesan</span>
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
