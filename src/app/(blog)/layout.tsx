export default function BlogLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <div className="max-w-4xl p-5 m-auto">{children}</div>
      </body>
    </html>
  )
}
