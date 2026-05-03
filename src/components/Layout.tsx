import type { FC, PropsWithChildren } from "hono/jsx";
import { Nav } from "./Nav";

export const Layout: FC<
  PropsWithChildren<{ title?: string; active?: string; noPadding?: boolean }>
> = ({ children, title = "Projek Bre", active, noPadding }) => {
  return (
    <html lang="id">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>

        {/* HTMX */}
        <script src="https://unpkg.com/htmx.org@2.0.4"></script>

        {/* Tailwind v4 CDN */}
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

        {/* Theme tokens */}
        <link rel="stylesheet" href="/static/styles.css" />

        {/* Theme persistence */}
        <script>{`(function(){var t=localStorage.getItem('theme');if(t==='light')document.documentElement.classList.add('light')})()`}</script>
      </head>
      <body class="m-0 h-screen bg-[var(--bg-body)] text-[var(--text-primary)] font-[system-ui,-apple-system,sans-serif]">
        <div class="flex h-screen overflow-hidden">
          <Nav active={active} />
          <main class={`flex-1 overflow-y-auto ml-[var(--nav-w)] ${noPadding ? "" : "p-6"}`}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};
