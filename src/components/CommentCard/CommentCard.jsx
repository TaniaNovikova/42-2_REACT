import './styles.css'

function CommentCard({text, author="anonymous"}){
    // хотим, чтобы карта была другого цвета, если author отсутствует
  /* const isAnonymous = author==='anonymous'? 'comment-card-wrapper_bg': ''; */
  const commentCard = author==='anonymous'? 'comment-card-wrapper comment-card-wrapper_bg': 'comment-card-wrapper';
  return(
    /* <div className={`comment-card-wrapper ${isAnonymous}`}> */
    <div className={commentCard}>
      <p className='comment-card-text'>{text}</p>
      <p className='comment-card-author'>{author}</p>
    </div>
  )
}

export default CommentCard;
