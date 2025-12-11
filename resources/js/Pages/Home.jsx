import SiteLayout from "../Layouts/SiteLayout";
import { Badge } from "../Components/ui/badge";
import { Button } from "../Components/ui/button";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "../Components/ui/card";
import ContactForm from "../Components/ContactForm";
import { usePage } from "@inertiajs/react";

export default function Home() {
    const { clientLogos = [] } = usePage().props;
    return (
        <SiteLayout>
            <section className="relative overflow-hidden">
                <div className="mx-auto max-w-6xl px-6 pt-8 md:pt-20 pb-16">
                    <div className="relative mb-6 md:hidden">
                        <div className="relative h-48 w-full overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
                            <img
                                src="/images/rds-sona-topas-tower.png"
                                alt="RDS Sona Topas Tower"
                                className="size-full object-cover object-top"
                            />
                        </div>
                    </div>
                    <div className="grid items-center gap-10 md:grid-cols-2">
                        <div>
                            <Badge className="mb-4">
                                Perbankan • Sertifikasi Manajemen Risiko
                            </Badge>
                            <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
                                Raharja Duta Solusindo
                            </h1>
                            <p className="mt-2 text-lg font-medium text-black dark:text-white">
                                Partner dalam memahami Manajemen Risiko dan
                                Lulus Ujian Sertifikasi Manajemen Risiko
                            </p>
                            <p className="mt-4 text-neutral-700 dark:text-neutral-300">
                                PT Raharja Duta Solusindo membantu bank dan
                                lembaga keuangan meningkatkan kapabilitas
                                manajemen risiko melalui program refreshment dan
                                pembekalan ujian bersertifikat dengan tingkat
                                kelulusan tinggi.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-3">
                                <a href="/layanan">
                                    <Button size="lg">Lihat Layanan</Button>
                                </a>
                                <a
                                    href="https://rds-indonesia.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Button variant="outline" size="lg">
                                        Pelajari Lebih Lanjut
                                    </Button>
                                </a>
                            </div>
                            <div className="mt-8 flex items-center gap-6 text-xs text-neutral-600 dark:text-neutral-400">
                                <div className="flex items-center gap-2">
                                    <img
                                        src="/globe.svg"
                                        alt="globe"
                                        width="20"
                                        height="20"
                                    />
                                    <span>25+ Bank di Indonesia</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img
                                        src="/window.svg"
                                        alt="window"
                                        width="20"
                                        height="20"
                                    />
                                    <span>18.000+ Peserta</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img
                                        src="/file.svg"
                                        alt="file"
                                        width="20"
                                        height="20"
                                    />
                                    <span>Tingkat Kelulusan 95–100%</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative hidden md:block">
                            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xl">
                                <img
                                    src="/images/rds-sona-topas-tower.png"
                                    alt="RDS Sona Topas Tower"
                                    className="size-full object-cover object-top"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                        <div className="md:max-w-2xl">
                            <Badge className="mb-3">Welcome to RDS</Badge>
                            <h2 className="text-2xl font-semibold text-black dark:text-white">
                                Raharja Duta Solusindo (RDS)
                            </h2>
                            <p className="mt-3 text-neutral-700 dark:text-neutral-300">
                                Kami adalah lembaga training yang memberikan
                                jasa pembekalan ujian sertifikasi Manajemen
                                Risiko dengan tujuan peserta paham risk
                                management dan lulus 100%, serta penyelenggara
                                seminar/refreshment bagi pemegang sertifikat
                                agar pengetahuan selalu up to date dan sesuai
                                ketentuan Bank Indonesia/OJK.
                            </p>
                            <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                                RDS menyelenggarakan program pembekalan dan
                                program refreshment, baik inhouse maupun public.
                            </p>
                        </div>
                        <div className="md:max-w-xl">
                            <Badge className="mb-3">Keunggulan RDS</Badge>
                            <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300">
                                <li>
                                    Pengurus perusahaan langsung menjadi
                                    marketer sehingga keputusan cepat.
                                </li>
                                <li>
                                    Berpengalaman menyelenggarakan refreshment
                                    18.000+ peserta dari 25 bank; pembekalan
                                    sertifikasi dengan kelulusan 95–100%.
                                </li>
                                <li>
                                    Trainer profesional yang membuat peserta
                                    paham Manajemen Risiko hingga lulus 100%.
                                </li>
                                <li>
                                    Buku panduan training up to date dari BSMR
                                    atau LSPP.
                                </li>
                                <li>
                                    Harga kompetitif dengan fokus kelulusan
                                    tinggi.
                                </li>
                                <li>
                                    Metode ramah peserta dengan latihan soal/try
                                    out up to date dan bank soal 2.000 butir.
                                </li>
                                <li>
                                    Supporting officer yang helpful dan
                                    berpengalaman.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="klien"
                className="bg-neutral-50 py-16 dark:bg-neutral-950"
            >
                <div className="mx-auto max-w-6xl px-6">
                    <h2 className="text-2xl font-semibold text-black dark:text-white">
                        Klien yang Dilayani
                    </h2>
                    <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                        Lebih dari 25 bank di Indonesia dan lembaga keuangan
                        lainnya.
                    </p>
                    <div className="mt-4">
                        <a href="/klien">
                            <Button variant="outline" size="sm">
                                Lihat Semua Klien
                            </Button>
                        </a>
                    </div>
                    <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                        {clientLogos.length === 0
                            ? Array.from({ length: 8 }).map((_, i) => (
                                  <a key={i} href="/klien" className="block">
                                      <div className="group relative flex h-20 items-center justify-center rounded-lg border border-neutral-200 bg-white text-sm text-neutral-600 dark:border-neutral-800 dark:bg-black dark:text-neutral-400">
                                          <span>Logo Klien</span>
                                          <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/50 opacity-0 group-hover:opacity-100 transition">
                                              <span className="text-white text-xs">
                                                  Logo Klien
                                              </span>
                                          </div>
                                      </div>
                                  </a>
                              ))
                            : clientLogos.map((logo) => (
                                  <a
                                      key={logo.id}
                                      href="/klien"
                                      className="block"
                                      title={logo.name || "Logo Klien"}
                                  >
                                      <div className="group relative flex h-20 items-center justify-center rounded-lg border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-black">
                                          {logo.logo_url ? (
                                              <img
                                                  src={logo.logo_url}
                                                  alt={
                                                      logo.name || "Logo Klien"
                                                  }
                                                  className="h-12 object-contain"
                                              />
                                          ) : (
                                              <span className="text-sm text-neutral-600 dark:text-neutral-400">
                                                  Logo Klien
                                              </span>
                                          )}
                                          <div className="absolute inset-0 flex items-center rounded-lg justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition">
                                              <span className="text-white text-xs">
                                                  {logo.name || "Logo Klien"}
                                              </span>
                                          </div>
                                      </div>
                                  </a>
                              ))}
                    </div>
                </div>
            </section>

            <section
                id="layanan"
                className="bg-neutral-50 pb-16 dark:bg-neutral-950"
            >
                <div className="mx-auto max-w-6xl px-6">
                    <h2 className="text-2xl font-semibold text-black dark:text-white">
                        Layanan Utama
                    </h2>
                    <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                        Program pelatihan dan pembekalan ujian sertifikasi
                        Manajemen Risiko untuk berbagai level.
                    </p>
                    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    Refreshment Manajemen Risiko
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                Program penyegaran untuk karyawan perbankan agar
                                selaras dengan kebijakan dan praktik terbaru.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    Pembekalan Ujian Sertifikasi
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                Materi komprehensif dan latihan soal up to date
                                untuk persiapan ujian dengan efektif.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Try Out dan Bank Soal</CardTitle>
                            </CardHeader>
                            <CardContent>
                                Simulasi try out dan akses ke bank soal 2.000
                                butir untuk meningkatkan kepercayaan diri.
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section id="keunggulan" className="py-16">
                <div className="mx-auto max-w-6xl px-6">
                    <h2 className="text-2xl font-semibold text-black dark:text-white">
                        Program Utama
                    </h2>
                    <div className="mt-8 grid gap-6 sm:grid-cols-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    Training Sertifikasi Manajemen Risiko
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                Pembekalan ujian Level 1–5 dengan ujian ke LSPP
                                atau BSMR. Tujuan utama: paham dan lulus ujian.
                                Didampingi trainer praktisi perbankan dengan
                                tingkat kelulusan rata-rata 95–100%.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    Seminar/Refreshment Manajemen Risiko
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                Perpanjangan masa berlaku sertifikat ke
                                LSPP/BSMR. Pembicara level nasional: ekonom,
                                direksi bank asing/swasta/BPD, mantan direksi
                                BUMN, pimpinan LKB, mantan menteri. Topik:
                                Strategic Risk, Credit Risk, Operational Risk,
                                FINTECH.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    Consulting (Free of Charge)
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                Advisor pengelolaan database pemegang
                                sertifikat, pengingat refreshment agar masa
                                berlaku tidak kadaluarsa, penjadwalan. Membantu
                                Divisi Learning Center memenuhi KPI.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Training Bidang Lain</CardTitle>
                            </CardHeader>
                            <CardContent>
                                Treasury Dealer, Credit, Funding & Services,
                                Operational, Internal Audit, General Banking,
                                Compliance.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Training Soft Skill</CardTitle>
                            </CardHeader>
                            <CardContent>
                                Leadership, Selling Skill, Negotiation Skill,
                                Customer Services.
                            </CardContent>
                        </Card>
                    </div>
                    <div className="mt-8">
                        <a href="/layanan">
                            <Button size="lg">Lihat Program Lengkap</Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="bg-neutral-50 py-16 dark:bg-neutral-950">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="flex flex-col items-center text-center">
                        <h2 className="text-2xl font-semibold text-black dark:text-white">
                            Hubungi Kami
                        </h2>
                        <p className="mt-2 max-w-2xl text-neutral-700 dark:text-neutral-300">
                            Isi formulir untuk konsultasi program pelatihan dan
                            pembekalan sertifikasi Manajemen Risiko.
                        </p>
                        <div className="mt-8 w-full">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
