export const revalidate = 3600 // 3600s = 1h

export default function AboutLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <div className="content-vertical-spaces">{children}</div>
}
