import type { FC } from "hono/jsx";
import { Icon } from "../Icon";

type FooterProps = {
  total: number;
  perPage: number;
  currentPage: number;
};

export const KontakFooter: FC<FooterProps> = ({ total, perPage, currentPage }) => {
  const start = (currentPage - 1) * perPage + 1;
  const end = Math.min(start + perPage - 1, total);
  
  return (
    <div class="h-14 px-6 border-t border-[var(--border-subtle)] bg-[var(--bg-nav)] flex items-center justify-between flex-shrink-0 w-full">
      {/* Info Total */}
      <div class="text-sm text-[var(--text-muted)]">
        Menampilkan <span class="font-medium text-[var(--text-primary)]">{start}</span> hingga <span class="font-medium text-[var(--text-primary)]">{end}</span> dari <span class="font-medium text-[var(--text-primary)]">{total}</span> kontak
      </div>

      {/* Pagination Controls */}
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-2 text-sm text-[var(--text-muted)]">
          <label for="perPage">Kontak per halaman:</label>
          <select 
            id="perPage" 
            class="bg-[var(--bg-body)] border border-[var(--border-subtle)] rounded text-[var(--text-primary)] text-sm py-1 px-2 focus:outline-none focus:border-[var(--accent)]"
          >
            <option value="10" selected>10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
        </div>
        
        <div class="w-px h-5 bg-[var(--border-subtle)]"></div>

        <div class="flex items-center gap-1">
          <button class="p-1 rounded text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-nav-hover)] bg-transparent border-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
            <Icon name="ChevronLeft" size={20} />
          </button>
          <div class="text-sm px-2 text-[var(--text-primary)]">Halaman {currentPage}</div>
          <button class="p-1 rounded text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-nav-hover)] bg-transparent border-none cursor-pointer">
            <Icon name="ChevronRight" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
