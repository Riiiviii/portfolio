import { Input } from "@/components/ui/input"

function ChatInput() {
    return (
        <div className="border-t border-term-grey-3 p-4">
            <div className="flex items-center gap-2 border border-transparent focus-within:border-term-white p-2 transition-colors">
                <span >$</span>
                <Input
                    className="flex-1 border-0 bg-transparent! text-term-white p-0 focus-visible:ring-0 placeholder:text-term-text-muted"
                    placeholder="Type your message here..."
                />
            </div>

            <div className="mt-3 flex justify-between text-xs text-term-text-muted">
                <span>
                    Press <kbd className="border border-term-grey-3 px-1.5 py-0.5">esc</kbd> to close
                </span>
                <span>AI — may make mistakes</span>
            </div>
        </div>
    )
}

export default ChatInput