import "./styles.css";
import Button from "../../components/Button/Button";
import AnimalCard from "../../components/AnimalCard/AnimalCard";
import { lionData, zebraData, hippoData } from "../../components/AnimalCard/data";

function Lesson03() {
  return (
    <div className="lesson03-wrapper">
      <AnimalCard
        animalName={lionData.name}
        animalSpesies={lionData.species}
        animalImage={lionData.image}
      />
      <AnimalCard
        animalName={hippoData.name}
        animalSpesies={hippoData.species}
        animalImage={hippoData.image}
      ><h5>{zebraData.skills[0]}</h5></AnimalCard>
      <AnimalCard
        animalName={zebraData.name}
        animalSpesies={zebraData.species}
        animalImage={zebraData.image}
      />

      <Button buttonName="Send" />
      <Button buttonName="Delete" />
      <Button />
    </div>
  );
}
export default Lesson03;
