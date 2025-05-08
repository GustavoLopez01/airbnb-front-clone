import Nabvar from '@/components/Navbar'
import Footer from '@/components/Footer'

function App() {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-between">
        <Nabvar />
        <div className="min-h-28 mt-52">
          hola
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
