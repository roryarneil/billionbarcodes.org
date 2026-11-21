import { BankStatement } from './components/BankStatement'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Originator } from './components/Originator'
import { Outcomes } from './components/Outcomes'
import { Producers } from './components/Producers'
import { Waitlist } from './components/Waitlist'
import { WhyItMatters } from './components/WhyItMatters'
import './landing.css'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#top">
        Skip to content
      </a>
      <div className="band-forest">
        <Header />
        <Hero />
      </div>
      <main>
        <WhyItMatters />
        <HowItWorks />
        <Outcomes />
        <Originator />
        <BankStatement />
        <Producers />
        <Waitlist />
      </main>
      <Footer />
    </>
  )
}
