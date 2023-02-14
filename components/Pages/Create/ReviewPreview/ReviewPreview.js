import { ReviewPreviewContainer } from "./ReviewPreview.styled";

const ReviewPreview = ({
    videoId,
    productImage,
    productName,
    productType,
    textReview,
    username
  }) => {
    return (
        <ReviewPreviewContainer>
            <div className="review-preview">
                <iframe
                src={`https://www.tiktok.com/embed/${videoId}`}
                frameBorder="0"
                allow="autoplay"
                allowFullScreen
                />
                <div className="text">
                    <h3>Username: {username}</h3>
                    <p>Product Type: {productType}</p>
                    <p className="reviewContent">Text Review: {textReview}</p>
                </div>
                <button>Upvote: <span>0</span></button>
            </div>
        </ReviewPreviewContainer>
    );
}

export default ReviewPreview;