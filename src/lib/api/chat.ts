const BASE_URL = import.meta.env.VITE_CHATBOT_API_URL;

export type ChatResponse = {
	message: string;
};

export async function sendMessage(
	sessionId: string,
	message: string,
): Promise<ChatResponse> {
	const response = await fetch(`${BASE_URL}`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ session_id: sessionId, message }),
	});

	if (!response.ok) {
		throw new Error(`API error: ${response.status}`);
	}

	return response.json();
}
