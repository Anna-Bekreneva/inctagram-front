import { getAuthLayout, ReturnComponent, useResponsive, useTranslation } from '@/shared'
import { PageWrapper } from '@/widgets'
import React from 'react'
import { TermsOfService } from '@/feature'

const TermOfServicePage = (): ReturnComponent => {
  const { t } = useTranslation()
  const { sm } = useResponsive()

  return (
    <PageWrapper
      className={'max-w-[1268px] justify-start'}
      description={t.pages.termsOfService.metaDescription}
      paddingBlock={sm ? '16px' : '24px'}
      title={t.pages.termsOfService.metaTitle}
    >
      <TermsOfService />
    </PageWrapper>
  )
}

TermOfServicePage.getLayout = getAuthLayout
export default TermOfServicePage
