import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'
import { Card } from '@/components/ui/card'
import { TypographyH2, TypographyH3, TypographyP } from '@/components/ui/typography'
import { AreaChart } from '@/components/charts/AreaChart'
import { BarChart } from '@/components/charts/BarChart'
import { DonutChart } from '@/components/charts/DonutChart'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Wallet, LineChart, CheckSquare, Download, ArrowUp, ArrowDown, Plus, Music, PenTool, Car, Coffee } from 'lucide-react'
import { useTheme } from '@/providers/ThemeProvider'

// Map string icon names to Lucide components
const IconMap = {
  wallet: Wallet,
  lineChart: LineChart,
  checkSquare: CheckSquare,
  download: Download
}

const TxIconMap = {
  Music,
  PenTool,
  Car,
  Coffee
}

const Dashboard = observer(() => {
  const { dashboardStore, layoutStore } = useStore()
  const [txTab, setTxTab] = useState("All")
  
  const { quickStats, monthlyRevenue, projectTasks, projectUsers, transactions, totalIncome } = dashboardStore
  const { styles } = useTheme()
  const dbStyles = styles.dashboard || {}

  const filteredTx = transactions.filter(tx => txTab === "All" || tx.tx_status.toLowerCase() === txTab.toLowerCase())

  return (
    <div className={`p-6 md:p-8 flex flex-col gap-8 mx-auto w-full animate-fade-in ${layoutStore.themeStretch ? 'max-w-none' : 'max-w-7xl'}`}>
      <div className="flex items-center justify-between">
        <TypographyH2>Dashboard Overview</TypographyH2>
      </div>

      {/* Quick Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat, idx) => {
          const IconComponent = IconMap[stat.icon] || Wallet
          const isPositive = stat.percent > 0
          const isNegative = stat.percent < 0
          return (
            <Card key={idx} className="flex flex-col justify-between h-full hover:scale-[1.02] transition-transform">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className={dbStyles.statIcon} style={{ backgroundColor: `${stat.color}15`, color: stat.color, width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <IconComponent size={24} />
                  </div>
                  <TypographyP className="font-semibold">{stat.label}</TypographyP>
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <TypographyH3 className="text-3xl">{stat.value}</TypographyH3>
                  <span className={`text-sm font-bold flex items-center ${isPositive ? 'text-green-500' : isNegative ? 'text-red-500' : 'text-gray-500'}`}>
                    {isPositive ? <ArrowUp size={16} /> : isNegative ? <ArrowDown size={16} /> : null}
                    {stat.percent !== 0 ? `${Math.abs(stat.percent)}%` : 'New'}
                  </span>
                </div>
                
                {/* Sparkline Bar Chart */}
                <div className="w-full h-12 mt-2 opacity-80">
                  <BarChart
                    series={[{ data: stat.chart }]}
                    options={{
                      chart: { sparkline: { enabled: true } },
                      colors: [stat.color],
                      tooltip: { enabled: false }
                    }}
                    height={48}
                  />
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      {/* Middle Row: Revenue & Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <TypographyH3>Monthly Revenue</TypographyH3>
            <span className={`flex items-center gap-1 font-bold px-3 py-1 ${dbStyles.badge} text-green-500`} style={{backgroundColor: 'rgba(34, 197, 94, 0.1)'}}>
              <ArrowUp size={16} />
              {monthlyRevenue.percent}%
            </span>
          </div>
          <AreaChart 
            series={monthlyRevenue.series} 
            categories={monthlyRevenue.categories} 
            height={280} 
          />
        </Card>

        <Card className="flex flex-col">
          <TypographyH3 className="mb-6">Project Progress</TypographyH3>
          <div className="flex items-center justify-between mb-2">
            <TypographyP className="font-medium text-dark">Release v1.2.0</TypographyP>
            <span className="text-sm font-bold text-primary">70%</span>
          </div>
          <Progress value={70} className="h-3 shadow-clay-inner mb-6" indicatorClassName="bg-primary shadow-clay-primary" />
          
          <ul className="flex flex-col gap-4 mb-6 flex-1">
            {projectTasks.map((task, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className={dbStyles.taskCircle} style={{ backgroundColor: task.color }} />
                <TypographyP className="font-medium">{task.label}</TypographyP>
              </li>
            ))}
          </ul>
          <Button variant="default" className="w-full justify-center shadow-clay-primary active:shadow-clay-inner">
            <Plus size={18} className="mr-2" /> Add Task
          </Button>
        </Card>
      </div>

      {/* Bottom Row: Transactions & Income Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <TypographyH3>Recent Transactions</TypographyH3>
            <div className={dbStyles.tabContainer}>
              {["All", "Success", "Pending"].map((tab) => (
                <button 
                  key={tab} 
                  onClick={() => setTxTab(tab)}
                  className={`px-4 py-1.5 text-sm font-medium transition-all ${txTab === tab ? dbStyles.tabActive : dbStyles.tabInactive}`}
                  style={txTab === tab ? {} : { borderRadius: '0.5rem' }}>
                  {tab}
                </button>
              ))}
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <tbody>
                {filteredTx.length === 0 ? (
                  <tr><td colSpan="4" className="text-center py-8 text-gray-500">No transactions found</td></tr>
                ) : filteredTx.map((tx, i) => {
                  const TxIcon = TxIconMap[tx.icon] || Wallet
                  return (
                    <tr key={i} className={dbStyles.txRow}>
                      <td className="py-4 pl-2">
                        <div className={dbStyles.txIcon}>
                          <TxIcon size={18} />
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="font-semibold text-dark">{tx.name}</div>
                        <div className="text-xs text-gray-500">{tx.id}</div>
                      </td>
                      <td className="py-4 px-4 text-right font-bold text-dark">
                        {tx.amount > 0 ? "+" : "-"}${Math.abs(tx.amount).toLocaleString()}
                      </td>
                      <td className="py-4 pr-2 text-right">
                        <span className={`inline-flex items-center gap-1 text-xs font-bold ${dbStyles.badge} ${tx.status === "up" ? "text-green-500" : "text-red-500"}`}
                              style={{ backgroundColor: tx.status === 'up' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)' }}>
                          {tx.status === "up" ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
                          10.6%
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </Card>
        
        <Card className="flex flex-col items-center justify-center relative">
          <TypographyH3 className="w-full text-left mb-6">Total Income</TypographyH3>
          <div className="relative z-10 mb-4 w-full flex justify-center">
            <DonutChart 
              series={totalIncome.series} 
              labels={totalIncome.labels}
              height={220}
              options={{
                colors: ["#3b82f6", "#f59e42", "#10b981", "#6366f1"],
                stroke: { width: 0 },
                legend: { show: false }
              }}
            />
          </div>
          <div className="w-full grid grid-cols-2 gap-4 mt-2">
            {totalIncome.details.map((item, i) => (
              <div key={i} className={dbStyles.incomeItem}>
                <span className="text-xs font-semibold text-gray-500 mb-1">{item.label}</span>
                <span className="text-lg font-bold text-dark">${item.value.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
})

export default Dashboard
