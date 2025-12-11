import SiteLayout from "../Layouts/SiteLayout";
import { Badge } from "../Components/ui/badge";

import { usePage } from "@inertiajs/react";

export default function Klien() {
    const { items = [] } = usePage().props;
    const toStorageUrl = (p) => {
        if (!p) return null;
        if (p.startsWith("http://") || p.startsWith("https://")) return p;
        if (p.startsWith("/storage/")) return p;
        return "/storage/" + encodeURI(p);
    };

    return (
        <SiteLayout>
            <main className="mx-auto max-w-6xl px-6 py-12">
                <div className="flex items-center justify-between">
                    <div>
                        <Badge>Klien</Badge>
                        <h1 className="mt-3 text-3xl font-bold text-black dark:text-white">
                            Klien yang Dilayani
                        </h1>
                        <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                            RDS melayani bank dan lembaga keuangan di Indonesia,
                            termasuk Bank BUMN, Bank Swasta Nasional, BPD, dan
                            Bank Asing.
                        </p>
                    </div>
                </div>

                <section className="mt-10">
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                        {items.map((item) => {
                            const url = toStorageUrl(item.logo_url);
                            return (
                                <div
                                    key={item.id}
                                    className="overflow-hidden rounded-xl border border-slate-300 dark:border-slate-700"
                                >
                                    <div className="relative h-40 w-full bg-neutral-100 dark:bg-neutral-900">
                                        {url ? (
                                            <img
                                                src={url}
                                                alt={item.name || "Logo Klien"}
                                                className="h-40 w-full object-contain p-4"
                                                loading="lazy"
                                            />
                                        ) : (
                                            <img
                                                src="/window.svg"
                                                alt="Logo Klien"
                                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60 dark:invert"
                                            />
                                        )}
                                    </div>
                                    {item.name !== null && (
                                        <p className="text-center font-semibold text-sm text-neutral-600 dark:text-neutral-400 p-4 min-h-12 flex items-center justify-center">
                                            {item.name || "Logo Klien"}
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </section>
            </main>
        </SiteLayout>
    );
}
