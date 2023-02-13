import ReviewList from "./ReviewList/ReviewList";
import { ReviewsContainer } from "./Reviews.styled";
import {db} from '../../../firebase/firebase'
import { collection, doc, getCountFromServer, getDocs, increment, limit, orderBy, query, startAfter, updateDoc, where } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Loader from "components/Common/Loader/Loader";

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
        q = query(dbRef, orderBy('createdOn', 'desc'),limit(5))
      }
      else{
        q = query(dbRef, where('productType', '==', filter), orderBy('createdOn', 'desc'), limit(5))
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
          createdOn: doc.data().createdOn,
          productName: doc.data().productName,
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
    const handleUpvote = async(e, upvoteCount, reviewID) => {
      e.target.querySelector('span').innerHTML = upvoteCount + 1
      const docRef = doc(db, 'reviews', reviewID)
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
        q = query(dbRef, orderBy('createdOn', 'desc'), startAfter(finalPost.createdOn), limit(5))
      }
      else{
        q = query(dbRef, where('productType', '==', filter), orderBy('createdOn', 'desc'), startAfter(finalPost.createdOn), limit(5))
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
          createdOn: doc.data().createdOn,
          productName: doc.data().productName,
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

    // Article Click
    const router = useRouter()
    const handleArticleClick = (e,reviewID) =>{
      if(e.target.className!='upvoteButton'){
        router.push(`/review/${reviewID}`)
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
                      <article className="review-preview" key={review.reviewID} onClick={(e=e,reviewID = review.reviewID)=>{handleArticleClick(e,review.reviewID)}} id={review.reviewID}>
                        <iframe
                        src={`https://www.tiktok.com/embed/${review.tiktokVideoId}`}
                        frameBorder="0"
                        allow="autoplay"
                        allowFullScreen
                        />
                        <div className="textOuter">
                          <div className="textInner">
                          <h3 className="title">{review.productName}</h3>
                          <p className="username">{review.username}</p>
                          <p className="type">{review.productType}</p>
                          <iframe
                          className="innerIframe"
                          src={`https://www.tiktok.com/embed/${review.tiktokVideoId}`}
                          frameBorder="0"
                          allow="autoplay"
                          allowFullScreen
                          />
                          <p className="reviewContent">{review.textReview}</p>
                          </div>
                          <div className="buttonContainer">
                            <button className="upvoteButton" onClick={(e=e, upvoteCount=review.upvotes, reviewID=review.reviewID)=>{handleUpvote(e, review.upvotes, review.reviewID )}}>↑ <span>{review.upvotes}</span></button>
                            <button className="buyNow">Buy Now</button>
                          </div>
                        </div>
                      </article>
                  ))
                  )
                  : <div className="loading"><Loader/></div>
                      
              }
              <button className="sensor" ref={loadMoreRef} onClick={getNextBatch}>Load-More</button>
            </div>
        </ReviewsContainer>
    );
}

export default Reviews;