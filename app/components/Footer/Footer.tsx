import React from "react";

type Props = {};

export const Footer: React.FC<Props> = ({}) => {
  return (
    <div className="w-full bg-primary flex justify-center py-3 text-gray-400 transition gap-4 flex-none">
      <a className="hover:text-gray-200" href="https://github.com/MajorTom327">
        Github
      </a>
      <a
        className="hover:text-gray-200"
        href="https://www.linkedin.com/in/%F0%9F%91%A8%F0%9F%8F%BC%E2%80%8D%F0%9F%92%BB-valentin-thomas-110236144"
      >
        LinkedIn
      </a>
      <a className="hover:text-gray-200" href="https://twitter.com/MajorTom327">
        Twitter
      </a>
    </div>
  );
};

Footer.defaultProps = {};

export default Footer;
