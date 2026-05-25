import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import ChatEmpty from "./chat-empty";
import ChatMessage from "./chat-message";
import type { Message, Role } from "./types";

type ChatLogProps = {
	messages: Message[];
};

function ChatLog({ messages }: ChatLogProps) {
	const bottomRef = useRef<HTMLDivElement>(null);
	const messageCount = messages.length;

	useEffect(() => {
		if (messageCount === 0) return;
		bottomRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messageCount]);
	return (
		<div className="flex flex-col gap-4">
			{messages.length === 0 && <ChatEmpty />}
			{messages.map((message) => (
				<div
					key={message.messageId}
					className={twMerge(`flex`, getStyleVariant(message.role))}
				>
					<ChatMessage role={message.role}>{message.message}</ChatMessage>
				</div>
			))}
			<div ref={bottomRef} />
		</div>
	);
}

export default ChatLog;

function getStyleVariant(role: Role) {
	switch (role) {
		case "user":
			return "justify-end";
		case "assistant":
			return "justify-start";
		default:
			throw new Error(`Invalid role: ${role satisfies never}`);
	}
}
