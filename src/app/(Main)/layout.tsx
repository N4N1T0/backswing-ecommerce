import Footer from '@/components/layout/footer/footer'
import Navbar from '@/components/layout/navbar/navbar'
import { Toaster } from '@/components/ui/sonner'

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Toaster />
      <Footer />
    </>
  )
}
