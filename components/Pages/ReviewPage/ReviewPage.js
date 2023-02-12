import Link from "next/link";
import { ReviewPageContainer } from "./ReviewPage.styled";

const ReviewPage = ({reviewData}) => {
    return (
        <ReviewPageContainer>
            <div className="links">
                <Link href='/'>Home</Link>
                <Link href='/reviews'>Reviews</Link>
            </div>
            <div className="content">
                <h1>Product Name</h1>
                <div className="contentInner">
                    <iframe
                    src={`https://www.tiktok.com/embed/${reviewData.tiktokVideoId}`}
                    frameBorder="0"
                    allow="autoplay"
                    allowFullScreen
                    />
                </div>
            </div>
        </ReviewPageContainer>
    );
}

export default ReviewPage;