export type Hotel = {
  id: number;
  name: string;
  description: string;
  city: string;
  country: string;
  rating: number;
  stars: number;
  price: number;
  image: string;
  amenities: string[];
};

export const hotels: Hotel[] = [
  {
    id: 1,
    name: "Hotel A",
    city: "Warsaw",
    country: "Poland",
    rating: 5,
    stars: 5,
    price: 100,
    image: "https://picsum.photos/200/300",
    amenities: ["Free wifi", "Free parking", "Pets allowed"],
    description:
      "very nice hotel, very good breakfast, Paczkomat blisko, very good staff",
  },
  {
    id: 2,
    name: "Hotel B",
    city: "London",
    country: "United Kingdom",
    rating: 5,
    stars: 3,
    price: 80,
    image: "https://picsum.photos/200/300",
    amenities: ["Free wifi", "Free parking", "Pets allowed"],
    description: "Very nice another fake hotel",
  },
  {
    id: 3,
    name: "Hotel C",
    city: "Paris",
    country: "France",
    rating: 5,
    stars: 4,
    price: 150,
    image: "https://picsum.photos/200/300",
    amenities: ["Free wifi", "Free parking", "Pets allowed"],
    description: "Very nice fake hotel",
  },
  {
    id: 4,
    name: "Hotel D",
    city: "Cracow",
    country: "Poland",
    rating: 4,
    stars: 2,
    price: 50,
    image: "https://picsum.photos/200/300",
    amenities: ["Free wifi", "Free parking", "Pets allowed"],
    description: "Very nice fake hotel",
  },
  {
    id: 5,
    name: "Hotel E",
    city: "Lodz",
    country: "Poland",
    rating: 1,
    stars: 1,
    price: 200,
    image: "https://picsum.photos/200/300",
    amenities: ["Free wifi", "Free parking", "Pets allowed"],
    description: "I hate this hotel, its awesome",
  },
  {
    id: 6,
    name: "Hotel F",
    city: "London",
    country: "UK",
    rating: 5,
    stars: 5,
    price: 100,
    image: "https://picsum.photos/200/300",
    amenities: ["Free wifi", "Free parking", "Pets allowed"],
    description: "Very nice fake hotel",
  },
  {
    id: 7,
    name: "Hotel G",
    city: "London",
    country: "UK",
    rating: 5,
    stars: 5,
    price: 100,
    image: "https://picsum.photos/200/300",
    amenities: ["Free wifi", "Free parking", "Pets allowed"],
    description: "Very nice fake hotel",
  },
  {
    id: 8,
    name: "Chata u adama",
    city: "Warsaw",
    country: "Poland",
    rating: 5,
    stars: 5,
    price: 90,
    image: "https://picsum.photos/200/300",
    amenities: ["Free wifi", "Free parking", "Pets allowed"],
    description: "Very nice fake hotel",
  },
  {
    id: 9,
    name: "Hotel H",
    city: "Cracow",
    country: "Poland",
    rating: 5,
    stars: 5,
    price: 100,
    image: "https://picsum.photos/200/300",
    amenities: ["Free wifi", "Free parking", "Pets allowed"],
    description: "Very nice fake hotel",
  },
  {
    id: 10,
    name: "Hotel I",
    city: "Cracow",
    country: "Poland",
    rating: 5,
    stars: 5,
    price: 100,
    image: "https://picsum.photos/200/300",
    amenities: ["Free wifi", "Free parking", "Pets allowed"],
    description: "Very nice fake hotel",
  },
];
