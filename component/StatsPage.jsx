import React from 'react'
import StatsCounter from './StatsCounter'

const StatsPage = () => {
  const stats = [
    {
      end: 12,
      label: 'Years of Experience',
      suffix: '+'
    },
    {
      end: 100,
      label: 'Happy Clients',
      suffix: '+'
    },
    {
      end: 200,
      label: 'Resources',
      suffix: '+'
    },
    {
      end: 4,
      label: 'Global Connections',
      suffix: ''
    }
  ]

  return (
    <div>
      <StatsCounter
        title="Our numbers speaks for itself"
        subtitle="This highlights our skills, experience, and quality of work, demonstrating our commitment to excellence."
        stats={stats}
      />
    </div>
  )
}

export default StatsPage
