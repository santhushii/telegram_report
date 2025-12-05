'use client'

import { LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface ChartProps {
  data: any[]
  type?: 'line' | 'bar' | 'area'
  dataKey: string | string[]
  title?: string
  color?: string | string[]
}

export default function Chart({ data, type = 'line', dataKey, title, color = '#0ea5e9' }: ChartProps) {
  const dataKeys = Array.isArray(dataKey) ? dataKey : [dataKey]
  const colors = Array.isArray(color) ? color : [color]
  const defaultColors = ['#0ea5e9', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6']

  const renderDataSeries = (key: string, index: number) => {
    const chartColor = colors[index] || defaultColors[index % defaultColors.length]
    const commonProps = {
      key: key,
      type: "monotone" as const,
      dataKey: key,
      stroke: chartColor,
      fill: chartColor,
      fillOpacity: type === 'area' ? 0.6 : 1,
    }

    if (type === 'bar') {
      return <Bar {...commonProps} />
    } else if (type === 'area') {
      return <Area {...commonProps} />
    } else {
      return <Line {...commonProps} />
    }
  }

  return (
    <div className="w-full h-80 mt-4">
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      <ResponsiveContainer width="100%" height="100%">
        {type === 'bar' ? (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
              }}
            />
            <Legend />
            {dataKeys.map((key, index) => renderDataSeries(key, index))}
          </BarChart>
        ) : type === 'area' ? (
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
              }}
            />
            <Legend />
            {dataKeys.map((key, index) => renderDataSeries(key, index))}
          </AreaChart>
        ) : (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
              }}
            />
            <Legend />
            {dataKeys.map((key, index) => renderDataSeries(key, index))}
          </LineChart>
        )}
      </ResponsiveContainer>
    </div>
  )
}

