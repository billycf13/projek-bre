import type { FC } from "hono/jsx";
import { Icon } from "../Icon";

export const KontakHeader: FC = () => {
  return (
    <div class="h-16 px-6 border-b border-[var(--border-subtle)] bg-[var(--bg-nav)] flex items-center justify-between flex-shrink-0 w-full">
      {/* Kiri: Judul */}
      <div class="w-1/3 flex items-center">
        <h1 class="text-lg font-semibold m-0 flex items-center gap-2">
          <Icon name="Contact" size={24} class="text-[var(--accent)]" />
          Kontak
        </h1>
      </div>

      {/* Tengah: Search */}
      <div class="w-1/3 flex justify-center">
        <div class="relative w-full max-w-md">
          <Icon name="Search" size={16} class="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
          <input
            type="text"
            placeholder="Cari nama, nomor, atau email..."
            class="w-full bg-[var(--bg-body)] border border-[var(--border-subtle)] rounded-lg py-2 pl-9 pr-4 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] placeholder:text-[var(--text-muted)] transition-colors"
          />
        </div>
      </div>

      {/* Kanan: Filter & Menu */}
      <div class="w-1/3 flex items-center justify-end gap-2">
        <button class="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-[var(--text-primary)] bg-[var(--bg-body)] border border-[var(--border-subtle)] hover:bg-[var(--bg-nav-hover)] cursor-pointer transition-colors">
          <Icon name="ListFilter" size={16} />
          Filter
        </button>
        <div class="w-px h-6 bg-[var(--border-subtle)] mx-1"></div>
        <button class="p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-nav-hover)] border-none bg-transparent cursor-pointer transition-colors">
          <Icon name="EllipsisVertical" size={20} />
        </button>
      </div>
    </div>
  );
};
