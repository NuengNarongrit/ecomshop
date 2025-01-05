import React, { useState, useEffect, useRef } from "react";

export default function Testimonials() {
  const [active, setActive]                         = useState(0);
  const [autorotate, setAutorotate]                 = useState(true);
  const [autorotateInterval, setAutorotateInterval] = useState(null);
  const testimonialsRef                             = useRef(null);

  const testimonials = [
    {
      img: "./images/user.png",
      quote:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit dolorem odit quia modi dolores incidunt recusandae inventore. Dignissimos, quo sequi.",
      name: "Name1 ...",
      role: "Role1 ...",
    },
    {
      img: "./images/user.png",
      quote:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit nemo fugit ipsa ea at architecto labore deleniti temporibus aut doloremque.",
      name: "Name2 ...",
      role: "Role2 ...",
    },
    {
      img: "./images/user.png",
      quote:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, distinctio saepe. Tenetur nesciunt molestias adipisci dolorem nam, aliquid harum blanditiis.",
      name: "Name3 ...",
      role: "Role3 ...",
    },
  ];

  useEffect(() => {
    if (autorotate) {
      const interval = setInterval(() => {
        setActive((prev) => (prev + 1 === testimonials.length ? 0 : prev + 1));
      }, 7000);
      setAutorotateInterval(interval);

      return () => clearInterval(interval);
    }
  }, [autorotate]);

  useEffect(() => {
    if (testimonialsRef.current) {
      testimonialsRef.current.style.height = `${testimonialsRef.current.children[active].offsetHeight}px`;
    }
  }, [active]);

  const stopAutorotate = () => {
    if (autorotateInterval) {
      clearInterval(autorotateInterval);
      setAutorotateInterval(null);
    }
  };

  return (
    <div className="relative font-inter antialiased">
      <main className="relative min-h-screen md:min-h-[75vh] flex flex-col justify-center bg-slate-50 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="flex justify-center">
            <div className="w-full max-w-3xl mx-auto text-center">
              {/* Testimonial image */}
              <div className="relative h-32">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-b before:from-rose-500/25 before:via-rose-500/5 before:via-25% before:to-indigo-500/0 before:to-75% before:rounded-full before:-z-10">
                  <div className="h-32 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_20%,theme(colors.white))]">
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className={`absolute inset-0 -z-10 ${
                          active === index
                            ? "opacity-100 rotate-0"
                            : "opacity-0 rotate-[60deg]"
                        }`}
                        style={{
                          transition:
                            "opacity 0.7s cubic-bezier(0.68,-0.3,0.32,1), transform 0.7s cubic-bezier(0.68,-0.3,0.32,1)",
                        }}
                      >
                        {active === index && (
                          <img className="relative top-11 left-1/2 -translate-x-1/2 rounded-full" src={testimonial.img}
                            width="80"
                            height="80"
                            alt={testimonial.name}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Text */}
              <div className="mb-9">
                <div className="relative flex flex-col transition-all duration-150 delay-300 ease-in-out"
                  ref={testimonialsRef}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className={`text-2xl font-bold text-slate-600 quote ${
                        active === index
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-4"
                      }`}
                      style={{
                        transition:
                          "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
                        transitionDelay: "200ms",
                      }}
                    >
                      {active === index && testimonial.quote}
                    </div>
                  ))}
                </div>
              </div>
              {/* Buttons */}
              <div className="flex flex-wrap justify-center -m-1.5">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={index}
                    className={`inline-flex justify-center whitespace-nowrap rounded-full px-3 py-1.5 m-1.5 text-xs shadow-sm focus-visible:outline-none focus-visible:ring focus-visible:ring-rose-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ${
                      active === index
                        ? "bg-rose-500 text-white shadow-indigo-950/10"
                        : "bg-white hover:bg-indigo-100 text-slate-900"
                    }`}
                    onClick={() => {
                      setActive(index);
                      stopAutorotate();
                    }}
                  >
                    <span>{testimonial.name}</span>{" "}
                    <span
                      className={
                        active === index ? "text-indigo-200" : "text-slate-300"
                      }
                    >
                      -
                    </span>{" "}
                    <span>{testimonial.role}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
