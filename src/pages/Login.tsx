import type { FC } from "hono/jsx";
import { Icon } from "../components/Icon";

export const Login: FC = () => {
  return (
    <html lang="id">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Login — Projek Bre</title>
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
        <link rel="stylesheet" href="/static/styles.css" />
        <script dangerouslySetInnerHTML={{
          __html: `
          (function() {
            try {
              var theme = localStorage.getItem('theme');
              if (theme === 'light') {
                document.documentElement.classList.add('light');
              }
            } catch (e) {}
          })();
        `}} />
      </head>
      <body class="m-0 min-h-screen bg-[var(--bg-body)] text-[var(--text-primary)] font-[system-ui,-apple-system,sans-serif] flex items-center justify-center p-4 relative overflow-hidden">

        {/* Background Decorative Elements */}
        <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[var(--accent)]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div class="w-full max-w-md animate-in fade-in zoom-in-95 duration-500">

          {/* Logo & Header */}
          <div class="text-center mb-8">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--accent)] text-white shadow-xl shadow-blue-500/20 mb-4 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <Icon name="Hexagon" size={32} />
            </div>
            <h1 class="text-3xl font-black text-[var(--text-primary)] tracking-tight mb-2">Projek Bre</h1>
            <p class="text-[var(--text-muted)] text-sm">Satu tempat untuk semua percakapan pelanggan Anda.</p>
          </div>

          {/* Login Card */}
          <div class="bg-[var(--bg-nav)] border border-[var(--border-subtle)] rounded-3xl shadow-2xl overflow-hidden p-8 backdrop-blur-md">

            <form action="/pesan" class="space-y-6">
              <div class="space-y-4">
                <div>
                  <label class="block text-xs font-bold text-[var(--text-muted)] uppercase tracking-widest mb-2 px-1">Email Address</label>
                  <div class="relative group">
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[var(--text-muted)] group-focus-within:text-[var(--accent)] transition-colors">
                      <Icon name="Mail" size={18} />
                    </div>
                    <input
                      type="email"
                      placeholder="billy@projekbre.id"
                      required
                      class="w-full bg-[var(--bg-body)] border border-[var(--border-subtle)] rounded-2xl pl-12 pr-4 py-3.5 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] focus:ring-4 focus:ring-[var(--accent)]/10 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <div class="flex items-center justify-between mb-2 px-1">
                    <label class="text-xs font-bold text-[var(--text-muted)] uppercase tracking-widest">Password</label>
                    <a href="#" class="text-xs font-bold text-[var(--accent)] hover:underline no-underline border-none bg-transparent">Lupa sandi?</a>
                  </div>
                  <div class="relative group">
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[var(--text-muted)] group-focus-within:text-[var(--accent)] transition-colors">
                      <Icon name="Lock" size={18} />
                    </div>
                    <input
                      type="password"
                      placeholder="••••••••"
                      required
                      class="w-full bg-[var(--bg-body)] border border-[var(--border-subtle)] rounded-2xl pl-12 pr-4 py-3.5 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] focus:ring-4 focus:ring-[var(--accent)]/10 transition-all"
                    />
                  </div>
                </div>
              </div>

              <div class="flex items-center">
                <label class="flex items-center gap-2 cursor-pointer group">
                  <input type="checkbox" class="w-4 h-4 rounded border-[var(--border-subtle)] text-[var(--accent)] focus:ring-[var(--accent)] bg-[var(--bg-body)]" />
                  <span class="text-xs text-[var(--text-muted)] font-medium group-hover:text-[var(--text-primary)] transition-colors">Ingat saya untuk 30 hari</span>
                </label>
              </div>

              <button
                type="submit"
                class="w-full bg-[var(--accent)] hover:bg-blue-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-500/30 transform active:scale-[0.98] transition-all border-none cursor-pointer text-sm tracking-wide"
              >
                Masuk ke Dashboard
              </button>
            </form>
          </div>

          <p class="mt-8 text-center text-xs text-[var(--text-muted)]">
            Belum punya akun? <a href="#" class="text-[var(--accent)] font-bold hover:underline no-underline">Hubungi Tim IT</a>
          </p>

        </div>

      </body>
    </html>
  );
};
