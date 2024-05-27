import * as React from 'react'

import { cn } from '@/shared/lib/utils'
import { Select, SelectContent } from '@/shared/ui/select/select'
import { LanguageSelectionList } from '@/widgets/header/ui/language-selection-list/language-selection-list'
import { LanguageSelectionTrigger } from '@/widgets/header/ui/language-selection-trigger'
import { SelectItemProps, SelectProps } from '@radix-ui/react-select'
import { SelectScrollUpButton } from '@/shared/ui/select/select'
import { SelectScrollDownButton } from '@/shared/ui/select/select'

type Props = {
  isMobile: boolean
  items: SelectItemProps[]
} & SelectProps

export const LanguageSelection = ({ isMobile = false, items, value, ...rest }: Props) => {
  const classes = {
    content: cn(
      'rounded-b-[2px] bg-Dark-500 border border-Light-100',
      !isMobile && 'w-[164px] border-t-0',
      isMobile && 'min-w-0'
    ),
  }

  const selectedItem = items.find(item => item.value === value)

  return (
    <Select value={value} {...rest}>
      <LanguageSelectionTrigger
        currentTextValue={selectedItem?.textValue ?? ''}
        currentValue={selectedItem?.value ?? ''}
        isMobile={isMobile}
      />
      <SelectContent className={classes.content}>
        <LanguageSelectionList isMobile={isMobile} items={items} />
      </SelectContent>
    </Select>
  )
}
