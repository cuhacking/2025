import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@cuhacking/shared/ui/avatar'

interface QuestionHeaderProps {
  isComplete: boolean
  avatarUrl: string
  firstName: string
  lastName: string
}

export function Header({
  isComplete,
  avatarUrl,
  firstName,
  lastName,
}: QuestionHeaderProps) {
  let welcomeMessage = ''
  let profileTitle = ''
  if (!isComplete) {
    welcomeMessage = 'Hi, we wanna get to know you!'
    profileTitle = 'Create Profile'
  }
  else {
    welcomeMessage = 'Evolving are we? Let us know!'
    profileTitle = `Hi, ${firstName}`
  }
  const fallBackAvatar = firstName.charAt(0) + lastName.charAt(0)
  return (
    <div className="flex gap-4 p-4 items-center">
      <div className="pt-2">
        <Avatar className="w-16 h-16 ">
          <AvatarImage src={avatarUrl} />
          <AvatarFallback>{fallBackAvatar}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col justify-start items-start gap-1.5 w-full">
        <div className="text-Foreground text-2xl font-bold">
          {profileTitle}
        </div>
        <div className="grow text-zinc-400 text-sm font-normal font-mono leading-3">
          {welcomeMessage}
        </div>
      </div>
    </div>
  )
}
