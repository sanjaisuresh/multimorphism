import React from 'react'
import { Chart } from './Chart'

export const BarChart = ({ series, categories, ...props }) => {
  return (
    <Chart
      type="bar"
      series={series}
      options={{
        xaxis: {
          categories: categories,
        },
      }}
      {...props}
    />
  )
}
