import Link from "next/link";

export default function NavbarComponent() {
  return (
    <div className=" w-full m-0 bg-black bg-opacity-80 p-0">
      <header className="flex flex-row items-center justify-evenly py-6">
        <div className="ml-20">
          <Link href="/">
            <img src="/pasta_connection_logo.png" width="25%" />
            {/* <p className="text-2xl font-semibold">Pasta Connection</p> */}
          </Link>
        </div>
        <div className="flex flex-row justify-evenly w-1/2">
          <Link href="/">
            <p>HOME</p>
          </Link>
          <Link href="/menu">
            <p>MENU</p>
          </Link>
          <Link href="/info">
            <p>LOCATION & HOURS</p>
          </Link>
          <Link href="/order">
            <p>ORDER</p>
          </Link>
          <Link href="/">
            <p>ABOUT</p>
          </Link>
        </div>
      </header>
    </div>
  );
}
