import React from 'react';

export const metadata = {
  title: 'Cancellation and Refund Policy',
  description: 'Cancellation and Refund Policy',
  alternates: {
    canonical: '/cancellation-and-refund-policy',
  },
};

const page = () => {
  return (
    <div className="bg-white lg:pt-24 lg:py-10 lg:px-0 px-4 md:pt-28 md:pb-0 pt-28 pb-12 container">
      <div className="mx-auto">
        <h1 className="text-4xl lg:py-6 font-semibold mb-3">
          Cancellation Policy
        </h1>
        <p className="text-base my-2 text-justify font-medium leading-relaxed">
          We understand that circumstances may require cancellation of visa
          applications. Cancellation requests must be submitted promptly through
          our designated channels. Administrative fees may be retained for
          processing costs.
        </p>
      </div>

      <div className="mx-auto mt-7">
        <h3 className="font-bold text-lg mt-2">Refund Policy</h3>
        <p className="text-base my-2 text-justify mb-5 font-medium leading-relaxed">
          Refund eligibility is assessed based on the stage of application
          processing and applicable service terms. Processing fees and
          third-party charges may be non-refundable. Each refund request is
          evaluated on a case-by-case basis.
        </p>
      </div>
    </div>
  );
};

export default page;
