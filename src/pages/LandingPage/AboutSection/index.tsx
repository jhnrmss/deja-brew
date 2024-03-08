import Background from "./Background";
import ContentImages from "./ContentImages";

const About = () => {
  return (
    <div className="relative isolate -z-10">
      <Background />
      <div className="overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
              <h1 className="flex text-4xl font-bold tracking-tight text-accent-dark sm:text-6xl">
                <span className="text-primary mx-2">About </span> Us!
              </h1>
              <p className="relative mt-6 text-lg leading-8 text-accent-dark sm:max-w-md lg:max-w-none">
                Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis
                cupidatat mollit aute velit. Et labore commodo nulla aliqua
                proident mollit ullamco exercitation tempor. Sint aliqua anim
                nulla sunt mollit id pariatur in voluptate cillum. Eu voluptate
                tempor esse minim amet fugiat veniam occaecat aliqua.
              </p>
            </div>
            <ContentImages />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
