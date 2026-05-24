import { twMerge } from "tailwind-merge"
import ChatMessage from "./chat-message"

const messages: Message[] = [
    { role: "user", message: "Tell me about your projects" },
    {
        role: "assistant",
        message:
            "I have a couple of exciting projects that I'm really proud of:\n\n1. **AI Portfolio Chatbot**: This is a deployed project where an AI service responds to inquiries about my professional background. It leverages the OpenAI Agents SDK and a custom FastMCP server. You can check it out [here](https://riven-portfolio-api.fly.dev) and see the code [on GitHub](https://github.com/Riiiviii/ai-chatbot). I used technologies like Python, FastAPI, and Docker for this project.\n\n2. **Vestly**: This one is currently in development.",
    },
]

function ChatLog() {
    return (
        <div className="flex flex-col gap-4">
            {messages.map((message, index) => (
                <div key={index} className={twMerge(`flex`, getStyleVariant(message.role))}>
                    <ChatMessage role={message.role}>{message.message}</ChatMessage>
                </div>
            ))}
        </div>
    )
}

export default ChatLog

function getStyleVariant(role: Role) {
    switch (role) {
        case "user":
            return "justify-end"
        case "assistant":
            return "justify-start"
        default:
            throw new Error(`Invalid role: ${role satisfies never}`)
    }
}

