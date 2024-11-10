import fs from 'fs';

// const {PatchType, Paragraph,patchDocument,TextRun} = require('docx');
import { PatchType,Paragraph,patchDocument,TextRun} from 'docx';

const editPropertyDocx = async (sellerName,sellerAddress,buyerName,buyerAddress,propertyAddress,propertyDescription,purchasePrice,closingDate,termsAndConditions,inspectionDays,sellerWitness,buyerWitness) => {
   
    try {
        const doc = await patchDocument(fs.readFileSync('../public/PropertyAggrement.docx'), {
            patches: {
                Date: {
                    type: PatchType.PARAGRAPH,
                    children: [
                        new TextRun( Date() ),
                    ],
                },
                SellerName:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(sellerName),
                    ],
                },
                SellerAddress:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(sellerAddress),
                    ],
                },
                BuyerName:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(buyerName),
                    ],
                },
                BuyerAddress:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(buyerAddress),
                    ],
                },
                AddressofProperty:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(propertyAddress),
                    ],
                },
                DescriptionofProperty:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(propertyDescription),
                    ],
                },
                PurchasePrice:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(purchasePrice),
                    ],
                },
                ClosingDate:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(closingDate),
                    ],
                },
                TermsandConditionofProperty:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(termsAndConditions),
                    ],
                },
                InspectionNumberOfDays:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(inspectionDays),
                    ],
                },
                SellerWitness:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(sellerWitness),
                    ],
                },
                BuyerWitness:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(buyerWitness),
                    ],
                },
                Date:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun( Date() ),
                    ],
                },
                
            },
        });
        fs.writeFileSync('ProertyResult.docx', doc);
    } catch (error) {
        console.error("Error:", error);
    }

};
// editPropertyDocx()
//     .then(() => {
//         console.log('Property Document edited successfully.');
//     })
//     .catch((error) => {
//         console.error(`Failed to edit Property document: ${error}`);
//     });

const editRentalDocument = async ( 
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
    WitnessName) => {
    try {
        const doc = await patchDocument(fs.readFileSync('../public/Rental contract.docx'), {
            patches: {
                EffectiveDate: {
                    type: PatchType.PARAGRAPH,
                    children: [
                        new TextRun(effectiveDate ),
                    ],
                },
                LandLord:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(landlordName),
                    ],
                },
                LandLordAddress:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(landlordAddress),
                    ],
                },
                Tenant:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(tenantName),
                    ],
                },
                TenantAddress:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(tenantAddress),
                    ],
                },
                RentalPropertyAddress:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(rentalPropertyAddress),
                    ],
                },
                startDateOfRent:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(startDateOfRent),
                    ],
                },
                rentAmount:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(rentAmount),
                    ],
                },
                rentDueDay:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(rentDueDay),
                    ],
                },
                paymentMethod:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(paymentMethod),
                    ],
                },
                lateRentDueDay:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(lateRentDueDay),
                    ],
                },
                lateFeePercentage:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(lateFeePercentage),
                    ],
                },
                securityDeposit:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(securityDeposit),
                    ],
                }, 
                permittedTenants:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(permittedTenants),
                    ],
                }, 
                permittedTenantAge:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(permittedTenantAge),
                    ],
                }, 
                petsPermitted:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(petsPermitted),
                    ],
                }, 
                petSecurityDeposit:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(petSecurityDeposit),
                    ],
                },
                petRestrictions:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(petRestrictions),
                    ],
                },
                maintenanceRepairForTenant:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(maintenanceRepairForTenant),
                    ],
                },
                landlordPhoneNo:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(landlordPhoneNo),
                    ],
                },
                landlordEmail:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(landlordEmail),
                    ],
                },
                utilitiesForTenant:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(utilitiesForTenant),
                    ],
                },
                utilitiesForLandlord:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(utilitiesForLandlord),
                    ],
                },
                EffectiveDate:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(Date()),
                    ],
                },
                EffectiveDate:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(Date()),
                    ],
                },
                WitnessName:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(WitnessName),
                    ],
                },
                EffectiveDate:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(Date()),
                    ],
                },
            },
        });
        fs.writeFileSync('Rental Result.docx', doc);
    } catch (error) {
        console.error("Error:", error);
    }

};
// editRentalDocument()
//     .then(() => {
//         console.log('Rental Document edited successfully.');
//     })
//     .catch((error) => {
//         console.error(`Failed to edit Rental document: ${error}`);
//     });

const editCarSaleDocument = async (
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
    WitnessName ) => {

    try {
        const doc = await patchDocument(fs.readFileSync('../public/CarSaleAggrement.docx'), {
            patches: {

                SellerName:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(SellerName),
                    ],
                },
                SellerAddress:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(SellerAddress),
                    ],
                },
                SellerPhoneNo:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(SellerPhoneNo),
                    ],
                },
                SellerEmail:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(SellerEmail),
                    ],
                },
                BuyerName:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(BuyerName),
                    ],
                },
                BuyerAddress:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(BuyerAddress),
                    ],
                },
                BuyerPhoneNo:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(BuyerPhoneNo),
                    ],
                },
                BuyerEmail:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(BuyerEmail),
                    ],
                },
                MakeofCar:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(MakeofCar),
                    ],
                },
                ModelofCar:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(ModelofCar),
                    ],
                },
                YearofManufacture:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(YearofManufacture),
                    ],
                },
                VINNumber:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(VINNumber),
                    ],
                },
                Mileage:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(Mileage),
                    ],
                },
                ColorofCar:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(ColorofCar),
                    ],
                },
                RegistrationNumber:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(RegistrationNumber),
                    ],
                },
                EngineNumber:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(EngineNumber),
                    ],
                },
                PurchasePrice:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(PurchasePrice),
                    ],
                },
                DepositAmount:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(DepositAmount),
                    ],
                },
                RemainingBalanceAmount:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(RemainingBalanceAmount),
                    ],
                },
                PaymentMethod:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(PaymentMethod),
                    ],
                },
                DateofDelivery:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(DateofDelivery),
                    ],
                },
                DeliveryLocation:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(DeliveryLocation),
                    ],
                },
                EffectiveDate:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(EffectiveDate),
                    ],
                },
                EffectiveDate:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(EffectiveDate),
                    ],
                },
                WitnessName:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(WitnessName),
                    ],
                },
                EffectiveDate:
                {
                    type:PatchType.PARAGRAPH,
                    children: [
                        new TextRun(EffectiveDate),
                    ],
                },
               
            },
        });
        fs.writeFileSync('Car Sale Aggrement Result.docx', doc);
    } catch (error) {
        console.error("Error:", error);
    }
    
};

// editCarSaleDocument()
//     .then(() => {
//         console.log('Car Sale Document edited successfully.');
//     })
//     .catch((error) => {
//         console.error(`Failed to edit Car Sale document: ${error}`);
//     });
    
export {editPropertyDocx,editCarSaleDocument,editRentalDocument}