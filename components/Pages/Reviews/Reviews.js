import ReviewList from "./ReviewList/ReviewList";
import { ReviewsContainer } from "./Reviews.styled";
import {db} from '../../../firebase/firebase'
import { collection, doc, getDocs, increment, query, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

const Reviews = () => { 
    const dbRef = collection(db, 'reviews')
    const [reviews, setReviews] = useState(null)
    useEffect(()=>{
      getData()
    },[])
    const getData = async()=> {
      const q = query(dbRef)
      try{
        const rawData = await getDocs(q);
        const result = rawData.docs.map(doc => ({
          reviewID: doc.id,
          tiktokVideoId: doc.data().tiktokVideoId,
          amazonProductLink: doc.data().amazonProductLink,
          username: doc.data().username,
          textReview: doc.data().textReview,
          productType: doc.data().productType,
          upvotes: doc.data().upvotes
        })) 
        setReviews(result)
      }
      catch(e){
        console.log(e)
      }
    }
    const [selectedType, setSelectedType] = useState("all");
    const [displayedReviews, setDisplayedReviews] = useState([]);
    const [reviewsToDisplay, setReviewsToDisplay] = useState([]);
    const [reviewsFetched, setReviewsFetched] = useState(0);
  
    // useEffect(() => {
      // setReviewsToDisplay(
      //   reviews
      //     .sort((a, b) => b.upvotes - a.upvotes)
      //     .filter((review) => {
      //       return selectedType === "all" || review.productType === selectedType;
      //     })
      // );
      // setDisplayedReviews(reviewsToDisplay.slice(0, 5));
    // }, [selectedType, reviews]);
  
    // useEffect(() => {
    //   const handleScroll = () => {
    //     if (
    //       window.innerHeight + document.documentElement.scrollTop !==
    //       document.documentElement.offsetHeight
    //     )
    //       return;
  
    //     setDisplayedReviews(
    //       displayedReviews.concat(
    //         reviewsToDisplay.slice(reviewsFetched, reviewsFetched + 5)
    //       )
    //     );
    //     setReviewsFetched(reviewsFetched + 5);
    //   };
  
    //   window.addEventListener("scroll", handleScroll);
    //   return () => window.removeEventListener("scroll", handleScroll);
    // }, [displayedReviews, reviewsFetched, reviewsToDisplay]);
  
    const handleTypeChange = (event) => {
      setSelectedType(event.target.value);
      setDisplayedReviews([]);
      setReviewsFetched(0);
    };
  
    const handleUpvote = async(e, upvoteCount) => {
      e.target.querySelector('span').innerHTML = upvoteCount + 1
      console.log(e.target, upvoteCount)
      const docRef = doc(db, 'reviews', e.target.id)
      try{
          await updateDoc(docRef, {
              upvotes: increment(1)
          })
      }catch(err){
          console.log(err)
      }
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
            <div className="reviewListContainer">
              {
                (reviews)
                  ? (
                    reviews.map((review) => (
                      <div className="review-preview" key={review.username}>
                          <h3>Username: {review.username}</h3>
                          <p>Text Review: {review.textReview}</p>
                          <p>Product Type: {review.productType}</p>
                          <button onClick={(e=e, upvoteCount=review.upvotes)=>{handleUpvote(e, review.upvotes)}} id={review.reviewID}>Upvote: <span>{review.upvotes}</span></button>
                          <p>------------------------------------</p>
                      </div>
                  ))
                  )
                  : <>Loading...</>
                      
              }
            </div>
        </ReviewsContainer>
    );
}

export default Reviews;