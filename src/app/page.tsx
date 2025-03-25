"use client";

import Carousel, { CarouselImageMetadata } from "@/components/Carousel";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoCartOutline } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdLocalShipping } from "react-icons/md";
import { FaLongArrowAltRight, FaLongArrowAltDown, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import Link from "next/link";

import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";

export default function Home() {
  const imageMetadatas: CarouselImageMetadata[] = [
    { src: "/carousel-1.jpg", alt: "carousel-1", position: "bottom", title: "-正在年輕化的磁磚老靈魂-" },
    { src: "/carousel-2.jpg", alt: "carousel-2", position: "top" },
  ];

  return (
    <main className="flex flex-col items-center w-full">
      <section
        id="banner"
        className="relative flex flex-col lg:flex-row gap-4 w-full min-h-[500px] px-2 md:px-4 2xl:px-60 pb-4 lg:pb-0 pt-4 bg-csecondary-4"
      >
        <div id="banner-title" className="flex flex-col gap-8 justify-center items-start p-4">
          <div className="text-2xl md:text-4xl lg:text-6xl font-bold flex flex-col gap-4">
            <p>精選磁磚</p>
            <p>為您的空間注入永恆質感。</p>
          </div>
          <button className="border-1 py-2 px-14 transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:scale-105">
            查看商品列表
          </button>
        </div>

        <div id="banner-image" className="flex lg:flex-7/12 justify-center items-end">
          <div className="relative w-full lg:w-full xl:w-10/12 h-[400px] lg:h-6/10">
            <Image
              id="banner-image-1"
              src="/raaaaaaaay86.github.io/banner-image.jpg"
              className="rounded-3xl lg:rounded-t-full"
              alt="banner-image"
              fill
              objectFit="cover"
            />
          </div>
        </div>

        <div className="hidden lg:flex lg:flex-7/12 justify-center items-end">
          <div id="banner-image" className="relative w-full lg:w-full xl:w-10/12 h-full lg:h-8/10">
            <Image
              src="/raaaaaaaay86.github.io/banner-image.jpg"
              className="rounded-3xl lg:rounded-t-full"
              alt="banner-image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-8 px-4">
        <div className="lg:hidden">
          <Swiper modules={[Autoplay, Pagination]} autoplay={{ delay: 2000, disableOnInteraction: false }} loop={true}>
            <SwiperSlide>
              <div className="flex flex-col md:flex-row gap-2 justify-center items-center p-4">
                <FaMagnifyingGlass className="hidden md:block text-6xl md:flex-4/12" />
                <div className="md:flex-8/12 flex flex-col gap-2 justify-center items-start">
                  <h2 className="italic decoration-solid underline underline-offset-4 font-semibold">尋磚 FIND</h2>
                  <p className="font-bold">風格獨具，空間美學的起點。</p>
                  <p className="text-sm text-csecondary-1">
                    強調磁磚的獨特風格，以及它在空間美學中扮演的重要角色。用「尋磚」代替「FIND」，除了點出產品特質，更讓客戶有尋寶的感覺，加強客戶對產品的好奇心。
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col md:flex-row gap-2 justify-center items-center p-4">
                <IoCartOutline className="hidden md:block text-6xl md:flex-4/12" />
                <div className="md:flex-8/12 flex flex-col gap-2 justify-center items-start">
                  <h2 className="italic decoration-solid underline underline-offset-4 font-semibold">購磚 BUY</h2>
                  <p className="font-bold">嚴選品質，為您打造質感生活。</p>
                  <p className="text-sm text-csecondary-1">
                    強調磁磚的優良品質，以及它能為生活帶來的質感提升。用「購磚」代替「BUY」，讓客戶將磁磚與「家」連結在一起，加強生活化的意境。
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col md:flex-row gap-2 justify-center items-center p-4">
                <MdLocalShipping className="hidden md:block text-6xl md:flex-4/12" />
                <div className="md:flex-8/12 flex flex-col gap-2 justify-center items-start">
                  <h2 className="italic decoration-solid underline underline-offset-4 font-semibold">集磚 COLLECT</h2>
                  <p className="font-bold">客製服務，磁磚直送您家。</p>
                  <p className="text-sm text-csecondary-1">
                    強調客製化服務和便利的送貨方式，讓客戶感受到貼心與專業。用「集磚」代替「COLLECT」，將「收集、集結」的概念，帶入磁磚花紋多樣性，以及為客戶打造獨一無二的空間感。
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="hidden lg:flex lg:gap-20 xl:gap-30 lg:px-20 xl:px-40">
          <div className="flex flex-col gap-2 justify-center items-center p-1 text-center">
            <h2 className="italic decoration-solid underline underline-offset-4 font-semibold">尋磚 FIND</h2>
            <p className="font-bold">風格獨具，空間美學起點。</p>
            <p className="text-sm text-csecondary-1">
              強調磁磚的獨特風格，以及它在空間美學中扮演的重要角色。用「尋磚」代替「FIND」，除了點出產品特質，更讓客戶有尋寶的感覺，加強客戶對產品的好奇心。
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center p-1 text-center">
            <h2 className="italic decoration-solid underline underline-offset-4 font-semibold">購磚 BUY</h2>
            <p className="font-bold">嚴選品質，打造質感生活。</p>
            <p className="text-sm text-csecondary-1">
              強調磁磚的優良品質，以及它能為生活帶來的質感提升。用「購磚」代替「BUY」，讓客戶將磁磚與「家」連結在一起，加強生活化的意境。
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center p-1 text-center">
            <h2 className="italic decoration-solid underline underline-offset-4 font-semibold">集磚 COLLECT</h2>
            <p className="font-bold">客製服務，磁磚直送您家。</p>
            <p className="text-sm text-csecondary-1">
              強調客製化服務和便利的送貨方式，讓客戶感受到貼心與專業。用「集磚」代替「COLLECT」，將「收集、集結」的概念，帶入磁磚花紋多樣性，以及為客戶打造獨一無二的空間感。
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4 w-full p-4 bg-csecondary-4 2xl:px-40">
        <h2 className="text-2xl font-bold mb-2">磁磚分類</h2>

        <div className="flex flex-col md:flex-row gap-4">
          <article className="md:flex-4/12">
            <div className="flex flex-col gap-4 w-full aspect-square border-b-1 border-csecondary-1 md:border-none pb-4">
              <div className="relative w-full h-full">
                <Image src="/raaaaaaaay86.github.io/carousel-1.jpg" alt="product-1" fill objectFit="cover" className="rounded-3xl" />
              </div>
              <div>
                <h3 className="font-bold">造型小磚類</h3>
                <p className="text-sm text-csecondary-1 min-h-[3em]">長形磚、六角磚、花磚、不規則異形磚、點綴用磚</p>
                <Link href="/" className="text-sm text-csecondary-1 underline underline-offset-4">
                  → 瀏覽商品
                </Link>
              </div>
            </div>
          </article>

          <article className="md:flex-4/12">
            <div className="flex flex-col gap-4 w-full aspect-square border-b-1 border-csecondary-1 md:border-none pb-4">
              <div className="relative w-full h-full">
                <Image src="/raaaaaaaay86.github.io/carousel-2.jpg" alt="product-1" fill objectFit="cover" className="rounded-3xl" />
              </div>
              <div>
                <h3 className="font-bold">居家常用尺寸</h3>
                <p className="text-sm text-csecondary-1 min-h-[3em]">20公分以上 / 120公分以下</p>
                <Link href="/" className="text-sm text-csecondary-1 underline underline-offset-4">
                  → 瀏覽商品
                </Link>
              </div>
            </div>
          </article>

          <article className="md:flex-4/12">
            <div className="flex flex-col gap-4 w-full aspect-square border-csecondary-1 md:border-none pb-4">
              <div className="relative w-full h-full">
                <Image src="/raaaaaaaay86.github.io/carousel-3.jpg" alt="product-1" fill objectFit="cover" className="rounded-3xl" />
              </div>
              <div>
                <h3 className="font-bold">中大板磚區</h3>
                <p className="text-sm text-csecondary-1  min-h-[3em]">120公分以上中大板</p>
                <Link href="/" className="text-sm text-csecondary-1 underline underline-offset-4">
                  → 瀏覽商品
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="flex flex-col gap-4 w-full p-4 2xl:px-40">
        <h2 className="text-2xl font-bold mb-2">服務流程</h2>

        <div className="hidden md:flex flex-row justify-center gap-4 items-center">
          <div className="flex flex-col justify-center items-center gap-4 rounded-full border-1 w-[150px] h-[150px] bg-csecondary-4 border-csecondary-4 font-bold">
            <p>Step 1</p>
            <p>記下磁磚名稱</p>
          </div>
          <FaLongArrowAltRight fontSize={50} className="text-csecondary-1" />
          <div className="flex flex-col justify-center items-center gap-4 rounded-full border-1 w-[150px] h-[150px] bg-csecondary-4 border-csecondary-4 font-bold">
            <p>Step 2</p>
            <p>留下聯絡表單</p>
          </div>
          <FaLongArrowAltRight fontSize={50} className="text-csecondary-1" />
          <div className="flex flex-col justify-center items-center gap-4 rounded-full border-1 w-[150px] h-[150px] bg-csecondary-4 border-csecondary-4 font-bold">
            <p>Step 3</p>
            <p>等待專人回覆</p>
          </div>
        </div>

        <div className="flex flex-col md:hidden items-center gap-4 w-full p-4">
          <p className="text-xl font-bold bg-csecondary-4 text-csecondary-1 p-4 rounded-3xl">Step 1. 記下磁磚名稱</p>
          <FaLongArrowAltDown fontSize={25} />
          <p className="text-xl font-bold bg-csecondary-4 text-csecondary-1 p-4 rounded-3xl">Step 2. 留下聯絡表單</p>
          <FaLongArrowAltDown fontSize={25} />
          <p className="text-xl font-bold bg-csecondary-4 text-csecondary-1 p-4 rounded-3xl">Step 3. 等待專人回覆</p>
        </div>

        <div className="md:px-30 md:mt-10">
          <form className="flex flex-col gap-4 p-4 bg-csecondary-4 rounded-3xl">
            <div className="flex flex-col md:flex-row gap-4">
              <input className="flex-1/2 rounded-xl p-2 border-1 border-csecondary-3" type="text" placeholder="姓名" />
              <input
                className="flex-1/2  rounded-xl p-2 border-1 border-csecondary-3"
                type="text"
                placeholder="居住區域"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                className="flex-1/2  rounded-xl p-2 border-1 border-csecondary-3"
                type="number"
                placeholder="聯絡電話"
              />
              <input
                className="flex-1/2  rounded-xl p-2 border-1 border-csecondary-3"
                type="text"
                placeholder="磁磚所需區域"
              />
            </div>
            <textarea
              name="remark"
              id="remark-textarea"
              placeholder="留言給我們"
              className="min-h-[14rem] flex-1 rounded-xl p-2 border-1 border-csecondary-3"
            />
            <button className="bg-csecondary-1 text-white p-2 rounded-xl">送出</button>
          </form>
        </div>
      </section>

      <footer className="flex flex-col gap-4 w-full p-8 2xl:px-40 bg-csecondary-4">
        <div className="flex flex-col gap-4 text-csecondary-1">
          <div>
            <p>偉特磁磚有限公司</p>
            <p>統一編號: 29167582</p>
          </div>
          <div>
            <p>電話: (02) 2263-3537</p>
            <p>傳真: (02) 2263-3527</p>
            <p>地址: 新北市土城區中央路一段33號</p>
          </div>

          <div className="flex flex-row gap-4">
            <FaFacebookSquare fontSize={25}/>
            <FaInstagramSquare fontSize={25}/>
            <FaMapLocationDot fontSize={25}/>
          </div>

        </div>
        <div>

        </div>
      </footer>
    </main>
  );
}
