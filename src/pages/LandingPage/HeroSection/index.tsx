import { Button } from "@/components";
import heroCoffee from "@/assets/coffee-hero.png";

const Hero = () => {
  return (
    <div className="bg-hero-bg bg-cover bg-no-repeat">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-20">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="text-base text-primary font-medium mt-10 italic">
                  It&apos;s Coffee time ....
                </h1>
                <h2 className="text-4xl font-medium tracking-tight text-accent-dark sm:text-6xl">
                  Enjoy your Everyday{" "}
                  <span className="text-primary font-serif italic">
                    Coffee.
                  </span>
                </h2>
                <p className="mt-6 text-lg leading-8 text-accent-dark/90">
                  Boost your productivity and get things done faster with a
                  glass of coffee.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Button variant={"default"} className="text-primary-text">
                    Place Order
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-hero-bg bg-cover bg-no-repeat shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36"
              aria-hidden="true"
            />
            <div className="shadow-lg md:rounded-3xl">
              <div className="bg-primary [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                <div
                  className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                  aria-hidden="true"
                />
                <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                  <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                    <div className="overflow-hidden rounded-tl-xl bg-primary-text ">
                      <div className="w-full">
                        <img
                          src={heroCoffee}
                          alt="Coffee Image"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div>
  );
};

export default Hero;
