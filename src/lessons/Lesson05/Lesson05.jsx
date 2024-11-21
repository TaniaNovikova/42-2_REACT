import { v4 } from "uuid";

import "./styles.css";
import { data } from "./data";
import AnimalCard from "../../components/AnimalCard/AnimalCard";

function Lesson05() {
  const animalCards = data.map((animalItem) => {
    return <AnimalCard key={v4()} animalData={animalItem} />;
  });
  console.log(animalCards);

  const newAnimalCards = data.map((animal) => {
    return (
      <div key={v4()}>
        <h2>{animal.name}</h2>
        <AnimalCard animalData={animal} />
      </div>
    );
  });

  return (
    <div className="lesson05-container">
      {/* 1 вариант - без использования map */}
      {/* <AnimalCard animalData={data[0]} />
      <AnimalCard animalData={data[1]} /> */}
      {/* 2 вариант - c использованием map */}
      {animalCards}
      {newAnimalCards}
    </div>
  );
}

export default Lesson05;
