import { forwardRef } from 'react'

import {
  BookmarkIcon,
  BookmarkOutlineIcon,
  HomeIcon,
  HomeOutlineIcon,
  LogOutIcon,
  MessageIcon,
  MessageOutlineIcon,
  PersonIcon,
  PersonOutlineIcon,
  PlusIcon,
  PlusOutlineIcon,
  SearchOutline,
  TrendingIcon,
} from '@/shared/assets/icons'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { NavLink } from '../../model/types/navlink.types'

type Props = {
  link: NavLink
}

const linkClasses = {
  active: ` text-Primary-500`,
  base: `flex gap-[12px] font-medium-text-14 transition ease-in-out hover:text-Primary-100 mb-[24px] last:absolute last:bottom-[36px] last:mb-0`,
  default: `text-Light-100`,
  disabled: `pointer-events-none text-Dark-100 cursor-default`,
}

export const DesktopSidebarItem = forwardRef<HTMLAnchorElement, Props>(({ link }, ref) => {
  const pathname = usePathname()
  const isActive = pathname!.startsWith(link.href)

  const getIcon = (href: string, isActive: boolean) => {
    switch (href) {
      case '/home':
        return isActive ? <HomeIcon /> : <HomeOutlineIcon />
      case '/create':
        return isActive ? <PlusIcon /> : <PlusOutlineIcon />
      case '/profile':
        return isActive ? <PersonIcon /> : <PersonOutlineIcon />
      case '/messenger':
        return isActive ? <MessageIcon /> : <MessageOutlineIcon />
      case '/favorites':
        return isActive ? <BookmarkIcon /> : <BookmarkOutlineIcon />
      case '/search':
        return <SearchOutline />
      case '/statistics':
        return <TrendingIcon />
      case '/log-out':
        return <LogOutIcon />
      default:
        return null
    }
  }

  return (
    <Link
      aria-disabled={link.disabled}
      className={clsx(
        isActive ? linkClasses.active : link.disabled ? linkClasses.disabled : linkClasses.default,
        linkClasses.base
      )}
      href={link.href}
      onClick={link.handleClick}
      ref={ref}
    >
      {getIcon(link.href, isActive)}
      {link.name}
      <div className={clsx(isActive && `absolute right-8 w-2 h-2 rounded bg-Primary-900`)}></div>
    </Link>
  )
})

DesktopSidebarItem.displayName = 'DesktopSidebarItem'
