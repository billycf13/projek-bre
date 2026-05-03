import type { FC } from "hono/jsx";
import { Icon } from "./Icon";

const navItems = [
  { icon: "MessageSquareText" as const, label: "Pesan", href: "/pesan" },
  { icon: "Contact" as const, label: "Kontak", href: "/kontak" },
  { icon: "Megaphone" as const, label: "Kampanye", href: "/kampanye" },
  { icon: "CalendarClock" as const, label: "Schedule", href: "/schedule" },
  { icon: "ChartNoAxesCombined" as const, label: "Analitik", href: "/analitik" },
  { icon: "Settings" as const, label: "Pengaturan", href: "/pengaturan" },
];

const itemBase =
  "w-9 h-9 flex items-center justify-center rounded-lg text-[var(--text-muted)] no-underline border-none bg-transparent cursor-pointer transition-[color,background] duration-150 my-0.5 hover:bg-[var(--bg-nav-hover)] hover:text-[var(--text-primary)]";

const itemActive = "!bg-[var(--bg-nav-active)] !text-[var(--accent)]";

export const Nav: FC<{ active?: string }> = ({ active }) => {
  return (
    <nav
      id="global-nav"
      class="fixed left-0 top-0 w-[var(--nav-w)] h-screen bg-[var(--bg-nav)] border-r border-[var(--border-subtle)] flex flex-col justify-between z-[100]"
    >
      {/* Top: logo + menu */}
      <div class="flex flex-col items-center">
        <a
          href="/"
          class={`${itemBase} mt-3 mb-4 !text-[var(--accent)]`}
          aria-label="Home"
        >
          <Icon name="HatGlasses" size={22} />
        </a>

        <div class="flex flex-col items-center w-full">
          {navItems.map((item) => (
            <a
              href={item.href}
              class={`${itemBase}${active === item.href ? ` ${itemActive}` : ""}`}
              aria-label={item.label}
              title={item.label}
            >
              <Icon name={item.icon} size={20} />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom: theme toggle + profile */}
      <div class="flex flex-col items-center pb-2">
        <button
          id="theme-toggle"
          class={itemBase}
          aria-label="Toggle theme"
          title="Toggle theme"
          onclick="document.documentElement.classList.toggle('light'); localStorage.setItem('theme', document.documentElement.classList.contains('light') ? 'light' : 'dark')"
        >
          <Icon name="SunMoon" size={20} />
        </button>

        {/* Profile Menu with Popup */}
        <div class="relative mt-1" id="profile-menu-container">
          <button
            id="profile-trigger"
            class={`${itemBase}`}
            aria-label="Profile Menu"
            title="Profile Menu"
            onclick="document.getElementById('profile-popup').classList.toggle('hidden')"
          >
            <Icon name="CircleUserRound" size={20} />
          </button>

          {/* Popup Menu */}
          <div
            id="profile-popup"
            class="hidden absolute left-full bottom-0 ml-2 w-40 bg-[var(--bg-nav)] border border-[var(--border-subtle)] rounded-xl shadow-xl z-[200] overflow-hidden animate-in fade-in slide-in-from-left-2 duration-200"
          >
            <div class="p-2 border-b border-[var(--border-subtle)] bg-[var(--bg-body)]">
              <div class="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest px-2 py-1">Akun Saya</div>
            </div>
            <div class="p-1">
              <a href="/profile" class="flex items-center gap-2 px-3 py-2 text-sm text-[var(--text-primary)] hover:bg-[var(--bg-nav-hover)] hover:text-[var(--accent)] rounded-lg transition-colors no-underline border-none">
                <Icon name="User" size={16} />
                <span>Profil</span>
              </a>
              <button class="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-500 hover:bg-red-500/10 rounded-lg transition-colors border-none bg-transparent cursor-pointer">
                <Icon name="LogOut" size={16} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>

        {/* Script to close popup when clicking outside */}
        <script dangerouslySetInnerHTML={{
          __html: `
          document.addEventListener('click', function(event) {
            const container = document.getElementById('profile-menu-container');
            const popup = document.getElementById('profile-popup');
            if (container && !container.contains(event.target)) {
              popup.classList.add('hidden');
            }
          });
        `}} />
      </div>
    </nav>
  );
};
