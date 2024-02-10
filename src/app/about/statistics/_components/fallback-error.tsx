import { ApiErrorMessage } from '~/components/api-error-message'

export function FallbackError() {
  return (
    <div className="flex items-center justify-center p-2 text-xl">
      <div className="rounded-xl bg-red-500/10 p-5 leading-none">
        <ApiErrorMessage />
      </div>
    </div>
  )
}
