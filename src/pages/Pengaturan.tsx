import type { FC } from "hono/jsx";
import { Layout } from "../components/Layout";
import { Icon } from "../components/Icon";
import { Aplikasi } from "../components/pengaturan/Aplikasi";
import { Agen } from "../components/pengaturan/Agen";
import { KotakMasuk } from "../components/pengaturan/KotakMasuk";
import { Label } from "../components/pengaturan/Label";
import { JawabanCepat } from "../components/pengaturan/JawabanCepat";
import { Integrasi } from "../components/pengaturan/Integrasi";
import { SosialMedia } from "../components/pengaturan/SosialMedia";

const MENU_ITEMS = [
  { id: "aplikasi", label: "Aplikasi", icon: "LayoutDashboard" },
  { id: "agen", label: "Agen", icon: "Users" },
  { id: "kotak-masuk", label: "Kotak Masuk", icon: "Inbox" },
  { id: "label", label: "Label", icon: "Tags" },
  { id: "jawaban-cepat", label: "Jawaban Cepat", icon: "MessageSquareQuote" },
  { id: "sosial-media", label: "Sosial Media", icon: "Share2" },
  { id: "integrasi", label: "Integrasi", icon: "Blocks" },
];

export const Pengaturan: FC<{ activeTab?: string }> = ({ activeTab = "aplikasi" }) => {
  const renderContent = () => {
    switch (activeTab) {
      case "aplikasi": return <Aplikasi />;
      case "agen": return <Agen />;
      case "kotak-masuk": return <KotakMasuk />;
      case "label": return <Label />;
      case "jawaban-cepat": return <JawabanCepat />;
      case "sosial-media": return <SosialMedia />;
      case "integrasi": return <Integrasi />;
      default: return <Aplikasi />;
    }
  };

  return (
    <Layout title="Pengaturan — Projek Bre" active="/pengaturan">
      <div class="h-full max-w-7xl mx-auto flex gap-6 pb-6">
        {/* Left Column - Sidebar */}
        <div class="w-64 flex-shrink-0 flex flex-col gap-1">
          <div class="mb-4">
            <h1 class="text-2xl font-bold text-[var(--text-primary)] mb-1">Pengaturan</h1>
            <p class="text-sm text-[var(--text-muted)]">Kelola konfigurasi sistem</p>
          </div>
          
          <nav class="flex flex-col gap-1">
            {MENU_ITEMS.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <a
                  href={`/pengaturan/${item.id}`}
                  class={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors border-none no-underline ${
                    isActive 
                      ? "bg-[var(--bg-nav)] text-[var(--accent)] border border-[var(--border-subtle)] shadow-sm" 
                      : "text-[var(--text-muted)] hover:bg-[var(--bg-nav-hover)] hover:text-[var(--text-primary)] border border-transparent"
                  }`}
                >
                  <Icon name={item.icon as any} size={18} />
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Right Column - Main Content */}
        <div class="flex-1 min-w-0">
          {renderContent()}
        </div>
      </div>
    </Layout>
  );
};
