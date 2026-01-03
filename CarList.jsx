import CarRow from "./CarRow";

function CarList({ cars }) {
  return (
    <div className="mt-10 flex flex-wrap justify-start gap-5 items-center h-auto">
      {cars.map(car => (
        <CarRow key={car.id} car={car} />
      ))}
    </div>
  );
}

export default CarList;