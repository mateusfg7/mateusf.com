import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = () => (
  <Dialog.Overlay className="fixed inset-0 bg-neutral-50/50 data-[state=open]:animate-overlayShow dark:bg-black/50" />
)
