import React from 'react';

export const metadata = {
  title: 'Cookie Policy',
  description: 'Cookie Policy',
  alternates: {
    canonical: '/cookie-policy',
  },
};

const page = () => {
  return (
    <div className="bg-white lg:pt-24 lg:py-10 lg:px-0 px-4 md:pt-28 md:pb-0 pt-28 pb-12 container">
      <div className="mx-auto">
        <h1 className="text-4xl lg:py-6 font-semibold mb-3">Cookie Policy</h1>
        <p className="text-base my-2 text-justify font-medium leading-relaxed">
          Our platform uses cookies and similar technologies to enhance your
          browsing experience. These digital tools help us analyze user
          behavior, remember your preferences, and provide personalized
          services. By using our platform, you consent to our use of cookies in
          accordance with this policy.
        </p>
        <p className="text-base my-4 text-justify font-medium leading-relaxed">
          You can manage cookie preferences through your browser settings.
          Please note that disabling certain cookies may limit your access to
          some features of our platform.
        </p>
      </div>
    </div>
  );
};

export default page;
