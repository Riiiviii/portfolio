import Navbar from './navbar'

export default function Header() {
  return (
    <header className="mt-4 flex justify-between">
      <h1 className="text-[#b8c0e0] mt-1.25">
        <span className="text-sky-300">{`{ `}</span>
        {`riv.dev`}
        <span className="text-sky-300">{` }`}</span>
      </h1>

      <Navbar />
    </header>
  )
}
