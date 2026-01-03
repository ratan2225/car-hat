function CarDetails({ title, brand, year, price, isPremium }) {
  return (
    <div>
      <h1 className="text-xl font-bold">{title}</h1>
      <p>Brand: {brand}</p>
      <p>Year: {year}</p>
      <p>Price: ${price}</p>
      <p>Premium: {isPremium ? "Yes" : "No"}</p>
    </div>
  );
}

export default CarDetails;