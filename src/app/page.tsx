import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

  
  return (
    <>
      <section id="portfolio" className={styles.secDesign}>
        <div className={styles.portfolio}>
          <div className={styles.portfolioTitle}>
            <div className={styles.animateContainer}>
                <h1 className={styles.animateWeb}>W</h1>
                <h1 className={styles.animateWeb}>E</h1>
                <h1 className={styles.animateWeb}>B</h1>
            </div>
            <div className={styles.animateContainer}>
                <h1 className={styles.animateWeb}>D</h1>
                <h1 className={styles.animateWeb}>E</h1>
                <h1 className={styles.animateWeb}>V</h1>
                <h1 className={styles.animateWeb}>E</h1>
                <h1 className={styles.animateWeb}>L</h1>
                <h1 className={styles.animateWeb}>O</h1>
                <h1 className={styles.animateWeb}>P</h1>
                <h1 className={styles.animateWeb}>E</h1>
                <h1 className={styles.animateWeb}>R</h1>
            </div>
          </div>
          <div className={styles.portfolioContent}>
            <div>
              <p style={{textIndent: '5em' }}>
                I'M A WEB DEVELOPER & DESIGNER FROM THE PHILIPPINES.
                CRAFTING CLEAN, USER-FRIENDLY DIGITAL EXPERIENCES.
                I LOVE NATURE, MUSIC, AND A GOOD BURGER.
              </p>
            </div>
            <div>
              <div>
                <button className={styles.portFolioButton}>
                  <span className={styles.scrollWrapper}>
                    <span className={styles.scrollText}>CONTACT</span>
                  </span>
                </button>  
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="works" className={styles.secDesign}>
        <h1>Home</h1>
        <p>Welcome to my portfolio</p>
      </section>

      <section id="about" className={styles.secDesign} >
        <h1>About Me</h1>
        <p>I am a frontend developer...</p>
      </section>

      <section id="contacts" className={styles.secDesign}>
        <h1>My Projects</h1>
        <p>Here are some cool things I've built.</p>
      </section>
    </>
  );
}
