import type { FC } from "hono/jsx";
import { Layout } from "../components/Layout";
import { SidebarFilters } from "../components/pesan/SidebarFilters";
import { ConversationList } from "../components/pesan/ConversationList";
import { ChatView } from "../components/pesan/ChatView";
import { ContactInfo } from "../components/pesan/ContactInfo";
import { type ChatMessage } from "../components/pesan/ChatMessageItem";

export const Pesan: FC = () => {
  // Mockup data
  const filterData = {
    categories: [
      { icon: "Inbox", label: "Semua pesan", active: true, count: 12 },
      { icon: "UserRound", label: "Pesan saya", count: 3 },
      { icon: "Clock", label: "Belum ditangani", count: 5 },
      { icon: "AtSign", label: "Disebutkan", count: 1 },
    ],
    channels: [
      { icon: "MessageCircle", label: "CS Utama (WA)" },
      { icon: "MessageCircle", label: "CS Ukur (WA)" },
      { icon: "Mail", label: "Teknisi (Email)" },
      { icon: "Mail", label: "Invoice (Email)" },
    ],
    labels: [
      { icon: "Tag", label: "Lost" },
      { icon: "Tag", label: "Goals" },
    ],
  };

  const conversationsData = [
    { name: "Budi Santoso", lastMessage: "Apakah barang ini masih ready stock?", time: "10:42", unread: 2, label: "Goals", channel: "CS Utama", active: true, agentName: "Diana" },
    { name: "Siti Aminah", lastMessage: "Tolong dicek untuk nomor resi berikut ya admin", time: "09:15", channel: "CS Ukur" },
    { name: "Anton Wijaya", lastMessage: "Baik, terima kasih atas informasinya.", time: "Kemarin", label: "Lost", channel: "CS Utama", agentName: "Bagas" },
    { name: "Cahaya Abadi PT", lastMessage: "Mohon kirimkan penawaran harga terbaru", time: "Kemarin", unread: 1, channel: "Invoice", agentName: "Rina" },
    { name: "Budi Santoso", lastMessage: "Apakah barang ini masih ready stock?", time: "10:42", unread: 2, label: "Goals", channel: "CS Utama", active: true, agentName: "Diana" },
    { name: "Siti Aminah", lastMessage: "Tolong dicek untuk nomor resi berikut ya admin", time: "09:15", channel: "CS Ukur" },
    { name: "Anton Wijaya", lastMessage: "Baik, terima kasih atas informasinya.", time: "Kemarin", label: "Lost", channel: "CS Utama", agentName: "Bagas" },
    { name: "Cahaya Abadi PT", lastMessage: "Mohon kirimkan penawaran harga terbaru", time: "Kemarin", unread: 1, channel: "Invoice", agentName: "Rina" },
    { name: "Budi Santoso", lastMessage: "Apakah barang ini masih ready stock?", time: "10:42", unread: 2, label: "Goals", channel: "CS Utama", active: true, agentName: "Diana" },
    { name: "Siti Aminah", lastMessage: "Tolong dicek untuk nomor resi berikut ya admin", time: "09:15", channel: "CS Ukur" },
    { name: "Anton Wijaya", lastMessage: "Baik, terima kasih atas informasinya.", time: "Kemarin", label: "Lost", channel: "CS Utama", agentName: "Bagas" },
    { name: "Cahaya Abadi PT", lastMessage: "Mohon kirimkan penawaran harga terbaru", time: "Kemarin", unread: 1, channel: "Invoice", agentName: "Rina" },
    { name: "Budi Santoso", lastMessage: "Apakah barang ini masih ready stock?", time: "10:42", unread: 2, label: "Goals", channel: "CS Utama", active: true, agentName: "Diana" },
    { name: "Siti Aminah", lastMessage: "Tolong dicek untuk nomor resi berikut ya admin", time: "09:15", channel: "CS Ukur" },
    { name: "Anton Wijaya", lastMessage: "Baik, terima kasih atas informasinya.", time: "Kemarin", label: "Lost", channel: "CS Utama", agentName: "Bagas" },
    { name: "Cahaya Abadi PT", lastMessage: "Mohon kirimkan penawaran harga terbaru", time: "Kemarin", unread: 1, channel: "Invoice", agentName: "Rina" },
    { name: "Budi Santoso", lastMessage: "Apakah barang ini masih ready stock?", time: "10:42", unread: 2, label: "Goals", channel: "CS Utama", active: true, agentName: "Diana" },
    { name: "Siti Aminah", lastMessage: "Tolong dicek untuk nomor resi berikut ya admin", time: "09:15", channel: "CS Ukur" },
    { name: "Anton Wijaya", lastMessage: "Baik, terima kasih atas informasinya.", time: "Kemarin", label: "Lost", channel: "CS Utama", agentName: "Bagas" },
    { name: "Cahaya Abadi PT", lastMessage: "Mohon kirimkan penawaran harga terbaru", time: "Kemarin", unread: 1, channel: "Invoice", agentName: "Rina" },
    { name: "Budi Santoso", lastMessage: "Apakah barang ini masih ready stock?", time: "10:42", unread: 2, label: "Goals", channel: "CS Utama", active: true, agentName: "Diana" },
    { name: "Siti Aminah", lastMessage: "Tolong dicek untuk nomor resi berikut ya admin", time: "09:15", channel: "CS Ukur" },
    { name: "Anton Wijaya", lastMessage: "Baik, terima kasih atas informasinya.", time: "Kemarin", label: "Lost", channel: "CS Utama", agentName: "Bagas" },
    { name: "Cahaya Abadi PT", lastMessage: "Mohon kirimkan penawaran harga terbaru", time: "Kemarin", unread: 1, channel: "Invoice", agentName: "Rina" },
    { name: "Budi Santoso", lastMessage: "Apakah barang ini masih ready stock?", time: "10:42", unread: 2, label: "Goals", channel: "CS Utama", active: true, agentName: "Diana" },
    { name: "Siti Aminah", lastMessage: "Tolong dicek untuk nomor resi berikut ya admin", time: "09:15", channel: "CS Ukur" },
    { name: "Anton Wijaya", lastMessage: "Baik, terima kasih atas informasinya.", time: "Kemarin", label: "Lost", channel: "CS Utama", agentName: "Bagas" },
    { name: "Cahaya Abadi PT", lastMessage: "Mohon kirimkan penawaran harga terbaru", time: "Kemarin", unread: 1, channel: "Invoice", agentName: "Rina" },
    { name: "Budi Santoso", lastMessage: "Apakah barang ini masih ready stock?", time: "10:42", unread: 2, label: "Goals", channel: "CS Utama", active: true, agentName: "Diana" },
    { name: "Siti Aminah", lastMessage: "Tolong dicek untuk nomor resi berikut ya admin", time: "09:15", channel: "CS Ukur" },
    { name: "Anton Wijaya", lastMessage: "Baik, terima kasih atas informasinya.", time: "Kemarin", label: "Lost", channel: "CS Utama", agentName: "Bagas" },
    { name: "Cahaya Abadi PT", lastMessage: "Mohon kirimkan penawaran harga terbaru", time: "Kemarin", unread: 1, channel: "Invoice", agentName: "Rina" },
    { name: "Budi Santoso", lastMessage: "Apakah barang ini masih ready stock?", time: "10:42", unread: 2, label: "Goals", channel: "CS Utama", active: true, agentName: "Diana" },
    { name: "Siti Aminah", lastMessage: "Tolong dicek untuk nomor resi berikut ya admin", time: "09:15", channel: "CS Ukur" },
    { name: "Anton Wijaya", lastMessage: "Baik, terima kasih atas informasinya.", time: "Kemarin", label: "Lost", channel: "CS Utama", agentName: "Bagas" },
    { name: "Cahaya Abadi PT", lastMessage: "Mohon kirimkan penawaran harga terbaru", time: "Kemarin", unread: 1, channel: "Invoice", agentName: "Rina" },
  ];

  const chatMessagesData: ChatMessage[] = [
    {
      id: "m1", type: "text", text: "Halo admin, saya mau tanya soal produk X. Apakah barang ini masih ready stock?", time: "10:42", incoming: true
    },
    {
      id: "m2", type: "text", text: "Halo Budi, untuk produk X saat ini sedang kosong, estimasi restock minggu depan.", time: "10:45", incoming: false, read: true,
      replyTo: { name: "Budi Santoso", text: "Apakah barang ini masih ready stock?" },
      agentName: "Diana"
    },
    {
      id: "m3", type: "image", text: "Boleh lihat foto referensi model yang lain?", time: "10:46", incoming: true,
      mediaUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80"
    },
    {
      id: "m4", type: "image", text: "Tentu, ini beberapa foto produk alternatif yang mirip:", time: "10:50", incoming: false, read: true,
      mediaUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
      reactions: [{ emoji: "👍", count: 1, self: false }, { emoji: "🔥", count: 1, self: true }],
      agentName: "Diana"
    },
    {
      id: "m5", type: "document", fileName: "Katalog_Produk_2026.pdf", fileSize: "2.4 MB", text: "Bapak bisa cek katalog lengkapnya di file PDF ini.", time: "10:51", incoming: false, read: true,
      agentName: "Diana"
    },
    {
      id: "m6", type: "audio", time: "10:55", incoming: true,
      reactions: [{ emoji: "🙏", count: 1 }]
    },
    {
      id: "m7", type: "video", time: "10:58", incoming: false, read: false,
      mediaUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&q=80",
      text: "Ini video panduan singkatnya.",
      agentName: "Bagas"
    },
    {
      id: "m8", type: "text", time: "11:02", incoming: false, isInternal: true,
      text: "Tolong follow up lagi ya besok pagi kalau dia belum balas, sepertinya dia tertarik dengan produk X.",
      agentName: "Rina"
    },
    {
      id: "m9", type: "text", time: "11:05", incoming: false, isInternal: true,
      text: (
        <>
          <span class="text-[var(--accent)] font-semibold bg-[var(--accent)]/10 px-1.5 py-0.5 rounded-md">@Diana</span> tolong pastikan faktur untuk order ini sudah dikirim ke email mereka ya.
        </>
      ),
      agentName: "Bagas"
    }
  ];

  const contactData = {
    name: "Budi Santoso",
    type: "Customer",
    phone: "+62 812 3456 7890",
    email: "budi.s@example.com",
    labels: ["Goals"],
    notes: "Pelanggan VIP. Sering beli produk X dan Y. Tolong fast response.",
  };

  return (
    <Layout title="Pesan — Projek Bre" active="/pesan" noPadding>
      <div class="flex h-full w-full">
        <SidebarFilters data={filterData} />
        <ConversationList conversations={conversationsData} />
        <ChatView contactName={contactData.name} contactPhone={contactData.phone} messages={chatMessagesData} />
        <ContactInfo data={contactData} />
      </div>
    </Layout>
  );
};
