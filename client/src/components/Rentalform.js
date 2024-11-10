import { useState } from 'react';
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const RentalForm = () => {
    const [effectiveDate, setEffectiveDate] = useState('');
    const [landlordName, setLandlordName] = useState('');
    const [landlordAddress, setLandlordAddress] = useState('');
    const [tenantName, setTenantName] = useState('');
    const [tenantAddress, setTenantAddress] = useState('');
    const [rentalPropertyAddress, setRentalPropertyAddress] = useState('');
    const [startDateOfRent, setStartDateOfRent] = useState('');
    const [rentAmount, setRentAmount] = useState('');
    const [rentDueDay, setRentDueDay] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [lateRentDueDay, setLateRentDueDay] = useState('');
    const [lateFeePercentage, setLateFeePercentage] = useState('');
    const [securityDeposit, setSecurityDeposit] = useState('');
    const [permittedTenants, setPermittedTenants] = useState('');
    const [permittedTenantAge, setPermittedTenantAge] = useState('');
    const [petsPermitted, setPetsPermitted] = useState('');
    const [petSecurityDeposit, setPetSecurityDeposit] = useState('');
    const [petRestrictions, setPetRestrictions] = useState('');
    const [maintenanceRepairForTenant, setMaintenanceRepairForTenant] = useState('');
    const [landlordPhoneNo, setLandlordPhoneNo] = useState('');
    const [landlordEmail, setLandlordEmail] = useState('');
    const [utilitiesForTenant, setUtilitiesForTenant] = useState('');
    const [utilitiesForLandlord, setUtilitiesForLandlord] = useState('');
    const [WitnessName, setWitnessName] = useState('');

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validation logic
        if (
            effectiveDate &&
            landlordName &&
            landlordAddress &&
            tenantName &&
            tenantAddress &&
            rentalPropertyAddress &&
            startDateOfRent &&
            rentAmount &&
            rentDueDay &&
            paymentMethod &&
            lateRentDueDay &&
            lateFeePercentage &&
            securityDeposit &&
            permittedTenants &&
            permittedTenantAge &&
            petsPermitted &&
            petSecurityDeposit &&
            petRestrictions &&
            maintenanceRepairForTenant &&
            landlordPhoneNo &&
            landlordEmail &&
            utilitiesForTenant &&
            utilitiesForLandlord &&
            WitnessName
        ) {
            let result = await
                axios.post("/i/editRentalDocument", {
                    effectiveDate,
                    landlordName,
                    landlordAddress,
                    tenantName,
                    tenantAddress,
                    rentalPropertyAddress,
                    startDateOfRent,
                    rentAmount,
                    rentDueDay,
                    paymentMethod,
                    lateRentDueDay,
                    lateFeePercentage,
                    securityDeposit,
                    permittedTenants,
                    permittedTenantAge,
                    petsPermitted,
                    petSecurityDeposit,
                    petRestrictions,
                    maintenanceRepairForTenant,
                    landlordPhoneNo,
                    landlordEmail,
                    utilitiesForTenant,
                    utilitiesForLandlord,
                    WitnessName
                })
            result = encodeURIComponent(result.data);

            navigate(`/ShowResultDocuments/${result}`)
        } else {
            alert("Please fill in all fields");
        }
    };
    return (
        <form onSubmit={handleSubmit} className="container mx-auto max-w-3xl px-4 py-8 bg-gray-100 shadow-lg rounded-lg">
            <h2 className="text-3xl mb-8 text-center text-grey-600 font-bold">Rental Agreement</h2>
            <div className="grid grid-cols-2 gap-4">
                {/* Left Column */}
                <div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Effective Date:</label>
                        <input
                            type="date"
                            className="form-input mt-1 block px-2 py-2 w-full border border-blue-300 rounded-lg  focus:outline-none focus:border-blue-500"
                            value={effectiveDate}
                            onChange={(e) => setEffectiveDate(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Landlord Name:</label>
                        <input
                            type="text"
                            className="form-input mt-1 block px-2 py-2 w-full border border-blue-300 rounded-lg  focus:outline-none focus:border-blue-500"
                            value={landlordName}
                            onChange={(e) => {
                                const inputValue = e.target.value;
                                const onlyLetters = inputValue.replace(/[^a-zA-Z]/g, ''); // Remove non-alphabetic characters
                                setLandlordName(onlyLetters);
                            }}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Tenant Name:</label>
                        <input
                            type="text"
                            className="form-input mt-1 block px-2 py-2 w-full border border-blue-300 rounded-lg  focus:outline-none focus:border-blue-500"
                            value={tenantName}
                            onChange={(e) => {
                                const inputValue = e.target.value;
                                const onlyLetters = inputValue.replace(/[^a-zA-Z]/g, ''); // Remove non-alphabetic characters
                                setTenantName(onlyLetters);
                            }}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Rental Property Address:</label>
                        <input
                            type="text"
                            className="form-input mt-1 block px-2 py-2 w-full border border-blue-300 rounded-lg  focus:outline-none focus:border-blue-500"
                            value={rentalPropertyAddress}
                            onChange={(e) => setRentalPropertyAddress(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Rent Amount:</label>
                        <input
                            type="text"
                            className="form-input mt-1 block px-2 py-2 w-full border border-blue-300 rounded-lg  focus:outline-none focus:border-blue-500"
                            value={rentAmount}
                            onChange={(e) => setRentAmount(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Late Rent Due Day:</label>
                        <input
                            type="date"
                            className="form-input mt-1 block px-2 py-2 w-full border border-blue-300 rounded-lg  focus:outline-none focus:border-blue-500"
                            value={lateRentDueDay}
                            onChange={(e) => setLateRentDueDay(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Permitted Tenants:</label>
                        <input
                            type="text"
                            className="form-input mt-1 block px-2 py-2 w-full border border-blue-300 rounded-lg  focus:outline-none focus:border-blue-500"
                            value={permittedTenants}
                            onChange={(e) => {
                                const inputValue = e.target.value;
                                const onlyLetters = inputValue.replace(/[^a-zA-Z]/g, ''); // Remove non-alphabetic characters
                                setPermittedTenants(onlyLetters);
                            }}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Pets Permitted:</label>
                        <input
                            type="text"
                            className="form-input mt-1 block px-2 py-2 w-full border border-blue-300 rounded-lg  focus:outline-none focus:border-blue-500"
                            value={petsPermitted}
                            onChange={(e) => setPetsPermitted(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Maintenance and Repair For Tenant:</label>
                        <input
                            type="text"
                            className="form-input mt-1 block px-2 py-2 w-full border border-blue-300 rounded-lg  focus:outline-none focus:border-blue-500"
                            value={maintenanceRepairForTenant}
                            onChange={(e) => setMaintenanceRepairForTenant(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Utilities for Tenant:</label>
                        <input
                            type="text"
                            className="form-input mt-1 block px-2 py-2 w-full border border-blue-300 rounded-lg  focus:outline-none focus:border-blue-500"
                            value={utilitiesForTenant}
                            onChange={(e) => setUtilitiesForTenant(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Utilities for Landlord:</label>
                        <input
                            type="text"
                            className="form-input mt-1 block px-2 py-2 w-full border border-blue-300 rounded-lg  focus:outline-none focus:border-blue-500"
                            value={utilitiesForLandlord}
                            onChange={(e) => setUtilitiesForLandlord(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Witness Name :</label>
                        <input
                            type="text"
                            className="form-input mt-1 block px-2 py-2 w-full border border-blue-300 rounded-lg  focus:outline-none focus:border-blue-500"
                            value={WitnessName}
                            onChange={(e) => {
                                const inputValue = e.target.value;
                                const onlyLetters = inputValue.replace(/[^a-zA-Z]/g, ''); // Remove non-alphabetic characters
                                setWitnessName(onlyLetters);
                            }}
                        />
                    </div>
                </div>

                {/* Right Column */}
                <div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Landlord Address:</label>
                        <input
                            type="text"
                            className="form-input mt-1 block px-2 py-2 w-full border border-blue-300 rounded-lg  focus:outline-none focus:border-blue-500"
                            value={landlordAddress}
                            onChange={(e) => setLandlordAddress(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Tenant Address:</label>
                        <input
                            type="text"
                            className="form-input mt-1 block px-2 py-2 w-full border border-blue-300 rounded-lg  focus:outline-none focus:border-blue-500"
                            value={tenantAddress}
                            onChange={(e) => setTenantAddress(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Start Date of Rent:</label>
                        <input
                            type="date"
                            className="form-input mt-1 block px-2 py-2 w-full border border-blue-300 rounded-lg  focus:outline-none focus:border-blue-500"
                            value={startDateOfRent}
                            onChange={(e) => setStartDateOfRent(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Rent Due Day:</label>
                        <input
                            type="date"
                            className="form-input mt-1 block px-2 py-2 w-full border border-blue-300 rounded-lg  focus:outline-none focus:border-blue-500"
                            value={rentDueDay}
                            onChange={(e) => setRentDueDay(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Payment Method:</label>
                        <select
                            className="form-select mt-1 block px-2 py-2 w-full border border-blue-300 rounded-lg  focus:outline-none focus:border-blue-500"
                            value={paymentMethod}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        >
                            <option value="electronic transfer">Electronic Transfer</option>
                            <option value="check">Check</option>
                            <option value="cash">Cash</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Late Fee Percentage:</label>
                        <input
                            className="form-input mt-1 block px-2 py-2 w-full border border-blue-300 rounded-lg  focus:outline-none focus:border-blue-500"
                            value={lateFeePercentage}
                            onChange={(e) => setLateFeePercentage(e.target.value)}
                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Permitted Tenant Age:</label>
                        <input
                            className="form-input mt-1 block px-2 py-2 w-full border border-blue-300 rounded-lg  focus:outline-none focus:border-blue-500"
                            value={permittedTenantAge}
                            onChange={(e) => setPermittedTenantAge(e.target.value)}
                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Pet Security Deposit:</label>
                        <input
                            className="form-input mt-1 block px-2 py-2 w-full border border-blue-300 rounded-lg  focus:outline-none focus:border-blue-500"
                            value={petSecurityDeposit}
                            onChange={(e) => setPetSecurityDeposit(e.target.value)}
                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Pet Restrictions:</label>
                        <input
                            type="text"
                            className="form-input mt-1 block px-2 py-2 w-full border border-blue-300 rounded-lg  focus:outline-none focus:border-blue-500"
                            value={petRestrictions}
                            onChange={(e) => setPetRestrictions(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Landlord Phone Number:</label>

                        <input className="form-input mt-1 block px-2 py-2 w-full border border-blue-300 rounded-lg  focus:outline-none focus:border-blue-500"
                            value={landlordPhoneNo}
                            onChange={(e) => setLandlordPhoneNo(e.target.value)}
                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="landlordEmail">
                            Landlord Email:
                        </label>
                        <input
                            type="email"
                            id="landlordEmail"
                            className="form-input mt-1 block px-2 py-2 w-full border border-blue-300 rounded-lg focus:outline-none focus:border-blue-500"
                            value={landlordEmail}
                            onChange={(e) => setLandlordEmail(e.target.value)}
                            aria-label="Landlord Email"
                            placeholder="Enter a valid email address"
                        />
                    </div>

                    <button type="submit" className=" mt-10 flex float-end bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">Submit

                    </button>
                </div>


            </div>


        </form>
    );
};

export default RentalForm;


