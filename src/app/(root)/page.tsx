import React from "react";
import { Card } from "@/src/components";
import {getCurrentUser} from "@/src/lib/auth/actions";

const products = [
  {
    id: 1,
    title: "Air Max Pulse",
    subtitle: "Men's Shoes",
    meta: "6 Colour",
    price: 149.99,
    imageSrc: "/shoes/shoe-1.jpg",
    badge: { label: "New", tone: "orange" as const },
  },
  {
    id: 2,
    title: "Air Zoom Pegasus",
    subtitle: "Men's Shoes",
    meta: "4 Colour",
    price: 129.99,
    imageSrc: "/shoes/shoe-2.webp",
    badge: { label: "Hot", tone: "red" as const },
  },
  {
    id: 3,
    title: "InfinityRN 4",
    subtitle: "Men's Shoes",
    meta: "6 Colour",
    price: 159.99,
    imageSrc: "/shoes/shoe-3.webp",
    badge: { label: "Trending", tone: "green" as const },
  },
  {
    id: 4,
    title: "Metcon 9",
    subtitle: "Men's Shoes",
    meta: "3 Colour",
    price: 139.99,
    imageSrc: "/shoes/shoe-4.webp",
  },
  {
    id: 5,
    title: "Metcon 9",
    subtitle: "Men's Shoes",
    meta: "3 Colour",
    price: 139.99,
    imageSrc: "/shoes/shoe-5.avif",
  },
  {
    id: 6,
    title: "Metcon 9",
    subtitle: "Men's Shoes",
    meta: "3 Colour",
    price: 139.99,
    imageSrc: "/shoes/shoe-6.avif",
  },
  {
    id: 7,
    title: "Metcon 9",
    subtitle: "Men's Shoes",
    meta: "3 Colour",
    price: 139.99,
    imageSrc: "/shoes/shoe-7.avif",
  },
  {
    id: 8,
    title: "Metcon 9",
    subtitle: "Men's Shoes",
    meta: "3 Colour",
    price: 139.99,
    imageSrc: "/shoes/shoe-8.avif",
  },
  {
    id: 9,
    title: "Metcon 9",
    subtitle: "Men's Shoes",
    meta: "3 Colour",
    price: 139.99,
    imageSrc: "/shoes/shoe-9.avif",
  },
  {
    id: 10,
    title: "Metcon 9",
    subtitle: "Men's Shoes",
    meta: "3 Colour",
    price: 139.99,
    imageSrc: "/shoes/shoe-10.avif",
  },
  {
    id: 11,
    title: "Metcon 9",
    subtitle: "Men's Shoes",
    meta: "3 Colour",
    price: 139.99,
    imageSrc: "/shoes/shoe-11.avif",
  },
  {
    id: 12,
    title: "Metcon 9",
    subtitle: "Men's Shoes",
    meta: "3 Colour",
    price: 139.99,
    imageSrc: "/shoes/shoe-12.avif",
  },
  {
    id: 13,
    title: "Metcon 9",
    subtitle: "Men's Shoes",
    meta: "3 Colour",
    price: 139.99,
    imageSrc: "/shoes/shoe-13.avif",
  },
  {
    id: 14,
    title: "Metcon 9",
    subtitle: "Men's Shoes",
    meta: "3 Colour",
    price: 139.99,
    imageSrc: "/shoes/shoe-14.avif",
  },
  {
    id: 15,
    title: "Metcon 9",
    subtitle: "Men's Shoes",
    meta: "3 Colour",
    price: 139.99,
    imageSrc: "/shoes/shoe-15.avif",
  },

];

const Home = async () => {
  const user = await getCurrentUser();

  console.log('USER:', user);

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <section aria-labelledby="latest" className="pb-12">
        <h2 id="latest" className="mb-6 text-heading-3 text-dark-900">
          Latest shoes
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Card
              key={p.id}
              title={p.title}
              subtitle={p.subtitle}
              meta={p.meta}
              imageSrc={p.imageSrc}
              price={p.price}
              badge={p.badge}
              href={`/products/${p.id}`}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;