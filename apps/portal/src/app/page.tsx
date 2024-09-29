'use client'

import { Bar, BarChart, CartesianGrid, LabelList, Line, LineChart, XAxis, YAxis } from 'recharts'
import { TrendingUp } from 'lucide-react'
import { useEffect, useState } from 'react'
// import { Button } from '../components/ui/button/button'
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

const chartConfig = {
  gender: {
    label: 'Gender',
    color: '#2563eb',
  },
  international: {
    label: 'International',
    color: '#60a5fa',
  },
  domestic: {
    label: 'Domestic',
    color: '#34d399',
  },
  gradYear: {
    label: 'Graduation Year',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig

export default function Index() {
  const [genderData, setGenderData] = useState([])
  const [internationalDomesticData, setInternationalDomesticData] = useState([])
  const [gradYearData, setGradYearData] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const [genderResponse, internationalDomesticResponse, gradYearResponse] = await Promise.all([
          fetch('/api/gender-distribution'),
          fetch('/api/international-or-domestic'),
          fetch('/api/estimated-grad-year'),
        ])

        const genderResult = await genderResponse.json()
        const internationalDomesticResult = await internationalDomesticResponse.json()
        const gradYearResult = await gradYearResponse.json()

        if (genderResponse.ok) {
          // eslint-disable-next-line no-console
          console.log(genderResult.data)
          setGenderData(genderResult.data)
        }
        else {
          console.error('Error fetching gender data:', genderResult.error)
        }

        if (internationalDomesticResponse.ok) {
          // eslint-disable-next-line no-console
          console.log(internationalDomesticResult.data)
          setInternationalDomesticData(internationalDomesticResult.data)
        }
        else {
          console.error('Error fetching international/domestic data:', internationalDomesticResult.error)
        }

        if (gradYearResponse.ok) {
          // eslint-disable-next-line no-console
          console.log(gradYearResult.data)
          setGradYearData(gradYearResult.data)
        }
        else {
          console.error('Error fetching graduation year data:', gradYearResult.error)
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
                    data={genderData}
                    margin={{ top: 20 }}
                  >
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="gender"
                      tickLine={true}
                      tickMargin={10}
                      axisLine={true}
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

            <Card>
              <CardHeader>
                <CardTitle>Bar Chart - International vs Domestic</CardTitle>
                <CardDescription>International vs Domestic users</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                  <BarChart
                    accessibilityLayer
                    data={internationalDomesticData}
                    margin={{ top: 20 }}
                  >
                    <CartesianGrid vertical={false} />
                    <XAxis
                      tickLine={true}
                      tickMargin={10}
                      axisLine={true}
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

            <Card>
              <CardHeader>
                <CardTitle>Line Chart - Estimated Graduation Year</CardTitle>
                <CardDescription>Estimated graduation year of users</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig}>
                  <LineChart
                    accessibilityLayer
                    data={gradYearData}
                    margin={{
                      top: 20,
                      left: 12,
                      right: 12,
                    }}
                  >
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="estimated_grad_year"
                      tickLine={true}
                      axisLine={true}
                      tickMargin={8}
                    />
                    <YAxis />
                    <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
                    <Line
                      dataKey="count"
                      type="natural"
                      stroke={chartConfig.gender.color}
                      strokeWidth={4}
                      dot={{
                        fill: chartConfig.gender.color,
                      }}
                      activeDot={{
                        r: 6,
                      }}
                    >
                      <LabelList
                        position="top"
                        offset={12}
                        className="fill-foreground"
                        fontSize={12}
                      />
                    </Line>
                  </LineChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
