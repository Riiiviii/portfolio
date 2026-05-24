import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import ChatLog from "./chat-log";
import ChatInput from "./chat-input";

export function Chat() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant="primary"
                    className="fixed -right-6.25 top-1/2 z-50 rotate-270"
                >
                    {`>`} chat
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col w-125 sm:max-w-xl">
                <SheetHeader className="border-b">
                    <SheetTitle className="text-sm">riven-ai</SheetTitle>
                </SheetHeader>

                <div className="flex-1 overflow-y-auto p-4">
                    <ChatLog />
                </div>

                <ChatInput />
            </SheetContent>
        </Sheet>
    )
}