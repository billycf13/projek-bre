import type { FC } from "hono/jsx";
import { Layout } from "../components/Layout";
import { ContactForm, type ContactFormData } from "../components/kontak/ContactForm";

export const KontakEdit: FC = () => {
  // Mockup data for editing
  const mockupData: ContactFormData = {
    id: "1",
    name: "Budi Santoso",
    phone: "+62 812 3456 7890",
    email: "budi.s@example.com",
    company: "PT Budi Sejahtera",
    title: "Direktur",
    labels: "VIP, Client",
    notes: "Pelanggan setia sejak 2023. Membutuhkan respon cepat untuk setiap komplain."
  };

  return (
    <Layout title="Edit Kontak — Projek Bre" active="/kontak">
      <ContactForm mode="edit" initialData={mockupData} />
    </Layout>
  );
};
