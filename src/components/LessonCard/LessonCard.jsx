import Button from "../Button/Button";
import "./styles.css";
import { lessonData } from "./data";

function LessonCard() {
  return (
    <div className="lesson-card">
      <h3>Lesson {lessonData.lesson_numer}</h3>
      <p>{lessonData.teacher}</p>
      <Button />
    </div>
  );
}

export default LessonCard;