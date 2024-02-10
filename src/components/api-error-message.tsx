import { Warning } from '@phosphor-icons/react/dist/ssr'

export const ApiErrorMessage = () => (
  <span className="inline-flex items-center gap-2 text-red-500">
    <Warning size="1em" weight="duotone" />
    <span>API Error</span>
  </span>
)
