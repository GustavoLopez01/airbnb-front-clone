import Nabvar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StaysList from '@/components/StaysList'

function App() {
  return (
    <>
      <div className="w-full h-screen flex flex-col">
        <Nabvar />
        <div className="mt-44 py-8">
          <StaysList />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
