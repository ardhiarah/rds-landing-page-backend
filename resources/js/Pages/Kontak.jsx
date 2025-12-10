import SiteLayout from '../Layouts/SiteLayout'
import { Badge } from '../Components/ui/badge'
import { Card, CardHeader, CardTitle, CardContent } from '../Components/ui/card'
import { Phone, PhoneCall, Mail, Printer, Building, MapPin } from 'lucide-react'
import ContactForm from '../Components/ContactForm'

export default function Kontak() {
  return (
    <SiteLayout>
      <main className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex items-center justify-between">
          <div>
            <Badge>Kontak</Badge>
            <h1 className="mt-3 text-3xl font-bold text-black dark:text-white">Hubungi Kami</h1>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300">Isi formulir berikut atau gunakan email untuk terhubung dengan tim RDS.</p>
          </div>
        </div>

        <section className="mt-8">
          <div className="mt-6 mb-10 text-sm text-neutral-700 dark:text-neutral-300">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Informasi Kantor</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Building className="size-4 mt-0.5" />
                      <p className="font-semibold">PT RAHARJA DUTA SOLUSINDO</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="size-4 mt-0.5" />
                      <div>
                        <p>Sona Topas Tower Lantai 5A</p>
                        <p>Jl. Jend Sudirman Kav.26</p>
                        <p>Jakarta Selatan</p>
                      </div>
                    </div>
                  </div>
                  <table className="mt-6 w-full text-sm">
                    <tbody>
                      <tr>
                        <td className="py-1 pr-4 text-neutral-500"><span className="inline-flex items-center gap-2"><Phone className="size-4" /> Telepon</span></td>
                        <td className="py-1 font-medium">021-29858082</td>
                      </tr>
                      <tr>
                        <td className="py-1 pr-4 text-neutral-500"><span className="inline-flex items-center gap-2"><Printer className="size-4" /> Fax</span></td>
                        <td className="py-1 font-medium">021-2506223</td>
                      </tr>
                      <tr>
                        <td className="py-1 pr-4 text-neutral-500"><span className="inline-flex items-center gap-2"><Mail className="size-4" /> Email</span></td>
                        <td className="py-1 font-medium"><a href="mailto:solusindo@rds2015.com" className="underline">solusindo@rds2015.com</a></td>
                      </tr>
                      <tr>
                        <td className="py-1 pr-4 text-neutral-500"><span className="inline-flex items-center gap-2"><PhoneCall className="size-4" /> Phone (Ratih)</span></td>
                        <td className="py-1 font-medium">0878-7651-2795</td>
                      </tr>
                      <tr>
                        <td className="py-1 pr-4 text-neutral-500"><span className="inline-flex items-center gap-2"><PhoneCall className="size-4" /> Phone (Soeyamto)</span></td>
                        <td className="py-1 font-medium">0816-7931-63</td>
                      </tr>
                    </tbody>
                  </table>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Lokasi</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-hidden rounded-xl border">
                    <iframe title="Sona Topas Tower" src="https://www.google.com/maps?q=Sona+Topas+Tower&output=embed" width="100%" height="360" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <ContactForm />
        </section>
      </main>
    </SiteLayout>
  )
}
