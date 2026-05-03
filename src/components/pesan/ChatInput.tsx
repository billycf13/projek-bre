import type { FC } from "hono/jsx";
import { Icon } from "../Icon";

export const ChatInput: FC = () => {
  return (
    <div class="p-3 border-t border-[var(--border-subtle)] bg-[var(--bg-nav)] flex-shrink-0" id="chat-input-container">
      {/* Tabs */}
      <div class="flex items-center gap-4 mb-2 px-1">
        <button 
          onclick="switchChatTab('balas')" 
          class="text-xs font-semibold text-[var(--accent)] border-b-2 border-[var(--accent)] pb-1 transition-colors cursor-pointer bg-transparent"
          id="tab-balas"
        >
          Balas
        </button>
        <button 
          onclick="switchChatTab('internal')"
          class="text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] border-b-2 border-transparent pb-1 transition-colors cursor-pointer bg-transparent"
          id="tab-internal"
        >
          Internal
        </button>
      </div>

      {/* Input Box */}
      <div id="chat-input-box" class="bg-[var(--bg-body)] border border-[var(--border-subtle)] rounded-lg flex items-end p-1 focus-within:border-[var(--accent)] transition-colors">
        <button class="p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] bg-transparent border-none cursor-pointer flex-shrink-0">
          <Icon name="Paperclip" size={20} />
        </button>
        <textarea
          id="chat-textarea"
          placeholder="Ketik pesan balasan..."
          class="flex-1 bg-transparent border-none text-sm text-[var(--text-primary)] p-2 resize-none focus:outline-none min-h-[20px] max-h-32"
          rows={1}
        ></textarea>
        <button class="p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] bg-transparent border-none cursor-pointer flex-shrink-0">
          <Icon name="Smile" size={20} />
        </button>
        <button class="p-2 text-[var(--accent)] hover:text-blue-400 bg-transparent border-none cursor-pointer flex-shrink-0" id="btn-send">
          <Icon name="Send" size={20} />
        </button>
      </div>

      {/* Logic for Switching Tabs */}
      <script dangerouslySetInnerHTML={{ __html: `
        function switchChatTab(type) {
          const tabBalas = document.getElementById('tab-balas');
          const tabInternal = document.getElementById('tab-internal');
          const textarea = document.getElementById('chat-textarea');
          const inputBox = document.getElementById('chat-input-box');
          
          const defaultTabClass = 'text-xs pb-1 transition-colors cursor-pointer bg-transparent border-b-2 ';
          const activeBalasClass = 'font-semibold text-[var(--accent)] border-[var(--accent)]';
          const activeInternalClass = 'font-semibold text-amber-500 border-amber-500';
          const inactiveClass = 'font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] border-transparent';

          if (type === 'internal') {
            tabBalas.className = defaultTabClass + inactiveClass;
            tabInternal.className = defaultTabClass + activeInternalClass;
            textarea.placeholder = 'Ketik catatan internal (tidak akan dilihat pelanggan)...';
            inputBox.className = 'bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-end p-1 transition-colors';
          } else {
            tabInternal.className = defaultTabClass + inactiveClass;
            tabBalas.className = defaultTabClass + activeBalasClass;
            textarea.placeholder = 'Ketik pesan balasan...';
            inputBox.className = 'bg-[var(--bg-body)] border border-[var(--border-subtle)] rounded-lg flex items-end p-1 focus-within:border-[var(--accent)] transition-colors';
          }
        }
      `}} />
    </div>
  );
};
