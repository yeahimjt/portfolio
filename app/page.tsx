import Header from "@/components/header";
import Nav from "@/components/nav";
import Projects from "@/components/projects";
import Story from "@/components/story";

export default function Home() {
  return (
    <main className="">
      <Nav />
      <Header />
      <Story />
      <Projects />
    </main>
  );
}
