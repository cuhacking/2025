import { Layout } from '@cuhacking/portal/ui/layout'
import { Badge } from '@cuhacking/shared/ui/badge'
import { Button } from '@cuhacking/shared/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@cuhacking/shared/ui/dialog'
import { GlassmorphicCard } from '@cuhacking/shared/ui/glassmorphic-card'
import MultipleSelector from '@cuhacking/shared/ui/multi-select'
import { Typography } from '@cuhacking/shared/ui/typography'

const options = [
  { label: '🔊 Ceremony', value: 'ceremony' },
  { label: '💻 Workshop', value: 'workshop' },
  { label: '🥂 Networking', value: 'networking' },
  { label: '🎉 Social', value: 'social' },
  { label: '💡 Hackathon', value: 'hackathon' },
  { label: '😂 Fun', value: 'fun' },
  { label: '🥑 Food', value: 'food' },
  { label: '🤹 Other', value: 'other' },
]

export function SchedulePage() {
  return (
    <Layout isCompleteProfile={false}>

      <section className="max-w-screen-xl mx-auto p-5 sm:px-10 py-40 pt-10">
        <GlassmorphicCard className="row-span-2 p-5 text-center mb-5 ">
          <Typography variant="h2">
            SCHEDULE
          </Typography>
        </GlassmorphicCard>
        <div className="flex flex-col gap-5">

          <div className="flex flex-row gap-3 justify-center ">
            <Button className="!hover:text-white cursor-pointer">Fri Mar 14th</Button>
            <Button className="cursor-pointer">Fri Mar 14th</Button>
            <Button className="cursor-pointer">Fri Mar 14th</Button>
          </div>
          <MultipleSelector isRequired={false} name="Filter" form={undefined} options={options} placeholder="filter" hidePlaceholderWhenSelected></MultipleSelector>
          <Event />
        </div>
      </section>
    </Layout>
  )
}

function Event() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <GlassmorphicCard className="p-4 flex flex-col sm:flex-row">
            <div className="flex-grow-1">
              <Typography variant="h5">Title</Typography>
              <Typography variant="paragraph-xs">⌛ 2:20pm - 5:30pm</Typography>
              <Typography variant="paragraph-xs">📍 RB 222</Typography>
            </div>
            <div className="flex-shrink-1">
              <Badge variant="outline">🚽 work</Badge>
            </div>
          </GlassmorphicCard>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          hi
        </DialogContent>
      </Dialog>

    </>
  )
}
