import "./styles.css";
import Button from "../Button/Button";
import { useState } from "react";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";

function FeedbackExperiments() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const likesIncrement = () => {
    setLikes((likes) => likes + 1);
  };

  const dislikesIncrement = () => {
    setDislikes((dislikes) => dislikes + 1);
  };

  const resetAllResults = () => {
    setLikes(0);
    setDislikes(0);
  };
  return (
    <div className="feedback-wrapper">
      <div className="title">Feedback</div>
      <div className="likes-dislikes-wrapper">
        <div className="result">{likes}</div>

        <div className="likes-dislikes-buttons-wrapper">
          <div className="button-control">
            <Button
              className="likes-dislikes-button"
              name="Like"
              onClick={likesIncrement}
              imgSrc={like}
            />
          </div>
          <div className="button-control">
            <Button
              className="likes-dislikes-button"
              name="Disike"
              onClick={dislikesIncrement}
              imgSrc={dislike}
            />
          </div>
        </div>
        <div className="result dislikes">{dislikes}</div>
      </div>
      <Button
        type="reset"
        className="reset-button"
        name="Reset Results"
        onClick={resetAllResults}
      />
    </div>
  );
}
export default FeedbackExperiments;
