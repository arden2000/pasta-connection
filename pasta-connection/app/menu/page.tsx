import Image from "next/image";

export default function MenuPage() {
  return (
    <main className="flex flex-row justify-center">
      <div className="flex flex-col justify-center items-center">
        <a href="Pasta_Connection_Breakfast_Menu.pdf" target="_blank">
          <p>Breakfast Menu</p>
        </a>
        <a href="Pasta_Connection_Dinner_Menu.pdf" target="_blank">
          <p>Dinner Menu</p>
        </a>
        <a href="Pasta_Connection_Wine_Dessert_Menu.pdf" target="_blank">
          <p>Wine/Dessert Menu</p>
        </a>
        <a href="Pasta_Connection_Catering_Menu.pdf" target="_blank">
          <p>Catering Menu</p>
        </a>
      </div>
    </main>
  );
}
