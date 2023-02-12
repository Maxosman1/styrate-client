import ReviewList from "./ReviewList/ReviewList";
import { ReviewsContainer } from "./Reviews.styled";
import {db} from '../../../firebase/firebase'
import { collection, doc, getCountFromServer, getDocs, increment, limit, orderBy, query, startAfter, updateDoc, where } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";

const Reviews = () => { 
    const dbRef = collection(db, 'reviews')
    const [reviews, setReviews] = useState(null)
    const [loadingError, setLoadingError] = useState(false)
    const [filter, setFilter] = useState(null)
    
    // Data Fetching
    useEffect(()=>{
      getFirstBatch()
    },[filter])
    const getFirstBatch = async()=> {
      let q;
      if(filter===null || filter==='all'){
        q = query(dbRef, orderBy('createdOn', 'desc'),limit(10))
      }
      else{
        q = query(dbRef, where('productType', '==', filter), orderBy('createdOn', 'desc'), limit(10))
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
          upvotes: doc.data().upvotes,
          createdOn: doc.data().createdOn
        })) 
        if(result.length!=0){
          setReviews(result)
        }else if(result.length===0){
          setReviews([])
          loadMoreRef.current.innerHTML = 'End of Results'
          loadMoreRef.current.disabled = true
        }
        setLoadingError(false)
      }
      catch(e){
        console.log(e)
        setLoadingError(true)
      }
    }
  
    // Filter Logic
    const handleTypeChange = (e) => {
      loadMoreRef.current.innerHTML = 'Load-More'
      loadMoreRef.current.disabled = false
      setReviews(null)
      setFilter(e.target.value)
    };
  
    // Upvote Logic
    const handleUpvote = async(e, upvoteCount) => {
      e.target.querySelector('span').innerHTML = upvoteCount + 1
      const docRef = doc(db, 'reviews', e.target.id)
      try{
          await updateDoc(docRef, {
              upvotes: increment(1)
          })
      }catch(err){
          console.log(err)
          e.target.querySelector('span').innerHTML = 'Server Error'
      }
    };

    // Load more logic
    const loadMoreRef = useRef(null)
    const getNextBatch = async() => {
      const finalPost = reviews.slice(-1)[0]
      let q;
      if(filter===null || filter==='all'){
        q = query(dbRef, orderBy('createdOn', 'desc'), startAfter(finalPost.createdOn), limit(10))
      }
      else{
        q = query(dbRef, where('productType', '==', filter), orderBy('createdOn', 'desc'), startAfter(finalPost.createdOn), limit(10))
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
          upvotes: doc.data().upvotes,
          createdOn: doc.data().createdOn
        })) 
        if(result.length!=0){
          setReviews(oldData => [...oldData, result[0]])
        }else{
          loadMoreRef.current.innerHTML = 'End of Results'
          loadMoreRef.current.disabled = true
        }
        setLoadingError(false)
      }
      catch(e){
        console.log(e)
        setLoadingError(true)
      }
    }

    return (
        <ReviewsContainer>
            <div className="filter-container">
                <label htmlFor="product-type">Product Type:</label>
                <select
                id="product-type"
                onChange={handleTypeChange}
                defaultValue='all'
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
                      <div className="review-preview" key={review.reviewID}>
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
              <button className="sensor" ref={loadMoreRef} onClick={getNextBatch}>Load-More</button>
            </div>
        </ReviewsContainer>
    );
}

export default Reviews;