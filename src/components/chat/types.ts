export type Message = {
	messageId: number;
	role: Role;
	message: string;
};

export type Role = "assistant" | "user";
