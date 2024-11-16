import {
  NavigationMenuLink,
} from '@cuhacking/ui/components/navigation-menu/navigation-menu'

export default function NavItem({ index, link, name }) {
  return (
    <NavigationMenuLink href={link}>
      <span className="text-xs text-border">
        {String(index + 1).padStart(2, '0')}
        /
      </span>
      {name}
    </NavigationMenuLink>
  )
}
