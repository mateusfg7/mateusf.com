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
} from '@/shared/wrappers/phosphor-icons'

export function Contact() {
  return (
    <div className="flex justify-between text-lg md:text-2xl">
      <div className="flex-1">
        <div className="contact-line contact-line-title">
          <span className="rounded bg-neutral-900 bg-opacity-10 p-1 dark:bg-neutral-100 dark:bg-opacity-10">
            <Envelope weight="duotone" />
          </span>
          <span>Email</span>
        </div>
        <div className="contact-line contact-line-title text-[#181717] dark:text-[#E6EDF3]">
          <span className="rounded bg-[#181717] bg-opacity-10 p-1 dark:bg-[#E6EDF3] dark:bg-opacity-10">
            <GithubLogo weight="duotone" />
          </span>
          <span>Github</span>
        </div>
        <div className="contact-line contact-line-title text-[#0A66C2]">
          <span className="rounded bg-[#0A66C2] bg-opacity-10 p-1 ">
            <LinkedinLogo weight="duotone" />
          </span>
          <span>Linkedin</span>
        </div>
        <div className="contact-line contact-line-title text-[#F58025]">
          <span className="rounded bg-[#F58025] bg-opacity-10 p-1">
            <StackOverflowLogo weight="duotone" />
          </span>
          <span>Stack Overflow</span>
        </div>
        <div className="contact-line contact-line-title text-[#181717] dark:text-[#E6EDF3]">
          <span className="rounded bg-[#181717] bg-opacity-10 p-1 dark:bg-[#E6EDF3] dark:bg-opacity-10">
            <CodepenLogo weight="duotone" />
          </span>
          <span>Codepen</span>
        </div>
        <div className="contact-line contact-line-title text-[#FF4500]">
          <span className="rounded bg-[#FF4500] bg-opacity-10 p-1">
            <RedditLogo weight="duotone" />
          </span>
          <span>Reddit</span>
        </div>
        <div className="contact-line contact-line-title text-[#1D9BF0]">
          <span className="rounded bg-[#1D9BF0] bg-opacity-10 p-1">
            <TwitterLogo weight="duotone" />
          </span>
          <span>Twitter</span>
        </div>
        <div className="contact-line contact-line-title text-[#E4405F]">
          <span className="rounded bg-[#E4405F] bg-opacity-10 p-1">
            <InstagramLogo weight="duotone" />
          </span>
          <span>Instagram</span>
        </div>
      </div>
      <div className="hidden flex-1 text-neutral-500 lg:block">
        <div className="contact-line">contact@mateusf.com</div>
        <div className="contact-line">mateusfg7</div>
        <div className="contact-line">mateusfg</div>
        <div className="contact-line">mateusfg7</div>
        <div className="contact-line">mateusfg7</div>
        <div className="contact-line">u/mateusfg7</div>
        <div className="contact-line">@mateusfg77</div>
        <div className="contact-line">@mateusfg7</div>
      </div>
      <div>
        <div className="contact-line">
          <a
            className="inline-flex items-end gap-px hover:underline"
            href="mailto:contact@mateusf.com"
            target="_blank"
            rel="external"
          >
            <span className="leading-none">Send e-mail</span>
            <ArrowUpRight className="text-sm" />
          </a>
        </div>
        <div className="contact-line">
          <a
            className="inline-flex items-end gap-px hover:underline"
            href="https://github.com/mateusfg7"
            target="_blank"
            rel="external"
          >
            <span className="leading-none">Open profile</span>
            <ArrowUpRight className="text-sm" />
          </a>
        </div>
        <div className="contact-line">
          <a
            className="inline-flex items-end gap-px hover:underline"
            href="https://www.linkedin.com/in/mateusfg/"
            target="_blank"
            rel="external"
          >
            <span className="leading-none">Open profile</span>
            <ArrowUpRight className="text-sm" />
          </a>
        </div>
        <div className="contact-line">
          <a
            className="inline-flex items-end gap-px hover:underline"
            href="https://stackoverflow.com/users/15445504/mateusfg7"
            target="_blank"
            rel="external"
          >
            <span className="leading-none">Open summary</span>
            <ArrowUpRight className="text-sm" />
          </a>
        </div>
        <div className="contact-line">
          <a
            className="inline-flex items-end gap-px hover:underline"
            href="https://codepen.io/mateusfg7"
            target="_blank"
            rel="external"
          >
            <span className="leading-none">View pens</span>
            <ArrowUpRight className="text-sm" />
          </a>
        </div>
        <div className="contact-line">
          <a
            className="inline-flex items-end gap-px hover:underline"
            href="https://www.reddit.com/user/mateusfg7/"
            target="_blank"
            rel="external"
          >
            <span className="leading-none">See comments</span>
            <ArrowUpRight className="text-sm" />
          </a>
        </div>
        <div className="contact-line">
          <a
            className="inline-flex items-end gap-px hover:underline"
            href="https://twitter.com/mateusfg77"
            target="_blank"
            rel="external"
          >
            <span className="leading-none">See tweets</span>
            <ArrowUpRight className="text-sm" />
          </a>
        </div>
        <div className="contact-line">
          <a
            className="inline-flex items-end gap-px hover:underline"
            href="https://www.instagram.com/mateusfg7/"
            target="_blank"
            rel="external"
          >
            <span className="leading-none">Open profile</span>
            <ArrowUpRight className="text-sm" />
          </a>
        </div>
      </div>
    </div>
  )
}
