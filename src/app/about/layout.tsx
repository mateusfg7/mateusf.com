export const revalidate = 86400 // 24h

export default function AboutLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <div className="content-vertical-spaces">{children}</div>
}
