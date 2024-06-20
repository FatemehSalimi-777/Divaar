import { sp } from "src/utils/numbers";
import styles from "./Main.module.css"

function Main({ posts }) {
  return (
    <div className={styles.container}>
      {posts?.data.posts.map((post) => (
        <div className={styles.card} key={post._id}>
          <div>
            <p>{post.options.title}</p>
            <div className={styles.info}>
              <p>{sp(post.amount)} تومان</p>
              <span>{post.options.city}</span>
              <img src={`${import.meta.env.VITE_BASE_URL}${post.images[0]}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Main;
