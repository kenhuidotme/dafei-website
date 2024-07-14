export function MenuIcon({
  height = 24,
  ...props
}: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 12h18M3 6h18M3 18h18"
      />
    </svg>
  )
}

export function BiliBiliIcon({
  height = 32,
  ...props
}: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.9808 0.0307312C30.9915 0.0307312 39.9304 8.9702 39.9304 19.981C39.9304 30.9917 30.9915 39.9312 19.9808 39.9312C8.97002 39.9312 0.0305481 30.9917 0.0305481 19.981C0.0305481 8.9702 8.97002 0.0307312 19.9808 0.0307312ZM27.6582 8.35269C27.056 7.74993 26.0791 7.74993 25.4769 8.35269L22.2057 11.624C22.108 11.7217 22.0262 11.8292 21.9605 11.9429H17.9974C17.931 11.8292 17.8499 11.7223 17.7528 11.6252L14.4809 8.35392C13.8788 7.75116 12.9024 7.75116 12.3003 8.35392C11.6981 8.95607 11.6981 9.93242 12.3003 10.5346L13.7086 11.9429L12.2696 11.9435C9.71472 11.9435 7.64345 14.0148 7.64345 16.5696V25.8224C7.64345 28.3779 9.71472 30.4492 12.2696 30.4492H27.6914C30.2462 30.4492 32.3181 28.3779 32.3181 25.8224V16.5696C32.3181 14.0148 30.2462 11.9435 27.6914 11.9435L26.2481 11.9429L27.6582 10.5333C28.2603 9.93119 28.2603 8.95484 27.6582 8.35269ZM27.6914 15.0396C28.543 15.0396 29.2336 15.7303 29.2336 16.5819V25.8347L29.2293 25.9502C29.1703 26.7478 28.5043 27.377 27.6914 27.377H12.2696L12.1547 27.3727C11.3565 27.3143 10.7279 26.6482 10.7279 25.8347V16.5819L10.7316 16.467C10.7906 15.6688 11.4567 15.0396 12.2696 15.0396H27.6914ZM15.3541 18.1241C14.5024 18.1241 13.8118 18.8148 13.8118 19.6664V21.2086C13.8118 22.0602 14.5024 22.7509 15.3541 22.7509C16.2057 22.7509 16.8963 22.0602 16.8963 21.2086V19.6664C16.8963 18.8148 16.2057 18.1241 15.3541 18.1241ZM24.6069 18.1241C23.7553 18.1241 23.0646 18.8148 23.0646 19.6664V21.2086C23.0646 22.0602 23.7553 22.7509 24.6069 22.7509C25.4585 22.7509 26.1491 22.0602 26.1491 21.2086V19.6664C26.1491 18.8148 25.4585 18.1241 24.6069 18.1241Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function TwitterIcon({
  height = 32,
  ...props
}: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Twitter Logo</title>
      <path
        d="M20 0C8.95599 0 0 8.95599 0 20C0 31.044 8.95599 40 20 40C31.044 40 40 31.044 40 20C40 8.95599 31.044 0 20 0ZM29.1318 15.5939C29.1406 15.7907 29.1449 15.9885 29.1449 16.1871C29.1449 22.2531 24.5276 29.248 16.0837 29.2484C13.4912 29.2484 11.0788 28.4885 9.04724 27.1863C9.40643 27.2287 9.77203 27.2498 10.1422 27.2498C12.2931 27.2498 14.2725 26.5161 15.8438 25.2847C13.8342 25.2475 12.1399 23.9203 11.5552 22.0963C11.835 22.15 12.1228 22.1793 12.4179 22.1793C12.8369 22.1793 13.2428 22.1228 13.6285 22.0175C11.528 21.597 9.94568 19.7406 9.94568 17.5177C9.94568 17.4969 9.94568 17.4783 9.94629 17.4591C10.5649 17.803 11.2723 18.0099 12.0255 18.0331C10.7928 17.2107 9.9826 15.8047 9.9826 14.212C9.9826 13.371 10.21 12.583 10.6042 11.9046C12.868 14.6823 16.2512 16.5091 20.0665 16.701C19.9878 16.3647 19.9472 16.0144 19.9472 15.6543C19.9472 13.1201 22.0032 11.0641 24.5383 11.0641C25.8588 11.0641 27.0514 11.6223 27.8891 12.5146C28.9349 12.3083 29.917 11.9263 30.8041 11.4005C30.4608 12.4719 29.7333 13.371 28.7854 13.9395C29.7141 13.8284 30.5991 13.5822 31.4215 13.2166C30.8072 14.1373 30.0281 14.946 29.1318 15.5939Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function GitHubIcon({
  height = 40,
  ...props
}: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>GitHub Logo</title>
      <path
        d="M20.0002 0C9.01496 0 0 9.01496 0 20.0002C0 29.3743 6.57781 37.8897 15.3126 40.0003V33.3834C14.4471 33.5729 13.6506 33.5784 12.7696 33.3187C11.5876 32.9699 10.6272 32.1826 9.91432 30.982C9.45991 30.2154 8.65455 29.3841 7.81439 29.4451L7.6084 27.1105C9.42512 26.9549 10.9968 28.2174 11.9297 29.7848C12.3441 30.4818 12.8211 30.8904 13.4333 31.0711C14.0251 31.2454 14.6605 31.1617 15.4008 30.9002C15.5867 29.4179 16.2657 28.8631 16.7787 28.0819V28.0807C11.5693 27.3037 9.49318 24.54 8.66919 22.3586C7.57727 19.4621 8.16321 15.8436 10.0941 13.5569C10.1316 13.5124 10.1994 13.3958 10.1731 13.3143C9.28779 10.64 10.3666 8.4278 10.4063 8.19312C11.428 8.49524 11.594 7.88916 14.8445 9.86397L15.4063 10.2015C15.6413 10.3416 15.5674 10.2616 15.8024 10.2439C17.1596 9.87526 18.5902 9.6717 19.9998 9.65339C21.4201 9.6717 22.8417 9.87526 24.2549 10.2589L24.4368 10.2772C24.421 10.2747 24.4863 10.2656 24.5958 10.2003C28.6562 7.74084 28.5103 8.54468 29.5992 8.19068C29.6386 8.42566 30.7031 10.6739 29.8272 13.3143C29.7091 13.6781 33.3474 17.0097 31.3308 22.3577C30.5068 24.54 28.431 27.3037 23.2216 28.0807V28.0819C23.8893 29.0996 24.6917 29.641 24.6874 31.7407V40.0003C33.4225 37.8897 40 29.3743 40 20.0002C40.0003 9.01496 30.9853 0 20.0002 0V0Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function YouTubeIcon({
  height = 32,
  ...props
}: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>YouTube logo</title>
      <path
        d="M17.5088 23.7468L24.0145 19.9999L17.5088 16.2529V23.7468Z"
        fill="currentColor"
      />
      <path
        d="M20 0C8.95599 0 0 8.95599 0 20C0 31.044 8.95599 40 20 40C31.044 40 40 31.044 40 20C40 8.95599 31.044 0 20 0ZM32.4969 20.0204C32.4969 20.0204 32.4969 24.0765 31.9824 26.0324C31.694 27.103 30.8499 27.9471 29.7794 28.2352C27.8235 28.75 20 28.75 20 28.75C20 28.75 12.197 28.75 10.2206 28.2147C9.15009 27.9266 8.30597 27.0822 8.01758 26.0117C7.50275 24.0765 7.50275 20 7.50275 20C7.50275 20 7.50275 15.9442 8.01758 13.9883C8.30566 12.9178 9.17053 12.0529 10.2206 11.7648C12.1765 11.25 20 11.25 20 11.25C20 11.25 27.8235 11.25 29.7794 11.7853C30.8499 12.0734 31.694 12.9178 31.9824 13.9883C32.5177 15.9442 32.4969 20.0204 32.4969 20.0204Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function DiscordIcon({
  height = 32,
  ...props
}: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 0C8.95105 0 0 8.95105 0 20C0 31.0256 8.95105 39.9767 20 40C31.049 40 40 31.049 40 20C40 8.95105 31.049 0 20 0ZM23.6829 10.2331C25.5244 10.5361 27.2959 11.0955 28.9976 11.8648C31.9113 16.1538 33.3565 21.0023 32.8437 26.5967C30.8857 28.0652 28.6712 29.1608 26.3169 29.8834C25.7808 29.1608 25.3146 28.4149 24.9183 27.6224C25.6875 27.3426 26.4335 26.993 27.1328 26.5734C27.0395 26.5035 26.9521 26.4335 26.8647 26.3636C26.7773 26.2937 26.6899 26.2238 26.5966 26.1538C22.4708 28.1119 17.6689 28.1119 13.543 26.1538C13.4498 26.2238 13.3624 26.2937 13.275 26.3636C13.1875 26.4335 13.1001 26.5035 13.0069 26.5734C13.7062 26.993 14.4288 27.3426 15.198 27.6224C14.8018 28.4149 14.3356 29.1608 13.7994 29.8834C11.4451 29.1841 9.25397 28.0652 7.27262 26.5967C6.82973 21.7715 7.73882 16.8997 11.0955 11.8881C12.7738 11.0955 14.5687 10.5361 16.4101 10.2331C16.6666 10.676 16.8997 11.1422 17.1094 11.6317C19.0675 11.3286 21.0488 11.3286 23.0069 11.6317C23.1934 11.1888 23.4498 10.6527 23.6829 10.2331ZM13.4498 21.0256C13.4498 22.4475 14.4754 23.613 15.7575 23.613C17.0628 23.613 18.0652 22.4475 18.0885 21.0256C18.0885 19.5804 17.0628 18.4149 15.7575 18.4149C14.4754 18.4149 13.4498 19.6037 13.4498 21.0256ZM22.0279 21.0256C22.0279 22.4475 23.0535 23.613 24.3356 23.613C25.6176 23.613 26.6199 22.4708 26.6432 21.0256C26.6666 19.5804 25.6409 18.4149 24.3356 18.4149C23.0535 18.4149 22.0279 19.6037 22.0279 21.0256Z"
        fill="currentColor"
      />
    </svg>
  )
}