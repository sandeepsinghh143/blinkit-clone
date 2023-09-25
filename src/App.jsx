import './App.css'
import BannerSection from './components/BannerSection'
import Categories from './components/Categories'
import Footer from './components/Footer'
import Header from './components/Header'
import Items from './components/Items'
import Slides from './components/Slides'

function App() {

  return (
    <>
        <Header/>
        <main className="wrapper">
        <BannerSection/>
        <Slides/>
        <Categories/>
        <Items/>
        </main>
        <Footer/>
    </>
  )
}

export default App
