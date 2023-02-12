import ReviewPage from 'components/Pages/ReviewPage/ReviewPage';
import { collection, getDocs, query, where } from 'firebase/firestore';
import Head from 'next/head';
import {db}  from '../../../firebase/firebase'

const Review = ({reviewData}) => {
    return (
        <>
        <Head>
          <title>Styrate | Review</title>
          <meta name="description" content="[Insert Descritption]" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ReviewPage reviewData={reviewData}/>
      </>
    );
}
export async function getServerSideProps(context) {
    const postID = context.params.reviewID
    const q = query(collection(db, "reviews"), where('__name__', "==", postID));
    const rawData = await getDocs(q);
    const reviewData = rawData.docs.map(doc => ({
        reviewID: doc.id,
        tiktokVideoId: doc.data().tiktokVideoId,
        amazonProductLink: doc.data().amazonProductLink,
        username: doc.data().username,
        textReview: doc.data().textReview,
        productType: doc.data().productType,
        upvotes: doc.data().upvotes,
        productName: doc.data().productName,
        // createdOn: doc.data().createdOn
    })) 
    if(reviewData.length===0){
      return {
        redirect: {
          permanent: false,
          destination: "/404",
        }
      }
    }else{
      return{
        props:{
          reviewData: reviewData[0]
        }
      }
    }
  }
    
export default Review;