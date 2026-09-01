import React from 'react'
import { Chart } from './Chart'

export const RadialBarChart = ({ series, labels, ...props }) => {
  return (
    <Chart
      type="radialBar"
      series={series}
      options={{
        labels: labels,
        stroke: {
          lineCap: 'round'
        },
      }}
      {...props}
    />
  )
}
