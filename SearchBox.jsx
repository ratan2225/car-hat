function SearchBox({ searchTerm, onSearchCar, showPremiumOnly, setShowPremiumOnly }) {
  return (
    <div className="flex items-center h-10 mb-6">
      <input
        type="text"
        value={searchTerm}
        placeholder="Search Cars..."
        onChange={(e) => onSearchCar(e.target.value)}
        className="shadow rounded-md h-10 px-3 mr-5 outline-none font-bold"
      />

      <input
        type="checkbox"
        checked={showPremiumOnly}
        onChange={(e) => setShowPremiumOnly(e.target.checked)}
        className="mr-2"
      />
      <p className="font-bold">Show Premium Only</p>
    </div>
  );
}

export default SearchBox;