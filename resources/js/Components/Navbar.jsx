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
import { useLanguage } from "../Contexts/LanguageContext";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const { url } = usePage();
    const { t, language, setLanguage } = useLanguage();
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
        <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                <Link href="/" className="flex items-center gap-2">
                    <img
                        src="/images/logo-rds.png"
                        alt={t("nav.title")}
                        className="inline-flex h-8 w-8 items-center justify-center"
                    />
                    <span className="text-sm font-bold tracking-wide text-white">
                        {t("nav.title")}
                    </span>
                </Link>
                <nav className="hidden items-center gap-1 md:flex">
                    <NavigationMenu>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className={desktopItemClass("/")}
                            >
                                <Link
                                    href="/"
                                    className="text-slate-300 hover:text-white transition-colors"
                                >
                                    {t("nav.home")}
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className={desktopItemClass("/tentang")}
                            >
                                <Link
                                    href="/tentang"
                                    className="text-slate-300 hover:text-white transition-colors"
                                >
                                    {t("nav.about")}
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className={desktopItemClass("/layanan")}
                            >
                                <Link
                                    href="/layanan"
                                    className="text-slate-300 hover:text-white transition-colors"
                                >
                                    {t("nav.services")}
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className={desktopItemClass("/klien")}
                            >
                                <Link
                                    href="/klien"
                                    className="text-slate-300 hover:text-white transition-colors"
                                >
                                    {t("nav.clients")}
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className={desktopItemClass("/galeri")}
                            >
                                <Link
                                    href="/galeri"
                                    className="text-slate-300 hover:text-white transition-colors"
                                >
                                    {t("nav.gallery")}
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className={desktopItemClass("/kontak")}
                            >
                                <Link
                                    href="/kontak"
                                    className="text-slate-300 hover:text-white transition-colors"
                                >
                                    {t("nav.contact")}
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenu>

                    {/* Language Switcher Desktop */}
                    <div className="flex items-center gap-2 ml-4 pl-4 border-l border-slate-800">
                        <button
                            onClick={() => setLanguage("id")}
                            className={`text-xs font-bold px-2 py-1 rounded transition-colors ${
                                language === "id"
                                    ? "bg-purple-600 text-white"
                                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                            }`}
                        >
                            ID
                        </button>
                        <button
                            onClick={() => setLanguage("en")}
                            className={`text-xs font-bold px-2 py-1 rounded transition-colors ${
                                language === "en"
                                    ? "bg-purple-600 text-white"
                                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                            }`}
                        >
                            EN
                        </button>
                    </div>
                </nav>
                <button
                    aria-label="Menu"
                    className="cursor-pointer select-none md:hidden inline-flex items-center justify-center rounded-md border border-slate-800 bg-slate-900 p-2 text-slate-300 hover:bg-slate-800 hover:text-white"
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
                                className="fixed inset-0 z-100 bg-black/80 backdrop-blur-sm"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                                onClick={() => setOpen(false)}
                            >
                                <motion.div
                                    className="absolute right-0 top-0 h-dvh w-4/5 max-w-sm border-l border-slate-800 bg-slate-950 px-6 py-4"
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
                                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-purple-600 text-white">
                                                R
                                            </span>
                                            <span className="text-sm font-bold tracking-wide text-white">
                                                {t("nav.title")}
                                            </span>
                                        </Link>
                                        <button
                                            aria-label="Tutup"
                                            className="cursor-pointer select-none inline-flex items-center justify-center rounded-md border border-slate-800 bg-slate-900 p-2 text-slate-300 hover:bg-slate-800 hover:text-white"
                                            onClick={() => setOpen(false)}
                                        >
                                            <X className="size-5" />
                                        </button>
                                    </div>
                                    <div className="mt-6 space-y-3">
                                        <Link
                                            href="/"
                                            className="block rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-slate-900 hover:text-white"
                                            onClick={() => setOpen(false)}
                                        >
                                            {t("nav.home")}
                                        </Link>
                                        <Link
                                            href="/tentang"
                                            className="block rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-slate-900 hover:text-white"
                                            onClick={() => setOpen(false)}
                                        >
                                            {t("nav.about")}
                                        </Link>
                                        <Link
                                            href="/layanan"
                                            className="block rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-slate-900 hover:text-white"
                                            onClick={() => setOpen(false)}
                                        >
                                            {t("nav.services")}
                                        </Link>
                                        <Link
                                            href="/klien"
                                            className="block rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-slate-900 hover:text-white"
                                            onClick={() => setOpen(false)}
                                        >
                                            {t("nav.clients")}
                                        </Link>
                                        <Link
                                            href="/galeri"
                                            className="block rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-slate-900 hover:text-white"
                                            onClick={() => setOpen(false)}
                                        >
                                            {t("nav.gallery")}
                                        </Link>
                                        <Link
                                            href="/kontak"
                                            className="block rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-slate-900 hover:text-white"
                                            onClick={() => setOpen(false)}
                                        >
                                            {t("nav.contact")}
                                        </Link>
                                    </div>

                                    {/* Language Switcher Mobile */}
                                    <div className="mt-8 pt-6 border-t border-slate-800">
                                        <div className="flex items-center gap-4 justify-center">
                                            <button
                                                onClick={() => {
                                                    setLanguage("id");
                                                    setOpen(false);
                                                }}
                                                className={`text-sm font-bold px-4 py-2 rounded transition-colors ${
                                                    language === "id"
                                                        ? "bg-purple-600 text-white"
                                                        : "text-slate-400 bg-slate-900"
                                                }`}
                                            >
                                                Bahasa Indonesia
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setLanguage("en");
                                                    setOpen(false);
                                                }}
                                                className={`text-sm font-bold px-4 py-2 rounded transition-colors ${
                                                    language === "en"
                                                        ? "bg-purple-600 text-white"
                                                        : "text-slate-400 bg-slate-900"
                                                }`}
                                            >
                                                English
                                            </button>
                                        </div>
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
