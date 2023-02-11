import ReviewList from "./ReviewList/ReviewList";
import { ReviewsContainer } from "./Reviews.styled";

const Reviews = () => {
    
    const [selectedType, setSelectedType] = useState("all");
    const [displayedReviews, setDisplayedReviews] = useState([]);
    const [reviewsToDisplay, setReviewsToDisplay] = useState([]);
    const [reviewsFetched, setReviewsFetched] = useState(0);
  
    useEffect(() => {
      setReviewsToDisplay(
        reviews
          .sort((a, b) => b.upvotes - a.upvotes)
          .filter((review) => {
            return selectedType === "all" || review.productType === selectedType;
          })
      );
      setDisplayedReviews(reviewsToDisplay.slice(0, 5));
    }, [selectedType, reviews]);
  
    useEffect(() => {
      const handleScroll = () => {
        if (
          window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight
        )
          return;
  
        setDisplayedReviews(
          displayedReviews.concat(
            reviewsToDisplay.slice(reviewsFetched, reviewsFetched + 5)
          )
        );
        setReviewsFetched(reviewsFetched + 5);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [displayedReviews, reviewsFetched, reviewsToDisplay]);
  
    const handleTypeChange = (event) => {
      setSelectedType(event.target.value);
      setDisplayedReviews([]);
      setReviewsFetched(0);
    };
  
    const upvoteReview = (review) => {
      // logic to upvote the review
    };

    return (
        <ReviewsContainer>
            <div className="filter-container">
                <label htmlFor="product-type">Product Type:</label>
                <select
                id="product-type"
                value={selectedType}
                onChange={handleTypeChange}
                >
                <option value="all">All</option>
                <option value="beauty">Beauty</option>
                <option value="fashion">Fashion</option>
                <option value="tech">Tech</option>
                <option value="other">Other</option>
                </select>
            </div>
            <ReviewList

                reviews={displayedReviews}
                selectedType={selectedType}
                upvoteReview={upvoteReview}
            />
        </ReviewsContainer>
    );
}

export default Reviews;