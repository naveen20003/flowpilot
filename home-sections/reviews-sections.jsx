"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const reviews = [
  {
    id: 1,
    name: "Arjun Mehta",
    role: "Founder, Flowstack",
    review:
      "This platform completely changed how our team manages daily operations. We spend less time switching between tools and more time actually getting work done.",
    rating: "★★★★★",
    image: "/profile.jpg",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Product Manager, Nova Labs",
    review:
      "The interface is incredibly intuitive. Our team was able to get started within a day, and the automation features have saved us hours every week.",
    rating: "★★★★★",
    image: "/profile.jpg",
  },
  {
    id: 3,
    name: "Rahul Kapoor",
    role: "Co-Founder, Launchly",
    review:
      "We were looking for something simple enough for the entire team but powerful enough to scale with us. This has been a great fit for both.",
    rating: "★★★★★",
    image: "/profile.jpg",
  },
  {
    id: 4,
    name: "Neha Verma",
    role: "Operations Lead, BrightDesk",
    review:
      "The biggest difference has been visibility. Everyone knows what needs to be done, where things stand, and what needs attention without endless meetings.",
    rating: "★★★★★",
    image: "/profile.jpg",
  },
  {
    id: 5,
    name: "Karan Malhotra",
    role: "Founder, PixelForge",
    review:
      "Setup was surprisingly fast, and the product feels thoughtfully designed. It has become an essential part of our workflow.",
    rating: "★★★★★",
    image: "/profile.jpg",
  },
  {
    id: 6,
    name: "Simran Arora",
    role: "Growth Manager, ScaleUp",
    review:
      "We replaced several disconnected processes with one streamlined workflow. It's simple, fast, and our team actually enjoys using it.",
    rating: "★★★★★",
    image: "/profile.jpg",
  },
];

function ReviewsSection() {
  return (
    <section className="w-full overflow-hidden py-16 text-black">

      {/* Heading */}
      <div className="mb-14 px-6 text-center">
        <h1 className="text-2xl md:text-3xl font-bold">
          Loved by teams that move fast
        </h1>

        <p className="pt-4 text-[15px]">
          See how teams are using our platform to simplify their work.
        </p>
      </div>

      {/* Reviews Slideshow */}
      <Swiper
        spaceBetween={24}
        slidesPerView={1.2}
        centeredSlides={true}
        loop={true}
        grabCursor={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="w-full"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>

            <div className="flex min-h-[420px] flex-col items-center justify-between px-6 py-8 text-center">

              {/* Profile */}
              <div className="relative h-24 w-24 overflow-hidden rounded-full">
                <Image
                  src={review.image}
                  alt={review.name}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>

              {/* Review */}
              <div className="mt-8">
                <p className="text-lg font-light leading-relaxed">
                  "{review.review}"
                </p>
              </div>

              {/* Rating */}
              <div className="mt-8">
                <p className="tracking-[5px] text-sm">
                  {review.rating}
                </p>
              </div>

              {/* User */}
              <div className="mt-5">
                <h2 className="font-serif text-xl font-bold">
                  {review.name}
                </h2>

                <p className="mt-1 text-sm font-light text-white/60">
                  {review.role}
                </p>
              </div>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}

export default ReviewsSection;