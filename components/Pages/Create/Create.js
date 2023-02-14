import { db } from '../../../firebase/firebase'
import { addDoc, collection } from "firebase/firestore";
import { useRef, useState } from "react";
import { CreateContainer } from "./Create.styled";
import ReviewPreview from "./ReviewPreview/ReviewPreview";
import Link from 'next/link';
import { useRouter } from 'next/router';

const Create = () => {

    const content = useRef(null)
    const [values, setValues] = useState({
      tiktokVideoId: "",
      amazonProductLink: "",
      username: "",
      textReview: "",
      productType: "beauty",
      productName: ""
    });
    const [display, setDisplay] = useState(false)
    const [message, setMessage] = useState(null)
  
    const handleChange = (e) => {
      setDisplay(false)
      setMessage(null)
      setValues({
        ...values,
        [e.target.name]: e.target.value
      });
    };
  
    const handlePreview = (e) => {
      e.preventDefault();
      setMessage(null)
      if(values.username!=='' && values.amazonProductLink!=='' && values.productName!=='' && values.tiktokVideoId!='' && values.textReview!=''){
        setDisplay(true)
      }else{
        setMessage('Please Complete The Form')
      }
    };
  
    const router = useRouter()
    const handleSubmit = async(e) => {
      e.preventDefault();
      setDisplay(false)
      setMessage('Sending Data')
      const dbRef = collection(db, "reviews");
      if(values.username!=='' && values.amazonProductLink!=='' && values.productName!=='' && values.tiktokVideoId!='' && values.textReview!=''){
        try{
          const docRef = await addDoc(dbRef, {
            tiktokVideoId: values.tiktokVideoId,
            amazonProductLink: values.amazonProductLink,
            username: values.username,
            textReview: values.textReview,
            productType: values.productType,
            upvotes: 0,
            createdOn: new Date(),
            productName: values.productName
          })
          setMessage('Data Sent')
          router.push(`/review/${docRef.id}`)
        }
        catch(e){
          setMessage('Error')
        }
      }else{
        setMessage('Please Complete The Form')
      }
    };

    return (
        <CreateContainer>
            <h1>Create A Review</h1>
            <form>
              <div className="videoID">
                <label htmlFor="tiktokVideoId">TikTok Video ID:</label>
                <input
                type="text"
                name="tiktokVideoId"
                id="tiktokVideoId"
                value={values.tiktokVideoId}
                onChange={handleChange}
                />
              </div>
              <div className="productLink">
                <label htmlFor="amazonProductLink">Amazon Product Link:</label>
                <input
                type="text"
                name="amazonProductLink"
                id="amazonProductLink"
                value={values.amazonProductLink}
                onChange={handleChange}
                />
              </div>
              <div className="productName">
                <label htmlFor="productName">Product Name:</label>
                <input
                type="text"
                name="productName"
                id="productName"
                value={values.productName}
                onChange={handleChange}
                />
              </div>
              <div className="username">
                <label htmlFor="username">Username:</label>
                <input
                type="text"
                name="username"
                id="username"
                value={values.username}
                onChange={handleChange}
                />
              </div>
              <div className="textReview">
                <label htmlFor="textReview">Text Review:</label>
                <textarea
                type="text"
                name="textReview"
                id="textReview"
                value={values.textReview}
                onChange={handleChange}
                />
              </div>
              <div className="productType">
                <label htmlFor="productType">Product Type:</label>
                <select
                name="productType"
                id="productType"
                value={values.productType}
                onChange={handleChange}
                >
                    <option value="beauty">Beauty</option>
                    <option value="fashion">Fashion</option>
                    <option value="tech">Tech</option>
                    <option value="other">Other</option>
                </select>
              </div>
              <div className="buttonControls">
                <button type="submit" onClick={handlePreview}>
                Preview
                </button>
                <button type="submit" onClick={handleSubmit}>
                Submit
                </button>
              </div>
            </form>
            <div className="content" ref={content}>
                {
                  (display)
                    ? (
                      <article className="review-preview">
                        <iframe
                        src={`https://www.tiktok.com/embed/${values.tiktokVideoId}`}
                        frameBorder="0"
                        allow="autoplay"
                        allowFullScreen
                        />
                        <div className="textOuter">
                          <div className="textInner">
                          <h3 className="title">{values.productName}</h3>
                          <p className="username">{values.username}</p>
                          <p className="type">{values.productType}</p>
                          <iframe
                          className="innerIframe"
                          src={`https://www.tiktok.com/embed/${values.tiktokVideoId}`}
                          frameBorder="0"
                          allow="autoplay"
                          allowFullScreen
                          />
                          <p className="reviewContent">{values.textReview}</p>
                          </div>
                          <div className="buttonContainer">
                            <button className="upvoteButton">↑ <span>0</span></button>
                            <a className="buyNow" href={values.amazonProductLink}>Buy Now</a>
                          </div>
                        </div>
                      </article>
                    )
                    : null
                }
            </div>
            <div className="message">
              {message}
            </div>
        </CreateContainer>
    );
}

export default Create;