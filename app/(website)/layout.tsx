import { ReactNode } from 'react'

export default function WebsiteLayout({ children }: { children: ReactNode }) {
  return (
    <main className="grid grid-cols-12">
      <section className="col-span-full mx-4 my-10 flex flex-col gap-4 rounded border p-4 md:col-span-8 md:col-start-3 md:mx-0">
        {children}
      </section>
    </main>
  )
}
