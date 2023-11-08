import { Warning } from '@/shared/wrappers/phosphor-icons'

export const ApiErrorMessage = () => (
  <span className="inline-flex items-center gap-2 text-red-500">
    <Warning weight="duotone" />
    <span>API Error</span>
  </span>
)
