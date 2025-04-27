export interface ChartDataItem {
  name: string
  value: number
  color: string
  formattedValue: string
}

export interface VideoSizeChartProps {
  chartData: ChartDataItem[]
}
