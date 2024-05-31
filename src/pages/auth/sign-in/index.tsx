import { SignInForm } from '@/feature/auth/ui/sign-in-form'
import { getLayout } from '@/shared/layouts/layout'
import { PageWrapper } from '@/shared/layouts/page-wrapper'

const SignIn = () => {
  return (
    <PageWrapper paddingTop={'108px'} title={'SignIn | Instagram'}>
      <SignInForm />
    </PageWrapper>
  )
}

SignIn.getLayout = getLayout
export default SignIn
