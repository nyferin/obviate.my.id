import Container from "@/components/container";
import { Metadata } from "next";

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
        <div>
          <p>Hi</p>
        </div>
      </Container>
    </>
  );
}
