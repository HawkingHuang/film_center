import styles from "./Trailer.module.scss";

type TrailerProps = {
  trailerUrl: string;
  title: string;
  trailerName?: string | null;
};

function Trailer({ trailerUrl, title, trailerName }: TrailerProps) {
  return (
    <section className={styles.middleBlock}>
      <div className={styles.trailer}>
        <div className={styles.trailerHeader}>Trailer</div>
        <div className={styles.trailerFrame}>
          <iframe
            className={styles.trailerIframe}
            src={trailerUrl}
            title={trailerName ?? `${title} trailer`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
}

export default Trailer;
