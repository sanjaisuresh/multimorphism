import React from 'react'
import { Chart } from './Chart'

export const RadarChart = ({ series, categories, ...props }) => {
  return (
    <Chart
      type="radar"
      series={series}
      options={{
        xaxis: {
          categories: categories,
        },
        stroke: {
          width: 2
        },
        fill: {
          opacity: 0.2
        },
        markers: {
          size: 4
        }
      }}
      {...props}
    />
  )
}
