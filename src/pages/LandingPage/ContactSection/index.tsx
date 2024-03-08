import { FaBuilding, FaEnvelope, FaPhone } from "react-icons/fa6";
import Form from "./Form";
import Background from "./Background";

const Contact = () => {
  return (
    <section id="contact">
      <div className="relative isolate bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <Background />
              <h2 className="text-3xl font-bold tracking-tight text-accent-dark uppercase">
                Can&apos;t wait to see{" "}
                <span className="text-primary">you!</span>
              </h2>
              <p className="mt-6 text-lg leading-8 text-accent-dark">
                Proin volutpat consequat porttitor cras nullam gravida at. Orci
                molestie a eu arcu. Sed ut tincidunt integer elementum id sem.
                Arcu sed malesuada et magna.
              </p>
              <dl className="mt-10 space-y-4 text-base leading-7 text-accent-dark">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <FaBuilding
                      className="h-7 w-6 text-primary"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    almond street lns subdivision
                    <br />
                    2009 Angeles City, Philippines
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <FaPhone
                      className="h-7 w-6 text-primary"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="hover:text-primary"
                      href="tel:+1 (555) 234-5678"
                    >
                      +63 992 620 3261
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <FaEnvelope
                      className="h-7 w-6 text-primary"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="hover:text-primary"
                      href="mailto:rjerese0@gmail.com"
                    >
                      rjerese0@gmail.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
