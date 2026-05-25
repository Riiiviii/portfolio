function ChatEmpty() {
	return (
		<div className="flex flex-col gap-4 py-4 text-sm">
			<div className="space-y-1">
				<p className="text-xs text-term-text-muted uppercase tracking-widest">
					riven-ai
				</p>
				<p className="text-term-text-dim text-xs">
					<span className="text-term-text-muted">──</span> portfolio assistant
					<span className="text-term-text-muted"> ──</span>
				</p>
			</div>

			<div className="space-y-1.5 border-l border-term-grey-3 pl-3 text-xs text-term-text-muted">
				<p>
					<span className="text-term-text-dim">[</span>
					<span className="text-green-500">ok</span>
					<span className="text-term-text-dim">]</span> session initialized
				</p>
				<p>
					<span className="text-term-text-dim">[</span>
					<span className="text-green-500">ok</span>
					<span className="text-term-text-dim">]</span> context loaded —
					projects, experience, stack
				</p>
				<p>
					<span className="text-term-text-dim">[</span>
					<span className="text-green-500">ok</span>
					<span className="text-term-text-dim">]</span> awaiting input
				</p>
			</div>

			<div className="space-y-2">
				<p className="text-sm text-term-text">
					<span className="text-xs font-bold text-term-text-muted">{">"} </span>
					Hi — I can answer questions about Gabriel&apos;s work, projects, and
					tech stack. What would you like to know?
				</p>
				<p className="text-xs text-term-text-dim">
					<span className="text-term-text-muted">$</span> type below and press{" "}
					<kbd className="border border-term-grey-3 px-1.5 py-0.5 text-term-text-muted">
						enter
					</kbd>{" "}
					to send
				</p>
			</div>
		</div>
	);
}

export default ChatEmpty;
