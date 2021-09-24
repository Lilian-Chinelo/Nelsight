import { useRouter } from "next/router";

const Navbar = () => {
  const logo = "assets/images/nelsight_logo.jpg";
  const router = useRouter()
  return (
    <nav className="absolute font-sans flex z-50 flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-primary shadow sm:items-baseline w-full">
      <div className=" flex flex-row">
        <button 
        onClick={() => router.push('/')}
        className="h-12 w-16 self-center mr-2">
          <img className="h-12 w-14 self-center rounded-lg" src={logo} />
        </button>
        <div>
          <button
            onClick={() => router.push('/')}
            className="text-2xl no-underline text-secondary hover:text-blue-dark font-sans font-bold"
          >
            NelSight
          </button>
          <br />
          <span className="text-xs text-secondary">Analytics Technologies</span>
        </div>
      </div>

      <div className="sm:mb-0 self-center">
        <div className="h-10 display: table-cell, vertical-align: middle;">
          <button
            className="bg-secondary text-primary active:bg-tetiary font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            onClick={() => router.push('/service')}

          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
