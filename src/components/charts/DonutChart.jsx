import React from 'react'
import { Chart } from './Chart'
import { useTheme } from '@/providers/ThemeProvider'

export const DonutChart = ({ series, labels, ...props }) => {
  const { themeName } = useTheme()
  const isBrutal = themeName === 'neobrutalism'

  return (
    <Chart
      type="donut"
      series={series}
      options={{
        labels: labels,
        stroke: {
          show: true,
          width: isBrutal ? 4 : 4,
          colors: isBrutal ? ['#000000'] : ['transparent']
        },
      }}
      {...props}
    />
  )
}
