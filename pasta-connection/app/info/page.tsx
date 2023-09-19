import Image from "next/image";

export default function InfoPage() {
  return (
    <main className="flex flex-row justify-center">
      <div className="flex flex-col justify-center items-center">
        <p>MONDAY - THURSDAY (7:00AM - 9:00PM)</p>
        <p>FRIDAY - SUNDAY (6:00AM - 10:00PM)</p>
        <a
          href="https://www.google.com/maps/place/Pasta+Connection/@33.6461627,-117.9218527,17z/data=!3m1!4b1!4m6!3m5!1s0x80dcdf8f4eead5bf:0xba59ffcde276dd05!8m2!3d33.6461583!4d-117.9192778!16s%2Fg%2F1tk_pl2n?entry=ttu"
          target="_blank"
        >
          <p>1969 Harbor Blvd Costa Mesa, CA 92627</p>
        </a>
        <a href={`tel:${9496463484}`} target="_blank">
          <p>949-646-3484</p>
        </a>
      </div>
    </main>
  );
}
