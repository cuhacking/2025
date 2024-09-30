'use client'

import { Bar, BarChart, CartesianGrid, LabelList, Line, LineChart, Pie, PieChart, XAxis, YAxis } from 'recharts'
import { TrendingUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '../components/ui/chart/chart'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu/dropdown-menu'

const lightChartConfig = {
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

const darkChartConfig = {
  gender: {
    label: 'Gender',
    color: 'hsl(var(--chart-5))', // red
  },
  international: {
    label: 'International',
    color: 'hsl(var(--chart-2))', // green
  },
  domestic: {
    label: 'Domestic',
    color: 'hsl(var(--chart-1))', // blue
  },
  gradYear: {
    label: 'Graduation Year',
    color: '#ffffff', // white
  },
} satisfies ChartConfig

export default function Index() {
  const { theme, setTheme } = useTheme()
  const [genderData, setGenderData] = useState([])
  const [internationalDomesticData, setInternationalDomesticData] = useState([])
  const [gradYearData, setGradYearData] = useState([])
  const [phoneNumberData, setPhoneNumberData] = useState([])

  const chartConfig = theme === 'dark' ? darkChartConfig : lightChartConfig

  useEffect(() => {
    async function fetchData() {
      try {
        const [genderResponse, internationalDomesticResponse, gradYearResponse, phoneNumberResponse] = await Promise.all([
          fetch('/api/gender-distribution'),
          fetch('/api/international-or-domestic'),
          fetch('/api/estimated-grad-year'),
          fetch('/api/phone-number-country-code'),
        ])

        const genderResult = await genderResponse.json()
        const internationalDomesticResult = await internationalDomesticResponse.json()
        const gradYearResult = await gradYearResponse.json()
        const phoneNumberResult = await phoneNumberResponse.json()

        if (genderResponse.ok) {
          const formattedGenderData = genderResult.data.map(item => ({
            ...item,
            count: Number(item.count),
          }))
          setGenderData(formattedGenderData)
        }
        else {
          console.error('Error fetching gender data:', genderResult.error)
        }

        if (internationalDomesticResponse.ok) {
          const formattedInternationalDomesticData = internationalDomesticResult.data.map(item => ({
            ...item,
            count: Number(item.count),
          }))
          setInternationalDomesticData(formattedInternationalDomesticData)
        }
        else {
          console.error('Error fetching international/domestic data:', internationalDomesticResult.error)
        }

        if (gradYearResponse.ok) {
          const formattedGradYearData = gradYearResult.data.map(item => ({
            ...item,
            count: Number(item.count),
          }))
          setGradYearData(formattedGradYearData)
        }
        else {
          console.error('Error fetching graduation year data:', gradYearResult.error)
        }

        if (phoneNumberResponse.ok) {
          const formattedPhoneNumberData = phoneNumberResult.data.map(item => ({
            ...item,
            count: Number(item.count),
          }))
          setPhoneNumberData(formattedPhoneNumberData)
        }
        else {
          console.error('Error fetching country code data:', phoneNumberResult.error)
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

          <ModeToggle setTheme={setTheme} />

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
                    <YAxis domain={[0, 120]} />
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

            <Card>
              <CardHeader>
                <CardTitle>Pie Chart - Legend</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig}>
                  <PieChart>
                    <Pie data={phoneNumberData} dataKey="count" nameKey="phone_number_country_code" cx="50%" cy="50%" outerRadius={80} fill={chartConfig.gender.color} label />
                    <ChartLegend />
                  </PieChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

function ModeToggle({ setTheme }: { setTheme: (theme: string) => void }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
