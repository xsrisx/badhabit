import { useMemo, useState } from "react";
import "../styles/gut-reviews.css";

const reviews = [
  {
    name: "A.",
    date: "10/04/26",
    rating: 5,
    title: "A simple addition to my routine",
    text: "I wanted a simple way to make gut health part of my everyday routine.",
    verified: true,
    topics: ["routine", "results"],
  },
  {
    name: "R.",
    date: "09/17/26",
    rating: 5,
    title: "Easy to take every day",
    text: "The ready-to-drink format makes it easy to fit into my day without extra preparation.",
    verified: true,
    topics: ["routine", "packaging"],
  },
  {
    name: "M.",
    date: "09/05/26",
    rating: 4,
    title: "Convenient and straightforward",
    text: "I like having a straightforward product that fits into my daily wellness routine.",
    verified: true,
    topics: ["routine", "experience"],
  },
  {
    name: "S.",
    date: "08/28/26",
    rating: 5,
    title: "A convenient format",
    text: "The compact format is convenient to keep on hand and makes the routine easy to follow.",
    verified: true,
    topics: ["packaging", "routine"],
  },
  {
    name: "K.",
    date: "08/12/26",
    rating: 4,
    title: "Easy to fit into my day",
    text: "I appreciate how simple it is to add this to my everyday schedule.",
    verified: true,
    topics: ["experience", "results"],
  },
];

const topics = [
  "routine",
  "feel",
  "packaging",
  "results",
  "experience",
  "improvement",
  "shipping",
];

export default function GutReviews() {
  const [search, setSearch] = useState("");
  const [topic, setTopic] = useState("");
  const [sort, setSort] = useState("highest");
  const [showAllTopics, setShowAllTopics] = useState(false);

  const filteredReviews = useMemo(() => {
    let result = reviews.filter((review) => {
      const matchesSearch = `${review.name} ${review.title} ${review.text}`
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesTopic = !topic || review.topics.includes(topic);

      return matchesSearch && matchesTopic;
    });

    if (sort === "highest") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sort === "lowest") {
      result.sort((a, b) => a.rating - b.rating);
    } else {
      result.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    return result;
  }, [search, topic, sort]);

  const ratingCounts = [0, 0, 0, 0, 0];

  reviews.forEach((review) => {
    ratingCounts[review.rating - 1]++;
  });

  return (
    <section className="gut-reviews-section">
      <div className="gut-reviews-summary">
        <h2>Member Reviews</h2>

        <div className="gut-rating-overview">
          <div className="gut-rating-score">
            <strong>4.8</strong>
            <div>
              <span className="gut-review-stars">★★★★★</span>
              <p>Based on {reviews.length} reviews</p>
            </div>
          </div>

          <div className="gut-rating-breakdown">
            {[5, 4, 3, 2, 1].map((rating) => {
              const count = ratingCounts[rating - 1];
              const percentage = (count / reviews.length) * 100;

              return (
                <div className="gut-rating-row" key={rating}>
                  <span>{rating}</span>
                  <span className="gut-rating-star">★</span>
                  <div className="gut-rating-track">
                    <span style={{ width: `${percentage}%` }} />
                  </div>
                  <span className="gut-rating-count">{count}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="gut-reviews-toolbar">
        <input
          type="search"
          placeholder="⌕  Search reviews"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          aria-label="Search reviews"
        />

        <div className="gut-reviews-popular">
          <p>Popular topics</p>

          <div className="gut-review-topic-list">
            {(showAllTopics
              ? [...topics, "experience", "routine"]
              : topics.slice(0, 7)
            ).map((item, index) => (
              <button
                key={`${item}-${index}`}
                className={topic === item ? "selected" : ""}
                onClick={() => setTopic(topic === item ? "" : item)}
              >
                {item}
              </button>
            ))}

            <button
              className="gut-show-topics"
              onClick={() => setShowAllTopics(!showAllTopics)}
            >
              {showAllTopics ? "Show less" : "Show more"}
            </button>
          </div>
        </div>

        <label className="gut-reviews-sort">
          Sort by:
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
          >
            <option value="highest">Highest rating</option>
            <option value="lowest">Lowest rating</option>
            <option value="recent">Most recent</option>
          </select>
        </label>
      </div>

      <div className="gut-review-list">
        {filteredReviews.length ? (
          filteredReviews.map((review, index) => (
            <article
              className="gut-review-card"
              key={`${review.name}-${review.date}-${index}`}
            >
              <div className="gut-review-author">
                <strong>{review.name}</strong>
                {review.verified && (
                  <span className="gut-verified-reviewer">
                    ● Verified Reviewer
                  </span>
                )}
              </div>

              <div className="gut-review-main">
                <div className="gut-review-card-top">
                  <span className="gut-review-stars">
                    {"★".repeat(review.rating)}
                    <span className="gut-empty-stars">
                      {"★".repeat(5 - review.rating)}
                    </span>
                  </span>
                  <time>{review.date}</time>
                </div>

                <h3>{review.title}</h3>
                <p>{review.text}</p>
              </div>
            </article>
          ))
        ) : (
          <p className="gut-no-reviews">No reviews match your search.</p>
        )}
      </div>
    </section>
  );
}
