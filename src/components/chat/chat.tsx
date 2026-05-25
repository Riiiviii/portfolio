import { RotateCcwIcon } from "lucide-react";
import { useState } from "react";
import { sendMessage } from "#/lib/api/chat";
import { getSessionId } from "#/lib/session";
import { Button } from "../ui/button";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../ui/sheet";
import { Spinner } from "../ui/spinner";
import ChatInput from "./chat-input";
import ChatLog from "./chat-log";
import type { Message } from "./types";

export function Chat() {
	const [messages, setMessages] = useState<Message[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (content: string) => {
		setMessages((prev) => [
			...prev,
			{ messageId: prev.length, role: "user", message: content },
		]);
		setIsLoading(true);
		try {
			const data = await sendMessage(getSessionId(), content);
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
						className="bg-transparent hover:bg-transparent text-zinc-400 hover:text-zinc-200 colour	transition-colors absolute top-1.5 right-8"
						onClick={() => setMessages([])}
					>
						<RotateCcwIcon className="  size-3" />
					</Button>
				</SheetHeader>
				<SheetDescription>
					<div className=" text-zinc-500 border-b border-zinc-900 pb-2 px-3">
						{getSessionId() ? (
							<div className="flex justify-between items-center text-[10px]">
								<span className="text-zinc-500">Session ID</span>
								<span className="text-zinc-300">{getSessionId()}</span>
							</div>
						) : (
							<span className="text-zinc-500 text-[10px]">No session ID</span>
						)}
					</div>
				</SheetDescription>

				<div className="flex-1 overflow-y-auto px-3">
					<ChatLog messages={messages} />
				</div>
				{isLoading && (
					<div className="flex gap-x-3 text-zinc-500 text-xs px-3">
						<Spinner />
						<p>Thinking</p>
					</div>
				)}
				<ChatInput onSubmit={handleSubmit} isLoading={isLoading} />
			</SheetContent>
		</Sheet>
	);
}
