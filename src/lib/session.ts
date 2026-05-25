import { v4 as uuid } from "uuid";

export function getSessionId(): string {
	let sessionId = localStorage.getItem("session_id");
	if (sessionId === null) {
		sessionId = uuid();
		localStorage.setItem("session_id", sessionId);
	}
	return sessionId;
}
