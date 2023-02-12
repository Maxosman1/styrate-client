import ReviewList from "./ReviewList/ReviewList";
import { ReviewsContainer } from "./Reviews.styled";
import {db} from '../../../firebase/firebase'
import { collection, doc, getDocs, increment, query, updateDoc, where } from "firebase/firestore";
import { useEffect, useState } from "react";

const Reviews = () => { 
    const dbRef = collection(db, 'reviews')
    const [reviews, setReviews] = useState(null)
    useEffect(()=>{
      getData()
    },[])
    const getData = async(filter)=> {
      let q;
      if(filter){
        q = query(dbRef, where('productType', '==', filter))
      }
      else{
        q = query(dbRef)
      }
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
        console.log(result)
        if(result.length!=0){
          setReviews(result)
        }else{
          setReviews([{username: 'No results'}])
        }
      }
      catch(e){
        console.log(e)
      }
    }
    // const [selectedType, setSelectedType] = useState("all");
    // const [displayedReviews, setDisplayedReviews] = useState([]);
    // const [reviewsToDisplay, setReviewsToDisplay] = useState([]);
    // const [reviewsFetched, setReviewsFetched] = useState(0);
  
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
  
    const handleTypeChange = (e) => {
      setReviews(null)
      if(e.target.value==='all'){
        getData
      }else{
        getData(e.target.value)
      }
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
                onChange={handleTypeChange}
                >
                <option value="all" selected>All</option>
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