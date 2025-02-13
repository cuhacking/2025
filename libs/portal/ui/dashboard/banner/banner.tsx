import { GlassmorphicCard } from '@cuhacking/shared/ui/glassmorphic-card'

export function Banner({ name }: { name: string }) {
  return (
    <GlassmorphicCard className="gap-y-4 p-3 text-center w-full">
      <h1 className="text-4xl">WELCOME</h1>
      <h2 className="text-transparent bg-greendiant bg-clip-text font-extrabold text-5xl">
        {name}
      </h2>
    </GlassmorphicCard>
  )
}
