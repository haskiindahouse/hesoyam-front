'use client'

import React from 'react'
import ReactECharts from 'echarts-for-react'
import { EChartsOption } from 'echarts'

const RED = '#fd3838'
const GREEN = '#49b93c'
const YELLOW = '#e3d027'

const TestDiagram = () => {
  const data = [
    { value: 10480, name: 'Доходы', itemStyle: { color: GREEN } },
    { value: 7354, name: 'Расходы', itemStyle: { color: RED } },
    { value: 2500, name: 'На пенсию', itemStyle: { color: YELLOW } }
  ]

  const option: EChartsOption = {
    title: {
      text: data.reduce((sum, curr) => sum + curr.value, 0).toString(),
      left: 'center',
      top: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        type: 'pie',
        radius: ['40%', '60%'],
        avoidLabelOverlap: false,
        padAngle: 3,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2,
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowBlur: 50
        },
        label: {
          overflow: 'truncate',
          width: 120
        },
        labelLayout: {},
        data: data
      }
    ]
  }

  return (
    <ReactECharts
      option={option}
      style={{ height: 400, width: '100%', display: 'inline-block' }}
    />
  )
}

export default TestDiagram
