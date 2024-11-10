import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
import "../App.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Options() {
  const Propertyform=encodeURIComponent("/property-agreement")
  const Rentalform=encodeURIComponent("/rental-agreement")
  const CarSaleform=encodeURIComponent("/saleofcar-agreement")
  
  const PropertyDocumentDisplay=encodeURIComponent("https://res.cloudinary.com/dpc8ppirb/raw/upload/v1715458537/Legal%20Documents/PropertyAggrement_lsxwqd.docx")
  const RentalDocumentDisplay=encodeURIComponent("https://res.cloudinary.com/dpc8ppirb/raw/upload/v1715458538/Legal%20Documents/Rental_contract_x06yh0.docx")
  const CarDocumentDisplay=encodeURIComponent("https://res.cloudinary.com/dpc8ppirb/raw/upload/v1715458537/Legal%20Documents/CarSaleAggrement_zbgytt.docx")
  return (
    <div className="flex justify-center">
      <Menu as="div" className="relative inline-block text-left ">
        <div>
          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
             Legal Documents
            {/* <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            /> */}
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to={`/ShowLegalDocuments/${PropertyDocumentDisplay}/${Propertyform}`}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Property Agreement
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to={`/ShowLegalDocuments/${RentalDocumentDisplay}/${Rentalform}`}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Rental Agreement
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to={`/ShowLegalDocuments/${CarDocumentDisplay}/${CarSaleform}`}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Sale of Car Agreement
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      
    </div>
  );
}
