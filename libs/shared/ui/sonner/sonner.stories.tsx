import { toast } from 'sonner'
import { Button } from '../button'
import { Toaster } from './sonner'

export default {
  title: 'cuHacking Design System/Toaster',
  component: Toaster,
  parameters: {
    layout: 'centered',
  },
}

export function Default() {
  return (
    <div>
      <Toaster />
      <Button onClick={() => toast('This is a toast notification!')}>Show Toast</Button>
    </div>
  )
}
