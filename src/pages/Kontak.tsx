import type { FC } from "hono/jsx";
import { Layout } from "../components/Layout";
import { KontakHeader } from "../components/kontak/KontakHeader";
import { KontakTable, type ContactRow } from "../components/kontak/KontakTable";
import { KontakFooter } from "../components/kontak/KontakFooter";

export const Kontak: FC = () => {
  // Mockup Data
  const contacts: ContactRow[] = [
    { id: "1", name: "Budi Santoso", phone: "+62 812 3456 7890", email: "budi.s@example.com", company: "PT Budi Sejahtera" },
    { id: "2", name: "Siti Aminah", phone: "+62 856 1234 5678", email: "siti.a@example.com", company: "" },
    { id: "3", name: "Anton Wijaya", phone: "+62 811 9876 5432", email: "anton.w@example.com", company: "CV Maju Jaya" },
    { id: "4", name: "Cahaya Abadi PT", phone: "+62 822 1122 3344", email: "info@cahayaabadi.co.id", company: "PT Cahaya Abadi" },
    { id: "5", name: "Rina Marlina", phone: "+62 813 5566 7788", email: "rina.m@example.com", company: "" },
    { id: "6", name: "Andi Saputra", phone: "+62 812 9988 7766", email: "andi.s@example.com", company: "PT Teknologi Bangsa" },
    { id: "7", name: "Dewi Lestari", phone: "+62 878 1234 4321", email: "dewi.l@example.com", company: "Toko Sinar Makmur" },
    { id: "8", name: "Eko Prasetyo", phone: "+62 857 7788 9900", email: "eko.p@example.com", company: "" },
    { id: "9", name: "Fani Rahmawati", phone: "+62 811 2233 4455", email: "fani.r@example.com", company: "CV Berkah Mandiri" },
    { id: "10", name: "Gunawan Wibisono", phone: "+62 821 5544 3322", email: "gunawan.w@example.com", company: "PT Inti Tama" },
  ];

  return (
    <Layout title="Kontak — Projek Bre" active="/kontak" noPadding>
      <div class="flex flex-col h-full w-full">
        {/* Header Fixed */}
        <KontakHeader />
        
        {/* Main Content */}
        <div class="flex-1 overflow-hidden w-full">
          <KontakTable data={contacts} />
        </div>
        
        {/* Footer Fixed */}
        <KontakFooter total={124} perPage={10} currentPage={1} />
      </div>
    </Layout>
  );
};
