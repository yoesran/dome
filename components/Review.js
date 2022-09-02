import React from "react";
import styles from "../styles/Review.module.css";

const Review = ({ user, review }) => {
  let generateStar = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= review.star) {
      generateStar.push(
        <span style={{ color: "#2FCC71" }} key={i}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            id="img"
            className="feather feather-star"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </span>
      );
      continue;
    }
    generateStar.push(
      <span style={{ color: "black" }} key={i}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          id="img"
          className="feather feather-star"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      </span>
    );
  }
  return (
    <div className={styles.review}>
      <div>
        <img src={user.avatar} alt="User" />
        <div>
          <div className={styles.reviewAuthor}>
            <strong>{user.name}</strong>
            <span>
              {new Date(review.timestamp).toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </span>
          </div>
          <p>
            {`${new Date(review.timestamp).getDate()}/${
              new Date(review.timestamp).getMonth() + 1
            }`}
          </p>
          <p>{review.text}</p>
          <div className={styles.starContainer}>{generateStar}</div>
        </div>
      </div>
    </div>
  );
};

export default Review;
