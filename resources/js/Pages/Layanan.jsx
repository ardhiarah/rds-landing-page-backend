import SiteLayout from '../Layouts/SiteLayout'
import { Badge } from '../Components/ui/badge'
import { Card, CardHeader, CardTitle, CardContent } from '../Components/ui/card'
import ContactForm from '../Components/ContactForm'

export default function Layanan() {
  return (
    <SiteLayout>
      <main className="mx-auto max-w-6xl px-6 py-12">
        <div>
          <Badge>Layanan</Badge>
          <h1 className="mt-3 text-3xl font-bold text-black dark:text-white">Layanan Utama</h1>
          <p className="mt-2 text-neutral-700 dark:text-neutral-300">Program pelatihan dan pembekalan sertifikasi Manajemen Risiko untuk berbagai level.</p>
        </div>
        <section className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader><CardTitle>Refreshment Manajemen Risiko</CardTitle></CardHeader>
            <CardContent>Program penyegaran kebijakan dan praktik terbaru bagi karyawan perbankan.</CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Pembekalan Ujian Sertifikasi</CardTitle></CardHeader>
            <CardContent>Materi komprehensif dan latihan soal up to date untuk persiapan efektif.</CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Try Out &amp; Bank Soal</CardTitle></CardHeader>
            <CardContent>Simulasi dan akses bank soal 2.000 butir untuk meningkatkan kepercayaan diri.</CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Training Non-Risiko &amp; Soft Skill</CardTitle></CardHeader>
            <CardContent>Leadership, selling skill, negotiation, dan customer service.</CardContent>
          </Card>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-black dark:text-white">Tertarik dengan Layanan Ini?</h2>
          <p className="mt-2 max-w-2xl text-neutral-700 dark:text-neutral-300">Isi formulir untuk konsultasi jadwal dan penawaran yang sesuai kebutuhan institusi Anda.</p>
          <div className="mt-6"><ContactForm /></div>
        </section>
      </main>
    </SiteLayout>
  )
}

