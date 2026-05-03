import type { FC } from "hono/jsx";
import { Icon } from "../Icon";

const InfoItem: FC<{ icon: any; label: string; value: string }> = ({ icon, label, value }) => (
  <div class="mb-4">
    <div class="flex items-center gap-2 text-[var(--text-muted)] mb-1">
      <Icon name={icon} size={14} />
      <span class="text-xs">{label}</span>
    </div>
    <div class="text-sm text-[var(--text-primary)] pl-6">{value}</div>
  </div>
);

export type ContactInfoData = {
  name: string;
  type: string;
  phone: string;
  email: string;
  labels: string[];
  notes: string;
};

export const ContactInfo: FC<{ data: ContactInfoData }> = ({ data }) => {
  return (
    <div id="contact-info" class="hidden w-64 h-full bg-[var(--bg-nav)] overflow-y-auto flex-shrink-0 flex flex-col transition-all duration-300">
      <div class="h-14 px-4 border-b border-[var(--border-subtle)] flex items-center justify-between flex-shrink-0">
        <h3 class="text-sm font-semibold m-0">Info Kontak</h3>
        <div class="flex items-center gap-2">
          <button class="text-[var(--text-muted)] hover:text-[var(--text-primary)] bg-transparent border-none cursor-pointer p-1 rounded hover:bg-[var(--bg-nav-hover)]">
            <Icon name="Pencil" size={14} />
          </button>
          <button 
            onclick="document.getElementById('contact-info').classList.add('hidden')"
            class="text-[var(--text-muted)] hover:text-[var(--text-primary)] bg-transparent border-none cursor-pointer p-1 rounded hover:bg-[var(--bg-nav-hover)]"
            title="Tutup info kontak"
          >
            <Icon name="X" size={16} />
          </button>
        </div>
      </div>

      <div class="p-4 flex-1">
        {/* Avatar Placeholder */}
        <div class="flex flex-col items-center mb-6">
          <div class="w-16 h-16 rounded-full bg-[var(--bg-body)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-muted)] mb-2">
            <Icon name="User" size={32} />
          </div>
          <h4 class="text-base font-semibold m-0 text-center">{data.name}</h4>
          <p class="text-xs text-[var(--text-muted)] m-0">{data.type}</p>
        </div>

        <InfoItem icon="Phone" label="Nomor HP" value={data.phone} />
        <InfoItem icon="Mail" label="Email" value={data.email} />
        
        <div class="mb-4">
          <div class="flex items-center gap-2 text-[var(--text-muted)] mb-2">
            <Icon name="Tag" size={14} />
            <span class="text-xs">Label</span>
          </div>
          <div class="flex flex-wrap gap-1 pl-6">
            {data.labels.map((label) => (
              <span class="text-xs px-2 py-1 rounded bg-[var(--bg-nav-hover)] text-[var(--text-primary)] border border-[var(--border-subtle)]">
                {label}
              </span>
            ))}
            <button class="text-xs px-2 py-1 rounded border border-dashed border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-nav-hover)] bg-transparent cursor-pointer flex items-center gap-1">
              <Icon name="Plus" size={10} /> Tambah
            </button>
          </div>
        </div>

        <div class="mb-4">
          <div class="flex items-center justify-between text-[var(--text-muted)] mb-2">
            <div class="flex items-center gap-2">
              <Icon name="StickyNote" size={14} />
              <span class="text-xs">Catatan</span>
            </div>
          </div>
          <div class="pl-6">
            <div class="p-2 text-xs bg-[var(--bg-nav-hover)] rounded border border-[var(--border-subtle)] text-[var(--text-primary)]">
              {data.notes}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
