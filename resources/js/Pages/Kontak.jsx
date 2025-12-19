import SiteLayout from "../Layouts/SiteLayout";
import { Badge } from "../Components/ui/badge";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "../Components/ui/card";
import {
    Phone,
    PhoneCall,
    Mail,
    Printer,
    Building,
    MapPin,
} from "lucide-react";
import ContactForm from "../Components/ContactForm";
import { useLanguage } from "../Contexts/LanguageContext";

export default function Kontak() {
    const { t } = useLanguage();
    return (
        <SiteLayout>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-slate-950 py-20 text-white">
                <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-purple-900 opacity-20 blur-3xl filter" />
                <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-indigo-900 opacity-20 blur-3xl filter" />

                <div className="relative mx-auto max-w-6xl px-6 text-center">
                    <Badge className="mb-6 bg-purple-900/30 text-purple-300 hover:bg-purple-900/40 border-purple-700/50 px-4 py-1.5 text-sm uppercase tracking-wider">
                        {t('kontak.badge')}
                    </Badge>
                    <h1 className="text-4xl font-extrabold tracking-tight leading-tight sm:text-6xl text-white">
                        {t('kontak.title')}
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 leading-relaxed">
                        {t('kontak.desc')}
                    </p>
                </div>
            </section>

            <main className="bg-white dark:bg-slate-950 min-h-screen">
                <section className="mx-auto max-w-6xl px-6 py-20">
                    <div className="grid gap-8 lg:grid-cols-2">
                        {/* Office Info */}
                        <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-lg transition-all duration-300">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-white">
                                    <Building className="h-6 w-6 text-purple-600" />
                                    {t('kontak.office_info')}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-4 rounded-lg bg-slate-50 dark:bg-slate-950/50 p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="rounded-lg bg-purple-100 dark:bg-purple-900/30 p-2 text-purple-600 dark:text-purple-400">
                                            <Building className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-slate-900 dark:text-white">
                                                {t('kontak.company_name')}
                                            </h3>
                                            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                                                {t('kontak.company_tagline')}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="rounded-lg bg-purple-100 dark:bg-purple-900/30 p-2 text-purple-600 dark:text-purple-400">
                                            <MapPin className="h-5 w-5" />
                                        </div>
                                        <div className="text-sm text-slate-600 dark:text-slate-400">
                                            <p>{t('kontak.address_1')}</p>
                                            <p>{t('kontak.address_2')}</p>
                                            <p>{t('kontak.address_3')}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="font-medium text-slate-900 dark:text-white">
                                        {t('kontak.direct_contact')}
                                    </h4>
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div className="flex items-center gap-3 rounded-lg border border-slate-200 dark:border-slate-800 p-3 hover:border-purple-500 transition-colors">
                                            <Phone className="h-5 w-5 text-purple-600" />
                                            <div>
                                                <p className="text-xs text-slate-500">
                                                    {t('kontak.phone')}
                                                </p>
                                                <p className="font-medium text-slate-900 dark:text-white">
                                                    021-29858082
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 rounded-lg border border-slate-200 dark:border-slate-800 p-3 hover:border-purple-500 transition-colors">
                                            <Printer className="h-5 w-5 text-purple-600" />
                                            <div>
                                                <p className="text-xs text-slate-500">
                                                    {t('kontak.fax')}
                                                </p>
                                                <p className="font-medium text-slate-900 dark:text-white">
                                                    021-2506223
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-span-full flex items-center gap-3 rounded-lg border border-slate-200 dark:border-slate-800 p-3 hover:border-purple-500 transition-colors">
                                            <Mail className="h-5 w-5 text-purple-600" />
                                            <div className="flex-1">
                                                <p className="text-xs text-slate-500">
                                                    {t('kontak.email')}
                                                </p>
                                                <a
                                                    href="mailto:solusindo@rds2015.com"
                                                    className="font-medium text-purple-600 hover:underline"
                                                >
                                                    solusindo@rds2015.com
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                                    <h4 className="font-medium text-slate-900 dark:text-white">
                                        {t('kontak.personal_contact')}
                                    </h4>
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div className="flex items-center gap-3">
                                            <PhoneCall className="h-4 w-4 text-green-600" />
                                            <div>
                                                <p className="text-xs text-slate-500">
                                                    Ratih
                                                </p>
                                                <p className="text-sm font-medium text-slate-900 dark:text-white">
                                                    0878-7651-2795
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <PhoneCall className="h-4 w-4 text-green-600" />
                                            <div>
                                                <p className="text-xs text-slate-500">
                                                    Soeyamto
                                                </p>
                                                <p className="text-sm font-medium text-slate-900 dark:text-white">
                                                    0816-7931-63
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Location Map */}
                        <Card className="flex flex-col border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-lg transition-all duration-300">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-white">
                                    <MapPin className="h-6 w-6 text-purple-600" />
                                    {t('kontak.location_title')}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1 p-0 overflow-hidden rounded-b-xl">
                                <div className="h-full w-full min-h-[400px]">
                                    <iframe
                                        title="Sona Topas Tower"
                                        src="https://www.google.com/maps?q=Sona+Topas+Tower&output=embed"
                                        width="100%"
                                        height="100%"
                                        style={{
                                            border: 0,
                                            minHeight: "400px",
                                        }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="h-full w-full"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Form Section */}
                    <div className="mt-20">
                        <div className="mb-10 text-center">
                            <Badge className="mb-4 bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                                {t('kontak.send_message')}
                            </Badge>
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                                {t('kontak.form_title')}
                            </h2>
                            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                                {t('kontak.form_desc')}
                            </p>
                        </div>
                        <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-lg">
                            <ContactForm />
                        </div>
                    </div>
                </section>
            </main>
        </SiteLayout>
    );
}

const header = null; // Unused now as we integrated the header into the layout
