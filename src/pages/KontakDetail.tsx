import type { FC } from "hono/jsx";
import { Layout } from "../components/Layout";
import { ContactDetailView, type ContactDetailData } from "../components/kontak/ContactDetail";

export const KontakDetail: FC = () => {
  // Mockup data
  const mockupData: ContactDetailData = {
    id: "1",
    name: "Budi Santoso",
    phone: "+62 812 3456 7890",
    email: "budi.s@example.com",
    company: "PT Budi Sejahtera",
    title: "Direktur Utama",
    labels: ["VIP", "Client", "Goals"],
    notes: "Pelanggan setia sejak 2023.\nMembutuhkan respon cepat untuk setiap komplain.\n\nSering membeli produk Enterprise."
  };

  return (
    <Layout title="Detail Kontak — Projek Bre" active="/kontak">
      <ContactDetailView data={mockupData} />
    </Layout>
  );
};
