import { Metadata } from "next";

import Container from "@/components/container";
import { Hero } from "@/components/hero";
import { ReadMe } from "@/components/readme";
import { Interests } from "@/components/interests";

export const metadata: Metadata = {
  title: "obviate | index",
  description: "Abandon All Hope, Ye Who Enter Here.",
  openGraph: {
    title: "obviate | index",
    description: "Abandon All Hope, Ye Who Enter Here.",
  },
};

export default function Home() {
  return (
    <>
      <Container>
        <Hero />
        <ReadMe />
        <Interests />
      </Container>
    </>
  );
}
