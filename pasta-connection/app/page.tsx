import Image from "next/image";
import NavbarComponent from "./components/NavbarComponent";

export default function Home() {
  return (
    <main className="flex flex-row justify-center">
      <div className="flex flex-col justify-center items-center">
        <img src="/pasta_connection_name.png" width="25%" />
        <p>Discover Old World Style Argentinian Italian food</p>
        <p>Fresh made pasta</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img src="/pasta_connection_name.png" width="25%" />
        <p>MONDAY - THURSDAY (7:00AM - 9:00PM)</p>
        <p>FRIDAY - SUNDAY (6:00AM - 10:00PM)</p>
        <a
          href="https://www.google.com/maps/place/Pasta+Connection/@33.6461627,-117.9218527,17z/data=!3m1!4b1!4m6!3m5!1s0x80dcdf8f4eead5bf:0xba59ffcde276dd05!8m2!3d33.6461583!4d-117.9192778!16s%2Fg%2F1tk_pl2n?entry=ttu"
          target="_blank"
        >
          <p>1969 Harbor Blvd Costa Mesa, CA 92627</p>
        </a>
      </div>

      {/* <img src="/main_page_image.jpg"/> */}
    </main>
  );
}
