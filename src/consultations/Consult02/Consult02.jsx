import './styles.css';
import CommentCard from "../../components/CommentCard/CommentCard"

function Consult02() {
  const commendCardInfo = [
    { text: 'I can’t recommend this podcast enough', author: 'Betty Lacey' },
    { text: 'Jacob is the best in the business', author: 'Adam Driver' },
    { text: 'A wealth of audio knowledge', author: 'Marcus Brown' },
  ];
  return (
    <div className='cunsult02-wrapper'>
      <CommentCard
        text={commendCardInfo[0].text}
        /* author={commendCardInfo[0].author} */
      />
      <CommentCard
        text={commendCardInfo[1].text}
        author={commendCardInfo[1].author}
      />

      <CommentCard
        text={commendCardInfo[2].text}
        author={commendCardInfo[2].author}
      />
    </div>
  );
}

export default Consult02;
