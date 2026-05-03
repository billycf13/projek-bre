import type { FC } from "hono/jsx";
import { raw } from "hono/html";
import { icons } from "lucide";

const BRAND_ICONS: Record<string, string> = {
  Instagram: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>',
  Facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>',
  Twitter: '<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>',
  Linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',
  WhatsApp: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-4.7 8.38 8.38 0 0 1 3.8.9L21 9l-2.5 5.5Z"></path>',
  TikTok: '<path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>',
  Youtube: '<path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2 103.38 103.38 0 0 1 15 0 2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2 103.38 103.38 0 0 1-15 0 2 2 0 0 1-2-2Z"></path><path d="m10 15 5-3-5-3z"></path>',
};

export const Icon: FC<{
  name: string;
  size?: number;
  class?: string;
}> = ({ name, size = 24, class: className }) => {
  const lucideIcon = (icons as any)[name];
  let innerSvg = "";

  if (lucideIcon) {
    innerSvg = lucideIcon
      .map(
        ([tag, attrs]: [string, any]) =>
          `<${tag} ${Object.entries(attrs)
            .filter(([, v]) => v != null)
            .map(([k, v]) => `${k}="${String(v)}"`)
            .join(" ")} />`
      )
      .join("");
  } else if (BRAND_ICONS[name]) {
    innerSvg = BRAND_ICONS[name];
  } else {
    return <span class="inline-flex items-center justify-center font-bold text-[10px]" style={`width:${size}px;height:${size}px`}>?</span>;
  }

  const classAttr = className ? ` class="${className}"` : "";

  return raw(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${classAttr}>${innerSvg}</svg>`
  );
};
