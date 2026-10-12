function PromotionCard() {
  return (
    <div className="rounded-xl bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800">
        Promotion by Clinics
      </h2>

      <p className="mt-2 text-sm text-gray-500">
        Discover healthcare services and special offers.
      </p>

      <button className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700">
        View Details
      </button>
    </div>
  );
}

export default PromotionCard;
