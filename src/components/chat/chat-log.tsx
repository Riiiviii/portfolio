import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import ChatEmpty from "./chat-empty";
import ChatMessage from "./chat-message";
import ChatThinking from "./chat-thinking";
import type { Message, Role } from "./types";

type ChatLogProps = {
	messages: Message[];
	isThinking?: boolean;
};

function ChatLog({ messages, isThinking = false }: ChatLogProps) {
	const bottomRef = useRef<HTMLDivElement>(null);
	const messageCount = messages.length;

	useEffect(() => {
		if (messageCount === 0 && !isThinking) return;
		bottomRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messageCount, isThinking]);
	return (
		<div className="flex flex-col gap-4">
			{messages.length === 0 && !isThinking && <ChatEmpty />}
			{messages.map((message) => (
				<div
					key={message.messageId}
					className={twMerge(`flex`, getStyleVariant(message.role))}
				>
					<ChatMessage role={message.role}>{message.message}</ChatMessage>
				</div>
			))}
			{isThinking && (
				<div className="flex justify-start">
					<ChatThinking />
				</div>
			)}
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
