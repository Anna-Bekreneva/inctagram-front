import { CSSProperties, ComponentPropsWithoutRef } from 'react'

import HeadMeta from '@/shared/lib/seo/head-meta'
import { cn } from '@/shared/lib/utils/merge-cn'
import { ReturnComponent } from '@/shared/types'
import instagram from 'public/inctagram.png'

type Props = {
  description?: string
  favicon?: string
  paddingBlock?: CSSProperties['paddingBlock']
  title?: string
} & ComponentPropsWithoutRef<'section'>

export const PageWrapper = ({
  children,
  className,
  description,
  favicon,
  /**
   * Отступ страницы по оси "y"
   * Например: Отступ страницы SingIn от Header
   (по умолчанию для главной странице с local url: http://localhost:3000 --> 24рх,
   задаем props при отрисовки согласно макета paddingBlock = 36рх)
   такой же отступ будет внизу, чтобы контент не прилипал к границе
   */
  paddingBlock = '24px',
  style,
  title,
  ...rest
}: Props): ReturnComponent => {
  const classesPage = cn(`flex justify-center max-w-[1280px] w-full`, className)

  const styles: CSSProperties = {
    paddingBlock: paddingBlock,
    ...style,
  }

  return (
    <section
      className={cn(
        `_Section_ mx-auto min-h-full w-full max-w-[1280px] p-[0_15px] focus-visible:outline-none`,
        classesPage
      )}
      style={styles}
      {...rest}
    >
      <HeadMeta description={description} favicon={instagram.src} title={title} />
      {children}
    </section>
  )
}
