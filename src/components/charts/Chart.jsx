import React from 'react'
import ApexChart from 'react-apexcharts'
import { observer } from 'mobx-react-lite'
import { useChart } from './useChart'
import { cn } from '../../utils'

export const Chart = observer(({ options, series, type, height = 320, width = '100%', className, ...props }) => {
  const chartOptions = useChart(options)
  const id = React.useId().replace(/:/g, '')

  const _tooltipCss = chartOptions._tooltipCss
  delete chartOptions._tooltipCss

  return (
    <div className={cn(`chart-container-${id} relative w-full`, className)}>
      {_tooltipCss && (
        <style>{`.chart-container-${id} .apexcharts-tooltip { ${_tooltipCss} }`}</style>
      )}
      <ApexChart
        options={chartOptions}
        series={series}
        type={type}
        height={height}
        width={width}
        {...props}
      />
    </div>
  )
})

Chart.displayName = 'Chart'
