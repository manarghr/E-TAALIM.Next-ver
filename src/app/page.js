import Navbar from "./components/NavBar"
import Footer from "./components/Footer"
import Hero from "./components/Hero"

// Ensure there is a default export
export default function Page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Footer/> 
    </div>
  )
}
