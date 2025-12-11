import SiteLayout from "../Layouts/SiteLayout";
import { Badge } from "../Components/ui/badge";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "../Components/ui/card";
import ContactForm from "../Components/ContactForm";
import { usePage } from "@inertiajs/react";

export default function Layanan() {
    const { schedules = [], events = [] } = usePage().props;

    return (
        <SiteLayout>
            <main className="mx-auto max-w-6xl px-6 py-12">
                <div>
                    <Badge>Layanan</Badge>
                    <h1 className="mt-3 text-3xl font-bold text-black dark:text-white">
                        Layanan Utama
                    </h1>
                    <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                        Program pelatihan dan pembekalan sertifikasi Manajemen
                        Risiko untuk berbagai level.
                    </p>
                </div>
                <section className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <Card>
                        <CardHeader>
                            <CardTitle>Refreshment Manajemen Risiko</CardTitle>
                        </CardHeader>
                        <CardContent>
                            Program penyegaran kebijakan dan praktik terbaru
                            bagi karyawan perbankan.
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Pembekalan Ujian Sertifikasi</CardTitle>
                        </CardHeader>
                        <CardContent>
                            Materi komprehensif dan latihan soal up to date
                            untuk persiapan efektif.
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Try Out &amp; Bank Soal</CardTitle>
                        </CardHeader>
                        <CardContent>
                            Simulasi dan akses bank soal 2.000 butir untuk
                            meningkatkan kepercayaan diri.
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Training Non-Risiko &amp; Soft Skill
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            Leadership, selling skill, negotiation, dan customer
                            service.
                        </CardContent>
                    </Card>
                </section>

                <div className="mt-12 flex items-center justify-between">
                    <div>
                        <Badge>Program</Badge>
                        <h1 className="mt-3 text-3xl font-bold text-black dark:text-white">
                            Program RDS
                        </h1>
                        <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                            Training pembekalan sertifikasi Manajemen Risiko,
                            seminar/refreshment, konsultasi, dan program
                            non-risiko serta soft skill.
                        </p>
                    </div>
                </div>
                <section className="mt-10 grid gap-6 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Training Sertifikasi Manajemen Risiko (Level
                                1–5)
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            Training pembekalan ujian ke LSPP atau BSMR dengan
                            tujuan utama: paham dan lulus ujian. Didampingi
                            Trainer Praktisi Perbankan berpengalaman sebagai
                            trainer sekaligus pejabat bank. Tingkat kelulusan
                            rata-rata 95%–100%.
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Seminar/Refreshment Manajemen Risiko
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            Program perpanjangan masa berlaku sertifikat
                            Manajemen Risiko ke LSPP/BSMR. Pembicara: ekonom
                            handal, direksi bank asing/swasta/BPD, mantan
                            direksi BUMN, pimpinan LKB, mantan menteri. Topik:
                            Strategic Risk, Credit Risk, Operational Risk,
                            FINTECH.
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Consulting (Free of Charge)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            Advisor pengelolaan database pemegang sertifikat,
                            pengingat refreshment agar masa berlaku tidak
                            kadaluarsa, penjadwalan. Membantu Divisi Learning
                            Center memenuhi KPI.
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Training Bidang Lain</CardTitle>
                        </CardHeader>
                        <CardContent>
                            Treasury Dealer, Credit, Funding &amp; Services,
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
                </section>

                <div className="mt-12">
                    <Badge>Class</Badge>
                    <h1 className="mt-3 text-3xl font-bold text-black dark:text-white">
                        Public Class
                    </h1>
                    <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                        Program pelatihan dan pembekalan sertifikasi Manajemen
                        Risiko untuk berbagai level.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-start justify-between">
                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-black dark:text-white">
                            Schedule
                        </h2>
                        {schedules.length === 0 ? (
                            <div className="italic mt-4 text-neutral-600 dark:text-neutral-400">
                                Belum ada schedule yang tersedia.
                            </div>
                        ) : (
                            <div className="mt-4 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                                {schedules.map((item) => (
                                    <Card
                                        key={item.id}
                                        className="overflow-hidden"
                                    >
                                        <div className="h-40 w-full bg-neutral-100 dark:bg-neutral-900">
                                            {item.image_url ? (
                                                <img
                                                    src={item.image_url}
                                                    alt={
                                                        item.caption ||
                                                        "Schedule"
                                                    }
                                                    className="h-full w-full object-cover"
                                                />
                                            ) : (
                                                <div className="h-full w-full flex items-center justify-center text-neutral-500">
                                                    No Image
                                                </div>
                                            )}
                                        </div>
                                        {item.caption && (
                                            <CardContent className="text-sm text-neutral-700 dark:text-neutral-300">
                                                {item.caption}
                                            </CardContent>
                                        )}
                                    </Card>
                                ))}
                            </div>
                        )}
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-black dark:text-white">
                            Event
                        </h2>
                        {events.length === 0 ? (
                            <div className="italic mt-4 text-neutral-600 dark:text-neutral-400">
                                Belum ada event yang tersedia.
                            </div>
                        ) : (
                            <div className="mt-4 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                                {events.map((item) => (
                                    <Card
                                        key={item.id}
                                        className="overflow-hidden"
                                    >
                                        <div className="h-40 w-full bg-neutral-100 dark:bg-neutral-900">
                                            {item.image_url ? (
                                                <img
                                                    src={item.image_url}
                                                    alt={
                                                        item.caption || "Event"
                                                    }
                                                    className="h-full w-full object-cover"
                                                />
                                            ) : (
                                                <div className="h-full w-full flex items-center justify-center text-neutral-500">
                                                    No Image
                                                </div>
                                            )}
                                        </div>
                                        {item.caption && (
                                            <CardContent className="text-sm text-neutral-700 dark:text-neutral-300">
                                                {item.caption}
                                            </CardContent>
                                        )}
                                    </Card>
                                ))}
                            </div>
                        )}
                    </section>
                </div>

                <section className="mt-20">
                    <h2 className="text-2xl text-center font-semibold text-black dark:text-white">
                        Tertarik dengan Layanan Ini?
                    </h2>
                    <p className="mt-2 max-w-2xl mx-auto text-neutral-700 dark:text-neutral-300">
                        Isi formulir untuk konsultasi jadwal dan penawaran yang
                        sesuai kebutuhan institusi Anda.
                    </p>
                    <div className="mt-6">
                        <ContactForm />
                    </div>
                </section>
            </main>
        </SiteLayout>
    );
}
