import SiteLayout from "../Layouts/SiteLayout";
import { Badge } from "../Components/ui/badge";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "../Components/ui/card";

export default function Tentang() {
    return (
        <SiteLayout>
            <main className="mx-auto max-w-6xl px-6 py-12">
                <div className="flex items-center justify-between">
                    <div>
                        <Badge>Tentang RDS</Badge>
                        <h1 className="mt-3 text-3xl font-bold text-black dark:text-white">
                            PT Raharja Duta Solusindo
                        </h1>
                        <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                            Penyedia jasa training perbankan dan non-perbankan
                            dengan fokus Manajemen Risiko.
                        </p>
                        <p className="mt-2 max-w-3xl text-neutral-700 dark:text-neutral-300">
                            PT Raharja Duta Solusindo (RDS) adalah lembaga
                            training yang didirikan oleh Soeyamto, SE (praktisi
                            Perbankan di Bank Asing dan Pemerintah serta Lembaga
                            Sertifikasi Profesi Perbankan) dan Ratih Dewi, S.Sos
                            (praktisi Telkom Provider Internasional dan Lembaga
                            Sertifikasi Profesi Perbankan).
                        </p>
                    </div>
                </div>

                <section className="mt-10 grid gap-6 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Pengalaman Pelayanan</CardTitle>
                        </CardHeader>
                        <CardContent>
                            Sejak Januari 2016 sampai April 2019 telah melayani
                            20 bank di Indonesia, mencakup bank asing, BUMN,
                            swasta nasional, dan BPD.
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Kunci Sukses</CardTitle>
                        </CardHeader>
                        <CardContent>
                            Trainer berpengalaman di bank dan metode
                            pembelajaran yang berorientasi pada tujuan: paham
                            dan lulus ujian sertifikasi Manajemen Risiko.
                        </CardContent>
                    </Card>
                </section>

                <section className="mt-6 grid gap-6 md:grid-cols-3">
                    <Card>
                        <CardHeader>
                            <CardTitle>Sertifikasi Level 1–5</CardTitle>
                        </CardHeader>
                        <CardContent>
                            Tingkat kelulusan 95%–100% untuk ujian LSPP maupun
                            BSMR. Jumlah kelas mencapai 94 kelas atau 2.022
                            orang.
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Program Refreshment</CardTitle>
                        </CardHeader>
                        <CardContent>
                            Peserta refreshment telah mencapai 8.503 orang,
                            memastikan kompetensi selalu mutakhir.
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Ekspansi Layanan</CardTitle>
                        </CardHeader>
                        <CardContent>
                            Pembekalan ujian non-Manajemen Risiko: Business
                            Strategy for Leaders, Dasar-dasar Manajemen,
                            Kepemimpinan, Komunikasi dan Interaksi, Negosiasi,
                            Manajemen Waktu/Strategi, People Skill, serta Soft
                            Skill seperti Leadership, Selling Skill, dan
                            Customer Services.
                        </CardContent>
                    </Card>
                </section>

                <section className="mt-10 grid gap-6 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Jasa yang Berjalan Pesat</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>
                                    Training Pembekalan Ujian Sertifikasi
                                    Manajemen Risiko level 1–5, kelulusan
                                    95%–100% (LSPP/BSMR), total 94 kelas atau
                                    2.022 peserta.
                                </li>
                                <li>
                                    Program Refreshment bagi pemegang Sertifikat
                                    Manajemen Risiko dengan total peserta 8.503
                                    orang.
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Jejak Pelayanan</CardTitle>
                        </CardHeader>
                        <CardContent>
                            Sejak Januari 2016 hingga April 2019 melayani 20
                            bank di Indonesia: bank asing, BUMN, swasta
                            nasional, dan BPD.
                        </CardContent>
                    </Card>
                </section>

                <section className="mt-10 grid gap-6 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Visi</CardTitle>
                        </CardHeader>
                        <CardContent>
                            Menjadi partner terpercaya dan problem solver dalam
                            pembekalan ujian, refreshment, dan training lainnya.
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Misi</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>
                                    Membantu bank dan LKB menyelenggarakan
                                    refreshment dan pembekalan ujian sertifikasi
                                    Manajemen Risiko dengan kelulusan 100%.
                                </li>
                                <li>
                                    Mendukung pemenuhan ketentuan otoritas: Bank
                                    Indonesia dan OJK.
                                </li>
                                <li>
                                    Memastikan kepatuhan terhadap ketentuan
                                    refreshment dan ujian LSPP maupun BSMR.
                                </li>
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
                        <CardContent>
                            Didirikan oleh Soeyamto, SE (praktisi perbankan di
                            bank asing dan pemerintah, serta LSPP) dan Ratih
                            Dewi, S.Sos (praktisi Telkom Provider Internasional
                            dan LSPP).
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Sinergi</CardTitle>
                        </CardHeader>
                        <CardContent>
                            Berkolaborasi dan bersinergi dengan BSMR dan LSPP
                            untuk memastikan materi dan standar kompetensi
                            selalu relevan.
                        </CardContent>
                    </Card>
                </section>

                <section className="mt-10">
                    <Badge>Galeri Pendiri</Badge>
                    <div className="mt-4 grid gap-6 md:grid-cols-2">
                        <Card>
                            <CardHeader className="text-center">
                                <CardTitle>Komisaris — Soeyamto, SE</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="relative aspect-square w-full overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800">
                                    <img
                                        src="/images/komisaris-rds.jpg"
                                        alt="Komisaris Soeyamto, SE — PT Raharja Duta Solusindo"
                                        className="size-full object-cover"
                                    />
                                </div>
                                {/* <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">
                                    Komisaris (Pendiri) — Soeyamto, SE
                                </p> */}
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="text-center">
                                <CardTitle>
                                    Direktur — Ratih Dewi, S.Sos, MM
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="relative aspect-square w-full overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800">
                                    <img
                                        src="/images/direktur-rds.jpg"
                                        alt="Direktur Ratih Dewi, S.Sos, MM — PT Raharja Duta Solusindo"
                                        className="size-full object-cover"
                                    />
                                </div>
                                {/* <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">
                                    Direktur (Pendiri) — Ratih Dewi, S.Sos, MM
                                </p> */}
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <section className="mt-10">
                    <Badge>Timeline Capaian</Badge>
                    <div className="mt-6 relative">
                        <ol className="space-y-6 border-l border-neutral-200 dark:border-neutral-800 pl-6">
                            <li className="relative">
                                <span className="absolute -left-3 top-1 size-2 rounded-full bg-neutral-400 dark:bg-neutral-600"></span>
                                <h3 className="text-sm font-semibold text-black dark:text-white">
                                    Januari 2016
                                </h3>
                                <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
                                    Mulai melayani bank dan lembaga keuangan di
                                    Indonesia.
                                </p>
                            </li>
                            <li className="relative">
                                <span className="absolute -left-3 top-1 size-2 rounded-full bg-neutral-400 dark:bg-neutral-600"></span>
                                <h3 className="text-sm font-semibold text-black dark:text-white">
                                    April 2019
                                </h3>
                                <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
                                    Melayani 20 bank: bank asing, BUMN, swasta
                                    nasional, dan BPD.
                                </p>
                            </li>
                            <li className="relative">
                                <span className="absolute -left-3 top-1 size-2 rounded-full bg-neutral-400 dark:bg-neutral-600"></span>
                                <h3 className="text-sm font-semibold text-black dark:text-white">
                                    94 Kelas • 2.022 Peserta
                                </h3>
                                <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
                                    Training pembekalan ujian Sertifikasi
                                    Manajemen Risiko dengan kelulusan 95%–100%.
                                </p>
                            </li>
                            <li className="relative">
                                <span className="absolute -left-3 top-1 size-2 rounded-full bg-neutral-400 dark:bg-neutral-600"></span>
                                <h3 className="text-sm font-semibold text-black dark:text-white">
                                    8.503 Peserta Refreshment
                                </h3>
                                <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
                                    Program refreshment bagi pemegang sertifikat
                                    Manajemen Risiko.
                                </p>
                            </li>
                            <li className="relative">
                                <span className="absolute -left-3 top-1 size-2 rounded-full bg-neutral-400 dark:bg-neutral-600"></span>
                                <h3 className="text-sm font-semibold text-black dark:text-white">
                                    Ekspansi Layanan
                                </h3>
                                <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
                                    Pengembangan ke training non-Manajemen
                                    Risiko dan soft skill untuk mendukung
                                    kebutuhan institusi.
                                </p>
                            </li>
                        </ol>
                    </div>
                </section>
            </main>
        </SiteLayout>
    );
}
