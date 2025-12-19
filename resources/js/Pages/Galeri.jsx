import SiteLayout from "../Layouts/SiteLayout";
import { Badge } from "../Components/ui/badge";
import { usePage } from "@inertiajs/react";
import { useRef } from "react";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import { useLanguage } from "../Contexts/LanguageContext";

export default function Galeri() {
    const { items = [] } = usePage().props;
    const lgRef = useRef(null);
    const { t } = useLanguage();
    const toStorageUrl = (p) => {
        if (!p) return null;
        if (p.startsWith("http://") || p.startsWith("https://")) return p;
        if (p.startsWith("/storage/")) return p;
        return "/storage/" + encodeURI(p);
    };
    const galleryItems = items
        .map((item, idx) => ({
            idx,
            url: toStorageUrl(item.image_url),
            caption: item.caption || "",
        }))
        .filter((x) => !!x.url);
    const galleryIndexMap = new Map(galleryItems.map((g, j) => [g.idx, j]));

    return (
        <SiteLayout>
            {/* HERO SECTION */}
            <section className="relative overflow-hidden bg-slate-950 py-20 text-white">
                <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-purple-900 opacity-20 blur-3xl filter" />
                <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-indigo-900 opacity-20 blur-3xl filter" />

                <div className="relative mx-auto max-w-6xl px-6 text-center">
                    <Badge className="mb-6 bg-purple-900/30 text-purple-300 hover:bg-purple-900/40 border-purple-700/50 px-4 py-1.5 text-sm uppercase tracking-wider">
                        {t('galeri.badge')}
                    </Badge>
                    <h1 className="text-4xl font-extrabold tracking-tight leading-tight sm:text-6xl text-white">
                        {t('galeri.title')}
                    </h1>
                    <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                        {t('galeri.desc')}
                    </p>
                </div>
            </section>

            <main className="mx-auto max-w-7xl px-6 py-16 bg-white dark:bg-slate-950">
                <section>
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {items.map((item, i) => {
                            const url = toStorageUrl(item.image_url);
                            return (
                                <div
                                    key={item.id}
                                    className="group overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                                >
                                    <div className="relative aspect-square w-full overflow-hidden bg-neutral-100 dark:bg-slate-900">
                                        {url ? (
                                            <a
                                                href={url}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    const gi =
                                                        galleryIndexMap.get(i);
                                                    if (gi !== undefined) {
                                                        lgRef.current?.openGallery(
                                                            gi
                                                        );
                                                    }
                                                }}
                                                className="block h-full w-full"
                                                aria-label={
                                                    item.caption ||
                                                    t('galeri.no_image')
                                                }
                                            >
                                                <img
                                                    src={url}
                                                    alt={
                                                        item.caption ||
                                                        t('galeri.no_image')
                                                    }
                                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                    loading="lazy"
                                                />
                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                            </a>
                                        ) : (
                                            <div className="h-full w-full flex items-center justify-center">
                                                <img
                                                    src="/window.svg"
                                                    alt={t('galeri.no_image')}
                                                    className="w-1/2 opacity-20 dark:invert"
                                                />
                                            </div>
                                        )}
                                    </div>
                                    <p className="text-center font-medium text-xs text-slate-600 dark:text-slate-400 p-3 min-h-[3rem] flex items-center justify-center bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
                                        {item.caption || t('galeri.empty_caption')}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                    <LightGallery
                        onInit={(detail) => {
                            lgRef.current = detail.instance;
                        }}
                        dynamic
                        dynamicEl={galleryItems.map((g) => ({
                            src: g.url,
                            thumb: g.url,
                            subHtml: g.caption,
                        }))}
                        speed={500}
                        plugins={[lgThumbnail, lgZoom]}
                        download={false}
                        showThumbByDefault={true}
                    />
                </section>
            </main>
        </SiteLayout>
    );
}
