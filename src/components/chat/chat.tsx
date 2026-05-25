import { RotateCcwIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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
	const [sessionId, setSessionId] = useState("");
	const chatEpochRef = useRef(0);

	useEffect(() => {
		const id = getSessionId();
		setSessionId(id);
	}, []);

	const handleSubmit = async (content: string) => {
		const epoch = chatEpochRef.current;
		const session = getSessionId();

		setMessages((prev) => [
			...prev,
			{ messageId: prev.length, role: "user", message: content },
		]);
		setIsLoading(true);
		try {
			const data = await sendMessage(session, content);
			if (chatEpochRef.current !== epoch) return;
			setMessages((prev) => [
				...prev,
				{
					messageId: prev.length,
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

	const handleReset = () => {
		chatEpochRef.current += 1;
		setMessages([]);
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
					<SheetTitle className="text-xs">riven-ai</SheetTitle>
					<Button
						variant="ghost"
						size="icon"
						className="bg-transparent! hover:bg-transparent! text-zinc-400 hover:text-zinc-200 colour	transition-colors absolute top-1.5 right-8"
						onClick={handleReset}
					>
						<RotateCcwIcon className=" size-3" />
					</Button>
				</SheetHeader>
				<div className="text-zinc-500 border-b border-zinc-900 pb-2 px-3">
					{sessionId ? (
						<div className="flex justify-between items-center text-[10px]">
							<span className="text-zinc-500">Session ID</span>
							<span className="text-zinc-300">{sessionId}</span>
						</div>
					) : (
						<span className="text-zinc-500 text-[10px]">No session ID</span>
					)}
				</div>

				<div className="flex-1 overflow-y-auto px-3">
					<ChatLog messages={messages} isThinking={isLoading} />
				</div>
				<ChatInput onSubmit={handleSubmit} isLoading={isLoading} />
			</SheetContent>
		</Sheet>
	);
}
