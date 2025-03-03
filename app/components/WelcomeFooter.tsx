import React from "react";
import { useMediaQuery } from "react-responsive";

const OptimismIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6 mx-2">
    <circle cx="16" cy="16" r="16" fill="#FF1A1A" />
    <text x="50%" y="50%" textAnchor="middle" fill="white" dy=".3em" fontSize="10">
      OP
    </text>
  </svg>
);

const LIcon = () => (
  <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.7292 20.0008H0V3.24609H3.59887V16.7536H15.7292V19.999V20.0008Z" fill="white" />
    <path
      d="M15.7297 6.49072C17.5027 6.49072 18.94 5.0377 18.94 3.24534C18.94 1.45299 17.5027 0 15.7297 0C13.9568 0 12.5195 1.45299 12.5195 3.24534C12.5195 5.0377 13.9568 6.49072 15.7297 6.49072Z"
      fill="white"
    />
  </svg>
);

const CeramicIcon = () => (
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.5685 0.303498C13.9415 0.513678 14.2501 0.821638 14.4611 1.19421C15.6497 3.29309 16.8707 4.96927 18.1242 6.22279C19.3717 7.47029 21.0431 8.6909 23.1385 9.88466L23.2021 9.92083C24.3328 10.5621 24.7295 11.9985 24.0883 13.1291C23.8777 13.5004 23.5701 13.8074 23.1985 14.0174C21.1275 15.187 19.462 16.3936 18.2018 17.637C16.9279 18.8939 15.6848 20.5935 14.4725 22.7358L14.4357 22.8008C14.0082 23.5597 13.2227 23.9902 12.4102 23.9995V5.50423e-06C12.8031 -0.000844899 13.2017 0.0968097 13.5685 0.303498Z"
      fill="#FF3600"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.2197 9.0627L15.2672 9.10941L15.2859 9.12804L15.3047 9.14663C16.8707 10.6905 16.8887 13.2115 15.3449 14.7776L15.3255 14.7971L15.306 14.8165L15.2815 14.8408L15.2571 14.8652C14.4725 15.6543 13.4415 16.0492 12.4102 16.0493V7.92774C13.4236 7.92668 14.4372 8.30511 15.2197 9.0627H15.2197Z"
      fill="#FFB08A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.2601 0.303478C10.8871 0.513666 10.5785 0.821633 10.3675 1.19421C9.17892 3.29309 7.95788 4.96925 6.70436 6.22277C5.45686 7.47027 3.78546 8.6909 1.69013 9.88464L1.62649 9.9208C0.495857 10.562 0.0990834 11.9985 0.740328 13.1291C0.950901 13.5004 1.25848 13.8074 1.63013 14.0173C3.70109 15.187 5.36664 16.3936 6.62684 17.637C7.9007 18.8939 9.14379 20.5935 10.3562 22.7358L10.3929 22.8008C10.8204 23.5597 11.6059 23.9901 12.4185 23.9995V5.76826e-06C12.0255 -0.000864882 11.6269 0.0968099 11.2602 0.303478H11.2601Z"
      fill="#FFB08A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.60341 9.0627L9.55593 9.10941L9.53725 9.12804L9.51846 9.14665C7.9524 10.6905 7.9344 13.2115 9.47822 14.7775L9.49762 14.7971L9.51716 14.8165L9.54162 14.8408L9.56604 14.8652C10.3506 15.6543 11.3817 16.0492 12.413 16.0493V7.92774C11.3996 7.9267 10.3859 8.30511 9.60341 9.0627Z"
      fill="#FF3600"
    />
  </svg>
);

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6 mx-2">
    <path
      fill="white"
      d="M16 0a16 16 0 00-5.06 31.16c.8.14 1.09-.34 1.09-.76v-2.69c-4.45.96-5.39-2.15-5.39-2.15-.73-1.84-1.79-2.34-1.79-2.34-1.46-.99.11-.97.11-.97 1.62.12 2.47 1.67 2.47 1.67 1.43 2.45 3.75 1.74 4.66 1.33.14-1.03.56-1.74 1.01-2.14-3.55-.4-7.29-1.77-7.29-7.89 0-1.74.62-3.17 1.63-4.29-.16-.4-.71-2.03.15-4.22 0 0 1.34-.43 4.4 1.64a15.3 15.3 0 014.01-.54c1.36.01 2.73.18 4.01.54 3.05-2.08 4.39-1.64 4.39-1.64.87 2.19.32 3.82.16 4.22 1.01 1.12 1.63 2.54 1.63 4.29 0 6.14-3.75 7.48-7.32 7.88.57.49 1.08 1.48 1.08 2.98v4.42c0 .42.29.91 1.1.76A16 16 0 0016 0z"
    />
  </svg>
);

const SyncIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_9912_994)">
      <path
        d="M10.8001 17.7749C11.1751 17.7749 11.5126 18.0749 11.5126 18.4874C11.5126 18.8624 11.2126 19.1999 10.8001 19.1999C10.4251 19.1999 10.0876 18.8999 10.0876 18.4874C10.0876 18.0749 10.4251 17.7749 10.8001 17.7749ZM21.8251 13.4249C21.4501 13.4249 21.1126 13.1249 21.1126 12.7124C21.1126 12.3374 21.4126 11.9999 21.8251 11.9999C22.2001 11.9999 22.5376 12.2999 22.5376 12.7124C22.5376 13.0874 22.2001 13.4249 21.8251 13.4249ZM21.8251 10.5374C20.6251 10.5374 19.6501 11.5124 19.6501 12.7124C19.6501 12.9374 19.6876 13.1624 19.7626 13.3874L12.6001 17.2124C12.1876 16.6124 11.5126 16.2749 10.8001 16.2749C9.97505 16.2749 9.22505 16.7624 8.85005 17.4749L2.40005 14.0999C1.72505 13.7249 1.20005 12.6374 1.27505 11.5874C1.31255 11.0624 1.50005 10.6499 1.76255 10.4999C1.95005 10.3874 2.13755 10.4249 2.40005 10.5374L2.43755 10.5749C4.16255 11.4749 9.75005 14.3999 9.97505 14.5124C10.3501 14.6624 10.5376 14.7374 11.1751 14.4374L22.7251 8.43744C22.9126 8.36244 23.1001 8.21244 23.1001 7.94994C23.1001 7.61244 22.7626 7.46244 22.7626 7.46244C22.0876 7.16244 21.0751 6.67494 20.1001 6.22494C18.0001 5.24994 15.6001 4.12494 14.5501 3.56244C13.6501 3.07494 12.9001 3.48744 12.7876 3.56244L12.5251 3.67494C7.76255 6.07494 1.46255 9.18744 1.08755 9.41244C0.450053 9.78744 0.0375525 10.5749 5.2521e-05 11.5499C-0.0749475 13.0874 0.712552 14.6999 1.83755 15.2624L8.66255 18.7874C8.81255 19.8374 9.75005 20.6624 10.8001 20.6624C12.0001 20.6624 12.9376 19.7249 12.9751 18.5249L20.4751 14.4749C20.8501 14.7749 21.3376 14.9249 21.8251 14.9249C23.0251 14.9249 24.0001 13.9499 24.0001 12.7499C24.0001 11.5124 23.0251 10.5374 21.8251 10.5374Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_9912_994">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const BigScreenWelcomeFooter = ({ displayPrivacyPolicy }: { displayPrivacyPolicy: boolean }) => {
  return (
    <footer className="lg:flex fixed bottom-0 justify-between items-center px-4 py-8 bg-black text-white text-sm grid-flow-col w-full max-w-full">
      <div className="flex items-start justify-start lg:justify-between my-4 lg:my-0">
        <span className="ml-10">Available on</span>
        <div className="mx-4">
          <OptimismIcon />
        </div>
        <div className="mx-4">
          <LIcon />
        </div>
        <div className="mx-4">
          <CeramicIcon />
        </div>
      </div>
      <div className="flex items-start justify-end lg:justify-between my-4 lg:my-0">
        {displayPrivacyPolicy ? (
          <a href="#" className="hover:underline px-2">
            Privacy Policy
          </a>
        ) : null}
        <a href="#" className="hover:underline px-2">
          Learn More
        </a>
        <a href="#" className="hover:underline px-2">
          Gitcoin Passport Scorer
        </a>
        <div className="mx-2">
          <GitHubIcon />
        </div>
        <div className="mx-2 mr-10">
          <SyncIcon />
        </div>
      </div>
    </footer>
  );
};

const PhoneWelcomeFooter = ({ displayPrivacyPolicy }: { displayPrivacyPolicy: boolean }) => {
  return (
    <footer className="lg:flex fixed bottom-0 left-0 right-0 justify-between items-center px-4 py-8 bg-black text-white text-sm grid-flow-col w-full max-w-full z-20 max-h-[120px]">
      <div className="flex items-start justify-start lg:justify-between flex-wrap">
        <span className="px-2">Available on</span>
        <div className="mx-4">
          <OptimismIcon />
        </div>
        <div className="mx-4">
          <LIcon />
        </div>
        <div className="mx-4">
          <CeramicIcon />
        </div>
      </div>
      <div className="flex items-start my-1 flex-wrap">
        {displayPrivacyPolicy ? (
          <a href="#" className="hover:underline px-2">
            Privacy Policy
          </a>
        ) : null}
        <a href="#" className="hover:underline px-2">
          Learn More
        </a>
        <a href="#" className="hover:underline px-2">
          Gitcoin Passport Scorer
        </a>
      </div>
      <div className="flex items-start flex-wrap">
        <div className="mx-2">
          <GitHubIcon />
        </div>
        <div className="mx-2 mr-10">
          <SyncIcon />
        </div>
      </div>
    </footer>
  );
};

const WelcomeFooter = ({ displayPrivacyPolicy }: { displayPrivacyPolicy: boolean }) => {
  const isPhone = useMediaQuery({ query: "(max-width: 768px)" });

  return isPhone ? (
    <PhoneWelcomeFooter displayPrivacyPolicy={displayPrivacyPolicy} />
  ) : (
    <BigScreenWelcomeFooter displayPrivacyPolicy={displayPrivacyPolicy} />
  );
};

export default WelcomeFooter;
