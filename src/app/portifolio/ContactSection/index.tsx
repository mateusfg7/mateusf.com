import { Contact } from './Contact'
import { contactList } from './contact-list'

export function ContactSection() {
  return (
    <div
      id="contato"
      className="min-h-screen flex justify-center py-20 bg-neutral-900"
    >
      <div className="content-w">
        <div className="w-full text-center mb-20">
          <h1 className="text-blue-500 text-4xl">Entre em contato!</h1>
        </div>
        <div className="flex justify-center">
          <div>
            {contactList.map(contact => (
              <Contact
                title={contact.title}
                data={contact.data}
                link={contact.link}
                color={contact.color}
                Icon={contact.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
