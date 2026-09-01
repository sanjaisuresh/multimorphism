import { makeAutoObservable } from 'mobx'

class DashboardStore {
  constructor(rootStore) {
    this.rootStore = rootStore
    makeAutoObservable(this)
  }

  quickStats = [
    {
      icon: "wallet",
      label: "All Earnings",
      value: "$3,020",
      percent: 30.6,
      color: "#3b82f6",
      chart: [12, 18, 14, 16, 12, 10, 14, 18, 16, 14, 12, 10],
    },
    {
      icon: "lineChart",
      label: "Page Views",
      value: "290K+",
      percent: 30.6,
      color: "#f59e42",
      chart: [8, 12, 10, 14, 18, 16, 14, 12, 10, 14, 18, 16],
    },
    {
      icon: "checkSquare",
      label: "Total Task",
      value: "839",
      percent: 0,
      color: "#10b981",
      chart: [10, 14, 12, 16, 18, 14, 12, 10, 14, 18, 16, 12],
    },
    {
      icon: "download",
      label: "Download",
      value: "2,067",
      percent: -30.6,
      color: "#ef4444",
      chart: [16, 14, 12, 10, 14, 18, 16, 12, 10, 14, 18, 16],
    },
  ]

  monthlyRevenue = {
    series: [
      {
        name: "Revenue",
        data: [30, 40, 35, 50, 49, 70, 91, 60, 50, 55, 60, 65],
      },
    ],
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    percent: 5.44,
  }

  projectTasks = [
    { label: "Horizontal Layout", color: "#3b82f6" },
    { label: "Invoice Generator", color: "#f59e42" },
    { label: "Package Upgrades", color: "#fbbf24" },
    { label: "Figma Auto Layout", color: "#10b981" },
  ]

  projectUsers = [
    { avatar: "JD", name: "Jacob" },
    { avatar: "AM", name: "Alice" },
    { avatar: "RC", name: "Robert" },
    { avatar: "ST", name: "Sam" },
    { avatar: "LB", name: "Liam" },
  ]

  transactions = [
    { icon: "Music", name: "Apple Music", id: "#T11032", amount: 15000, time: "06:30 pm", status: "up", tx_status: "success" },
    { icon: "PenTool", name: "Notion", id: "#T11033", amount: -40, time: "08:30 pm", status: "down", tx_status: "success" },
    { icon: "Car", name: "Lyft", id: "#T11034", amount: 120000, time: "08:40 pm", status: "up", tx_status: "pending" },
    { icon: "Car", name: "Zipcar", id: "#T11035", amount: 80000, time: "07:40 pm", status: "up", tx_status: "success" },
    { icon: "Coffee", name: "Starbucks", id: "#T11036", amount: -15, time: "09:15 am", status: "down", tx_status: "pending" },
  ]

  totalIncome = {
    series: [44, 55, 41, 17],
    labels: ["Income", "Download", "Rent", "Views"],
    details: [
      { label: "Income", value: 23876 },
      { label: "Download", value: 23876 },
      { label: "Rent", value: 23876 },
      { label: "Views", value: 23876 },
    ],
  }
}

export default DashboardStore
