import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <section id="home" style={{ height: '100vh' }}>
        <h1>Home</h1>
        <p>Welcome to my portfolio</p>
      </section>

      <section id="about" style={{ height: '100vh' }}>
        <h1>About Me</h1>
        <p>I am a frontend developer...</p>
      </section>

      <section id="projects" style={{ height: '100vh' }}>
        <h1>My Projects</h1>
        <p>Here are some cool things I've built.</p>
      </section>
    </>
  );
}
