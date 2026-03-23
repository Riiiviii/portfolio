import Navbar from './navbar'

export default function Header() {
  return (
    <header className="flex justify-around">
      <h1 className="mt-1.25">{`{ riv.dev }`}</h1>
      <Navbar />
    </header>
  )
}
