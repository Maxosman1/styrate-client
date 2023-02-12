import Link from "next/link";
import { ReviewPageContainer } from "./ReviewPage.styled";
import {db} from '../../../firebase/firebase'
import { doc, increment, updateDoc } from "firebase/firestore";
import CommentSection from "./CommentSection/CommentSection";

const ReviewPage = ({reviewData}) => {
    const handleUpvote = async(e) => {
        e.target.querySelector('span').innerHTML = reviewData.upvotes + 1
        const docRef = doc(db, 'reviews', reviewData.reviewID)
        try{
            await updateDoc(docRef, {
                upvotes: increment(1)
            })
        }catch(err){
            console.log(err)
            e.target.querySelector('span').innerHTML = 'Server Error'
        }
      };
    return (
        <ReviewPageContainer>
            <div className="links">
                <Link href='/'>Home</Link>
                <Link href='/reviews'>Reviews</Link>
            </div>
            <div className="content">
                <h1>{reviewData.productName}</h1>
                <div className="contentInner">
                    <iframe
                    src={`https://www.tiktok.com/embed/${reviewData.tiktokVideoId}`}
                    frameBorder="0"
                    allow="autoplay"
                    allowFullScreen
                    />
                    <div className="text">
                        <div className="topLevel">
                            <p>Username: <strong>{reviewData.username}</strong></p>
                            {/* <p>Created At: {reviewData.createdOn}</p> */}
                            <p>Product Type: <strong>{reviewData.productType}</strong></p>
                        </div>
                        <p className="reviewText">
                            {reviewData.textReview}
                        </p>
                        <div className="buttons">
                            <button onClick={handleUpvote}>Upvote: <span>{reviewData.upvotes}</span></button>
                            <a href={reviewData.amazonProductLink} target='_blank'>Buy Now</a>
                        </div>
                    </div>
                </div>
            </div>
            <CommentSection/>
        </ReviewPageContainer>
    );
}

export default ReviewPage;