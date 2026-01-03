import CarDetails from "./CarDetails"


function CarRow ({car}) {
    return (
        <div className="shadow-xl p-4 w-100 rounded-lg">
            <CarDetails title={car.title} brand={car.brand} year={car.year} price={car.price} isPremium={car.isPremium}/>
        </div>
    )
}



export default CarRow