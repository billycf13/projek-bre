import type { FC } from "hono/jsx";
import { Icon } from "../Icon";

// Dummy data for quick replies
const DUMMY_QUICK_REPLIES = [
  {
    id: 1,
    shortcut: "halo",
    title: "Salam Pembuka",
    message: "Halo! Terima kasih telah menghubungi kami. Ada yang bisa kami bantu hari ini?"
  },
  {
    id: 2,
    shortcut: "harga",
    title: "Info Harga",
    message: "Berikut adalah daftar harga layanan kami: \n1. Paket Basic: Rp 100k\n2. Paket Pro: Rp 500k\n3. Paket Enterprise: Hubungi Kami"
  },
  {
    id: 3,
    shortcut: "terimakasih",
    title: "Terima Kasih",
    message: "Sama-sama! Senang bisa membantu Anda. Jika ada pertanyaan lain di masa mendatang, jangan ragu untuk menghubungi kami kembali."
  }
];

export const JawabanCepat: FC = () => {
  return (
    <div class="space-y-6 pb-6">
      {/* Header */}
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-xl font-bold text-[var(--text-primary)] m-0">Jawaban Cepat</h2>
          <p class="text-sm text-[var(--text-muted)] mt-1 mb-0">Buat templat pesan untuk membalas pelanggan dengan lebih cepat.</p>
        </div>
        <button class="flex items-center gap-2 bg-[var(--accent)] hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors border-none shadow-sm cursor-pointer">
          <Icon name="Plus" size={16} />
          Tambah Jawaban
        </button>
      </div>

      {/* Main Content - List */}
      <div class="bg-[var(--bg-nav)] border border-[var(--border-subtle)] rounded-xl overflow-hidden shadow-sm">
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="border-b border-[var(--border-subtle)] bg-[var(--bg-body)]">
                <th class="px-6 py-3 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">Pintasan</th>
                <th class="px-6 py-3 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">Konten</th>
                <th class="px-6 py-3 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider text-right">Aksi</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[var(--border-subtle)]">
              {DUMMY_QUICK_REPLIES.map((item) => (
                <tr class="hover:bg-[var(--bg-nav-hover)] transition-colors group">
                  <td class="px-6 py-4 whitespace-nowrap vertical-top align-top">
                    <span class="inline-flex items-center px-2 py-1 rounded bg-[var(--bg-body)] border border-[var(--border-subtle)] text-xs font-mono font-bold text-[var(--accent)]">
                      {item.shortcut}
                    </span>
                  </td>
                  <td class="px-6 py-4 align-top">
                    <div class="max-w-md">
                      <div class="text-sm text-[var(--text-primary)] line-clamp-2 italic leading-relaxed">
                        "{item.message}"
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium align-top">
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
