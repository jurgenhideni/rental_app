import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import Brands from '@/components/Brands'

import Vehicles from '@/components/Vehicles'

export default function Home() {
  return (
    <Layout
      title='Car Rental Albania'
      description='Drive performance and your cross function collaboration with easy-to-use dashboards, data visualisations, and automated insights in one click.'
    >
      <Hero />
      <Brands />
      {/* <Filters /> */}
      <Vehicles />
    </Layout>
  )
}
