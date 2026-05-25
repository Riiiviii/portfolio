export type Message = {
	role: Role;
	message: string;
};

export type Role = "assistant" | "user";
