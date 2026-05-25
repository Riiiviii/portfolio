function ChatThinking() {
	return (
		<div
			role="status"
			className="max-w-[85%]"
			aria-live="polite"
			aria-label="riven-ai is thinking"
		>
			<div className="text-xs text-muted-foreground px-3 py-1 text-left">
				riven-ai
			</div>
			<div className="flex items-center gap-2 px-3 py-2 text-xs text-zinc-500">
				<span className="flex gap-1" aria-hidden="true">
					{[0, 200, 400].map((delay) => (
						<span
							key={delay}
							className="size-1.5 rounded-full bg-zinc-500 animate-pulse motion-reduce:opacity-70"
							style={{ animationDelay: `${delay}ms` }}
						/>
					))}
				</span>
				<span>Thinking…</span>
			</div>
		</div>
	);
}

export default ChatThinking;
