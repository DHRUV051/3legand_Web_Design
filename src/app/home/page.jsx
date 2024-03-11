"use client";


import Text from "../../components/Home/Text";
import CarouselComponent from "../../components/Home/Carousel";
import Category from "../../components/Home/Category";
import ProductItem from "../../components/Home/ProductItem";
import Feactures from "../../components/Home/Feactures";
import ImageCard from "../../components/Home/ImageCard";
import { useInView } from 'react-intersection-observer';
import Articles from "../../components/Home/Articles";
import Last from "../../components/Home/Last";

export default function Home() {

  const { ref, inView } = useInView({
    triggerOnce: true
  });

  return (
    <main>
      <CarouselComponent />

      <Text />

      <Category />

      <ProductItem ref={ref} inView={inView} />

      <Feactures />

      <ImageCard />

      <Articles />

      <Last />

    </main>
  );
}

