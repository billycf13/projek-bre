import type { FC } from "hono/jsx";
import { raw } from "hono/html";
import { icons } from "lucide";

type IconName = keyof typeof icons;

export const Icon: FC<{
  name: IconName;
  size?: number;
  class?: string;
}> = ({ name, size = 24, class: className }) => {
  const icon = icons[name];
  if (!icon) return <span>?</span>;

  const innerSvg = icon
    .map(
      ([tag, attrs]) =>
        `<${tag} ${Object.entries(attrs)
          .filter(([, v]) => v != null)
          .map(([k, v]) => `${k}="${String(v)}"`)
          .join(" ")} />`
    )
    .join("");

  const classAttr = className ? ` class="${className}"` : "";

  return raw(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${classAttr}>${innerSvg}</svg>`
  );
};
