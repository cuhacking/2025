'use client'

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from 'recharts'
import { TrendingUp } from 'lucide-react'
import { Button } from '../components/ui/button/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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

const chartData = [
  { month: 'January', desktop: 186, mobile: 80 },
  { month: 'February', desktop: 305, mobile: 200 },
  { month: 'March', desktop: 237, mobile: 120 },
  { month: 'April', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'June', desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: '#2563eb',
  },
  mobile: {
    label: 'Mobile',
    color: '#60a5fa',
  },
} satisfies ChartConfig

export default function Index() {
  return (
    <div>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <Button>HIII</Button>
              <span> Hello there, </span>
              Welcome portal 👋
            </h1>
          </div>

          <div id="chart">
            <Card>
              <CardHeader>
                <CardTitle>Bar Chart - Label</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
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
                      dataKey="month"
                      tickLine={false}
                      tickMargin={10}
                      axisLine={false}
                      tickFormatter={value => value.slice(0, 3)}
                    />
                    <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                    <Bar dataKey="desktop" fill={chartConfig.desktop.color} radius={8}>
                      <LabelList position="top" offset={12} className="fill-foreground" fontSize={12} />
                    </Bar>
                    <Bar dataKey="mobile" fill={chartConfig.mobile.color} radius={8}>
                      <LabelList position="top" offset={12} className="fill-foreground" fontSize={12} />
                    </Bar>
                  </BarChart>
                </ChartContainer>
              </CardContent>
              <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                  Trending up by 5.2% this month
                  {' '}
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                  Showing total visitors for the last 6 months
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
