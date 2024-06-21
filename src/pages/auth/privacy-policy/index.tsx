import { PageWrapper, getAuthLayout, useTranslation } from '@/shared'

const PrivacyPolicyPage = () => {
  const { t } = useTranslation()

  return (
    <PageWrapper
      description={t.pages.privacyPolice.metaDescription}
      paddingBlock={'72px'}
      title={t.pages.privacyPolice.metaTitle}
    >
      <h1>PrivacyPolicy</h1>
    </PageWrapper>
  )
}

PrivacyPolicyPage.getLayout = getAuthLayout
export default PrivacyPolicyPage
