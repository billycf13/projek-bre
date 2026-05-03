import type { FC } from "hono/jsx";
import { Icon } from "../Icon";

export type ContactRow = {
  id: string;
  name: string;
  phone: string;
  email: string;
  company: string;
};

export const KontakTable: FC<{ data: ContactRow[] }> = ({ data }) => {
  return (
    <div class="w-full h-full bg-[var(--bg-body)]">
      <table class="w-full text-left border-collapse min-w-[800px] flex flex-col h-full">
        <thead class="bg-[var(--bg-nav)] z-10 border-b border-[var(--border-subtle)] shadow-sm table table-fixed w-full flex-shrink-0">
          <tr>
            <th class="py-3 px-6 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider w-[25%]">Nama</th>
            <th class="py-3 px-6 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider w-[20%]">Nomor HP</th>
            <th class="py-3 px-6 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider w-[25%]">Email</th>
            <th class="py-3 px-6 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider w-[20%]">Perusahaan</th>
            <th class="py-3 px-6 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider text-right w-[10%]">Action</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-[var(--border-subtle)] block overflow-y-auto flex-1 w-full">
          {data.map((contact) => (
            <tr class="hover:bg-[var(--bg-nav-hover)] transition-colors group table table-fixed w-full">
              <td class="py-3 px-6 text-sm font-medium text-[var(--text-primary)] w-[25%]">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-[var(--bg-nav-active)] flex items-center justify-center text-[var(--accent)] font-semibold text-xs border border-[var(--border-subtle)]">
                    {contact.name.charAt(0).toUpperCase()}
                  </div>
                  {contact.name}
                </div>
              </td>
              <td class="py-3 px-6 text-sm text-[var(--text-primary)] font-mono w-[20%]">{contact.phone}</td>
              <td class="py-3 px-6 text-sm text-[var(--text-muted)] w-[25%]">{contact.email}</td>
              <td class="py-3 px-6 text-sm text-[var(--text-muted)] w-[20%]">{contact.company || "-"}</td>
              <td class="py-3 px-6 text-right w-[10%]">
                <div class="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button class="p-1.5 rounded text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--bg-nav-hover)] bg-transparent border-none cursor-pointer" title="Edit">
                    <Icon name="Pencil" size={16} />
                  </button>
                  <button class="p-1.5 rounded text-[var(--text-muted)] hover:text-red-400 hover:bg-[var(--bg-nav-hover)] bg-transparent border-none cursor-pointer" title="Hapus">
                    <Icon name="Trash2" size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
