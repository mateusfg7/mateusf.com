import { SectionLayout } from '../section-layout'
import { Contact } from './contact'
import { contactList } from './contact-list'

export function ContactSection() {
  return (
    <SectionLayout title="Entre em contato!" id="contato">
      <div className="flex justify-center">
        <div>
          {contactList.map(contact => (
            <Contact
              key={contact.title}
              title={contact.title}
              data={contact.data}
              link={contact.link}
              color={contact.color}
              Icon={contact.icon}
            />
          ))}
        </div>
      </div>
    </SectionLayout>
  )
}
