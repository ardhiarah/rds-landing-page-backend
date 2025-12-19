import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { useLanguage } from "../Contexts/LanguageContext";

export default function ContactForm({ className = "", header }) {
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);
    const { t } = useLanguage();

    async function onSubmit(e) {
        e.preventDefault();
        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form));

        setLoading(true);
        setStatus(null);
        try {
            const csrf =
                document
                    .querySelector('meta[name="csrf-token"]')
                    ?.getAttribute("content") || "";
            const res = await fetch("/kontak", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": csrf,
                },
                body: JSON.stringify(data),
            });
            const json = await res.json();
            if (res.ok && json?.ok) {
                setStatus({
                    type: "success",
                    message: t("contact_form.success"),
                });
                form.reset();
            } else {
                throw new Error(
                    json?.message || t("contact_form.generic_error")
                );
            }
        } catch (err) {
            setStatus({
                type: "error",
                message: t("contact_form.error"),
            });
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            {header && header}
            <form
                onSubmit={onSubmit}
                className={`${className} mx-auto w-full max-w-xl space-y-4`}
            >
                <div className="grid gap-2">
                    <Label htmlFor="nama">{t("contact_form.name")}</Label>
                    <Input
                        id="nama"
                        name="nama"
                        placeholder={t("contact_form.name_placeholder")}
                        required
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="email">{t("contact_form.email")}</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder={t("contact_form.email_placeholder")}
                        required
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="institusi">
                        {t("contact_form.institution")}
                    </Label>
                    <Input
                        id="institusi"
                        name="institusi"
                        placeholder={t("contact_form.institution_placeholder")}
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="pesan">{t("contact_form.message")}</Label>
                    <Textarea
                        id="pesan"
                        name="pesan"
                        placeholder={t("contact_form.message_placeholder")}
                        required
                    />
                </div>
                <div className="flex items-center gap-3">
                    <Button type="submit" size="lg" disabled={loading}>
                        {loading
                            ? t("contact_form.sending")
                            : t("contact_form.submit")}
                    </Button>
                    <a href="mailto:info@rds-indonesia.com">
                        <Button variant="outline" size="lg" type="button">
                            {t("contact_form.email_direct")}
                        </Button>
                    </a>
                </div>
                {status && (
                    <p
                        className={
                            status.type === "success"
                                ? "text-green-600 dark:text-green-400"
                                : "text-red-600 dark:text-red-400"
                        }
                    >
                        {status.message}
                    </p>
                )}
            </form>
        </>
    );
}
