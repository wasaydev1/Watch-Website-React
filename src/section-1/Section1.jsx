import WatchGrid from './WatchGrid'
import PopularWatch from './PopularWatch'
import Hero from './Hero'
import NewArrivals from './NewArrivals'
import WatchOfChoice from './WatchOfChoice'
import WatchOfChoice2 from './WatchOfChoice2'
import FeatureSectionReactIcons from './FeatureCardReactIcons'
import Sec1Footer from './sec1Footer'

const Section1 = () => {
  return (
    <>
      <section>
        <Hero />
      </section>

      <section>
        <NewArrivals />
      </section>

      <section>
        <WatchGrid />
      </section>

      <section>
        <PopularWatch />
      </section>

      <section>
        <WatchOfChoice />
      </section>

      <section>
        <WatchOfChoice2 />
      </section>

      <section>
        <FeatureSectionReactIcons />
      </section>
    </>
  )
}

export default Section1
