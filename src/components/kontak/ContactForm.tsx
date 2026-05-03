import type { FC } from "hono/jsx";
import { Icon } from "../Icon";

export type ContactFormData = {
  id?: string;
  name?: string;
  phone?: string;
  email?: string;
  company?: string;
  title?: string;
  labels?: string;
  notes?: string;
};

type FormProps = {
  mode: "add" | "edit";
  initialData?: ContactFormData;
};

export const ContactForm: FC<FormProps> = ({ mode, initialData = {} }) => {
  const isEdit = mode === "edit";
  
  return (
    <div class="max-w-3xl mx-auto w-full p-6">
      <div class="flex items-center gap-4 mb-6">
        <a href="/kontak" class="p-2 rounded hover:bg-[var(--bg-nav-hover)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
          <Icon name="ArrowLeft" size={20} />
        </a>
        <h1 class="text-xl font-semibold m-0">{isEdit ? "Edit Kontak" : "Tambah Kontak Baru"}</h1>
      </div>

      <div class="bg-[var(--bg-nav)] border border-[var(--border-subtle)] rounded-xl p-6 shadow-sm">
        <form class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nama */}
            <div class="space-y-1.5">
              <label class="text-sm font-medium text-[var(--text-primary)] block">Nama Lengkap <span class="text-red-400">*</span></label>
              <div class="relative">
                <Icon name="User" size={16} class="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
                <input 
                  type="text" 
                  name="name" 
                  value={initialData.name || ""} 
                  placeholder="Masukkan nama lengkap" 
                  required
                  class="w-full bg-[var(--bg-body)] border border-[var(--border-subtle)] rounded-lg py-2 pl-9 pr-4 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
                />
              </div>
            </div>

            {/* Perusahaan */}
            <div class="space-y-1.5">
              <label class="text-sm font-medium text-[var(--text-primary)] block">Perusahaan</label>
              <div class="relative">
                <Icon name="Building2" size={16} class="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
                <input 
                  type="text" 
                  name="company" 
                  value={initialData.company || ""} 
                  placeholder="Nama perusahaan" 
                  class="w-full bg-[var(--bg-body)] border border-[var(--border-subtle)] rounded-lg py-2 pl-9 pr-4 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
                />
              </div>
            </div>

            {/* Jabatan */}
            <div class="space-y-1.5">
              <label class="text-sm font-medium text-[var(--text-primary)] block">Jabatan</label>
              <div class="relative">
                <Icon name="Briefcase" size={16} class="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
                <input 
                  type="text" 
                  name="title" 
                  value={initialData.title || ""} 
                  placeholder="Contoh: Manager" 
                  class="w-full bg-[var(--bg-body)] border border-[var(--border-subtle)] rounded-lg py-2 pl-9 pr-4 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
                />
              </div>
            </div>

            {/* Nomor HP */}
            <div class="space-y-1.5">
              <label class="text-sm font-medium text-[var(--text-primary)] block">Nomor HP <span class="text-red-400">*</span></label>
              <div class="relative">
                <Icon name="Phone" size={16} class="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
                <input 
                  type="tel" 
                  name="phone" 
                  value={initialData.phone || ""} 
                  placeholder="+62 8xx xxxx xxxx" 
                  required
                  class="w-full bg-[var(--bg-body)] border border-[var(--border-subtle)] rounded-lg py-2 pl-9 pr-4 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] font-mono"
                />
              </div>
            </div>

            {/* Email */}
            <div class="space-y-1.5">
              <label class="text-sm font-medium text-[var(--text-primary)] block">Email</label>
              <div class="relative">
                <Icon name="Mail" size={16} class="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
                <input 
                  type="email" 
                  name="email" 
                  value={initialData.email || ""} 
                  placeholder="contoh@email.com" 
                  class="w-full bg-[var(--bg-body)] border border-[var(--border-subtle)] rounded-lg py-2 pl-9 pr-4 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
                />
              </div>
            </div>

            {/* Label */}
            <div class="space-y-1.5">
              <label class="text-sm font-medium text-[var(--text-primary)] block">Label</label>
              <div class="relative">
                <Icon name="Tags" size={16} class="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
                <input 
                  type="text" 
                  name="labels" 
                  value={initialData.labels || ""} 
                  placeholder="Pisahkan dengan koma (contoh: VIP, Client)" 
                  class="w-full bg-[var(--bg-body)] border border-[var(--border-subtle)] rounded-lg py-2 pl-9 pr-4 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
                />
              </div>
            </div>
          </div>

          {/* Catatan */}
          <div class="space-y-1.5">
            <label class="text-sm font-medium text-[var(--text-primary)] block">Catatan</label>
            <textarea 
              name="notes" 
              rows={4}
              placeholder="Tambahkan catatan khusus mengenai kontak ini..." 
              class="w-full bg-[var(--bg-body)] border border-[var(--border-subtle)] rounded-lg p-3 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] resize-y"
            >{initialData.notes || ""}</textarea>
          </div>

          {/* Buttons */}
          <div class="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-end gap-3">
            <a href="/kontak" class="px-4 py-2 rounded-lg text-sm font-medium text-[var(--text-primary)] bg-transparent hover:bg-[var(--bg-nav-hover)] transition-colors no-underline">
              Batal
            </a>
            <button type="submit" class="px-4 py-2 rounded-lg text-sm font-medium text-white bg-[var(--accent)] hover:opacity-90 border-none cursor-pointer transition-opacity flex items-center gap-2">
              <Icon name="Save" size={16} />
              Simpan Kontak
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
