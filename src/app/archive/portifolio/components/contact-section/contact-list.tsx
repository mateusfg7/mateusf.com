import {
  Envelope,
  GithubLogo,
  LinkedinLogo,
  WhatsappLogo
} from '@/shared/wrappers/phosphor-icons'

export const contactList = [
  {
    title: 'Whatsapp',
    data: '+55 (37) 99844-0073',
    link: 'https://wa.me/+5537998440073',
    color: 'rgb(134 239 172)',
    icon: WhatsappLogo
  },
  {
    title: 'Email',
    data: 'contact@mateusf.com',
    link: 'mailto:contact@mateusf.com',
    color: 'rgba(252 165 165)',
    icon: Envelope
  },
  {
    title: 'Linkedin',
    data: 'mateusfg',
    link: 'https://linkedin.com/in/mateusfg',
    color: 'rgb(14 165 233)',
    icon: LinkedinLogo
  },
  {
    title: 'Github',
    data: '@mateusfg7',
    link: 'https://github.com/mateusfg7',
    color: 'rgb(255 255 255)',
    icon: GithubLogo
  }
]
