import type { SubmitEvent } from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

type ChatInputProps = {
	onSubmit: (content: string) => void;
	isLoading: boolean;
};

function ChatInput({ onSubmit, isLoading }: ChatInputProps) {
	const [input, setInput] = useState("");

	const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!input.trim()) return;
		onSubmit(input);
		setInput("");
	};

	return (
		<form onSubmit={handleSubmit} className="border-t border-term-grey-3 p-4">
			<div className="flex items-center gap-2 border border-zinc-900 focus-within:border-zinc-700 p-2 transition-colors">
				<span>$</span>
				<Input
					disabled={isLoading}
					value={input}
					onChange={(e) => setInput(e.target.value)}
					className="flex-1 border-0 bg-transparent! text-term-white p-0 focus-visible:ring-0 placeholder:text-term-text-muted"
					placeholder={isLoading ? "Thinking..." : "Type your message here..."}
				/>
			</div>

			<div className="mt-3 flex justify-between text-xs text-term-text-muted">
				<span>
					Press{" "}
					<kbd className="border border-term-grey-3 px-1.5 py-0.5">esc</kbd> to
					close
				</span>
				<span>AI — may make mistakes</span>
			</div>
		</form>
	);
}

export default ChatInput;
