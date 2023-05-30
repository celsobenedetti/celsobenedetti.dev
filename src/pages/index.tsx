import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Link } from "react-scroll";

import { Header } from "~/components/header";
import { MotionDiv } from "~/components";
import setAnchor from "~/setAnchor";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Celso SWE 🐋</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <section id="me">
          <div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center">
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
                scale: [1, 2, 2, 3, 1],
                borderRadius: ["20%", "20%", "50%", "80%", "20%"],
              }}
              transition={{
                duration: 2.5,
              }}
              className="relative flex items-center justify-center"
            >
              <div className="absolute mt-52 h-[200px] w-[200px] animate-ping rounded-full border border-surface" />
              <div className="absolute mt-52 h-[300px] w-[300px] rounded-full border border-surface" />
              <div className="absolute mt-52 h-[500px] w-[500px] rounded-full border border-surface" />
              <div className="absolute mt-52 h-[650px] w-[650px] animate-pulse rounded-full border border-secondary" />
              <div className="absolute mt-52 h-[800px] w-[800px] rounded-full border border-surface " />
            </MotionDiv>

            <Image
              src="https://avatars.githubusercontent.com/u/56320155?v=4"
              priority
              height={144}
              width={144}
              alt="Profile picture"
              className="relative mx-auto h-36 w-36 rounded-full"
            />
            <div className="z-20">
              <h2 className="pb-2 text-sm uppercase tracking-[15px] text-subtext">
                Software Engineer
              </h2>
              <h1 className="px-10 text-3xl font-semibold text-text md:text-4xl lg:text-6xl">
                Celso Benedetti
              </h1>

              <div className="pt-5">
                {["about", "experience", "blog"].map((section) => (
                  <Link
                    to={section}
                    smooth={true}
                    duration={500}
                    offset={-100} // Adjust the offset as per your design
                    key={section}
                    onClick={() => {
                      setAnchor(section);
                    }}
                  >
                    <button className="text-sub-text rounded-full border border-base px-6 py-2 text-sm uppercase tracking-widest transition-all hover:border-secondary/40 hover:text-secondary/40">
                      {section}
                    </button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative mx-auto flex min-h-screen max-w-full flex-col items-center gap-16 overflow-hidden px-4 py-24 text-left md:px-10"
          >
            <h2 className="font-cal text-2xl uppercase tracking-[15px] text-subtext md:tracking-[20px]">
              About
            </h2>

            <div className="flex flex-col items-center md:flex-row">
              <MotionDiv
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="md:md-0 relative -mb-20 h-56 w-56 flex-shrink-0 md:h-72 md:w-72 xl:h-[500px] xl:w-[500px]"
              >
                <Image
                  src="/images/caju.png"
                  fill
                  alt="Me and Caju"
                  className="rounded-full object-cover md:rounded-lg"
                />
              </MotionDiv>

              <div className="space-y-4 px-0 py-24 md:px-10 md:py-0 md:pr-20">
                <p>
                  I&apos;m a software engineer from Brazil. I&apos;m passionate
                  about learning and driven to becoming ever more knowledgeable
                  in my craft.
                </p>

                <p>
                  I love building things with code, and my main interests lie in
                  cloud computing, distributed systems, event-driven
                  architecture, container orchestration, IaC, and web
                  development.
                </p>
                <p>
                  Wanna chat?{" "}
                  <a
                    href="#final-words"
                    className="underline decoration-secondary decoration-2 underline-offset-4"
                  >
                    Book my Cal.com!
                  </a>
                </p>
              </div>
            </div>
          </MotionDiv>
        </section>
      </main>
    </>
  );
};

export default Home;
