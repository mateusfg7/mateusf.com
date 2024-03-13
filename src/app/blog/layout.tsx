export default function BlogLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="content-vertical-spaces">
      <div className="absolute top-0 -z-50 h-full w-full bg-[radial-gradient(rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)]" />
      {children}
    </div>
  )
}
