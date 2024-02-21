import {
  Envelope,
  GithubLogo,
  LinkedinLogo,
  StackOverflowLogo,
  RedditLogo,
  TwitterLogo,
  InstagramLogo,
  ArrowUpRight,
  CodepenLogo
} from '@phosphor-icons/react/dist/ssr'

type Contact = {
  user: string
  title: () => JSX.Element
  link: () => JSX.Element
}
const contacts: Contact[] = [
  {
    user: 'contact@mateusf.com',
    title: () => (
      <div className="contact-line contact-line-title">
        <span className="rounded bg-brand-email/10 p-1">
          <Envelope size="1em" weight="duotone" />
        </span>
        <span>Email</span>
      </div>
    ),
    link: () => (
      <div className="contact-line">
        <a
          className="inline-flex items-end gap-px hover:underline"
          href="mailto:contact@mateusf.com"
          target="_blank"
          rel="external"
        >
          <span className="leading-none">Send e-mail</span>
          <ArrowUpRight size="1em" className="text-sm" />
        </a>
      </div>
    )
  },
  {
    user: 'mateusfg7',
    title: () => (
      <div className="contact-line contact-line-title text-brand-github">
        <span className="rounded bg-brand-github/10 p-1">
          <GithubLogo size="1em" weight="duotone" />
        </span>
        <span>Github</span>
      </div>
    ),
    link: () => (
      <div className="contact-line">
        <a
          className="inline-flex items-end gap-px hover:underline"
          href="https://github.com/mateusfg7"
          target="_blank"
          rel="external"
        >
          <span className="leading-none">Open profile</span>
          <ArrowUpRight size="1em" className="text-sm" />
        </a>
      </div>
    )
  },
  {
    user: 'mateusfg',
    title: () => (
      <div className="contact-line contact-line-title text-brand-linkedin">
        <span className="rounded bg-brand-linkedin/10 p-1 ">
          <LinkedinLogo size="1em" weight="duotone" />
        </span>
        <span>Linkedin</span>
      </div>
    ),
    link: () => (
      <div className="contact-line">
        <a
          className="inline-flex items-end gap-px hover:underline"
          href="https://www.linkedin.com/in/mateusfg/"
          target="_blank"
          rel="external"
        >
          <span className="leading-none">Open profile</span>
          <ArrowUpRight size="1em" className="text-sm" />
        </a>
      </div>
    )
  },
  {
    user: 'mateusfg7',
    title: () => (
      <div className="contact-line contact-line-title text-brand-stack-overflow">
        <span className="rounded bg-brand-stack-overflow/10 p-1">
          <StackOverflowLogo size="1em" weight="duotone" />
        </span>
        <span>Stack Overflow</span>
      </div>
    ),
    link: () => (
      <div className="contact-line">
        <a
          className="inline-flex items-end gap-px hover:underline"
          href="https://stackoverflow.com/users/15445504/mateusfg7"
          target="_blank"
          rel="external"
        >
          <span className="leading-none">Open summary</span>
          <ArrowUpRight size="1em" className="text-sm" />
        </a>
      </div>
    )
  },
  {
    user: 'mateusfg7',
    title: () => (
      <div className="contact-line contact-line-title text-brand-codepen">
        <span className="rounded bg-brand-codepen/10 p-1">
          <CodepenLogo size="1em" weight="duotone" />
        </span>
        <span>Codepen</span>
      </div>
    ),
    link: () => (
      <div className="contact-line">
        <a
          className="inline-flex items-end gap-px hover:underline"
          href="https://codepen.io/mateusfg7"
          target="_blank"
          rel="external"
        >
          <span className="leading-none">View pens</span>
          <ArrowUpRight size="1em" className="text-sm" />
        </a>
      </div>
    )
  },
  {
    user: 'u/mateusfg7',
    title: () => (
      <div className="contact-line contact-line-title text-brand-reddit">
        <span className="rounded bg-brand-reddit/10 p-1">
          <RedditLogo size="1em" weight="duotone" />
        </span>
        <span>Reddit</span>
      </div>
    ),
    link: () => (
      <div className="contact-line">
        <a
          className="inline-flex items-end gap-px hover:underline"
          href="https://www.reddit.com/user/mateusfg7/"
          target="_blank"
          rel="external"
        >
          <span className="leading-none">See comments</span>
          <ArrowUpRight size="1em" className="text-sm" />
        </a>
      </div>
    )
  },
  {
    user: '@mateusfg77',
    title: () => (
      <div className="contact-line contact-line-title text-brand-twitter">
        <span className="rounded bg-brand-twitter/10 p-1">
          <TwitterLogo size="1em" weight="duotone" />
        </span>
        <span>Twitter</span>
      </div>
    ),
    link: () => (
      <div className="contact-line">
        <a
          className="inline-flex items-end gap-px hover:underline"
          href="https://twitter.com/mateusfg77"
          target="_blank"
          rel="external"
        >
          <span className="leading-none">See tweets</span>
          <ArrowUpRight size="1em" className="text-sm" />
        </a>
      </div>
    )
  },
  {
    user: '@mateusfg7',
    title: () => (
      <div className="contact-line contact-line-title text-brand-instagram">
        <span className="rounded bg-brand-instagram/10 p-1">
          <InstagramLogo size="1em" weight="duotone" />
        </span>
        <span>Instagram</span>
      </div>
    ),
    link: () => (
      <div className="contact-line">
        <a
          className="inline-flex items-end gap-px hover:underline"
          href="https://www.instagram.com/mateusfg7/"
          target="_blank"
          rel="external"
        >
          <span className="leading-none">Open profile</span>
          <ArrowUpRight size="1em" className="text-sm" />
        </a>
      </div>
    )
  }
]

export function Contact() {
  return (
    <div className="flex justify-between text-lg md:text-2xl">
      <div className="flex-1">{contacts.map(contact => contact.title())}</div>
      <div className="hidden flex-1 text-neutral-500 lg:block">
        {contacts.map(contact => (
          <div key={contact.user} className="contact-line">
            {contact.user}
          </div>
        ))}
      </div>
      <div>{contacts.map(contact => contact.link())}</div>
    </div>
  )
}
