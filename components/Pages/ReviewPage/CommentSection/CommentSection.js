import { CommentSectionContainer } from "./CommentSection.styled";
import {db} from '../../../../firebase/firebase'
import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
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
    return (
        <CommentSectionContainer>
            <h3>Comments</h3>
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