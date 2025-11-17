import { CTAButton } from "./button/CTAButton";

// Mobile view component
const MobileView = ({ onGo }: WelcomeProps) => (
  <div className="md:hidden min-h-screen w-full flex flex-col items-center justify-center px-4 pb-30">
    <div className="flex flex-col items-center justify-center text-center gap-4">
      <img
        src="/public/images/lucide-Apple-Outlined.svg"
        alt="PantryPal logo"
        className="w-[160px] h-[160px] bg-[#171A1FFF] rounded-[50px] object-cover p-10"
      />
      <h1 className="text-[36px] leading-[45px] font-extrabold text-neutral-900">
        Your Kitchen, Reimagined!
      </h1>
      <p className="text-gray-500 max-w-xs">
        Discover delicious recipes using what you already have.
      </p>
      <CTAButton onClick={onGo}>Let's Go!</CTAButton>
    </div>
  </div>
);

// Desktop view component
const DesktopView = ({ onGo }: WelcomeProps) => (
  <div className="hidden md:flex flex-col items-center justify-center text-center py-20 mt-20">
    <h1 className="text-[48px] leading-[60px] font-extrabold text-neutral-900">
      Select what you have,
      <br />
      we'll suggest what to cook.
    </h1>
    <CTAButton onClick={onGo}>Let's Go!</CTAButton>
  </div>
);

export const Welcome = ({ onGo }: WelcomeProps) => (
  <>
    <MobileView onGo={onGo} />
    <DesktopView onGo={onGo} />
  </>
);
