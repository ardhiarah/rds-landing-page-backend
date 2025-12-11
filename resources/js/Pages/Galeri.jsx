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

export default function Galeri() {
    const { items = [] } = usePage().props;
    const lgRef = useRef(null);
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
            <main className="mx-auto max-w-6xl px-6 py-12">
                <div className="flex items-center justify-between">
                    <div>
                        <Badge>Galeri</Badge>
                        <h1 className="mt-3 text-3xl font-bold text-black dark:text-white">
                            Dokumentasi Kegiatan
                        </h1>
                        <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                            Cuplikan kegiatan refreshment, seminar, dan
                            pembekalan RDS bersama berbagai bank di Indonesia.
                        </p>
                    </div>
                </div>

                <section className="mt-10">
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                        {items.map((item, i) => {
                            const url = toStorageUrl(item.image_url);
                            return (
                                <div
                                    key={item.id}
                                    className="overflow-hidden rounded-xl border border-slate-300 dark:border-slate-700"
                                >
                                    <div className="relative h-40 w-full bg-neutral-100 dark:bg-neutral-900">
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
                                                className="block"
                                                aria-label={
                                                    item.caption ||
                                                    "Foto Kegiatan"
                                                }
                                            >
                                                <img
                                                    src={url}
                                                    alt={
                                                        item.caption ||
                                                        "Foto Kegiatan"
                                                    }
                                                    className="h-40 w-full object-cover"
                                                    loading="lazy"
                                                />
                                            </a>
                                        ) : (
                                            <img
                                                src="/window.svg"
                                                alt="Foto Kegiatan"
                                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60 dark:invert"
                                            />
                                        )}
                                    </div>
                                    <p className="text-center font-semibold text-sm text-neutral-600 dark:text-neutral-400 p-4 min-h-12 flex items-center justify-center">
                                        {item.caption || "Foto Kegiatan"}
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
                        thumbWidth={100}
                        thumbHeight={70}
                        animateThumb={false}
                        toggleThumb={false}
                    />
                </section>
            </main>
        </SiteLayout>
    );
}
