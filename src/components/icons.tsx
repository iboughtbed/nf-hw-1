import {
  AvatarIcon,
  DashboardIcon,
  GitHubLogoIcon,
  ImageIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";

export type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  instagram: InstagramLogoIcon,
  gitHub: GitHubLogoIcon,
  dashboard: DashboardIcon,
  avatar: AvatarIcon,
  placeholder: ImageIcon,
  logo: ({ ...props }: IconProps) => (
    <svg
      width="35"
      height="15"
      viewBox="0 0 35 15"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.184 0.639999H4.6C7.50133 0.639999 8.952 1.66933 8.952 3.728C8.952 4.41067 8.74933 4.96 8.344 5.376C7.94933 5.792 7.38933 6.04267 6.664 6.128C7.56 6.21333 8.24267 6.496 8.712 6.976C9.192 7.44533 9.432 8.07467 9.432 8.864C9.432 9.90933 9.064 10.6933 8.328 11.216C7.60267 11.7387 6.54133 12 5.144 12H0.184V0.639999ZM5.032 10.016C5.64 10.016 6.11467 9.89333 6.456 9.648C6.808 9.40267 6.984 9.04533 6.984 8.576C6.984 8.10667 6.808 7.744 6.456 7.488C6.104 7.232 5.62933 7.104 5.032 7.104H2.616V10.016H5.032ZM4.536 5.344C5.144 5.344 5.624 5.22667 5.976 4.992C6.328 4.75733 6.504 4.42133 6.504 3.984C6.504 3.07733 5.848 2.624 4.536 2.624H2.616V5.344H4.536ZM13.546 12C12.0527 12 11.306 11.2533 11.306 9.76V0.639999H13.706V9.504C13.706 9.74933 13.7593 9.93067 13.866 10.048C13.9833 10.1547 14.1593 10.208 14.394 10.208H14.97V12H13.546ZM20.351 12.192C19.487 12.192 18.7243 12.0107 18.063 11.648C17.4017 11.2747 16.8897 10.752 16.527 10.08C16.175 9.39733 15.999 8.608 15.999 7.712C15.999 6.816 16.1803 6.032 16.543 5.36C16.9057 4.67733 17.4123 4.15467 18.063 3.792C18.7243 3.41867 19.487 3.232 20.351 3.232C21.215 3.232 21.9723 3.41867 22.623 3.792C23.2843 4.15467 23.7963 4.67733 24.159 5.36C24.5217 6.032 24.703 6.816 24.703 7.712C24.703 8.608 24.5217 9.39733 24.159 10.08C23.807 10.752 23.3003 11.2747 22.639 11.648C21.9777 12.0107 21.215 12.192 20.351 12.192ZM20.351 10.352C20.9483 10.352 21.407 10.1227 21.727 9.664C22.0577 9.19467 22.223 8.544 22.223 7.712C22.223 6.88 22.0577 6.23467 21.727 5.776C21.407 5.30667 20.9483 5.072 20.351 5.072C19.7537 5.072 19.2897 5.30667 18.959 5.776C18.6283 6.23467 18.463 6.88 18.463 7.712C18.463 8.544 18.6283 9.19467 18.959 9.664C19.2897 10.1227 19.7537 10.352 20.351 10.352ZM30.1311 14.592C28.9578 14.592 28.0405 14.3787 27.3791 13.952C26.7178 13.5253 26.2858 12.9387 26.0831 12.192L28.5471 12.016C28.6431 12.3147 28.8085 12.5387 29.0431 12.688C29.2885 12.8373 29.6511 12.912 30.1311 12.912C31.3151 12.912 31.9071 12.3413 31.9071 11.2V10.288C31.6938 10.6933 31.3631 11.0133 30.9151 11.248C30.4778 11.4827 29.9818 11.6 29.4271 11.6C28.7231 11.6 28.0991 11.4293 27.5551 11.088C27.0111 10.7467 26.5845 10.2613 26.2751 9.632C25.9765 8.992 25.8271 8.256 25.8271 7.424C25.8271 6.61333 25.9765 5.89333 26.2751 5.264C26.5845 4.624 27.0058 4.128 27.5391 3.776C28.0831 3.41333 28.7018 3.232 29.3951 3.232C30.0031 3.232 30.5258 3.37067 30.9631 3.648C31.4005 3.91467 31.7365 4.28267 31.9711 4.752V3.424H34.3231V11.152C34.3231 12.272 33.9445 13.1253 33.1871 13.712C32.4298 14.2987 31.4111 14.592 30.1311 14.592ZM30.1151 9.824C30.6698 9.824 31.1071 9.60533 31.4271 9.168C31.7578 8.73067 31.9231 8.128 31.9231 7.36C31.9231 6.63467 31.7578 6.05867 31.4271 5.632C31.0965 5.20533 30.6591 4.992 30.1151 4.992C29.5498 4.992 29.1018 5.21067 28.7711 5.648C28.4511 6.08533 28.2911 6.672 28.2911 7.408C28.2911 8.144 28.4565 8.73067 28.7871 9.168C29.1178 9.60533 29.5605 9.824 30.1151 9.824Z"
        fill="currentColor"
      />
    </svg>
  ),
  google: ({ ...props }: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      />
    </svg>
  ),
  discord: ({ ...props }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
      <path
        fill="currentColor"
        d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
      />
    </svg>
  ),
  spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
};
