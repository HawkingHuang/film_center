import { Link } from "react-router-dom";
import { POSTER_BASE_URL } from "../../lib/api";
import type { MovieRecommendation } from "../../types/movieTypes";
import imageFallbackPortrait from "../../assets/images/image_fallback_portrait.png";
import styles from "./Recommendations.module.scss";

type RecommendationsProps = {
  recommendations: MovieRecommendation[];
  title?: string;
};

function Recommendations({ recommendations, title = "Recommendations" }: RecommendationsProps) {
  return (
    <section className={styles.recommendations}>
      <h2 className={styles.recommendationsTitle}>{title}</h2>
      <div className={styles.resultsGrid}>
        {recommendations.map((rec) => {
          if (!rec?.id) return null;
          const recPoster = rec.poster_path ? `${POSTER_BASE_URL}${rec.poster_path}` : imageFallbackPortrait;
          return (
            <Link key={rec.id} to={`/movies/${rec.id}`} className={styles.cardLink}>
              <div className={styles.card}>
                <img
                  className={styles.poster}
                  src={recPoster}
                  alt={rec.title ?? "Recommendation"}
                  onError={(e) => {
                    e.currentTarget.src = imageFallbackPortrait;
                  }}
                />
                <div className={styles.cardTitle}>{rec.title ?? "Recommendation"}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Recommendations;
