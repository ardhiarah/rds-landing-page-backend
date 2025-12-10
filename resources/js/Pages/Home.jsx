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

export default function Home() {
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
                                Solusi Pelatihan dan Sertifikasi Manajemen
                                Risiko Perbankan
                            </h1>
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
                    <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <div
                                key={i}
                                className="flex h-20 items-center justify-center rounded-lg border border-neutral-200 bg-white text-sm text-neutral-600 dark:border-neutral-800 dark:bg-black dark:text-neutral-400"
                            >
                                Logo Klien
                            </div>
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
                        Keunggulan RDS
                    </h2>
                    <div className="mt-8 grid gap-6 sm:grid-cols-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Keputusan Cepat</CardTitle>
                            </CardHeader>
                            <CardContent>
                                Pengurus perusahaan yang langsung menjadi
                                marketer, sehingga cepat dalam mengambil
                                keputusan.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Pengalaman Luas</CardTitle>
                            </CardHeader>
                            <CardContent>
                                Berpengalaman menyelenggarakan program
                                refreshment 18.000+ peserta dari 25 bank di
                                Indonesia.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Trainer Profesional</CardTitle>
                            </CardHeader>
                            <CardContent>
                                Tim trainer mampu memberikan pemahaman mendalam
                                sehingga peserta dapat lulus 100%.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Materi Up to Date</CardTitle>
                            </CardHeader>
                            <CardContent>
                                Buku panduan terbaru yang dikeluarkan oleh BSMR
                                atau LSPP.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Harga Kompetitif</CardTitle>
                            </CardHeader>
                            <CardContent>
                                Biaya pelatihan bersaing dengan fokus pada
                                tingkat kelulusan tinggi.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Metode Ramah Peserta</CardTitle>
                            </CardHeader>
                            <CardContent>
                                Latihan soal dan try out yang up to date dengan
                                bank soal 2.000 butir.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Dukungan Profesional</CardTitle>
                            </CardHeader>
                            <CardContent>
                                Supporting officer yang helpful dan
                                berpengalaman mendampingi peserta.
                            </CardContent>
                        </Card>
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
