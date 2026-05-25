import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import ChatMessage from "./chat-message";
import type { Message, Role } from "./types";

type ChatLogProps = {
	messages: Message[];
};

function ChatLog({ messages }: ChatLogProps) {
	const bottomRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		bottomRef.current?.scrollIntoView({ behavior: "smooth" });
	}, []);
	return (
		<div className="flex flex-col gap-4">
			{messages.map((message) => (
				<div
					key={message.messageId}
					className={twMerge(`flex`, getStyleVariant(message.role))}
				>
					<ChatMessage role={message.role}>{message.message}</ChatMessage>
					<div ref={bottomRef} />
				</div>
			))}
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
