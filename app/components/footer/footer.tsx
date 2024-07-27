import { FooterContact } from "~/components/footer/footer-contact";
import { FooterCopyright } from "~/components/footer/footer-copyright";
import { FooterEco } from "~/components/footer/footer-eco";

export const Footer: React.FC = () => {
  return (
    <>
      <footer className="w-full p-2 py-6 bg-secondary text-secondary-foreground flex flex-col justify-center items-center gap-4">
        <FooterContact />
        <FooterEco />
        <FooterCopyright />
      </footer>
    </>
  );
};
