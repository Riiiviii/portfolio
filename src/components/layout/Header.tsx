import Navbar from './navbar'

export default function Header() {
  return (
    <header className="mt-4 flex justify-between">
      <h1 className="text-term-text mt-1.25">
        <span className="text-term-green">{`{ `}</span>
        {`riv.dev`}
        <span className="text-term-green">{` }`}</span>
      </h1>

      <Navbar />
    </header>
  )
}
