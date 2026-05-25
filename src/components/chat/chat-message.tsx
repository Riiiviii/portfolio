import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import type { Role } from "./types";

type ChatMessageProps = {
	role: Role;
} & ComponentProps<"div">;

function ChatMessage({ children, role, ...props }: ChatMessageProps) {
	return (
		<div className="max-w-[85%]" {...props}>
			<div
				className={twMerge(
					"text-xs text-muted-foreground px-3 py-1",
					role === "user" ? "text-right" : "text-left",
				)}
			>
				{role === "user" ? "YOU" : "riven-ai"}
			</div>
			<p className={twMerge("text-sm py-1 px-3", variantStyle(role))}>
				{role === "assistant" && (
					<span className="text-xs font-bold">{">"} </span>
				)}
				{children}
			</p>
		</div>
	);
}

export default ChatMessage;

function variantStyle(role: Role) {
	switch (role) {
		case "user":
			return "border rounded-tr rounded-tl rounded-bl text-sm border-white";
		case "assistant":
			return "";
		default:
			throw new Error(`Invalid role: ${role satisfies never}`);
	}
}
