import Header from "./components/page-sections/Header"
import Portfolio from "./components/page-sections/Portfolio"
import ContactCenter from "./components/page-sections/ContactCenter"
import Footer from "./components/page-sections/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <main>
      <Header />
      <Portfolio />
      <ContactCenter/>
      <Footer />
    </main>
  )
}
