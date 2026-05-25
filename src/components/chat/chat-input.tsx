import type { SubmitEvent } from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { sendMessage } from "#/lib/api/chat";
import { Input } from "@/components/ui/input";

function getSessionId() {
	let sessionId = localStorage.getItem("session_id");
	if (sessionId === null) {
		sessionId = uuid();
		localStorage.setItem("session_id", sessionId);
	}

	return sessionId;
}

function ChatInput() {
	const [input, setInput] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();

		const content = input;
		setInput("");
		if (!content.trim()) return;

		setIsLoading(true);
		const sessionId = getSessionId();

		try {
			const data = await sendMessage(sessionId, content);
			console.log("data", data);
		} catch (err) {
			console.error("Request failed:", err);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="border-t border-term-grey-3 p-4">
			<div className="flex items-center gap-2 border border-transparent focus-within:border-term-white p-2 transition-colors">
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
