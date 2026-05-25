import { useState } from "react";
import { sendMessage } from "#/lib/api/chat";
import { getSessionId } from "#/lib/session";
import { Button } from "../ui/button";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../ui/sheet";
import ChatInput from "./chat-input";
import ChatLog from "./chat-log";
import type { Message } from "./types";

export function Chat() {
	const [messages, setMessages] = useState<Message[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (content: string) => {
		setMessages((prev) => [
			...prev,
			{ messageId: messages.length, role: "user", message: content },
		]);
		setIsLoading(true);
		try {
			const data = await sendMessage(getSessionId(), content);
			setMessages((prev) => [
				...prev,
				{
					messageId: messages.length,
					role: "assistant",
					message: data.response,
				},
			]);
		} catch (err) {
			console.error("Request failed:", err);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button
					variant="primary"
					className="fixed -right-6.25 top-1/2 z-50 rotate-270"
				>
					{`>`} chat
				</Button>
			</SheetTrigger>
			<SheetContent side="right" className="flex flex-col w-125 sm:max-w-xl">
				<SheetHeader className="border-b">
					<SheetTitle className="text-sm">riven-ai</SheetTitle>
				</SheetHeader>

				<div className="flex-1 overflow-y-auto px-3">
					<ChatLog messages={messages} />
				</div>

				<ChatInput onSubmit={handleSubmit} isLoading={isLoading} />
			</SheetContent>
		</Sheet>
	);
}
