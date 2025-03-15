import { Layout } from '@cuhacking/portal/ui/layout'
/* import { Scanner } from "@yudiel/react-qr-scanner"; */
import { Button } from '@cuhacking/shared/ui/button'
import { GlassmorphicCard } from '@cuhacking/shared/ui/glassmorphic-card'
import { cn } from '@cuhacking/shared/utils/cn'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { CodeXml, User } from 'lucide-react'
import { QRCodeCanvas } from 'qrcode.react'

import * as React from 'react'

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'inline-flex h-9 items-center justify-center rounded-lg p-1',
      className,
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-black data-[state=active]:shadow',
      className,
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      className,
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsContent, TabsList, TabsTrigger }

export function QrPage({
  user,
  /* events */
}) {
  const qrValue = 'https://yourwebsite.com'
  /* console.log(events); */

  return (
    <Layout isCompleteProfile>
      <div className="w-full flex justify-center items-center h-screen">
        <section className="mx-auto space-y-5">
          <GlassmorphicCard className="flex flex-col items-center justify-center mx-auto space-y-2 p-5">
            <Tabs defaultValue="qr" className="w-screen-sm">
              <TabsList>
                <TabsTrigger value="qr">
                  <User />
                  {' '}
                  QR Code
                </TabsTrigger>
                <TabsTrigger value="scanner">
                  <CodeXml />
                  {' '}
                  Scanner
                </TabsTrigger>
              </TabsList>
              <TabsContent value="qr">
                <GlassmorphicCard className="flex flex-col items-center justify-center mx-auto space-y-2 p-5">
                  <QRCodeCanvas value={qrValue} size={200} />
                </GlassmorphicCard>
              </TabsContent>
              <TabsContent value="scanner">
                {/* <Scanner onScan={(result) => console.log(result)} /> */}
              </TabsContent>
            </Tabs>
          </GlassmorphicCard>

          <GlassmorphicCard className="flex justify-center mx-auto p-5">
            <span className="text-lg font-semibold">
              Hi
              {' '}
              {user.preferredDisplayName}
              ! ur doing great! 🥗✨ Looking for
              QR code ...
            </span>
          </GlassmorphicCard>
          <Button>Confirm</Button>
        </section>
      </div>
    </Layout>
  )
}
