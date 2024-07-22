'use client'
import { useEffect, useRef, useState } from 'react'

import { SignUpForm, SignUpFormValues } from '@/feature'
import {
  EMPTY_STRING,
  UseFormRef,
  getAuthLayout,
  useResponsive,
  useTranslation,
  AuthRoutes,
} from '@/shared'
import { PageWrapper } from '@/widgets/page-wrapper'
import dynamic from 'next/dynamic'
import { useSignUp } from '@/feature/auth/api/hooks/useSignUp'
import { useRouter } from 'next/router'

const DynamicSentEmailModal = dynamic(
  import('@/feature/auth/ui/sent-email-modal').then(module => module.SentEmailModal)
)

const SignUpPage = () => {
  const ref = useRef<UseFormRef<SignUpFormValues>>(null)
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()
  const { xs } = useResponsive()
  const { mutate, data, isPending, isSuccess } = useSignUp()
  const handleSubmitForm = (formData: SignUpFormValues) => {
    mutate(formData) //в mutate передаются данные, которые необходимо отправить на сервер для выполнения мутации
  }
  useEffect(() => {
    if (isSuccess) {
      setOpen(true) // Открываем модальное окно при успешном isSuccess
    }
  }, [isSuccess])

  const handleChangeOpen = (open: boolean) => {
    setOpen(open)
    if (!open && isSuccess) {
      // Выполняем редирект, если модальное окно закрывается и isSuccess истинно
      router.push(AuthRoutes.SIGN_IN)
    }
    ref.current?.reset()
  }
  return (
    <PageWrapper
      description={t.pages.signUp.metaDescription}
      paddingBlock={xs ? '24px' : '16px'}
      title={t.pages.signUp.metaTitle}
    >
      <SignUpForm
        hrefGithub={process.env.NEXT_PUBLIC_GITHUB_OAUTH2 ?? EMPTY_STRING}
        hrefGoogle={process.env.NEXT_PUBLIC_GOOGLE_OAUTH2 ?? EMPTY_STRING}
        disabled={isPending}
        onSubmit={handleSubmitForm}
        ref={ref}
      />
      {data && (
        <DynamicSentEmailModal
          email={data.data.email}
          onOpenChange={handleChangeOpen}
          open={open}
        />
      )}
    </PageWrapper>
  )
}

SignUpPage.getLayout = getAuthLayout
export default SignUpPage
