import { Star } from "lucide-react";

function Stars({ size = 20 }: { size?: number }) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          width={size}
          height={size}
          className="fill-brand-yellow text-brand-yellow"
        />
      ))}
    </div>
  );
}

function ZoomOutIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="19"
      viewBox="0 0 48 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.85 16.85L29.3 18.3L27.12 20.46C26.73 20.85 26.73 21.49 27.12 21.88C27.51 22.27 28.15 22.27 28.54 21.88L30.7 19.7L32.15 21.15C32.2205 21.2191 32.3099 21.2658 32.4068 21.2842C32.5038 21.3026 32.6041 21.2918 32.695 21.2533C32.7859 21.2149 32.8634 21.1503 32.9176 21.0679C32.9719 20.9854 33.0006 20.8887 33 20.79V16.5C33 16.22 32.78 16 32.5 16H28.21C28.1113 15.9994 28.0146 16.0281 27.9321 16.0824C27.8497 16.1366 27.7851 16.2141 27.7467 16.305C27.7082 16.3959 27.6974 16.4962 27.7158 16.5932C27.7342 16.6901 27.7809 16.7795 27.85 16.85ZM15.85 21.15L17.3 19.7L19.46 21.88C19.85 22.27 20.49 22.27 20.88 21.88C21.27 21.49 21.27 20.85 20.88 20.46L18.7 18.3L20.15 16.85C20.2191 16.7795 20.2658 16.6901 20.2842 16.5932C20.3026 16.4962 20.2918 16.3959 20.2533 16.305C20.2149 16.2141 20.1503 16.1366 20.0679 16.0824C19.9854 16.0281 19.8887 15.9994 19.79 16H15.5C15.22 16 15 16.22 15 16.5V20.79C15 21.24 15.54 21.46 15.85 21.15ZM20.15 33.15L18.7 31.7L20.88 29.54C21.27 29.15 21.27 28.51 20.88 28.12C20.49 27.73 19.85 27.73 19.46 28.12L17.3 30.3L15.85 28.85C15.7795 28.7809 15.6901 28.7342 15.5932 28.7158C15.4962 28.6974 15.3959 28.7082 15.305 28.7467C15.2141 28.7851 15.1366 28.8497 15.0824 28.9321C15.0281 29.0146 14.9994 29.1113 15 29.21V33.5C15 33.78 15.22 34 15.5 34H19.79C19.8887 34.0006 19.9854 33.9719 20.0679 33.9176C20.1503 33.8634 20.2149 33.7859 20.2533 33.695C20.2918 33.6041 20.3026 33.5038 20.2842 33.4068C20.2658 33.3099 20.2191 33.2205 20.15 33.15ZM32.15 28.85L30.7 30.3L28.54 28.12C28.15 27.73 27.51 27.73 27.12 28.12C26.73 28.51 26.73 29.15 27.12 29.54L29.3 31.7L27.85 33.15C27.7809 33.2205 27.7342 33.3099 27.7158 33.4068C27.6974 33.5038 27.7082 33.6041 27.7467 33.695C27.7851 33.7859 27.8497 33.8634 27.9321 33.9176C28.0146 33.9719 28.1113 34.0006 28.21 34H32.5C32.78 34 33 33.78 33 33.5V29.21C33.0006 29.1113 32.9719 29.0146 32.9176 28.9321C32.8634 28.8497 32.7859 28.7851 32.695 28.7467C32.6041 28.7082 32.5038 28.6974 32.4068 28.7158C32.3099 28.7342 32.2205 28.7809 32.15 28.85Z"
        fill="#FDFBF8"
      />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 35 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.4849 19.5702L30.9629 11.3793C31.0232 11.0448 31.0099 10.701 30.9238 10.3722C30.8378 10.0434 30.6812 9.73773 30.4649 9.47669C30.2487 9.21564 29.9783 9.00565 29.6727 8.86155C29.367 8.71745 29.0337 8.64277 28.6963 8.64277H9.76076L9.26721 5.90621C9.17092 5.37117 8.89122 4.8872 8.47692 4.5388C8.06262 4.1904 7.54006 3.99971 7.00045 4H5.38217C5.01559 4 4.66403 4.14674 4.40483 4.40795C4.14562 4.66916 4 5.02343 4 5.39283C4 5.76223 4.14562 6.11651 4.40483 6.37771C4.66403 6.63892 5.01559 6.78566 5.38217 6.78566H6.6161L9.62277 23.4506C9.63659 23.5266 9.65456 23.6007 9.67518 23.6738C9.22223 24.1355 8.89737 24.7088 8.73301 25.3366C8.56865 25.9643 8.57055 26.6246 8.73851 27.2514C8.90646 27.8781 9.23461 28.4496 9.6902 28.9087C10.1458 29.3677 10.7129 29.6984 11.3349 29.8676C11.9569 30.0368 12.6121 30.0386 13.235 29.8729C13.8579 29.7073 14.4269 29.3798 14.885 28.9234C15.3432 28.4669 15.6745 27.8973 15.8459 27.2715C16.0174 26.6456 16.023 25.9854 15.8621 25.3568H22.5456C22.3534 26.1068 22.3987 26.8987 22.6751 27.6215C22.9516 28.3443 23.4455 28.9619 24.0875 29.3879C24.7296 29.8139 25.4877 30.027 26.2559 29.9973C27.0241 29.9675 27.7638 29.6965 28.3716 29.2222C28.9793 28.7478 29.4247 28.0939 29.6454 27.3518C29.866 26.6097 29.851 25.8167 29.6022 25.0837C29.3535 24.3507 28.8836 23.7144 28.2582 23.2639C27.6329 22.8134 26.8834 22.5711 26.1147 22.5711H12.2738L11.9386 20.714H28.125C28.4487 20.714 28.7622 20.5995 29.0107 20.3905C29.2592 20.1815 29.4271 19.8912 29.485 19.5702H29.4849ZM13.2144 26.2853C13.2144 26.469 13.1604 26.6485 13.0592 26.8012C12.9579 26.9539 12.814 27.0729 12.6456 27.1432C12.4773 27.2135 12.292 27.2319 12.1132 27.196C11.9345 27.1602 11.7703 27.0718 11.6414 26.9419C11.5126 26.812 11.4248 26.6466 11.3893 26.4665C11.3537 26.2863 11.372 26.0996 11.4417 25.93C11.5114 25.7603 11.6295 25.6153 11.7811 25.5132C11.9326 25.4112 12.1108 25.3568 12.293 25.3568C12.5373 25.3571 12.7715 25.455 12.9442 25.6291C13.117 25.8031 13.2141 26.0391 13.2144 26.2853ZM26.1147 27.2139C25.9324 27.2139 25.7543 27.1594 25.6027 27.0574C25.4512 26.9553 25.3331 26.8103 25.2634 26.6407C25.1936 26.471 25.1754 26.2843 25.2109 26.1042C25.2465 25.924 25.3342 25.7586 25.4631 25.6287C25.592 25.4989 25.7562 25.4104 25.9349 25.3746C26.1137 25.3388 26.2989 25.3572 26.4673 25.4274C26.6357 25.4977 26.7796 25.6167 26.8808 25.7694C26.9821 25.9221 27.0361 26.1017 27.0361 26.2853C27.0358 26.5315 26.9386 26.7675 26.7659 26.9416C26.5932 27.1156 26.359 27.2136 26.1147 27.2139ZM11.4361 17.9283L10.2635 11.4284H28.1442L26.9714 17.9283H11.4361Z"
        fill="#FDFBF8"
      />
    </svg>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="7"
      viewBox="0 0 15 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.00125 7.00125C6.7676 7.00171 6.54116 6.92033 6.36125 6.77125L0.361252 1.77125C0.157036 1.60151 0.0286112 1.3576 0.0042315 1.09318C-0.0201482 0.82875 0.0615137 0.565469 0.231252 0.361252C0.400991 0.157035 0.644902 0.0286112 0.909329 0.00423152C1.17375 -0.0201482 1.43704 0.0615132 1.64125 0.231252L7.00125 4.71125L12.3613 0.391253C12.4635 0.308187 12.5812 0.246155 12.7076 0.208723C12.8339 0.171291 12.9664 0.159198 13.0974 0.173137C13.2285 0.187076 13.3554 0.226773 13.4711 0.289947C13.5867 0.35312 13.6887 0.438526 13.7713 0.541252C13.8628 0.644074 13.9322 0.7647 13.975 0.895574C14.0178 1.02645 14.0331 1.16475 14.0199 1.30181C14.0068 1.43887 13.9655 1.57175 13.8986 1.6921C13.8317 1.81246 13.7407 1.91771 13.6313 2.00125L7.63125 6.83125C7.44617 6.95677 7.22435 7.01662 7.00125 7.00125Z"
        fill="currentColor"
      />
    </svg>
  );
}

function SearchZoomIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="6"
        cy="6"
        r="5"
        stroke="#FDFBF8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 9.5L13 13"
        stroke="#FDFBF8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 6H8M6 4V8V4Z"
        stroke="#FDFBF8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowButton({ direction }: { direction: "up" | "down" }) {
  const isUp = direction === "up";
  return (
    <button
      type="button"
      aria-label={isUp ? "Previous" : "Next"}
      className={`flex h-10 w-10 items-center justify-center rounded-full transition-opacity hover:opacity-80 ${
        isUp ? "bg-brand-blue" : "bg-brand-pink"
      }`}
    >
      <svg
        width="16"
        height="10"
        viewBox="0 0 16 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={isUp ? "" : "rotate-180"}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 0.897C8.236 0.897 8.463 0.991 8.632 1.159L14.994 7.522C15.335 7.862 15.335 8.412 14.994 8.752C14.654 9.092 14.104 9.092 13.764 8.752L8 2.988L2.236 8.752C1.896 9.092 1.346 9.092 1.006 8.752C0.665 8.412 0.665 7.862 1.006 7.522L7.368 1.159C7.537 0.991 7.764 0.897 8 0.897Z"
          fill="#07484A"
        />
      </svg>
    </button>
  );
}

function ProductRow({
  title,
  price,
}: {
  title: string;
  price: string;
}) {
  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
      <div className="h-[149px] w-full flex-shrink-0 rounded-[10px] bg-brand-gray sm:w-[248px]" />
      <div className="flex w-full flex-1 flex-col items-start gap-3">
        <div className="flex w-full items-start justify-between gap-4">
          <h3 className="font-display text-base text-brand-teal">{title}</h3>
          <p className="whitespace-nowrap font-sans text-xl font-bold tracking-tight text-brand-teal">
            {price}
          </p>
        </div>
        <Stars size={16} />
        <p className="font-sans text-sm tracking-tight text-brand-teal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button
          type="button"
          className="flex items-center gap-1 font-sans text-sm tracking-tight text-brand-teal"
        >
          See More
          <ChevronDown className="h-2.5 w-3.5 rotate-180" />
        </button>
      </div>
    </div>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <section className="flex w-full flex-col items-center gap-14 px-5 py-14 sm:px-10 sm:py-16 lg:gap-20 lg:px-16 lg:py-20 xl:gap-[103px] xl:px-[150px] xl:py-[100px]">
        <h1 className="font-display text-4xl font-bold text-brand-teal sm:text-5xl md:text-6xl lg:text-7xl">
          Special Package
        </h1>

        <div className="flex w-full flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16 xl:gap-[100px]">
          {/* Main product block */}
          <div className="flex w-full flex-col items-end gap-8 lg:w-auto lg:max-w-[819px] lg:flex-shrink-0">
            <div className="relative w-full max-w-[420px] self-end">
              <div className="aspect-[4/3] w-full rounded-2xl bg-brand-gray" />
              <button
                type="button"
                aria-label="Zoom"
                className="absolute bottom-3 right-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-teal"
              >
                <ZoomOutIcon className="h-5 w-5" />
              </button>
            </div>

            <div className="flex w-full flex-wrap items-start justify-between gap-6">
              <div className="flex flex-col gap-4">
                <h2 className="font-sans text-3xl text-brand-teal sm:text-4xl">
                  Larkin Wood Full Set
                </h2>
                <Stars size={24} />
                <p className="font-sans text-2xl font-bold tracking-tight text-brand-teal">
                  $729.99
                </p>
              </div>
              <button
                type="button"
                className="flex items-center gap-5 self-start rounded-[10px] bg-brand-sage px-6 py-4"
              >
                <span className="font-sans text-lg text-brand-cream">
                  Add to cart
                </span>
                <CartIcon />
              </button>
            </div>
          </div>

          {/* Right column */}
          <div className="flex w-full flex-1 flex-col gap-8">
            <div className="flex flex-col justify-center gap-10">
              <div className="flex flex-col items-start gap-6">
                <div className="max-w-[620px] font-sans text-brand-teal">
                  <h3 className="text-2xl font-bold">Description</h3>
                  <p className="mt-2 text-lg leading-[1.15] tracking-[-0.36px]">
                    Cast Aluminum Outdoor Chaise Lounge As an elegant and
                    classic touch to your outdoor space, this cast Aluminum
                    Chaise Lounge combines the appearance, function and
                    quality all together, offering you with the best
                    experience.
                  </p>
                </div>
                <button
                  type="button"
                  className="flex items-center gap-2 font-sans text-lg font-semibold tracking-[-0.36px] text-black"
                >
                  See More
                  <ChevronDown className="h-[7px] w-[15px]" />
                </button>
              </div>

              <div className="flex flex-col gap-4 sm:h-[183px] sm:flex-row">
                <div className="h-[150px] flex-1 rounded-[10px] bg-brand-gray sm:h-full" />
                <div className="relative flex flex-1 flex-col justify-center gap-5 rounded-[10px] bg-brand-mint p-5">
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="font-sans text-xl text-brand-teal">
                      Living Room Family Set
                    </h4>
                    <p className="whitespace-nowrap font-sans text-xl font-bold tracking-tight text-brand-teal">
                      $229.99
                    </p>
                  </div>
                  <Stars size={20} />
                  <button
                    type="button"
                    className="self-start font-sans text-base tracking-tight text-brand-teal underline"
                  >
                    See Details
                  </button>
                  <button
                    type="button"
                    aria-label="Zoom"
                    className="absolute bottom-4 right-4 flex h-[30px] w-9 items-center justify-center rounded-[10px] bg-brand-teal"
                  >
                    <SearchZoomIcon />
                  </button>
                </div>
              </div>
            </div>

            {/* Featured products */}
            <div className="flex w-full items-start gap-8">
              <div className="flex flex-1 flex-col gap-8">
                <ProductRow title="Living Room Special Set" price="$329.99" />
                <ProductRow title="Living Room Special Set" price="$587.99" />
              </div>

              <div className="hidden flex-col items-center gap-11 self-stretch lg:flex">
                <div className="relative flex-1 w-[5px]">
                  <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-brand-teal" />
                  <div className="absolute left-0 top-0 h-[54px] w-[5px] rounded-full bg-brand-sage" />
                </div>
                <div className="flex flex-col gap-6">
                  <ArrowButton direction="up" />
                  <ArrowButton direction="down" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
