import type { FC } from "hono/jsx";
import { Layout } from "../components/Layout";
import { ContactForm } from "../components/kontak/ContactForm";

export const KontakTambah: FC = () => {
  return (
    <Layout title="Tambah Kontak — Projek Bre" active="/kontak">
      <ContactForm mode="add" />
    </Layout>
  );
};
