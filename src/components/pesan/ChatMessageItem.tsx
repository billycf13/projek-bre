import type { FC } from "hono/jsx";
import { Icon } from "../Icon";

export type Reaction = {
  emoji: string;
  count: number;
  self?: boolean;
};

export type ChatMessage = {
  id: string;
  type: "text" | "image" | "document" | "audio" | "video";
  text?: any;
  time: string;
  incoming: boolean;
  read?: boolean;
  mediaUrl?: string; // For image, audio, video
  fileName?: string; // For document
  fileSize?: string; // For document
  replyTo?: {
    name: string;
    text: string;
  };
  reactions?: Reaction[];
  agentName?: string; // For outgoing messages to indicate which agent replied
  isInternal?: boolean; // For internal notes
};

export const ChatMessageItem: FC<{ msg: ChatMessage }> = ({ msg }) => {
  const isIncoming = msg.incoming;
  const isInternal = msg.isInternal;
  
  let bubbleColor = "";
  if (isInternal) {
    bubbleColor = "bg-amber-500/10 border border-amber-500/30 text-[var(--text-primary)]";
  } else if (isIncoming) {
    bubbleColor = "bg-[var(--bg-nav)] border border-[var(--border-subtle)] text-[var(--text-primary)]";
  } else {
    bubbleColor = "bg-[var(--accent)] text-white";
  }
  
  const bubbleShape = isIncoming ? "rounded-tl-none" : "rounded-tr-none";

  return (
    <div class={`flex items-end gap-2 max-w-[90%] sm:max-w-[80%] mb-2 ${isIncoming ? "self-start" : "self-end flex-row-reverse"}`}>
      
      {/* Agent Avatar for Outgoing */}
      {!isIncoming && (
        <div class="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-semibold flex-shrink-0 shadow-sm mb-5 z-10 relative group/avatar cursor-help">
          {msg.agentName ? msg.agentName.charAt(0).toUpperCase() : "A"}
          {/* Tooltip */}
          <div class="absolute -top-7 left-1/2 -translate-x-1/2 bg-[var(--bg-nav)] border border-[var(--border-subtle)] text-[var(--text-primary)] text-[10px] px-2 py-1 rounded opacity-0 group-hover/avatar:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-sm">
            {msg.agentName || "Admin"}
          </div>
        </div>
      )}

      <div class={`flex flex-col relative w-full ${isIncoming ? "items-start" : "items-end"}`}>
        {/* Bubble */}
        <div class={`rounded-xl p-2 ${bubbleColor} ${bubbleShape} shadow-sm relative group`}>
          
          {/* Internal Header */}
          {isInternal && (
            <div class="flex items-center gap-1.5 text-amber-500 mb-1.5 text-[10px] font-bold uppercase tracking-wider">
              <Icon name="Lock" size={12} />
              <span>Catatan Internal</span>
            </div>
          )}
          
          {/* Reply/Quote Block */}
          {msg.replyTo && (
            <div class={`mb-2 p-2 rounded-lg text-xs border-l-4 ${isIncoming ? "bg-[var(--bg-body)] border-[var(--accent)] text-[var(--text-muted)]" : "bg-black/20 border-white/50 text-white/90"}`}>
              <div class="font-semibold mb-0.5">{msg.replyTo.name}</div>
              <div class="truncate max-w-[200px]">{msg.replyTo.text}</div>
            </div>
          )}

          {/* Media Block */}
          {msg.type === "image" && msg.mediaUrl && (
            <div class="mb-2 rounded-lg overflow-hidden relative">
              <img src={msg.mediaUrl} alt="Image Attachment" class="max-w-full h-auto max-h-64 object-cover" />
            </div>
          )}

          {msg.type === "video" && msg.mediaUrl && (
            <div class="mb-2 rounded-lg overflow-hidden relative bg-black flex items-center justify-center h-40 min-w-[200px]">
              <img src={msg.mediaUrl} alt="Video Thumbnail" class="opacity-50 w-full h-full object-cover absolute inset-0" />
              <div class="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center backdrop-blur-sm z-10">
                <Icon name="Play" size={20} class="text-white ml-1" />
              </div>
            </div>
          )}

          {msg.type === "audio" && (
            <div class={`flex items-center gap-3 mb-2 p-2 rounded-lg ${isIncoming ? "bg-[var(--bg-body)]" : "bg-black/20"}`}>
              <button class={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border-none cursor-pointer ${isIncoming ? "bg-[var(--accent)] text-white" : "bg-white text-[var(--accent)]"}`}>
                <Icon name="Play" size={16} class="ml-0.5" />
              </button>
              <div class="flex-1">
                <div class={`w-32 h-1 rounded-full ${isIncoming ? "bg-[var(--border-subtle)]" : "bg-white/30"}`}>
                  <div class={`w-1/3 h-full rounded-full ${isIncoming ? "bg-[var(--accent)]" : "bg-white"}`}></div>
                </div>
                <div class={`text-[10px] mt-1 ${isIncoming ? "text-[var(--text-muted)]" : "text-white/70"}`}>0:14 / 1:20</div>
              </div>
            </div>
          )}

          {msg.type === "document" && (
            <div class={`flex items-center gap-3 mb-2 p-3 rounded-lg ${isIncoming ? "bg-[var(--bg-body)]" : "bg-black/20"}`}>
              <div class={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${isIncoming ? "bg-red-500/10 text-red-500" : "bg-white/20 text-white"}`}>
                <Icon name="FileText" size={20} />
              </div>
              <div class="flex-1 min-w-0 pr-4">
                <div class="text-sm font-medium truncate">{msg.fileName || "Document.pdf"}</div>
                <div class={`text-[10px] uppercase ${isIncoming ? "text-[var(--text-muted)]" : "text-white/70"}`}>
                  {msg.fileSize || "1.2 MB"} • PDF
                </div>
              </div>
              <button class={`border-none bg-transparent cursor-pointer ${isIncoming ? "text-[var(--text-muted)] hover:text-[var(--accent)]" : "text-white/70 hover:text-white"}`}>
                <Icon name="Download" size={16} />
              </button>
            </div>
          )}

          {/* Text Block */}
          {msg.text && (
            <div class="text-sm px-1 whitespace-pre-wrap leading-relaxed">{msg.text}</div>
          )}

          {/* Floating Actions on Hover */}
          <div class={`absolute top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 ${isIncoming ? "-right-16" : "-left-16"}`}>
            {isIncoming ? (
              <>
                <button class="w-6 h-6 rounded-full bg-[var(--bg-body)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer shadow-sm" title="Beri reaksi">
                  <Icon name="SmilePlus" size={12} />
                </button>
                <button class="w-6 h-6 rounded-full bg-[var(--bg-body)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer shadow-sm" title="Lainnya">
                  <Icon name="ChevronDown" size={12} />
                </button>
              </>
            ) : (
              <>
                <button class="w-6 h-6 rounded-full bg-[var(--bg-body)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer shadow-sm" title="Lainnya">
                  <Icon name="ChevronDown" size={12} />
                </button>
                <button class="w-6 h-6 rounded-full bg-[var(--bg-body)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer shadow-sm" title="Beri reaksi">
                  <Icon name="SmilePlus" size={12} />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Footer: Time, Status, and Reactions */}
        <div class={`flex items-center gap-1 mt-1 px-1 text-[10px] text-[var(--text-muted)] ${isIncoming ? "" : "flex-row-reverse"}`}>
          <span>{msg.time}</span>
          {!isIncoming && msg.read !== undefined && (
            <Icon name="CheckCheck" size={12} class={msg.read ? "text-[var(--accent)]" : "text-[var(--text-muted)]"} />
          )}
          
          {/* Reactions inline with time */}
          {msg.reactions && msg.reactions.length > 0 && (
            <div class={`flex items-center gap-1 ${isIncoming ? "ml-1" : "mr-1"}`}>
              {msg.reactions.map((reaction) => (
                <button class={`flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[10px] border cursor-pointer transition-colors ${
                  reaction.self 
                    ? "bg-[var(--accent)]/10 border-[var(--accent)] text-[var(--accent)]" 
                    : "bg-[var(--bg-body)] border-[var(--border-subtle)] text-[var(--text-primary)] hover:bg-[var(--bg-nav-hover)]"
                }`}>
                  <span>{reaction.emoji}</span>
                  <span class="font-medium">{reaction.count}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
