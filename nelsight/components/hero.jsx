import { useRouter } from "next/router";

const Hero = () => {
    const router = useRouter()
  return (
    <div
      className="relative flex pt-16 top-5 pb-32 content-center items-center justify-center"
      style={{
        minHeight: "75vh",
      }}
    >
      <div
        className="absolute top-10 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: "url('assets/images/hero.jpg')",
        }}
      >
        <span
          id="blackOverlay"
          className="w-full h-full absolute opacity-40 bg-secondary"
        ></span>
      </div>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto my-auto py-10 text-center">
            <div className="pr-12">
              <h1 className="text-tetiary font-bold text-5xl">
                Your Data Story Starts With Us.
              </h1>
              <p className="mt-4 text-3xl font-bolder text-tetiary">
                This is our hero section.
              </p>
              <button
                className="bg-primary text-secondary active:bg-tetiary font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                onClick={() => router.push('/service')}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
