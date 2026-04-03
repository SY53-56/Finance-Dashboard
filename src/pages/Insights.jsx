function Insights() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 mt-6">
      
      {/* Title */}
      <h2 className="text-3xl font-bold text-white  sm:text-2xl lg:text-4xl mb-4">
        Insights
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        {/* Card 1 */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md">
          <h3 className="text-gray-500 text-xl">Highest Spending</h3>
          <p className="text-lg font-bold mt-2">Shopping</p>
          <p className="text-red-500 text-sm">₹4300</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md">
          <h3 className="text-gray-500 text-xl">Monthly Summary</h3>
          <p className="text-sm mt-2">Feb: +₹4300</p>
          <p className="text-sm">Mar: +₹4500</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md">
          <h3 className="text-gray-500 text-xl">Savings</h3>
          <p className="text-lg font-bold text-green-500 mt-2">
            ₹4300
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md">
          <h3 className="text-gray-500 text-xl">This Month Expense</h3>
          <p className="text-lg font-bold text-red-500 mt-2">
            ₹5400
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md col-span-1 sm:col-span-2 lg:col-span-1">
          <h3 className="text-gray-500 text-xl">Warning</h3>
          <p className="text-yellow-500 mt-2 text-sm">
            ⚠️ Spending is high this month
          </p>
        </div>

      </div>
    </div>
  );
}

export default Insights;