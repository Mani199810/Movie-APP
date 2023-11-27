import Link from "next/link";
import styles from './Card.module.css'; // Create a CSS module for styling

function Card({ movie }) {
  const IMAGE_BASE_URL = 'https://www.themoviedb.org/t/p/w220_and_h330_face';

  return (
    <div>
      <Link href={"/movies/" + movie.id}>
        <div className={`${styles.card} text-decoration-none`}>
          <div className={`${styles.cardInner} card`} style={{ width: '15rem'  }}>
            <img src={IMAGE_BASE_URL + movie.poster_path} alt="" className={`${styles.img}  card-img-top`} />
            <div className="card-body">
              <h5 className={`${styles.title} `} >Title: {movie.title}</h5>
              <h6 className={`${styles.releasedate} `}>Release Date: {movie.release_date}</h6>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
