import SiteLayout from '../Layouts/SiteLayout'
import { Badge } from '../Components/ui/badge'
import { Card, CardHeader, CardTitle, CardContent } from '../Components/ui/card'

export default function Tentang() {
  return (
    <SiteLayout>
      <main className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex items-center justify-between">
          <div>
            <Badge>Tentang RDS</Badge>
            <h1 className="mt-3 text-3xl font-bold text-black dark:text-white">PT Raharja Duta Solusindo</h1>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300">Penyedia jasa training perbankan dan non-perbankan dengan fokus Manajemen Risiko.</p>
          </div>
        </div>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Pengalaman Pelayanan</CardTitle>
            </CardHeader>
            <CardContent>Sejak Januari 2016 sampai April 2019 telah melayani 20 bank di Indonesia, mencakup bank asing, BUMN, swasta nasional, dan BPD.</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Kunci Sukses</CardTitle>
            </CardHeader>
            <CardContent>Trainer berpengalaman di perbankan dan metode pembelajaran berorientasi pada tujuan: paham dan lulus.</CardContent>
          </Card>
        </section>

        <section className="mt-6 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Sertifikasi Level 1–5</CardTitle>
            </CardHeader>
            <CardContent>Tingkat kelulusan 95%–100% untuk ujian LSPP maupun BSMR. Jumlah kelas mencapai 94 kelas atau 2.022 orang.</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Program Refreshment</CardTitle>
            </CardHeader>
            <CardContent>Peserta refreshment telah mencapai 8.503 orang, memastikan kompetensi selalu mutakhir.</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Ekspansi Layanan</CardTitle>
            </CardHeader>
            <CardContent>Pembekalan ujian non-Manajemen Risiko: strategi bisnis, dasar manajemen, kepemimpinan, komunikasi, negosiasi, manajemen waktu/strategi, people skill, dan soft skill seperti leadership, selling skill, dan customer service.</CardContent>
          </Card>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Visi</CardTitle>
            </CardHeader>
            <CardContent>Menjadi partner terpercaya dan problem solver dalam pembekalan ujian, refreshment, dan training lainnya.</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Misi</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                <li>Membantu bank dan LKB dalam refreshment serta pembekalan sertifikasi dengan kelulusan 100%.</li>
                <li>Mendukung pemenuhan ketentuan BI dan OJK.</li>
                <li>Memastikan kepatuhan terhadap ketentuan LSPP dan BSMR.</li>
                <li>Menjalin sinergi dengan BSMR dan LSPP.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Pendiri</CardTitle>
            </CardHeader>
            <CardContent>Didirikan oleh Soeyamto, SE (praktisi perbankan di bank asing dan pemerintah, serta LSPP) dan Ratih Dewi, S.Sos (praktisi Telkom Provider Internasional dan LSPP).</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Sinergi</CardTitle>
            </CardHeader>
            <CardContent>Berkolaborasi dan bersinergi dengan BSMR dan LSPP untuk memastikan materi dan standar kompetensi selalu relevan.</CardContent>
          </Card>
        </section>
      </main>
    </SiteLayout>
  )
}
