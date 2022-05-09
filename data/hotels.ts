export type Hotel = {
  id: number;
  name: string;
  description: string;
  city: string;
  country: string;
  rating: number;
  host: string;
  ratingCount: number;
  stars: number;
  price: number;
  images: string[];
  maxGuests: number;
  properties: { name: string; icon: string }[];
  serviceCost: number;
};

export const hotels: Hotel[] = [
  {
    id: 1,
    name: "Mokotow center",
    city: "Warsaw",
    country: "Poland",
    host: "John",
    rating: 5,
    ratingCount: 42,
    stars: 5,
    price: 100,
    images: ["photo1.jpg", "photo2.jpg"],
    maxGuests: 6,
    properties: [
      { name: "WiFi", icon: "CellWifi" },
      { name: "animals", icon: "Pets" },
    ],
    description:
      "very nice hotel, very good breakfast, Paczkomat blisko, very good staff",
    serviceCost: 30,
  },
  {
    id: 2,
    name: "MBB",
    city: "London",
    host: "John",
    country: "United Kingdom",
    rating: 5,
    ratingCount: 44,
    stars: 3,
    price: 80,
    images: ["photo1.jpg", "photo2.jpg"],
    maxGuests: 4,
    properties: [
      { name: "animals", icon: "Pets" },
      { name: "elevator", icon: "Elevator" },
    ],
    description: "Very nice another fake hotel",
    serviceCost: 30,
  },
  {
    id: 3,
    name: "Sunrise Tower",
    city: "Paris",
    country: "France",
    host: "John",
    rating: 5,
    ratingCount: 53,
    stars: 4,
    price: 150,
    images: ["photo1.jpg", "photo2.jpg"],
    maxGuests: 10,
    properties: [
      { name: "WiFi", icon: "CellWifi" },
      { name: "Parking", icon: "LocalParking" },
      { name: "Pool", icon: "Pool" },
      { name: "Kitchen", icon: "Kitchen" },
      { name: "animals", icon: "Pets" },
      { name: "elevator", icon: "Elevator" },
    ],
    description: "Very nice fake hotel",
    serviceCost: 30,
  },
  {
    id: 4,
    name: "Dual Courtyard Hotel & Spa",
    city: "Cracow",
    country: "Poland",
    host: "John",
    rating: 4,
    ratingCount: 63,
    stars: 2,
    price: 50,
    images: ["photo1.jpg", "photo2.jpg"],
    maxGuests: 6,
    properties: [
      { name: "WiFi", icon: "CellWifi" },
      { name: "Parking", icon: "LocalParking" },
      { name: "Pool", icon: "Pool" },
      { name: "AirDryer", icon: "Air" },
    ],
    description:
      "Very nice fake hotel, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Very nice fake hotel, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Very nice fake hotel, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Very nice fake hotel, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    serviceCost: 30,
  },
  {
    id: 5,
    name: "Hotel Plaza",
    city: "Lodz",
    country: "Poland",
    rating: 1,
    host: "wojtek",
    ratingCount: 77,
    stars: 1,
    price: 200,
    images: ["photo1.jpg", "photo2.jpg"],
    maxGuests: 5,
    properties: [
      { name: "WiFi", icon: "CellWifi" },
      { name: "Parking", icon: "LocalParking" },
      { name: "Pool", icon: "Pool" },
      { name: "AirDryer", icon: "Air" },
      { name: "Washing machine", icon: "LocalLaundry" },
      { name: "TV", icon: "TV" },
      { name: "Kitchen", icon: "Kitchen" },
      { name: "animals", icon: "Pets" },
      { name: "elevator", icon: "Elevator" },
    ],
    description: "I hate this hotel, its awesome",
    serviceCost: 30,
  },
  {
    id: 6,
    name: "Amenity Hotel",
    city: "London",
    country: "UK",
    host: "marek",
    rating: 5,
    ratingCount: 95,
    stars: 5,
    price: 100,
    images: ["photo1.jpg", "photo2.jpg"],
    maxGuests: 3,
    properties: [
      { name: "WiFi", icon: "CellWifi" },
      { name: "Parking", icon: "LocalParking" },
      { name: "Pool", icon: "Pool" },
      { name: "AirDryer", icon: "Air" },
      { name: "Washing machine", icon: "LocalLaundry" },
      { name: "TV", icon: "TV" },
      { name: "Kitchen", icon: "Kitchen" },
      { name: "animals", icon: "Pets" },
      { name: "elevator", icon: "Elevator" },
    ],
    description:
      "Very nice fake hotel, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    serviceCost: 30,
  },
  {
    id: 7,
    name: "Light Raven Resort",
    city: "London",
    country: "UK",
    rating: 3,
    host: "Krzysiek",
    ratingCount: 1,
    stars: 5,
    price: 100,
    images: ["photo1.jpg", "photo2.jpg"],
    maxGuests: 2,
    properties: [
      { name: "WiFi", icon: "CellWifi" },

      { name: "Washing machine", icon: "LocalLaundry" },
      { name: "TV", icon: "TV" },
      { name: "Kitchen", icon: "Kitchen" },
      { name: "animals", icon: "Pets" },
    ],
    description:
      "Very nice fake hotel, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    serviceCost: 30,
  },
  {
    id: 8,
    name: "Chata u adama",
    city: "Warsaw",
    country: "Poland",
    host: "adam",
    rating: 2,
    ratingCount: 24141,
    stars: 5,
    price: 90,
    images: ["photo1.jpg", "photo2.jpg"],
    maxGuests: 7,
    properties: [
      { name: "WiFi", icon: "CellWifi" },
      { name: "Parking", icon: "LocalParking" },
      { name: "Pool", icon: "Pool" },
      { name: "AirDryer", icon: "Air" },
      { name: "animals", icon: "Pets" },
      { name: "elevator", icon: "Elevator" },
    ],
    description:
      "Very nice fake hotel, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    serviceCost: 30,
  },
  {
    id: 9,
    name: "Salt Water Resort",
    city: "Cracow",
    country: "Poland",
    rating: 5,
    host: "adam",
    ratingCount: 43,
    stars: 5,
    price: 100,
    images: ["photo1.jpg", "photo2.jpg"],
    maxGuests: 2,
    properties: [
      { name: "Washing machine", icon: "LocalLaundry" },
      { name: "TV", icon: "TV" },
      { name: "Kitchen", icon: "Kitchen" },
      { name: "animals", icon: "Pets" },
      { name: "elevator", icon: "Elevator" },
    ],
    description:
      "Very nice fake hotel, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    serviceCost: 30,
  },
  {
    id: 10,
    name: "Sunrise Raven Resort",
    city: "Cracow",
    country: "Poland",
    host: "Ada",
    rating: 5,
    ratingCount: 5335,
    stars: 5,
    price: 100,
    images: ["photo1.jpg", "photo2.jpg"],
    maxGuests: 24,
    properties: [{ name: "WiFi", icon: "CellWifi" }],
    description:
      "Very nice fake hotel, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Very nice fake hotel, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    serviceCost: 30,
  },
];
