import type { FC } from "hono/jsx";
import { Icon } from "../Icon";

type FilterItemProps = {
  icon: any;
  label: string;
  count?: number;
  active?: boolean;
};

const FilterItem: FC<FilterItemProps> = ({ icon, label, count, active }) => (
  <button
    class={`w-full flex items-center justify-between py-1.5 px-3 rounded-md text-sm cursor-pointer border-none bg-transparent ${
      active
        ? "bg-[var(--bg-nav-active)] text-[var(--accent)] font-medium"
        : "text-[var(--text-primary)] hover:bg-[var(--bg-nav-hover)]"
    }`}
  >
    <div class="flex items-center gap-2">
      <Icon name={icon} size={16} class={active ? "" : "text-[var(--text-muted)]"} />
      <span>{label}</span>
    </div>
    {count !== undefined && count > 0 && (
      <span class="text-xs text-[var(--text-muted)] font-medium">{count}</span>
    )}
  </button>
);

const FilterSection: FC<{ title: string; children: any }> = ({ title, children }) => (
  <div class="mb-5">
    <h3 class="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2 px-3">
      {title}
    </h3>
    <div class="space-y-0.5">{children}</div>
  </div>
);

export type SidebarFilterData = {
  categories: { icon: any; label: string; count?: number; active?: boolean }[];
  channels: { icon: any; label: string }[];
  labels: { icon: any; label: string }[];
};

export const SidebarFilters: FC<{ data: SidebarFilterData }> = ({ data }) => {
  return (
    <div class="w-60 h-full border-r border-[var(--border-subtle)] bg-[var(--bg-nav)] overflow-y-auto flex-shrink-0 p-3">
      <FilterSection title="Pesan">
        {data.categories.map((item) => (
          <FilterItem {...item} />
        ))}
      </FilterSection>

      <FilterSection title="Channel">
        {data.channels.map((item) => (
          <FilterItem {...item} />
        ))}
      </FilterSection>

      <FilterSection title="Label">
        {data.labels.map((item) => (
          <FilterItem {...item} />
        ))}
      </FilterSection>
    </div>
  );
};
