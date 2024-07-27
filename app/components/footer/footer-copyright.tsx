import { Trans } from "react-i18next";

export const FooterCopyright: React.FC = () => {
  return (
    <>
      <div>
        <Trans values={{ now: new Date().getFullYear() }}>
          general.copyright
        </Trans>
      </div>
    </>
  );
};
