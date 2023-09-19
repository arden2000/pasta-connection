"use client";

const FoodServiceButton = ({ url, image }: { url: string; image: string }) => {
  return (
    <a href={url} target="_blank">
      <img src={image} className="w-52" />
    </a>
  );
};

export default function OrderPage() {
  return (
    <main className="flex flex-row justify-center">
      <div className="flex flex-col justify-center items-center">
        <FoodServiceButton
          url="https://www.doordash.com/store/pasta-connection-costa-mesa-6014/"
          image="/DoorDash-logo.png"
        />
        <FoodServiceButton
          url="https://www.ubereats.com/orange-county/food-delivery/pasta-connection/63AzrGnaS-O5QoGxnOVXrA"
          image="/Uber-Eats-logo.png"
        />
                <FoodServiceButton
          url="https://www.grubhub.com/restaurant/pasta-connection-1969-harbor-blvd-costa-mesa/810194"
          image="/Grubhub-logo.png"
        />
                <FoodServiceButton
          url="https://postmates.com/merchant/pasta-connection-costa-mesa-1"
          image="/Postmates-logo.png"
        />
                <FoodServiceButton
          url="https://slicelife.com/restaurants/ca/costa-mesa/92627/osteria-mozza/menu?utm_campaign=order_now_button&utm_medium=referral&utm_source=pastaconnectionmenu.com"
          image="/Slice-logo.png"
        />
     
      </div>
    </main>
  );
}
