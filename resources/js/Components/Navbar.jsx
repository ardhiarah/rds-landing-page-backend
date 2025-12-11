import { useState, useEffect } from "react";
import { Link, usePage } from "@inertiajs/react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const { url } = usePage();
    const canUseDOM =
        typeof window !== "undefined" && typeof document !== "undefined";

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    const isActive = (href) => {
        if (!href) return false;
        if (href === "/") return url === "/";
        return url === href || url.startsWith(href + "/");
    };
    const desktopItemClass = (href) =>
        `${navigationMenuTriggerStyle()} ${
            isActive(href) ? "bg-accent text-accent-foreground" : ""
        }`;
    const mobileLinkClass = (href) =>
        `block rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground ${
            isActive(href) ? "bg-accent text-accent-foreground" : ""
        }`;

    return (
        <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/70 backdrop-blur dark:border-neutral-800 dark:bg-black/70">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                <Link href="/" className="flex items-center gap-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-black text-white dark:bg-white dark:text-black">
                        R
                    </span>
                    <span className="text-sm font-bold tracking-wide">
                        RDS Risk Management
                    </span>
                </Link>
                <nav className="hidden items-center gap-1 md:flex">
                    <NavigationMenu>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className={desktopItemClass("/")}
                            >
                                <Link href="/">Beranda</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className={desktopItemClass("/tentang")}
                            >
                                <Link href="/tentang">Tentang</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className={desktopItemClass("/layanan")}
                            >
                                <Link href="/layanan">Layanan</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className={desktopItemClass("/klien")}
                            >
                                <Link href="/klien">Klien</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className={desktopItemClass("/galeri")}
                            >
                                <Link href="/galeri">Galeri</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className={desktopItemClass("/kontak")}
                            >
                                <Link href="/kontak">Kontak</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenu>
                </nav>
                <button
                    aria-label="Menu"
                    className="cursor-pointer select-none md:hidden inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white p-2 text-neutral-700 dark:border-neutral-800 dark:bg-black dark:text-neutral-300"
                    onClick={() => setOpen(true)}
                >
                    <Menu className="size-5" />
                </button>
            </div>
            {canUseDOM &&
                createPortal(
                    <AnimatePresence>
                        {open && (
                            <motion.div
                                role="dialog"
                                aria-modal="true"
                                className="fixed inset-0 z-100 bg-black/50 dark:bg-black/60"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                                onClick={() => setOpen(false)}
                            >
                                <motion.div
                                    className="absolute right-0 top-0 h-dvh w-4/5 max-w-sm border-l border-neutral-200 bg-white px-6 py-4 dark:border-neutral-800 dark:bg-black"
                                    initial={{ x: "100%" }}
                                    animate={{ x: 0 }}
                                    exit={{ x: "100%" }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 280,
                                        damping: 28,
                                    }}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <div className="flex items-center justify-between">
                                        <Link
                                            href="/"
                                            className="flex items-center gap-2"
                                            onClick={() => setOpen(false)}
                                        >
                                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-black text-white dark:bg-white dark:text-black">
                                                R
                                            </span>
                                            <span className="text-sm font-bold tracking-wide">
                                                RDS Risk Management
                                            </span>
                                        </Link>
                                        <button
                                            aria-label="Tutup"
                                            className="cursor-pointer select-none inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white p-2 text-neutral-700 dark:border-neutral-800 dark:bg-black dark:text-neutral-300"
                                            onClick={() => setOpen(false)}
                                        >
                                            <X className="size-5" />
                                        </button>
                                    </div>
                                    <div className="mt-6 space-y-3">
                                        <Link
                                            href="/"
                                            className={mobileLinkClass("/")}
                                            onClick={() => setOpen(false)}
                                        >
                                            Beranda
                                        </Link>
                                        <Link
                                            href="/tentang"
                                            className={mobileLinkClass(
                                                "/tentang"
                                            )}
                                            onClick={() => setOpen(false)}
                                        >
                                            Tentang
                                        </Link>
                                        <Link
                                            href="/layanan"
                                            className={mobileLinkClass(
                                                "/layanan"
                                            )}
                                            onClick={() => setOpen(false)}
                                        >
                                            Layanan
                                        </Link>
                                        <Link
                                            href="/klien"
                                            className={mobileLinkClass(
                                                "/klien"
                                            )}
                                            onClick={() => setOpen(false)}
                                        >
                                            Klien
                                        </Link>
                                        <Link
                                            href="/galeri"
                                            className={mobileLinkClass(
                                                "/galeri"
                                            )}
                                            onClick={() => setOpen(false)}
                                        >
                                            Galeri
                                        </Link>
                                        <Link
                                            href="/kontak"
                                            className={mobileLinkClass(
                                                "/kontak"
                                            )}
                                            onClick={() => setOpen(false)}
                                        >
                                            Kontak
                                        </Link>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>,
                    document.body
                )}
        </header>
    );
}
