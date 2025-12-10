import SiteLayout from '../Layouts/SiteLayout'
import { Badge } from '../Components/ui/badge'
import { Card, CardHeader, CardTitle, CardContent } from '../Components/ui/card'
import ContactForm from '../Components/ContactForm'

export default function Program() {
  return (
    <SiteLayout>
      <main className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex items-center justify-between">
          <div>
            <Badge>Program &amp; Layanan</Badge>
            <h1 className="mt-3 text-3xl font-bold text-black dark:text-white">Program RDS</h1>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300">Training pembekalan sertifikasi Manajemen Risiko, seminar/refreshment, konsultasi, dan program non-risiko serta soft skill.</p>
          </div>
        </div>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Training Pembekalan Ujian SMR (Level 1–5)</CardTitle>
            </CardHeader>
            <CardContent>
              Program andalan dengan tujuan utama <span className="font-semibold">PAHAM dan LULUS</span>. Dibimbing trainer praktisi perbankan berpengalaman, tingkat kelulusan rata-rata <span className="font-semibold">95%–100%</span> untuk ujian ke LSPP maupun BSMR.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Seminar/Refreshment Manajemen Risiko</CardTitle>
            </CardHeader>
            <CardContent>
              Perpanjangan masa laku sertifikat Manajemen Risiko dengan pembicara berprofil tinggi di dunia perbankan. Topik meliputi Strategic Risk, Credit Risk, Operational Risk, dan FINTECH.
            </CardContent>
          </Card>
        </section>

        <section className="mt-6 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Consulting (Free of Charge)</CardTitle>
            </CardHeader>
            <CardContent>
              Advisor untuk pengelolaan database pemegang sertifikat, pengingat refreshment agar masa berlaku tidak kadaluarsa, dan penjadwalan. Mendukung Divisi Learning Center memenuhi KPI.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Training Bidang Lain</CardTitle>
            </CardHeader>
            <CardContent>
              Treasury Dealer, Credit, Funding &amp; Services, Operational, Internal Audit, General Banking, Compliance.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Training Soft Skill</CardTitle>
            </CardHeader>
            <CardContent>
              Leadership, Selling Skill, Negotiation Skill, Customer Services.
            </CardContent>
          </Card>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-black dark:text-white">Tertarik dengan Program Kami?</h2>
          <p className="mt-2 max-w-2xl text-neutral-700 dark:text-neutral-300">Hubungi kami untuk mendapatkan materi dan penjadwalan yang sesuai kebutuhan institusi Anda.</p>
          <div className="mt-6"><ContactForm /></div>
        </section>
      </main>
    </SiteLayout>
  )
}
