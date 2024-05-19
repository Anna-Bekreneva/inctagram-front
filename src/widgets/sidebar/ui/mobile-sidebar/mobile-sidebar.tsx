import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { cn } from '@/shared/lib/utils/merge-cn'
import { ReturnComponent } from '@/shared/types'

import { NavLink } from '../../model/types/navlink.types'
import { MobileSidebarItem } from './mobile-sidebar-item'

type Props = {
  className?: string
  links: NavLink[]
} & ComponentPropsWithoutRef<'aside'>

export const MobileSidebar = forwardRef<HTMLElement, Props>(
  ({ className, links }, ref): ReturnComponent => {
    return (
      <aside className={'w-full'}>
        <nav
          className={cn(
            className,
            'pt-[72px] pr-[60px] pb-[36px] pl-[40px] h-[660px] w-full max-w-[220px] fixed top-[60px] left-0 border-r-[1px] border-r-Dark-300 [&>*:nth-child(5)]:mb-[46px]'
          )}
          ref={ref}
        >
          {links.map(link => {
            return <MobileSidebarItem key={link.href} link={link} />
          })}
        </nav>
      </aside>
    )
  }
)

MobileSidebar.displayName = 'MobileSidebar'
