export default function Hero() {
  return (
    <section id="home" className="mt-30">
      <div className="grid items-center gap-10 md:grid-cols-[3fr_2fr]">
        <div className="flex max-w-2xl flex-col items-start text-left">
          <h1 className="text-[#b8c0e0] text-4xl font-bold">
            Hi! I'm <span className="text-sky-300">Gabriel Riven Wahnich</span>
          </h1>
          <p className="mt-4 text-l text-[#a5adcb] leading-relaxed">
            I’m a Melbourne-based software developer with experience building
            and delivering{' '}
            <span className="text-sky-300 ">real client applications</span>,
            from simple frontend interfaces to{' '}
            <span className="text-sky-300 ">full-stack systems</span> with
            authentication and database integration. I focus on{' '}
            <span className="text-sky-300 ">backend development</span>
            —designing APIs, handling data, and writing clear, maintainable code
            for real-world use.
          </p>
        </div>
      </div>
    </section>
  )
}
