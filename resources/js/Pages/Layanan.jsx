import SiteLayout from "../Layouts/SiteLayout";
import { Badge } from "../Components/ui/badge";
import { useRef, useMemo } from "react";
import { useLanguage } from "../Contexts/LanguageContext";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "../Components/ui/card";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import ContactForm from "../Components/ContactForm";
import { usePage, Link } from "@inertiajs/react";
import {
    CheckCircle2,
    ShieldCheck,
    TrendingUp,
    Users,
    Calendar,
    BookOpen,
    MonitorPlay,
} from "lucide-react";

export default function Layanan() {
    const { t } = useLanguage();
    const { schedules = [], events = [] } = usePage().props;
    const sLgRef = useRef(null);
    const eLgRef = useRef(null);

    const toStorageUrl = (p) => {
        if (!p) return null;
        if (p.startsWith("http://") || p.startsWith("https://")) return p;
        if (p.startsWith("/storage/")) return p;
        return "/storage/" + encodeURI(p);
    };

    const gridClass = (count) => {
        if (count <= 1) return "grid grid-cols-1";
        if (count === 2) return "grid gap-6 sm:grid-cols-2";
        if (count === 3) return "grid gap-6 sm:grid-cols-2 md:grid-cols-3";
        if (count >= 4) return "grid gap-6 sm:grid-cols-2 md:grid-cols-4";
        return "grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
    };

    const sGalleryItems = useMemo(
        () =>
            schedules
                .map((item, idx) => ({
                    idx,
                    url: toStorageUrl(item.image_url),
                    caption: item.caption || "",
                }))
                .filter((x) => !!x.url),
        [schedules]
    );
    const sIndexMap = useMemo(
        () => new Map(sGalleryItems.map((g, j) => [g.idx, j])),
        [sGalleryItems]
    );

    const eGalleryItems = useMemo(
        () =>
            events
                .map((item, idx) => ({
                    idx,
                    url: toStorageUrl(item.image_url),
                    caption: item.caption || "",
                }))
                .filter((x) => !!x.url),
        [events]
    );
    const eIndexMap = useMemo(
        () => new Map(eGalleryItems.map((g, j) => [g.idx, j])),
        [eGalleryItems]
    );

    return (
        <SiteLayout>
            {/* HERO SECTION */}
            <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
                <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-purple-900 opacity-20 blur-3xl filter" />
                <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-slate-800 opacity-20 blur-3xl filter" />

                <div className="relative mx-auto max-w-6xl px-6 text-center">
                    <Badge className="mb-6 bg-purple-900/30 text-purple-300 hover:bg-purple-900/40 border-purple-700/50 px-4 py-1.5 text-sm uppercase tracking-wider">
                        {t("layanan.badge")}
                    </Badge>
                    <h1 className="text-4xl font-extrabold tracking-tight leading-tight sm:text-6xl text-white">
                        {t("layanan.title_prefix")} <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-indigo-300">
                            {t("layanan.title_suffix")}
                        </span>
                    </h1>
                    <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                        {t("layanan.desc")}
                    </p>
                </div>
            </section>

            <main className="mx-auto max-w-7xl px-6 py-16 bg-white dark:bg-slate-950">
                {/* CORE SERVICES */}
                <section className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                            {t("layanan.core_programs")}
                        </h2>
                        <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            {t("layanan.core_desc")}
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {/* Service 1 */}
                        <div className="group relative bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-slate-200 dark:border-slate-800">
                            <div className="h-12 w-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                                <ShieldCheck className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                {t("layanan.service1_title")}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">
                                {t("layanan.service1_desc")}
                            </p>
                        </div>

                        {/* Service 2 */}
                        <div className="group relative bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-slate-200 dark:border-slate-800">
                            <div className="h-12 w-12 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors">
                                <BookOpen className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                {t("layanan.service2_title")}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">
                                {t("layanan.service2_desc")}
                            </p>
                        </div>

                        {/* Service 3 */}
                        <div className="group relative bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-slate-200 dark:border-slate-800">
                            <div className="h-12 w-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                                <Users className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                {t("layanan.service3_title")}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">
                                {t("layanan.service3_desc")}
                            </p>
                        </div>

                        {/* Service 4 */}
                        <div className="group relative bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-slate-200 dark:border-slate-800">
                            <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                                <MonitorPlay className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                {t("layanan.service4_title")}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">
                                {t("layanan.service4_desc")}
                            </p>
                        </div>
                    </div>
                </section>

                {/* ADDITIONAL PROGRAMS */}
                <section className="mb-20">
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                    {t("layanan.consulting_title")}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                                    {t("layanan.consulting_desc")}
                                </p>
                                <ul className="space-y-4">
                                    {(t("layanan.consulting_list") || []).map(
                                        (item, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-start gap-3"
                                            >
                                                <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                                                <span className="text-slate-700 dark:text-slate-200">
                                                    {item}
                                                </span>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                            <div className="grid gap-6">
                                <Card className="bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800">
                                    <CardHeader>
                                        <CardTitle className="text-lg">
                                            {t("layanan.facilities_title")}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-slate-600 dark:text-slate-400 text-sm">
                                        {t("layanan.facilities_desc")}
                                    </CardContent>
                                </Card>
                                <Card className="bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800">
                                    <CardHeader>
                                        <CardTitle className="text-lg">
                                            {t("layanan.trainers_title")}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-slate-600 dark:text-slate-400 text-sm">
                                        {t("layanan.trainers_desc")}
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SCHEDULE & EVENTS */}
                <div className="space-y-20">
                    {/* Schedule Section */}
                    <section>
                        <div className="flex items-center gap-3 mb-8">
                            <Calendar className="w-8 h-8 text-purple-600" />
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                                {t("layanan.schedule_title")}
                            </h2>
                        </div>

                        {schedules.length === 0 ? (
                            <div className="p-8 text-center rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                <p className="text-slate-500 italic">
                                    {t("layanan.schedule_empty")}
                                </p>
                            </div>
                        ) : (
                            <div className={gridClass(schedules.length)}>
                                {schedules.map((item, i) => {
                                    const url = toStorageUrl(item.image_url);
                                    return (
                                        <div
                                            key={item.id}
                                            className="group overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-lg transition-all"
                                        >
                                            <div className="relative aspect-[3/4] w-full bg-slate-100 dark:bg-slate-900 overflow-hidden">
                                                {url ? (
                                                    <a
                                                        href={url}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            const gi =
                                                                sIndexMap.get(
                                                                    i
                                                                );
                                                            if (
                                                                gi !== undefined
                                                            )
                                                                sLgRef.current?.openGallery(
                                                                    gi
                                                                );
                                                        }}
                                                        className="block h-full w-full"
                                                    >
                                                        <img
                                                            src={url}
                                                            alt={
                                                                item.caption ||
                                                                "Schedule"
                                                            }
                                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                            loading="lazy"
                                                        />
                                                    </a>
                                                ) : (
                                                    <div className="h-full w-full flex items-center justify-center text-slate-400">
                                                        {t("layanan.no_image")}
                                                    </div>
                                                )}
                                            </div>
                                            {item.caption && (
                                                <div className="p-4 border-t border-slate-100 dark:border-slate-800">
                                                    <p className="text-sm font-medium text-slate-700 dark:text-slate-200 line-clamp-2">
                                                        {item.caption}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </section>

                    {/* Events Section */}
                    <section>
                        <div className="flex items-center gap-3 mb-8">
                            <TrendingUp className="w-8 h-8 text-amber-600" />
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                                {t("layanan.events_title")}
                            </h2>
                        </div>

                        {events.length === 0 ? (
                            <div className="p-8 text-center rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                <p className="text-slate-500 italic">
                                    {t("layanan.events_empty")}
                                </p>
                            </div>
                        ) : (
                            <div className={gridClass(events.length)}>
                                {events.map((item, i) => {
                                    const url = toStorageUrl(item.image_url);
                                    return (
                                        <div
                                            key={item.id}
                                            className="group overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-lg transition-all"
                                        >
                                            <div className="relative aspect-[3/4] w-full bg-slate-100 dark:bg-slate-900 overflow-hidden">
                                                {url ? (
                                                    <a
                                                        href={url}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            const gi =
                                                                eIndexMap.get(
                                                                    i
                                                                );
                                                            if (
                                                                gi !== undefined
                                                            )
                                                                eLgRef.current?.openGallery(
                                                                    gi
                                                                );
                                                        }}
                                                        className="block h-full w-full"
                                                    >
                                                        <img
                                                            src={url}
                                                            alt={
                                                                item.caption ||
                                                                "Event"
                                                            }
                                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                            loading="lazy"
                                                        />
                                                    </a>
                                                ) : (
                                                    <div className="h-full w-full flex items-center justify-center text-slate-400">
                                                        {t("layanan.no_image")}
                                                    </div>
                                                )}
                                            </div>
                                            {item.caption && (
                                                <div className="p-4 border-t border-slate-100 dark:border-slate-800">
                                                    <p className="text-sm font-medium text-slate-700 dark:text-slate-200 line-clamp-2">
                                                        {item.caption}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </section>
                </div>

                {/* CTA */}
                <section className="mt-24">
                    <div className="relative rounded-3xl overflow-hidden bg-slate-900 px-6 py-16 sm:px-16 sm:py-24 shadow-2xl">
                        <div className="relative z-10 text-center max-w-2xl mx-auto">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                Siap untuk Memulai?
                            </h2>
                            <p className="mx-auto mt-6 max-w-xl text-lg text-slate-300">
                                Hubungi kami untuk penawaran training in-house
                                atau informasi jadwal public class terbaru.
                            </p>
                            <div className="mt-10 bg-white dark:bg-slate-900 p-6 rounded-xl text-left shadow-lg border border-slate-200 dark:border-slate-800">
                                <ContactForm />
                            </div>
                        </div>
                        {/* Decor */}
                        <div
                            className="absolute -top-24 left-0 -z-10 transform-gpu blur-3xl"
                            aria-hidden="true"
                        >
                            <div className="aspect-[1404/767] w-[87.75rem] bg-linear-to-r from-[#80caff] to-[#4f46e5] opacity-25"></div>
                        </div>
                    </div>
                </section>

                <LightGallery
                    onInit={(detail) => {
                        sLgRef.current = detail.instance;
                    }}
                    dynamic
                    dynamicEl={sGalleryItems.map((g) => ({
                        src: g.url,
                        thumb: g.url,
                        subHtml: g.caption,
                    }))}
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                    download={false}
                    showThumbByDefault={true}
                />
                <LightGallery
                    onInit={(detail) => {
                        eLgRef.current = detail.instance;
                    }}
                    dynamic
                    dynamicEl={eGalleryItems.map((g) => ({
                        src: g.url,
                        thumb: g.url,
                        subHtml: g.caption,
                    }))}
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                    download={false}
                    showThumbByDefault={true}
                />
            </main>
        </SiteLayout>
    );
}
