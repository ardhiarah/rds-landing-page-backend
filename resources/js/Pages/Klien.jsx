import SiteLayout from "../Layouts/SiteLayout";
import { Badge } from "../Components/ui/badge";

import { usePage } from "@inertiajs/react";
import { useLanguage } from "../Contexts/LanguageContext";

export default function Klien() {
    const { items = [] } = usePage().props;
    const { t } = useLanguage();
    const toStorageUrl = (p) => {
        if (!p) return null;
        if (p.startsWith("http://") || p.startsWith("https://")) return p;
        if (p.startsWith("/storage/")) return p;
        return "/storage/" + encodeURI(p);
    };

    return (
        <SiteLayout>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-slate-950 py-20 text-white">
                <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-purple-900 opacity-20 blur-3xl filter" />
                <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-indigo-900 opacity-20 blur-3xl filter" />

                <div className="relative mx-auto max-w-6xl px-6 text-center">
                    <Badge className="mb-6 bg-purple-900/30 text-purple-300 hover:bg-purple-900/40 border-purple-700/50 px-4 py-1.5 text-sm uppercase tracking-wider">
                        {t('klien.badge')}
                    </Badge>
                    <h1 className="text-4xl font-extrabold tracking-tight leading-tight sm:text-6xl text-white">
                        {t('klien.title')}
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 leading-relaxed">
                        {t('klien.desc')}
                    </p>
                </div>
            </section>

            <main className="bg-white dark:bg-slate-950 min-h-screen">
                <section className="mx-auto max-w-6xl px-6 py-20">
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {items.map((item) => {
                            const url = toStorageUrl(item.logo_url);
                            return (
                                <div
                                    key={item.id}
                                    className="group overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                                >
                                    <div className="relative h-40 w-full bg-slate-50 dark:bg-slate-950/50 flex items-center justify-center p-6">
                                        {url ? (
                                            <img
                                                src={url}
                                                alt={item.name || t('klien.logo_alt')}
                                                className="max-h-full max-w-full object-contain filter grayscale transition-all duration-300 group-hover:grayscale-0"
                                                loading="lazy"
                                            />
                                        ) : (
                                            <img
                                                src="/window.svg"
                                                alt={t('klien.logo_alt')}
                                                className="h-16 w-16 opacity-30 dark:invert"
                                            />
                                        )}
                                    </div>
                                    {item.name !== null && (
                                        <div className="border-t border-slate-100 dark:border-slate-800 p-4">
                                            <p className="text-center font-medium text-sm text-slate-600 dark:text-slate-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                                {item.name || t('klien.logo_alt')}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="relative overflow-hidden bg-slate-900 py-24">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
                    <div className="relative mx-auto max-w-6xl px-6 text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            {t('klien.cta_title')}
                        </h2>
                        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
                            {t('klien.cta_desc')}
                        </p>
                        <div className="mt-10 flex justify-center gap-4">
                            <a
                                href="/kontak"
                                className="rounded-lg bg-purple-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 transition-all"
                            >
                                {t('klien.cta_button')}
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </SiteLayout>
    );
}
