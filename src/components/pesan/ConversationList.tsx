import type { FC } from "hono/jsx";
import { Icon } from "../Icon";

type ConvItemProps = {
  name: string;
  lastMessage: string;
  time: string;
  unread?: number;
  label?: string;
  channel: string;
  active?: boolean;
  agentName?: string;
};

const ConvItem: FC<ConvItemProps> = ({ name, lastMessage, time, unread, label, channel, active, agentName }) => (
  <div
    class={`p-3 border-b border-[var(--border-subtle)] cursor-pointer transition-colors ${
      active ? "bg-[var(--bg-nav-active)]" : "hover:bg-[var(--bg-nav-hover)]"
    }`}
  >
    <div class="flex justify-between items-start mb-1">
      <h4 class={`text-sm m-0 ${unread ? "font-semibold" : "font-medium"}`}>{name}</h4>
      <span class="text-xs text-[var(--text-muted)] whitespace-nowrap ml-2">{time}</span>
    </div>
    <div class="flex justify-between items-center gap-2">
      <p class={`text-xs m-0 truncate ${unread ? "text-[var(--text-primary)] font-medium" : "text-[var(--text-muted)]"}`}>
        {lastMessage}
      </p>
      {unread && (
        <span class="bg-[var(--accent)] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[1.25rem] text-center flex-shrink-0">
          {unread}
        </span>
      )}
    </div>
    <div class="flex justify-between items-center mt-2">
      <div class="flex items-center gap-2 text-[10px] text-[var(--text-muted)] font-medium">
        {label && (
          <>
            <span class="flex items-center gap-1">
              <Icon name="Tag" size={10} />
              {label}
            </span>
            <span class="w-1 h-1 rounded-full bg-[var(--border-subtle)]"></span>
          </>
        )}
        <span class="flex items-center gap-1">
          {channel.includes("WA") ? <Icon name="MessageCircle" size={10} /> : <Icon name="Mail" size={10} />}
          {channel}
        </span>
      </div>
      {agentName && (
        <div class="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-[8px] font-bold flex-shrink-0 border border-[var(--border-subtle)]" title={`Dibalas oleh: ${agentName}`}>
          {agentName.charAt(0).toUpperCase()}
        </div>
      )}
    </div>
  </div>
);

export type ConvItemData = ConvItemProps;

export const ConversationList: FC<{ conversations: ConvItemData[] }> = ({ conversations }) => {
  return (
    <div class="w-72 h-full border-r border-[var(--border-subtle)] bg-[var(--bg-nav)] flex flex-col flex-shrink-0">
      {/* Header */}
      <div class="p-3 border-b border-[var(--border-subtle)] flex items-center gap-2">
        <div class="relative flex-1">
          <Icon name="Search" size={16} class="absolute left-2.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
          <input
            type="text"
            placeholder="Cari..."
            class="w-full bg-[var(--bg-nav-hover)] border border-[var(--border-subtle)] rounded-md py-1.5 pl-8 pr-3 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] placeholder:text-[var(--text-muted)]"
          />
        </div>
        <button class="p-1.5 rounded-md text-[var(--text-muted)] hover:bg-[var(--bg-nav-hover)] hover:text-[var(--text-primary)] border-none bg-transparent cursor-pointer flex-shrink-0">
          <Icon name="ListFilter" size={18} />
        </button>
      </div>

      {/* List */}
      <div class="flex-1 overflow-y-auto">
        {conversations.map((conv) => (
          <ConvItem {...conv} />
        ))}
      </div>
    </div>
  );
};
