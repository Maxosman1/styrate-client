import Link from "next/link";
import { ReviewPageContainer } from "./ReviewPage.styled";
import {db} from '../../../firebase/firebase'
import { doc, increment, updateDoc } from "firebase/firestore";
import CommentSection from "./CommentSection/CommentSection";
import { useState } from "react";

const ReviewPage = ({reviewData}) => {
    const [upvoteCount, setUpvoteCount] = useState(reviewData.upvotes)
    const docRef = doc(db, 'reviews', reviewData.reviewID)
    const handleUpvote = async(e) => {
        try{
            if(e.target.classList.contains('disabled')===false ){
                e.target.classList.toggle('disabled')
                setUpvoteCount(upvoteCount+1)
                await updateDoc(docRef, {
                    upvotes: increment(1)
                })
            }else{
                e.target.classList.toggle('disabled')
                setUpvoteCount(upvoteCount-1)
                await updateDoc(docRef, {
                    upvotes: increment(-1)
            })
            }
        }catch(err){
            console.log(err)
            setUpvoteCount('Server Error')
        }
      };
    return (
        <ReviewPageContainer>
            <div className="content">
                <h1>{reviewData.productName}</h1>
                <div className="contentInner">
                    <div className="text">
                        <div className="topLevel">
                            <p className="username">{reviewData.username}</p>
                            {/* <p>Created At: {reviewData.createdOn}</p> */}
                            <p className="productType">{reviewData.productType}</p>
                        </div>
                        <div className="textAndFrame">
                            <iframe
                            src={`https://www.tiktok.com/embed/${reviewData.tiktokVideoId}`}
                            frameBorder="0"
                            allow="autoplay"
                            allowFullScreen
                            />
                            <div className="textAndFrameInner">
                                <p className="reviewText">
                                    {reviewData.textReview}
                                </p>
                                <div className="buttons">
                                    <button onClick={handleUpvote}>↑ {upvoteCount}</button>
                                    <a href={reviewData.amazonProductLink} target='_blank' className="center">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CommentSection reviewID={reviewData.reviewID}/>
        </ReviewPageContainer>
    );
}

export default ReviewPage;