import { PageWrapper } from '@/shared/layouts/page-wrapper'
import { getBaseAppLayout } from '@/shared/layouts/base-app-layout'

const Settings = () => {
  return (
    <PageWrapper paddingTop={'36px'} title={'Settings | Instagram'}>
      <h1>Settings</h1>
    </PageWrapper>
  )
}

Settings.getLayout = getBaseAppLayout
export default Settings
