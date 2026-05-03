import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { Home } from "./pages/Home";
import { Pesan } from "./pages/Pesan";
import { Kontak } from "./pages/Kontak";
import { KontakTambah } from "./pages/KontakTambah";
import { KontakEdit } from "./pages/KontakEdit";
import { KontakDetail } from "./pages/KontakDetail";

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

export default {
  port: 3000,
  fetch: app.fetch,
};
