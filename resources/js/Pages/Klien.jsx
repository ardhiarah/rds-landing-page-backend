import SiteLayout from '../Layouts/SiteLayout'
import { Badge } from '../Components/ui/badge'
import { Card, CardHeader, CardTitle, CardContent } from '../Components/ui/card'
import { useEffect, useState } from 'react'

export default function Klien() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/clients')
      .then((r) => r.json())
      .then((data) => setItems(data))
      .catch(() => setItems([]))
      .finally(() => setLoading(false))
  }, [])

  return (
    <SiteLayout>
      <main className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex items-center justify-between">
          <div>
            <Badge>Klien</Badge>
            <h1 className="mt-3 text-3xl font-bold text-black dark:text-white">Klien yang Dilayani</h1>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300">RDS melayani bank dan lembaga keuangan di Indonesia, termasuk Bank BUMN, Bank Swasta Nasional, BPD, dan Bank Asing.</p>
          </div>
        </div>

        <section className="mt-10">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
            {loading && Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-24 animate-pulse rounded-lg bg-neutral-200 dark:bg-neutral-800" />
            ))}
            {!loading && items.map((item) => (
              <Card key={item.id} className="items-center justify-center text-center overflow-hidden">
                <div className="h-24 w-full bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center">
                  {item.logo_url ? (
                    <img src={item.logo_url} alt={item.name || 'Logo Klien'} className="max-h-20 p-4 object-contain" />
                  ) : null}
                </div>
                <CardHeader>
                  <CardTitle>{item.name || 'Logo Klien'}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-neutral-600 dark:text-neutral-400">Instansi Perbankan/Keuangan</CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}
