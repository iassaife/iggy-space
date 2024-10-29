import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Countdown.module.css";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countDownDate = new Date("Nov 13, 2024 15:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ message: "IT'S TIME!!!!!" });
      } else {
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.frame}>
        <header>
          <h1 className={styles.title}>CAMELLYA IS COMING</h1>
        </header>
        <section className={styles.section}>
          <div className={styles.subtitle}>Time until she arrives:</div>
          <div className={styles.countdown}>
            {timeLeft.message ? (
              <h1>{timeLeft.message}</h1>
            ) : (
              <h1>
                {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
                {timeLeft.seconds}s
              </h1>
            )}
          </div>
          <Image
            src="/Camellya_Card.webp"
            alt="Camellya Art"
            width={300}
            height={400}
            className={styles.image}
          />
        </section>
        <footer className={styles.footer}>
          <p>&copy; Iggy the Ziggy</p>
        </footer>
      </div>
    </div>
  );
}

export default Countdown;
