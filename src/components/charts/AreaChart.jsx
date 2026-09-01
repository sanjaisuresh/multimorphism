import React from 'react'
import { Chart } from './Chart'
import { useTheme } from '@/providers/ThemeProvider'

export const AreaChart = ({ series, categories, ...props }) => {
  const { themeName } = useTheme()
  const isBrutal = themeName === 'neobrutalism'

  return (
    <Chart
      type="area"
      series={series}
      options={{
        xaxis: {
          categories: categories,
        },
        fill: isBrutal ? { type: 'solid', opacity: 1 } : {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0.05,
            stops: [0, 90, 100]
          }
        },
      }}
      {...props}
    />
  )
}
