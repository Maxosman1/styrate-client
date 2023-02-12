import { CommentSectionContainer } from "./CommentSection.styled";
import {db} from '../../../../firebase/firebase'
import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

const CommentSection = () => {
    const [comments, setComments] = useState(null)
    const dbRef = collection(db, 'comments')
    useEffect(()=>{
        fetchComments()
    },[])
    const fetchComments = async() => {
        const q = query(dbRef, orderBy('createdOn', 'desc'))
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
        }catch(e){}
    }
    return (
        <CommentSectionContainer>
            <h3>Comments</h3>
            <div className="commentList">
            {
                (comments)
                ? (
                    comments.map(comment =>(
                        <div className="comment" key={comment.commentID}>
                            {comment.commentText}
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