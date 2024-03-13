import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'My personal portfolio with the main active and inactive projects, websites, apps, etc.',
  keywords: ['projects', 'portfolio', 'programming', 'softwares', 'apps']
}

export default function AboutLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="content-vertical-spaces">
      <div className="fixed bottom-0 right-0 -z-50 hidden h-96 w-96 bg-[url(/assets/server-status-bro-light.svg)] bg-contain bg-bottom bg-no-repeat opacity-10 dark:bg-[url(/assets/server-status-bro-dark.svg)] dark:opacity-5 md:block " />

      {children}
    </div>
  )
}
