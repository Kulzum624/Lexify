import React from "react";
import './App.css';
import DisplayDoc from "./components/DocumentView.js";
import Drop from "./components/dropdown.js";
import PropertyAgreement from "./components/PropertyAgreement.js";
import RentalAgreement from "./components/RentalAgreement.js";
import SaleofCarAgreement from "./components/SaleofCarAgreement.js";
import DisplayResultDoc from "./components/ResultDocument.js";
import {
  Home,
  BlogPage,
  BlogContentPage,
  AboutContentPage,
  ArticlePage,
  FaqContent,
  FaqVideoContent,
  PricingContent,
  SigninPage,
  CheckoutContent,
  MembershipContent,
} from "../src/pages";
import { Success, Cancel, Legaldocs, BookSearch, CheckoutM, CheckoutY, Mentorship, Guides } from "./components";
import useFetch from "./hooks/useFetch";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "@stripe/stripe-js";
import { Navbar } from "./components";
import Dashboard from './components/Dashboard';
import Logout from './components/Logout';
import NotFound from './components/NotFound';
//import Home from './components/Home';
import Private from './Private';
import VerifyOtp from './components/VerifyOtp';
import VerifyOtp2 from './components/VerifyOtp2';
import ForgotPassword from './components/ForgotPassword';
import AdminDashboard from './components/AdminDashboard';
import LawyerDashboard from './components/LawyerDashboard';
import ManageUser from './components/ManageUser';
import ManageLawyer from './components/ManageLawyer';
import NavigationBar from './components/NavigationBar';
import ViewLawyer from './components/ViewLawyer';
import MakeAppointment from './components/AppointmentForm';
import AcceptAppointment from './components/AcceptAppointment';
import Room from './components/Room';
import Unauthorized from './components/Unauthorized';
import UserFeedback from './components/UserFeedback';
import freeslot from './components/ManageFreeSlots';
import Login from './components/Login';
import JoinRoom from './components/JoinRoom';
import Register from './components/Register';


export default function App() {
  const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(true);
  const [userType, setUserType] = useState('');
  const [email, setEmail] = useState('');
  const isLoggedIn = async () => {
    try {
      const res = await fetch('/auth', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      if (res.status === 200) {
        const result = await res.json();
        setUserType(result.userType);
        if (result.email) { setEmail(result.email) }
        setauth(true)
        setauth1(false)
      }

      if (res.status === 401) {
        setauth(false)
        setauth1(true)
      }
    } catch (error) {
      console.log(error)
      setauth(false)
      setauth1(true)
      setUserType("");
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, [])


  const { loading, data, error } = useFetch(
    "http://localhost:1337/api/blogs?populate=*"
  );

  if (loading) return <p>Loading...</p>;

  // if (error) {
  //   return (
  //     <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
  //       <div className="text-center">
  //         <p className="text-base font-semibold text-indigo-600">404</p>
  //         <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
  //           Page not found
  //         </h1>
  //         <p className="mt-6 text-base leading-7 text-gray-600">
  //           Sorry, we couldn’t find the page you’re looking for.
  //         </p>
  //         <div className="mt-10 flex items-center justify-center gap-x-6">
  //           <a
  //             href="/"
  //             className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  //           >
  //             Go back home
  //           </a>
  //           <a href="/" className="text-sm font-semibold text-gray-900">
  //             Contact support <span aria-hidden="true">&rarr;</span>
  //           </a>
  //         </div>
  //       </div>
  //       <div
  //         className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
  //         aria-hidden="true"
  //       >
  //         <div
  //           className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
  //           style={{
  //             clipPath:
  //               "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
  //           }}
  //         ></div>
  //       </div>
  //       <div
  //         className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
  //         aria-hidden="true"
  //       >
  //         <div
  //           className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
  //           style={{
  //             clipPath:
  //               "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
  //           }}
  //         ></div>
  //       </div>
  //     </main>
  //   );
  // }

  return (
    <div>
      <div>

        <nav>
          {auth1 ? (
            <>
              <Navbar />
            </>
          ) : (
            <div>
              <NavigationBar userType={userType} email={email} />
            </div>
          )}
        </nav>


      </div>

      <div>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutContentPage />} />
          <Route path="/blog" element={<BlogPage blogs={data} />} />
          <Route path="/blog/:id" element={<BlogContentPage blogs={data} />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/faqs" element={<FaqContent />} />
          <Route path="/faqvideoseries" element={<FaqVideoContent />} />


          <Route path="/property-agreement" element={<PropertyAgreement />} />
          <Route path="/rental-agreement" element={<RentalAgreement />} />
          <Route path="/saleofcar-agreement" element={<SaleofCarAgreement />} />
          <Route path="/ShowLegalDocuments/:uri/:to" element={<DisplayDoc />} />
          <Route path="/ShowResultDocuments/:uri" element={<DisplayResultDoc />} />


          <Route path="/checkout" index element={<CheckoutContent />} />
          <Route path="/checkoutM" index element={<CheckoutM />} />
          <Route path="/checkoutY" index element={<CheckoutY />} />
          <Route path="success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />


          <Route path="/user/books" element={<Private component={BookSearch} auth={auth} userType={userType} />} />
          <Route path="/user/legalmentorship" element={<Private component={Mentorship} auth={auth} userType={userType} />} />
          <Route path="/user/guides" element={<Private component={Guides} auth={auth} userType={userType} />} />
          <Route path="/user/membership" element={<Private component={MembershipContent} auth={auth} userType={userType} />} />
          <Route path="/user/legaldocuments" element={<Private component={Drop} auth={auth} userType={userType} />} />
          <Route path="/user/subscriptionbox/pricing" element={<Private component={PricingContent} auth={auth} userType={userType} />} />
          <Route path="/user/lawyer-feedback" element={<Private component={UserFeedback} auth={auth} userType={userType} />} />
          <Route path="/user/dashboard" element={<Private component={Dashboard} auth={auth} userType={userType} />} />
          <Route path="/user/view-lawyer" element={<Private component={ViewLawyer} auth={auth} userType={userType} />} />
          <Route path="/user/make-appointment/:lawyer_email/:lawyer_name" element={<Private component={MakeAppointment} auth={auth} userType={userType} />} />
          <Route path="/admin/dashboard" element={<Private component={AdminDashboard} auth={auth} userType={userType} />} />
          <Route path="/lawyer/dashboard/:email" element={<Private component={LawyerDashboard} auth={auth} userType={userType} />} />
          {/* <Route path="/lawyer/dashboard" element={<Private component={LawyerDashboard} auth={auth} userType={userType} />} /> */}
          <Route path="/lawyer/accept-appointment" element={<Private component={AcceptAppointment} auth={auth} userType={userType} />} />
          <Route path="/lawyer/free-slots" element={<Private component={freeslot} auth={auth} userType={userType} />} />
          <Route path="/admin/manage-user" element={<Private component={ManageUser} auth={auth} userType={userType} />} />
          <Route path="/admin/manage-lawyer" element={<Private component={ManageLawyer} auth={auth} userType={userType} />} />

          <Route path="/logout" element={<Private component={Logout} auth={auth} userType={""} />} />
          <Route path="/login" element={<Private component={Login} auth={auth1} userType={""} />} />
          <Route path="/register" element={<Private component={Register} auth={auth1} userType={""} />} />
          <Route path="/login" element={<Private component={SigninPage} auth={auth1} userType={""} />} />



          <Route path="/join-room" element={<JoinRoom />} />
          <Route path="/verify-otp/:email" element={<VerifyOtp />} />
          <Route path="/verify-otp" element={<VerifyOtp2 />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/room/:roomId" element={<Room />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}
