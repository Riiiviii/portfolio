import { v4 as uuid } from "uuid";

export function getSessionId(): string {
	if (typeof window === "undefined") {
		return "";
	}

	let sessionId = window.localStorage.getItem("session_id");
	if (sessionId === null) {
		sessionId = uuid();
		window.localStorage.setItem("session_id", sessionId);
	}
	return sessionId;
}
