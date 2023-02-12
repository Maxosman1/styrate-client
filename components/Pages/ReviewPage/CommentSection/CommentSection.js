import { CommentSectionContainer, DisplayModalContainer } from "./CommentSection.styled";
import {db} from '../../../../firebase/firebase'
import { useEffect, useRef, useState } from "react";
import { addDoc, collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { stringify } from "@firebase/util";

const CommentSection = ({reviewID}) => {
    const [comments, setComments] = useState(null)
    const dbRef = collection(db, 'comments')
    useEffect(()=>{
        fetchComments()
    },[])
    const fetchComments = async() => {
        const q = query(dbRef, orderBy('createdOn', 'desc'), where('reviewID','==', reviewID ))
        try{
            const rawData = await getDocs(q);
            const result = rawData.docs.map(doc => ({
                commentID: doc.id,
                username: doc.data().username,
                commentText: doc.data().commentText,
                createdOn: doc.data().createdOn,
            })) 
            if(result.length!=0){
                setComments(result)
            }
        }catch(e){
            console.log(e)
        }
    }

    //New comment
    const [errorMessage, setErrorMessage] = useState(null)
    const handleCommentSubmit = async(e) =>{
        e.preventDefault()
        setErrorMessage('Submitting Comment...')
        const username = e.target.querySelector('input').value
        const commentText = e.target.querySelector('textarea').value
        const dbRef = collection(db, "comments");
        try{
            await addDoc(dbRef, {
                username : username,
                commentText : commentText,
                createdOn : new Date(),
                reviewID: reviewID
            })
            setErrorMessage('Commment Submitted')
        } catch(err){
            setErrorMessage(err)
        }
        
    }
    return (
        <CommentSectionContainer>
            <div className="title">
                <h3>Comments</h3>
                {/* <button onClick={turnOnModal}>Leave A Comment</button> */}
            </div>
            <form className="newComment displayOff" onSubmit={handleCommentSubmit}>
                <input type="text" placeholder="Username" id="usernameInput"/>
                <textarea placeholder="Comment" />
                {
                    (errorMessage)
                    ?  <p>{errorMessage}</p>
                    : null
                }
                <button>Submit</button>
            </form>
            <div className="commentList">
            {
                (comments)
                ? (
                    comments.map(comment =>(
                        <div className="comment" key={comment.commentID}>
                            <div className="meta">
                                <p><span className="username">{comment.username}</span></p>
                            </div>
                            <p className="content">{comment.commentText}</p>
                        </div>
                    ))
                )
                : <>Loading</>
            }
            </div>
        </CommentSectionContainer>
    );
}

export default CommentSection;