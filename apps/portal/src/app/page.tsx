'use client'

import { Bar, BarChart, CartesianGrid, LabelList, Line, LineChart, Pie, PieChart, XAxis, YAxis } from 'recharts'
import { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
import { Button } from '../components/ui/button/button'
import 'react-resizable/css/styles.css'
// import { ResizableBox } from 'react-resizable'

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
  // ChartLegendContent,
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
  bar: {
    label: 'blue',
    color: '#2563eb',
  },

  line: {
    label: 'orange',
    color: '#A84300',
  },

  pie: {
    label: 'black',
    color: '#000000',
  },
} satisfies ChartConfig

const darkChartConfig = {
  bar: {
    label: 'red',
    color: '#FF6347',
  },

  line: {
    label: 'neon green',
    color: '#00FF00',
  },

  pie: {
    label: 'cyan',
    color: '#00FFFF',
  },
} satisfies ChartConfig

const colors = [
  '#B80000', // Dark Red
  '#007B00', // Dark Green
  '#004C99', // Dark Blue
  '#99004C', // Dark Pink
  '#CC6600', // Dark Orange
  '#006699', // Dark Cyan
  '#660099', // Dark Purple
  '#993300', // Dark Brown
  '#006633', // Dark Teal
]

const countryCodeMapping = {
  1: 'US-Can',
  44: 'UK',
  81: 'Japan',
  86: 'China',
  91: 'India',
  971: 'UAE',
  972: 'Israel-Palestine',
  995: 'Georgia',
  998: 'Uzbekistan',
}

export default function Index() {
  const { theme, setTheme } = useTheme()
  const [genderData, setGenderData] = useState([])
  const [internationalDomesticData, setInternationalDomesticData] = useState([])
  const [gradYearData, setGradYearData] = useState([])
  const [phoneNumberData, setPhoneNumberData] = useState([])
  const [chartsVisible, setChartsVisible] = useState(false)

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
          const formattedGenderData = genderResult.data.map((item: { count: any }) => ({
            ...item,
            count: Number(item.count),
          }))
          setGenderData(formattedGenderData)
        }
        else {
          console.error('Error fetching gender data:', genderResult.error)
        }

        if (internationalDomesticResponse.ok) {
          const formattedInternationalDomesticData = internationalDomesticResult.data.map((item: { count: any }) => ({
            ...item,
            count: Number(item.count),
          }))
          setInternationalDomesticData(formattedInternationalDomesticData)
        }
        else {
          console.error('Error fetching international/domestic data:', internationalDomesticResult.error)
        }

        if (gradYearResponse.ok) {
          const formattedGradYearData = gradYearResult.data.map((item: { count: any }) => ({
            ...item,
            count: Number(item.count),
          }))
          setGradYearData(formattedGradYearData)
        }
        else {
          console.error('Error fetching graduation year data:', gradYearResult.error)
        }

        if (phoneNumberResponse.ok) {
          const formattedPhoneNumberData = phoneNumberResult.data.map((item: { count: any }, index: number) => ({
            ...item,
            count: Number(item.count),
            country: countryCodeMapping[item.phone_number_country_code] || item.phone_number_country_code,
            fill: colors[index % colors.length],
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

          <Button onClick={() => setChartsVisible(!chartsVisible)}>
            {chartsVisible ? 'Hide Charts' : 'Show Charts'}
          </Button>

          {chartsVisible && (
            <div id="chart" className="flex flex-wrap justify-between">
              {/* <ResizableBox width={600} height={400} minConstraints={[300, 200]} maxConstraints={[1200, 800]} className="min-h-[200px] w-full h-full"> */}
              <Card className="w-full h-full">
                <CardHeader>
                  <CardTitle>Bar Chart - Gender Distribution</CardTitle>
                  <CardDescription>Gender distribution of users</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="min-h-[200px] w-full h-full">
                    <BarChart
                      accessibilityLayer
                      data={genderData}
                      margin={{ top: 20 }}
                    >
                      <CartesianGrid vertical={false} />
                      <XAxis
                        dataKey="gender"
                        // eslint-disable-next-line react/prefer-shorthand-boolean
                        tickLine={true}
                        tickMargin={10}
                        // eslint-disable-next-line react/prefer-shorthand-boolean
                        axisLine={true}
                      />
                      <YAxis />
                      <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                      <Bar dataKey="count" fill={chartConfig.bar.color} radius={8}>
                        <LabelList position="top" offset={12} className="fill-foreground" fontSize={12} />
                      </Bar>
                    </BarChart>
                  </ChartContainer>
                </CardContent>
              </Card>
              {/* </ResizableBox> */}

              {/* <ResizableBox width={600} height={400} minConstraints={[300, 200]} maxConstraints={[1200, 800]} className="w-full mb-4"> */}
              <Card className="w-full mb-4">
                <CardHeader>
                  <CardTitle>Pie Chart - Phone number country code</CardTitle>
                  <CardDescription>Country codes of users phone numbers</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig}>
                    <PieChart>
                      <Pie data={phoneNumberData} dataKey="count" nameKey="country" cx="50%" cy="50%" outerRadius={80} label />
                      <ChartLegend />
                    </PieChart>
                  </ChartContainer>
                </CardContent>
              </Card>
              {/* </ResizableBox> */}

              {/* <ResizableBox width={600} height={400} minConstraints={[300, 200]} maxConstraints={[1200, 800]} className="mb-4 w-[49%]"> */}
              <Card className="w-[49%] mb-4">
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
                        // eslint-disable-next-line react/prefer-shorthand-boolean
                        tickLine={true}
                        // eslint-disable-next-line react/prefer-shorthand-boolean
                        axisLine={true}
                        tickMargin={8}
                      />
                      <YAxis domain={[0, 120]} />
                      <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
                      <Line
                        dataKey="count"
                        type="natural"
                        stroke={chartConfig.line.color}
                        strokeWidth={4}
                        // dot={{
                        //   fill: chartConfig.line.color,
                        // }}
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
              {/* </ResizableBox> */}

              {/* <ResizableBox width={600} height={400} minConstraints={[300, 200]} maxConstraints={[1200, 800]} className="mb-4 w-[49%]"> */}
              <Card className="w-[49%] mb-4">
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
                        // eslint-disable-next-line react/prefer-shorthand-boolean
                        tickLine={true}
                        tickMargin={10}
                        // eslint-disable-next-line react/prefer-shorthand-boolean
                        axisLine={true}
                      />
                      <YAxis />
                      <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                      <Bar dataKey="count" fill={chartConfig.bar.color} radius={8}>
                        <LabelList position="top" offset={12} className="fill-foreground" fontSize={12} />
                      </Bar>
                    </BarChart>
                  </ChartContainer>
                </CardContent>
              </Card>
              {/* </ResizableBox> */}
            </div>
          )}
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
