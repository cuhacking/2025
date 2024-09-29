'use client'

import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from 'recharts'
import { TrendingUp } from 'lucide-react'
import { useEffect, useState } from 'react'
// import { Button } from '../components/ui/button/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/ui/card/card'
import type {
  ChartConfig,
} from '../components/ui/chart/chart'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '../components/ui/chart/chart'

const chartConfig = {
  gender: {
    label: 'Gender',
    color: '#2563eb',
  },
} satisfies ChartConfig

export default function Index() {
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/chart')
        const result = await response.json()

        if (response.ok) {
          // eslint-disable-next-line no-console
          console.log(result.data)
          setChartData(result.data)
        }
        else {
          console.error('Error fetching data:', result.error)
        }
      }
      catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])
  return (
    <div>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome portal 👋
            </h1>
          </div>
          <div id="chart">
            <Card>
              <CardHeader>
                <CardTitle>Bar Chart - Gender Distribution</CardTitle>
                <CardDescription>Gender distribution of users</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                  <BarChart
                    accessibilityLayer
                    data={chartData}
                    margin={{ top: 20 }}
                  >
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="gender"
                      tickLine={false}
                      tickMargin={10}
                      axisLine={false}
                    />
                    <YAxis />
                    <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                    <Bar dataKey="count" fill={chartConfig.gender.color} radius={8}>
                      <LabelList position="top" offset={12} className="fill-foreground" fontSize={12} />
                    </Bar>
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
