import type { FC } from "hono/jsx";
import { Icon } from "../Icon";

export type ContactDetailData = {
  id: string;
  name: string;
  phone: string;
  email: string;
  company: string;
  title: string;
  labels: string[];
  notes: string;
};

export const ContactDetailView: FC<{ data: ContactDetailData }> = ({ data }) => {
  return (
    <div class="max-w-3xl mx-auto w-full p-6">
      {/* Header Actions */}
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center gap-4">
          <a href="/kontak" class="p-2 rounded hover:bg-[var(--bg-nav-hover)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
            <Icon name="ArrowLeft" size={20} />
          </a>
          <h1 class="text-xl font-semibold m-0">Detail Kontak</h1>
        </div>
        <div class="flex items-center gap-2">
          <a href={`/kontak/${data.id}/edit`} class="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-[var(--text-primary)] bg-[var(--bg-nav)] border border-[var(--border-subtle)] hover:bg-[var(--bg-nav-hover)] transition-colors no-underline">
            <Icon name="Pencil" size={16} /> Edit
          </a>
          <button class="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-red-500 bg-[var(--bg-nav)] border border-[var(--border-subtle)] hover:bg-red-500/10 cursor-pointer transition-colors">
            <Icon name="Trash2" size={16} /> Hapus
          </button>
        </div>
      </div>

      {/* Main Card */}
      <div class="bg-[var(--bg-nav)] border border-[var(--border-subtle)] rounded-xl overflow-hidden shadow-sm">
        
        {/* Profile Header */}
        <div class="p-8 border-b border-[var(--border-subtle)] flex items-center gap-6">
          <div class="w-20 h-20 rounded-full bg-[var(--bg-nav-active)] flex items-center justify-center text-[var(--accent)] font-semibold text-2xl border border-[var(--border-subtle)] flex-shrink-0">
            {data.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h2 class="text-2xl font-bold text-[var(--text-primary)] m-0 mb-1">{data.name}</h2>
            <p class="text-sm text-[var(--text-muted)] m-0 flex items-center gap-1.5">
              <Icon name="Briefcase" size={14} />
              {data.title ? `${data.title} di ` : ""} {data.company || "Tidak ada perusahaan"}
            </p>
          </div>
        </div>

        {/* Info Grid */}
        <div class="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[var(--border-subtle)]">
          
          {/* Kolom Kiri: Kontak & Label */}
          <div class="p-6 space-y-6">
            <div>
              <h3 class="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-4">Informasi Kontak</h3>
              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <div class="p-2 rounded bg-[var(--bg-body)] text-[var(--text-muted)]">
                    <Icon name="Phone" size={16} />
                  </div>
                  <div>
                    <p class="text-xs text-[var(--text-muted)] m-0 mb-0.5">Nomor HP</p>
                    <p class="text-sm font-medium text-[var(--text-primary)] m-0 font-mono">{data.phone}</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <div class="p-2 rounded bg-[var(--bg-body)] text-[var(--text-muted)]">
                    <Icon name="Mail" size={16} />
                  </div>
                  <div>
                    <p class="text-xs text-[var(--text-muted)] m-0 mb-0.5">Email</p>
                    <p class="text-sm font-medium text-[var(--text-primary)] m-0">{data.email || "-"}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 class="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-3">Label</h3>
              <div class="flex flex-wrap gap-2">
                {data.labels.length > 0 ? data.labels.map(label => (
                  <span class="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[var(--bg-body)] border border-[var(--border-subtle)] text-xs font-medium text-[var(--text-primary)]">
                    <Icon name="Tag" size={12} class="text-[var(--text-muted)]" />
                    {label}
                  </span>
                )) : (
                  <span class="text-sm text-[var(--text-muted)] italic">Tidak ada label</span>
                )}
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Catatan */}
          <div class="p-6">
            <h3 class="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-4 flex items-center gap-2">
              <Icon name="StickyNote" size={14} /> Catatan
            </h3>
            <div class="bg-[var(--bg-body)] rounded-lg p-4 border border-[var(--border-subtle)] h-[calc(100%-2rem)]">
              {data.notes ? (
                <p class="text-sm text-[var(--text-primary)] leading-relaxed m-0 whitespace-pre-wrap">
                  {data.notes}
                </p>
              ) : (
                <p class="text-sm text-[var(--text-muted)] italic m-0 text-center mt-4">Belum ada catatan untuk kontak ini.</p>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
