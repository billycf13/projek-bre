import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { Home } from "./pages/Home";
import { Pesan } from "./pages/Pesan";
import { Kontak } from "./pages/Kontak";
import { KontakTambah } from "./pages/KontakTambah";
import { KontakEdit } from "./pages/KontakEdit";
import { KontakDetail } from "./pages/KontakDetail";
import { Pengaturan } from "./pages/Pengaturan";
import { Analitik } from "./pages/Analitik";
import { Profile } from "./pages/Profile";
import { Schedule } from "./pages/Schedule";
import { Kampanye } from "./pages/Kampanye";

const app = new Hono();

// Static files
app.use("/static/*", serveStatic({ root: "./src/" }));

// Routes
app.get("/", (c) => c.html(<Home />));
app.get("/pesan", (c) => c.html(<Pesan />));

// Kontak Routes
app.get("/kontak", (c) => c.html(<Kontak />));
app.get("/kontak/tambah", (c) => c.html(<KontakTambah />));
app.get("/kontak/:id/edit", (c) => c.html(<KontakEdit />));
app.get("/kontak/:id", (c) => c.html(<KontakDetail />));

// Pengaturan Routes
app.get("/pengaturan", (c) => c.html(<Pengaturan activeTab="aplikasi" />));
app.get("/pengaturan/:tab", (c) => {
  const tab = c.req.param("tab");
  return c.html(<Pengaturan activeTab={tab} />);
});

app.get("/analitik", (c) => c.html(<Analitik />));
app.get("/profile", (c) => c.html(<Profile />));
app.get("/schedule", (c) => c.html(<Schedule />));
app.get("/kampanye", (c) => c.html(<Kampanye />));




export default {
  port: 3000,
  fetch: app.fetch,
};
