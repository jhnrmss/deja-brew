import { FaEnvira } from "react-icons/fa6";
import { GiCoffeeBeans } from "react-icons/gi";
import { CiCoffeeCup } from "react-icons/ci";
const features = [
  {
    name: "Friendly Environment",
    description:
      "Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.",
    href: "#",
    icon: FaEnvira,
  },
  {
    name: "Special Drinks",
    description:
      "Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.",
    href: "#",
    icon: CiCoffeeCup,
  },
  {
    name: "Variety",
    description:
      "Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.",
    href: "#",
    icon: GiCoffeeBeans,
  },
];
const Service = () => {
  return (
    <section id="service">
      <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-5xl  font-bold leading-7 text-accent-dark uppercase">
              You'll <span className="text-primary">Love</span> It
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="flex flex-col bg-primary-text rounded-md shadow-md px-8 py-4"
                >
                  <dt className="flex flex-col items-center gap-x-3 text-lg font-bold leading-7 text-accent-dark">
                    <feature.icon
                      className="h-14 w-14 pb-4 flex-none text-primary"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-accent-dark">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
