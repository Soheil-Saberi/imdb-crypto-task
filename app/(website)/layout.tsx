import { ReactNode } from 'react'

export default function WebsiteLayout({ children }: { children: ReactNode }) {
  return (
    <main className="grid grid-cols-12">
      <section className="col-span-8 col-start-3 my-10 flex flex-col gap-4 rounded border p-4">
        {children}
      </section>
    </main>
  )
}
