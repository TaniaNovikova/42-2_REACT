import "./styles.css";
function AnimalCard({animalName, animalSpesies, animalImage, children}) {
  return (
    <div className="animal-card-wrapper">
      <h3>{animalName}</h3>
      <div>{animalSpesies}</div>
      <img src={animalImage} alt={animalName}/>
      {children}
    </div>
  );
}
export default AnimalCard;