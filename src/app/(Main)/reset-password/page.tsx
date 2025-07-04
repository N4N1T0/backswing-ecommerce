import ResetPasswordForm from '@/components/layout/auth/reset-password-form'

export default function ResetPasswordPage() {
  return (
    <div className='min-h-screen bg-white flex items-center justify-center p-8'>
      <div className='max-w-md w-full'>
        <ResetPasswordForm />
      </div>
    </div>
  )
}
