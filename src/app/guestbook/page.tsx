import { GiscusComments } from '~/components/giscus-comments'
import { Title } from '~/components/title'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Guestbook',
  description:
    'A guestbook where you can leave your precious message for me and also see all old messages',
  openGraph: {
    title: 'Guestbook',
    description:
      'A guestbook where you can leave your precious message for me and also see all old messages'
  }
}

export default function Page() {
  return (
    <div className="content-vertical-spaces content-container m-auto space-y-10 md:space-y-4">
      <Title text="Guestbook" />
      <div>
        <GiscusComments
          category="Show and tell"
          categoryId="MDE4OkRpc2N1c3Npb25DYXRlZ29yeTMyNzg0MzYw"
          reactionsEnabled="0"
          inputPosition="top"
          mapping="specific"
          term="Guestbook"
          transparentDark={false}
        />
      </div>
    </div>
  )
}
