export default function Section({
  id,
  label,
  title,
  children,
}: {
  id: string
  label: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="reveal py-14 border-t border-edge">
      <p className="font-mono text-accent text-xs tracking-[0.2em] uppercase mb-2">
        {`// ${label}`}
      </p>
      <h2 className="text-xl font-semibold mb-8">{title}</h2>
      {children}
    </section>
  )
}
