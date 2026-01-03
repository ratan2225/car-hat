import Header from "./Header";
import SearchBox from "./SearchBox";
import CarList from "./CarList";
import { useState } from "react";

function CarShope() {

  const CARS = [
    { id: 1, title: "Luxury Sedan", brand: "Mercedes", year: 2023, price: 80000, isPremium: true },
    { id: 2, title: "Family SUV", brand: "Toyota", year: 2022, price: 45000, isPremium: false },
    { id: 3, title: "Sports Car", brand: "Porsche", year: 2023, price: 120000, isPremium: true },
    { id: 4, title: "Electric Hatchback", brand: "Nissan", year: 2022, price: 35000, isPremium: false },
    { id: 5, title: "Rofiqul", brand: "Bikheari", year: 2022, price: 5000, isPremium: false },
    { id: 6, title: "xL-100", brand: "Tesla", year: 2022, price: 135000, isPremium: true },
    { id: 7, title: "Bangla", brand: "Riksha", year: 2022, price: 35000, isPremium: false },
  ];

  const [cars] = useState(CARS);
  const [searchTerm, setSearchTerm] = useState("");
  const [showPremiumOnly, setShowPremiumOnly] = useState(false);

  const filteredCars = cars.filter(car => {
    const matchSearch = car.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchPremium = showPremiumOnly ? car.isPremium : true;
    return matchSearch && matchPremium;
  });

  return (
    <div className="p-10">
      <Header />
      <SearchBox
        searchTerm={searchTerm}
        onSearchCar={setSearchTerm}
        showPremiumOnly={showPremiumOnly}
        setShowPremiumOnly={setShowPremiumOnly}
      />
      <CarList cars={filteredCars} />
    </div>
  );
}

export default CarShope;