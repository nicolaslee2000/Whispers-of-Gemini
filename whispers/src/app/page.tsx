import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer
        </p>
        <input></input>
      </div>
      <div className={styles.grid}>
        <a
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Button1 <span>-&gt;</span>
          </h2>
          <p>func1()</p>
        </a>

        <a
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Button2 <span>-&gt;</span>
          </h2>
          <p>func2()</p>
        </a>

        <a
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Button3 <span>-&gt;</span>
          </h2>
          <p>func3()</p>
        </a>

        <a
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Button4 <span>-&gt;</span>
          </h2>
          <p>
            func4()
          </p>
        </a>
      </div>
    </main>
  );
}
