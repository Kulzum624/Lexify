import { useState } from "react";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function CarForm() {
  const [SellerName, setSellerName] = useState("");
  const [SellerAddress, setSellerAddress] = useState("");
  const [SellerPhoneNo, setSellerPhoneNo] = useState("");
  const [SellerEmail, setSellerEmail] = useState("");
  const [BuyerName, setBuyerName] = useState("");
  const [BuyerAddress, setBuyerAddress] = useState("");
  const [BuyerPhoneNo, setBuyerPhoneNo] = useState("");
  const [BuyerEmail, setBuyerEmail] = useState("");
  const [MakeofCar, setMakeofCar] = useState("");
  const [ModelofCar, setModelofCar] = useState("");
  const [YearofManufacture, setYearofManufacture] = useState("");
  const [VINNumber, setVINNumber] = useState("");
  const [Mileage, setMileage] = useState("");
  const [ColorofCar, setColorofCar] = useState("");
  const [RegistrationNumber, setRegistrationNumber] = useState("");
  const [EngineNumber, setEngineNumber] = useState("");
  const [PurchasePrice, setPurchasePrice] = useState("");
  const [DepositAmount, setDepositAmount] = useState("");
  const [RemainingBalanceAmount, setRemainingBalanceAmount] = useState("");
  const [PaymentMethod, setPaymentMethod] = useState("");
  const [DateofDelivery, setDateofDelivery] = useState("");
  const [DeliveryLocation, setDeliveryLocation] = useState("");
  const [EffectiveDate, setEffectiveDate] = useState("");
  const [WitnessName, setWitnessName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation logic
    if (
      SellerName &&
      SellerAddress &&
      SellerPhoneNo &&
      SellerEmail &&
      BuyerName &&
      BuyerAddress &&
      BuyerPhoneNo &&
      BuyerEmail &&
      MakeofCar &&
      ModelofCar &&
      YearofManufacture &&
      VINNumber &&
      Mileage &&
      ColorofCar &&
      RegistrationNumber &&
      EngineNumber &&
      PurchasePrice &&
      DepositAmount &&
      RemainingBalanceAmount &&
      PaymentMethod &&
      DateofDelivery &&
      DeliveryLocation &&
      EffectiveDate &&
      WitnessName
    ) {

      let result = await
        axios.post("/i/editCarSaleDocument", {
          SellerName,
          SellerAddress,
          SellerPhoneNo,
          SellerEmail,
          BuyerName,
          BuyerAddress,
          BuyerPhoneNo,
          BuyerEmail,
          MakeofCar,
          ModelofCar,
          YearofManufacture,
          VINNumber,
          Mileage,
          ColorofCar,
          RegistrationNumber,
          EngineNumber,
          PurchasePrice,
          DepositAmount,
          RemainingBalanceAmount,
          PaymentMethod,
          DateofDelivery,
          DeliveryLocation,
          EffectiveDate,
          WitnessName
        })
      // Form submission logic

      result = encodeURIComponent(result.data);

      navigate(`/ShowResultDocuments/${result}`)
    } else {
      alert("Please fill in all fields");
    }
  };

  return (

    <form onSubmit={handleSubmit} className="container mx-auto max-w-3xl px-4 py-8 bg-gray-100 shadow-lg rounded-lg">
      <h2 className="text-3xl mb-8 text-center text-grey-600 font-bold">Car Sale Agreement</h2>

      <div>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="SellerName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Seller Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="SellerName"
                name="SellerName"
                value={SellerName}
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
              htmlFor="SellerAddress"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Seller Address
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="SellerAddress"
                name="SellerAddress"
                value={SellerAddress}
                onChange={(e) => setSellerAddress(e.target.value)}
                className="block px-2 py-2 w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="SellerPhoneNo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Seller Phone Number
            </label>
            <div className="mt-2">
              <input

                id="SellerPhoneNo"
                name="SellerPhoneNo"
                value={SellerPhoneNo}
                onChange={(e) => setSellerPhoneNo(e.target.value)}
                className="block px-2 py-2 w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}

              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="SellerEmail"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Seller Email
            </label>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="SellerEmail">
                Seller Email:
              </label>
              <input
                type="email"
                id="SellerEmail"
                className="form-input mt-1 block px-2 py-2 w-full border border-blue-300 rounded-lg focus:outline-none focus:border-blue-500"
                value={SellerEmail}
                onChange={(e) => setSellerEmail(e.target.value)}
                aria-label="Seller Email"
                placeholder="Enter a valid email address"
              />
            </div>

          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="BuyerName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Buyer Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="BuyerName"
                name="BuyerName"
                value={BuyerName}
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
              htmlFor="BuyerAddress"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Buyer Address
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="BuyerAddress"
                name="BuyerAddress"
                value={BuyerAddress}
                onChange={(e) => setBuyerAddress(e.target.value)}
                className="block px-2 py-2 w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="BuyerPhoneNo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Buyer Phone Number
            </label>
            <div className="mt-2">
              <input

                id="BuyerPhoneNo"
                name="BuyerPhoneNo"
                value={BuyerPhoneNo}
                onChange={(e) => setBuyerPhoneNo(e.target.value)}
                className="block px-2 py-2 w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="BuyerEmail"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Buyer Email
            </label>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="BuyerEmail">
                 Buyer Email:
              </label>
              <input
                type="email"
                id="BuyerEmail"
                className="form-input mt-1 block px-2 py-2 w-full border border-blue-300 rounded-lg focus:outline-none focus:border-blue-500"
                value={BuyerEmail}
                onChange={(e) => setBuyerEmail(e.target.value)}
                aria-label="Buyer Email"
                placeholder="Enter a valid email address"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="MakeofCar"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Make of Car
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="MakeofCar"
                name="MakeofCar"
                value={MakeofCar}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  const onlyLetters = inputValue.replace(/[^a-zA-Z]/g, ''); // Remove non-alphabetic characters
                  setMakeofCar(onlyLetters);
                }}
                className="block px-2 py-2 w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="ModelofCar"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Model of Car
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="ModelofCar"
                name="ModelofCar"
                value={ModelofCar}
                onChange={(e) => setModelofCar(e.target.value)}
                className="block px-2 py-2 w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="YearofManufacture"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Year of Manufacture
            </label>
            <div className="mt-2">
              <input
                id="YearofManufacture"
                name="YearofManufacture"
                value={YearofManufacture}
                onChange={(e) => setYearofManufacture(e.target.value)}
                className="block px-2 py-2 w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="VINNumber"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Vehicle Identification Number
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="VINNumber"
                name="VINNumber"
                value={VINNumber}
                onChange={(e) => setVINNumber(e.target.value)}
                className="block px-2 py-2 w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="Mileage"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Mileage
            </label>
            <div className="mt-2">
              <input

                id="Mileage"
                name="Mileage"
                value={Mileage}
                onChange={(e) => setMileage(e.target.value)}
                className="block px-2 py-2 w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="ColorofCar"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Color of Car
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="ColorofCar"
                name="ColorofCar"
                value={ColorofCar}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  const onlyLetters = inputValue.replace(/[^a-zA-Z]/g, ''); // Remove non-alphabetic characters
                  setColorofCar(onlyLetters);
                }}
                className="block px-2 py-2 w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="RegistrationNumber"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Registration Number
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="RegistrationNumber"
                name="RegistrationNumber"
                value={RegistrationNumber}
                onChange={(e) => setRegistrationNumber(e.target.value)}
                className="block px-2 py-2 w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="EngineNumber"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Engine Number
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="EngineNumber"
                name="EngineNumber"
                value={EngineNumber}
                onChange={(e) => setEngineNumber(e.target.value)}
                className="block px-2 py-2 w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="PurchasePrice"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Purchase Price
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="PurchasePrice"
                name="PurchasePrice"
                value={PurchasePrice}
                onChange={(e) => setPurchasePrice(e.target.value)}
                className="block px-2 py-2 w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="DepositAmount"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Deposit Amount
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="DepositAmount"
                name="DepositAmount"
                value={DepositAmount}
                onChange={(e) => setDepositAmount(e.target.value)}
                className="block px-2 py-2 w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="RemainingBalanceAmount"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Remaining Balance Amount
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="RemainingBalanceAmount"
                name="RemainingBalanceAmount"
                value={RemainingBalanceAmount}
                onChange={(e) => setRemainingBalanceAmount(e.target.value)}
                className="block px-2 py-2 w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="PaymentMethod"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Payment Method
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="PaymentMethod"
                name="PaymentMethod"
                value={PaymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="block px-2 py-2 w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="DateofDelivery"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Date of Delivery
            </label>
            <div className="mt-2">
              <input
                type="date"
                id="DateofDelivery"
                name="DateofDelivery"
                value={DateofDelivery}
                onChange={(e) => setDateofDelivery(e.target.value)}
                className="block px-2 py-2 w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="DeliveryLocation"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Delivery Location
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="DeliveryLocation"
                name="DeliveryLocation"
                value={DeliveryLocation}
                onChange={(e) => setDeliveryLocation(e.target.value)}
                className="block px-2 py-2 w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="EffectiveDate"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Effective Date
            </label>
            <div className="mt-2">
              <input
                type="date"
                id="EffectiveDate"
                name="EffectiveDate"
                value={EffectiveDate}
                onChange={(e) => setEffectiveDate(e.target.value)}
                className="block px-2 py-2 w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="WitnessName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Witness Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="WitnessName"
                name="WitnessName"
                value={WitnessName}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  const onlyLetters = inputValue.replace(/[^a-zA-Z]/g, ''); // Remove non-alphabetic characters
                  setWitnessName(onlyLetters);
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
