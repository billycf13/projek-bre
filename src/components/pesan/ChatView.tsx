import type { FC } from "hono/jsx";
import { Icon } from "../Icon";
import { ChatMessageItem, type ChatMessage } from "./ChatMessageItem";
import { ChatInput } from "./ChatInput";

export const ChatView: FC<{
  contactName: string;
  contactPhone: string;
  messages: ChatMessage[];
}> = ({ contactName, contactPhone, messages }) => {
  return (
    <div class="flex-1 h-full flex flex-col min-w-0 bg-[var(--bg-body)] border-r border-[var(--border-subtle)]">
      {/* Header */}
      <div class="h-14 px-4 border-b border-[var(--border-subtle)] bg-[var(--bg-nav)] flex items-center justify-between flex-shrink-0 z-10">
        <div 
          class="cursor-pointer group" 
          onclick="document.getElementById('contact-info').classList.remove('hidden')"
          title="Tampilkan info kontak"
        >
          <h2 class="text-sm font-semibold m-0 text-[var(--text-primary)] group-hover:underline">{contactName}</h2>
          <p class="text-xs text-[var(--text-muted)] m-0">{contactPhone}</p>
        </div>
        
        <div class="flex items-center gap-2 text-[var(--text-muted)]">
          <button class="p-1.5 rounded-md hover:bg-[var(--bg-nav-hover)] hover:text-[var(--text-primary)] border-none bg-transparent cursor-pointer">
            <Icon name="Search" size={18} />
          </button>
          <div class="w-px h-5 bg-[var(--border-subtle)] mx-1"></div>
          <button class="p-1.5 rounded-md hover:bg-[var(--bg-nav-hover)] hover:text-[var(--text-primary)] border-none bg-transparent cursor-pointer">
            <Icon name="EllipsisVertical" size={18} />
          </button>
        </div>
      </div>

      {/* Chat Area */}
      <div id="chat-messages-container" class="flex-1 overflow-y-auto p-4 flex flex-col gap-1.5 relative">
        
        {/* Load More Button */}
        <div class="flex justify-center mb-2">
          <button class="flex items-center gap-1.5 bg-[var(--bg-nav)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-nav-hover)] px-4 py-1.5 rounded-full text-[11px] font-medium cursor-pointer transition-colors shadow-sm" title="Muat pesan yang lebih lama">
            <Icon name="History" size={14} />
            <span>Muat pesan terdahulu</span>
          </button>
        </div>

        <div class="sticky top-0 text-xs text-center text-[var(--text-muted)] my-2 z-10 pointer-events-none">
          <span class="bg-[var(--bg-nav)] px-3 py-1 rounded-full border border-[var(--border-subtle)] shadow-sm pointer-events-auto">Hari ini</span>
        </div>
        
        {messages.map((msg) => (
          <ChatMessageItem msg={msg} />
        ))}
      </div>

      {/* Input Area */}
      <ChatInput />

      {/* Auto-scroll to bottom on load */}
      <script dangerouslySetInnerHTML={{ __html: `
        (function() {
          function scrollToBottom() {
            var container = document.getElementById('chat-messages-container');
            if (container) {
              container.scrollTop = container.scrollHeight;
            }
          }
          
          // Execute immediately
          scrollToBottom();
          
          // Execute after a short delay to account for layout shifts (e.g., ChatInput rendering)
          setTimeout(scrollToBottom, 50);
          setTimeout(scrollToBottom, 300);

          // Listen to image load events within the container
          document.addEventListener('DOMContentLoaded', function() {
            var container = document.getElementById('chat-messages-container');
            if (container) {
              var images = container.querySelectorAll('img');
              images.forEach(function(img) {
                if (!img.complete) {
                  img.addEventListener('load', scrollToBottom);
                }
              });
            }
          });
        })();
      `}} />
    </div>
  );
};
