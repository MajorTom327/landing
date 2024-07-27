import { useTranslation } from "react-i18next";

const LinkItem: React.FC<{ service: string }> = ({ service }) => {
  const { t } = useTranslation();
  return (
    <a
      className="px-2 py-2 hover:underline"
      href={t(`contacts.service.${service}.url`)}
    >
      {t(`contacts.service.${service}.label`)}
    </a>
  );
};

export const FooterContact: React.FC = () => {
  return (
    <>
      <div className="flex gap-4 *-hover:bg-red-500">
        <LinkItem service={"github"} />
        <LinkItem service={"linkedin"} />
        <LinkItem service={"farcaster"} />
        <LinkItem service={"ens"} />
      </div>
    </>
  );
};
