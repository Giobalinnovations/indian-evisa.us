'use client';
import PartiallyFillForm from '@/components/homePage/PartiallyFillForm';
import PaymentForCompletedForm from '@/components/homePage/PaymentForCompletedForm';
import VisaStatusForm from '@/components/homePage/VisaStatusForm';
import ApplySection from '@/components/india/homepage/ApplySection';
import Banner from '@/components/india/homepage/Banner';
import { useFormContext } from '@/context/formContext';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  FaArrowRight,
  FaEdit,
  FaCreditCard,
  FaClipboardCheck,
} from 'react-icons/fa';

const Home = () => {
  const { dispatch } = useFormContext();
  const [isPaymentForCompletedFormOpen, setPaymentForCompletedFormOpen] =
    useState(false);
  const [isPartiallyFillFormOpen, setPartiallyFillFormOpen] = useState(false);
  const [isVisaStatusFormOpen, setVisaStatusFormOpen] = useState(false);

  const handlePartiallyFillFormOpen = () => {
    setPartiallyFillFormOpen(prev => !prev);
  };

  const handlePaymentForCompletedFormOpen = () => {
    setPaymentForCompletedFormOpen(prev => !prev);
  };
  const handleVisaStatusFormOpen = () => {
    setVisaStatusFormOpen(prev => !prev);
  };

  useEffect(() => {
    localStorage.removeItem('formId');
  }, [dispatch]);

  const actionButtons = [
    {
      title: 'Apply For INDIA',
      subtitle: 'Start New Application',
      icon: <FaArrowRight className="w-5 h-5" />,
      href: '/visa/step-one',
      gradientFrom: 'from-primary',
      gradientTo: 'to-tertiary',
    },
    {
      title: 'Amend or Complete',
      subtitle: 'Partially Filled Form',
      icon: <FaEdit className="w-5 h-5" />,
      onClick: () => setPartiallyFillFormOpen(true),
      gradientFrom: 'from-accent',
      gradientTo: 'to-tertiary',
    },
    {
      title: 'Make Payment',
      subtitle: 'For Completed Form',
      icon: <FaCreditCard className="w-5 h-5" />,
      onClick: () => setPaymentForCompletedFormOpen(true),
      gradientFrom: 'from-success',
      gradientTo: 'to-tertiary',
    },
    {
      title: 'Visa Status',
      subtitle: 'Check Application Status',
      icon: <FaClipboardCheck className="w-5 h-5" />,
      onClick: () => setVisaStatusFormOpen(true),
      gradientFrom: 'from-warning',
      gradientTo: 'to-tertiary',
    },
  ];

  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100">
        {/* Background Decorations */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-primary/5 via-transparent to-tertiary/5"></div>
        <div className="absolute inset-0 bg-repeat pointer-events-none bg-hex-pattern opacity-5"></div>

        {/* Main Content */}
        <Banner />

        {/* Action Buttons Section */}
        <div className="container relative w-full py-10 mx-auto">
          <div className="grid grid-cols-1 gap-6 px-4 md:px-6 lg:px-8 md:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
            {actionButtons.map((button, index) =>
              button.href ? (
                <Link key={index} href={button.href} className="h-full group">
                  <ActionButton {...button} />
                </Link>
              ) : (
                <button
                  key={index}
                  onClick={button.onClick}
                  className="w-full h-full group"
                >
                  <ActionButton {...button} />
                </button>
              )
            )}
          </div>
        </div>

        <ApplySection />
      </div>

      {/* Modals */}
      <PartiallyFillForm
        isFormModalOpen={isPartiallyFillFormOpen}
        handleFormModal={handlePartiallyFillFormOpen}
      />
      <PaymentForCompletedForm
        isFormModalOpen={isPaymentForCompletedFormOpen}
        handleFormModal={handlePaymentForCompletedFormOpen}
      />
      <VisaStatusForm
        isFormModalOpen={isVisaStatusFormOpen}
        handleFormModal={handleVisaStatusFormOpen}
      />
    </>
  );
};

// ActionButton component
const ActionButton = ({ title, subtitle, icon, gradientFrom, gradientTo }) => (
  <div className="relative flex flex-col h-full p-6 transition-all duration-300 bg-white border border-transparent rounded-xl hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 group-hover:scale-[1.02]">
    <div
      className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradientFrom} ${gradientTo}/5 to-transparent rounded-bl-full -z-10`}
    ></div>
    <div className="flex flex-col items-center justify-center flex-grow space-y-3 text-center">
      <span className="text-lg font-semibold text-gray-800">{title}</span>
      <span className="text-sm text-gray-500">{subtitle}</span>
      <span
        className={`inline-flex items-center justify-center w-10 h-10 text-white transition-transform duration-300 rounded-full bg-gradient-to-r ${gradientFrom} ${gradientTo} group-hover:scale-110`}
      >
        {icon}
      </span>
    </div>
  </div>
);

export default Home;
