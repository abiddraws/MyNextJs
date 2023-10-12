import { useTranslations } from "next-intl";

export default function MyWebPage() {
    const t = useTranslations("homePage")

    return <div className="text-center p-4">
    <h1 className="text-4xl font-bold text-gray-800">{t("title")}</h1>
    <p className="text-lg text-gray-600">{t("welcome")}</p>
  </div>
};
