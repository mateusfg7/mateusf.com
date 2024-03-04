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
      <div className="text-neutral-600 dark:text-neutral-400">
        <p>
          The guestbook is a place where website visitors can leave their mark
          on their visit.
        </p>
        <p>
          Leave a message, disclose yourself, leave your social networks, or
          just say{' '}
          <span className="font-medium italic">
            &quot;Brooks was here!&quot;
          </span>
          .
        </p>
      </div>
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
