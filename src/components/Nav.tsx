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
          <Icon name="Hexagon" size={22} />
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
        <a
          href="/profile"
          class={`${itemBase} mt-1`}
          aria-label="Profile"
          title="Profile"
        >
          <Icon name="CircleUserRound" size={20} />
        </a>
      </div>
    </nav>
  );
};
