const express = require("express");
const router = express.Router();
const {
  editPropertyDocx,
  editRentalDocument,
  editCarSaleDocument,
} = require("./Documentedit");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

// Configure Cloudinary with your cloud name, API key, and API secret
cloudinary.config({
  cloud_name: "dpc8ppirb",
  api_key: "915433873543194",
  api_secret: "y9hLTFz4dbCNnLI_t_8FqBlSfqM",
});

router.post("/editPropertyDocx", async (req, res) => {
  try {
    const {
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
      buyerWitness,
    } = req.body;

    // Edit the property document
    await editPropertyDocx(
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
    );
    console.log (req.body);

    // Upload the edited document to Cloudinary
    const result = await cloudinary.uploader.upload("ProertyResult.docx", {
      resource_type: "raw",
      folder: "DocumentResults"
    });

    // Send the secure URL to the uploaded file in the response
    res
      .status(200)
      .send(
      result.secure_url
      );
  } catch (error) {
    console.error(`Failed to edit Property document: ${error}`);
    res.status(500).send(`Failed to edit Property document: ${error}`);
  }
});
router.post("/editRentalDocument", async (req, res) => {
  try {
    const {
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
      WitnessName,
    } = req.body;

    // Edit the property document
    await editRentalDocument(
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
    );

    // Upload the edited document to Cloudinary
    const result = await cloudinary.uploader.upload("Rental Result.docx", {
      resource_type: "raw",
      folder: "DocumentResults"

    });

    // Send the secure URL to the uploaded file in the response
    res
      .status(200)
      .send(result.secure_url);
  } catch (error) {
    console.error(`Failed to edit Rental document: ${error}`);
    res.status(500).send(error);
  }
});
router.post("/editCarSaleDocument", async (req, res) => {
  try {
    const {
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
      WitnessName,
    } = req.body;
    // Edit the property document
    await editCarSaleDocument(
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
    );

    // Upload the edited document to Cloudinary
    const result = await cloudinary.uploader.upload("CarSaleResult.docx", {
      resource_type: "raw",
      folder: "DocumentResults"

    });
    // Send the secure URL to the uploaded file in the response
    res
      .status(200)
      .send(result.secure_url);
  } catch (error) {
    console.error(`Failed to edit Rental document: ${error}`);
    res.status(500).send(`Failed to edit Rental document: ${error}`);
  }
});

module.exports = router;