// Call the edit functions as needed... 
import { useState } from "react";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function PropertyForm() {
  const [sellerName, setSellerName] = useState("");
  const [sellerAddress, setSellerAddress] = useState("");
  const [buyerName, setBuyerName] = useState("");
  const [buyerAddress, setBuyerAddress] = useState("");
  const [propertyAddress, setPropertyAddress] = useState("");
  const [propertyDescription, setPropertyDescription] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [closingDate, setClosingDate] = useState("");
  const [termsAndConditions, setTermsAndConditions] = useState("");
  const [inspectionDays, setInspectionDays] = useState("");
  const [sellerWitness, setSellerWitness] = useState("");
  const [buyerWitness, setBuyerWitness] = useState("");

  const navigate = useNavigate();
  const EditPropertyform = encodeURIComponent("/property-agreement");
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation logic
    if (
      sellerName &&
      sellerAddress &&
      buyerName &&
      buyerAddress &&
      propertyAddress &&
      propertyDescription &&
      purchasePrice &&
      closingDate &&
      termsAndConditions &&
      inspectionDays &&
      sellerWitness &&
      buyerWitness
    ) {
      let result = await
        axios.post("/i/editPropertyDocx", {
          sellerName,
          sellerAddress,
          buyerName,
          buyerAddress,
          propertyAddress,
          propertyDescription,
          purchasePrice,
          closingDate,
          termsAndConditions,
          inspectionDays,
          sellerWitness,
          buyerWitness
        })
      result = encodeURIComponent(result.data);

      navigate(`/ShowResultDocuments/${result}`)
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container mx-auto max-w-3xl px-4 py-8 bg-gray-100 shadow-lg rounded-lg">
      <h2 className="text-3xl mb-8 text-center text-grey-600 font-bold">Property Agreement</h2>
      <div className="border-b border-gray-900/10 pb-12">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="sellerName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Seller Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="sellerName"
                name="sellerName"
                value={sellerName}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  const onlyLetters = inputValue.replace(/[^a-zA-Z]/g, ''); // Remove non-alphabetic characters
                  setSellerName(onlyLetters);
                }}
                className="block px-2 py-2 w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="sellerAddress"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Seller Address
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="sellerAddress"
                name="sellerAddress"
                value={sellerAddress}
                onChange={(e) => setSellerAddress(e.target.value)}
                className="block px-2 py-2 w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="buyerName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Buyer Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="buyerName"
                name="buyerName"
                value={buyerName}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  const onlyLetters = inputValue.replace(/[^a-zA-Z]/g, ''); // Remove non-alphabetic characters
                  setBuyerName(onlyLetters);
                }}
                className="block px-2 py-2 w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="buyerAddress"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Buyer Address
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="buyerAddress"
                name="buyerAddress"
                value={buyerAddress}
                onChange={(e) => setBuyerAddress(e.target.value)}
                className="block px-2 py-2 w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="propertyAddress"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Property Address
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="propertyAddress"
                name="propertyAddress"
                value={propertyAddress}
                onChange={(e) => setPropertyAddress(e.target.value)}
                className="block px-2 py-2 w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="propertyDescription"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Property Description
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="propertyDescription"
                name="propertyDescription"
                value={propertyDescription}
                onChange={(e) => setPropertyDescription(e.target.value)}
                className="block px-2 py-2 w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="purchasePrice"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Purchase Price
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="purchasePrice"
                name="purchasePrice"
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(e.target.value)}
                className="block px-2 py-2 w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="closingDate"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Closing Date
            </label>
            <div className="mt-2">
              <input
                type="date"
                id="closingDate"
                name="closingDate"
                value={closingDate}
                onChange={(e) => {
                  const selectedDate = new Date(e.target.value);
                  const currentDate = new Date();

                  if (selectedDate < currentDate) {
                    // Display an error message or prevent further action
                    console.log("Closing date cannot be in the past.");
                    return;
                  }

                  // Proceed with handling the selected date
                  setClosingDate(e.target.value);
                }}
                className="block px-2 py-2 w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="termsAndConditions"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Terms and Conditions
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="termsAndConditions"
                name="termsAndConditions"
                value={termsAndConditions}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  const onlyLetters = inputValue.replace(/[^a-zA-Z]/g, ''); // Remove non-alphabetic characters
                  setTermsAndConditions(onlyLetters);
                }}
                className="block px-2 py-2 w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="inspectionDays"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Inspection Days
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="inspectionDays"
                name="inspectionDays"
                value={inspectionDays}
                onChange={(e) => setInspectionDays(e.target.value)}
                className="block px-2 py-2 w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="sellerWitness"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Seller Witness
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="sellerWitness"
                name="sellerWitness"
                value={sellerWitness}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  const onlyLetters = inputValue.replace(/[^a-zA-Z]/g, ''); // Remove non-alphabetic characters
                  setSellerWitness(onlyLetters);
                }}
                className="block px-2 py-2 w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="buyerWitness"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Buyer Witness
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="buyerWitness"
                name="buyerWitness"
                value={buyerWitness}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  const onlyLetters = inputValue.replace(/[^a-zA-Z]/g, ''); // Remove non-alphabetic characters
                  setBuyerWitness(onlyLetters);
                }}
                className="block px-2 py-2 w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit
        </button>
      </div>
    </form>


  );
}
