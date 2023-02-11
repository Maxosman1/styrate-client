import { ReviewPreviewContainer } from "./ReviewPreview.styled";

const ReviewPreview = ({
    videoId,
    productImage,
    productName,
    productType,
    textReview
  }) => {
    return (
        <ReviewPreviewContainer>
            <div className="review-preview__video-container">
                <iframe
                    src={`https://www.tiktok.com/embed/${videoId}`}
                    frameBorder="0"
                    allow="autoplay"
                    allowFullScreen
                />
            </div>
            <div className="review-preview__product-details">
                <img
                    src={productImage}
                    alt={productName}
                    className="review-preview__product-image"
                />
                <div className="review-preview__product-name">{productName}</div>
                <div className="review-preview__product-type">{productType}</div>
            </div>
            <div className="review-preview__text-review">{textReview}</div>
        </ReviewPreviewContainer>
    );
}

export default ReviewPreview;