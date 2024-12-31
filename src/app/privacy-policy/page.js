// Add metadata
export const metadata = {
  title: 'Privacy Policy',
  description:
    'Learn about how we collect, use, and protect your personal information',
  alternates: {
    canonical: '/privacy-policy',
  },
};

const page = () => {
  return (
    <div className="container px-4 pb-12 bg-white lg:pt-24 lg:py-10 lg:px-0 md:pt-28 md:pb-0 pt-28">
      <div className="mx-auto">
        <h1 className="mb-3 text-4xl font-semibold lg:py-6">Privacy Policy</h1>
        <p className="my-2 text-base font-medium leading-relaxed text-justify">
          Welcome to our Privacy Policy. We prioritize the protection of your
          personal information and strive to maintain transparency about how we
          collect, use, and safeguard your data. This policy applies to all our
          services and digital platforms.
        </p>
      </div>

      <div className="mx-auto mt-7">
        <h3 className="mt-2 text-lg font-bold">Information Collection</h3>
        <p className="my-2 mb-5 text-base font-medium leading-relaxed text-justify">
          We collect personal information when you use our services, including
          during registration, visa applications, or customer support
          interactions. This may include your name, contact details, passport
          information, and travel details. All information collection is
          strictly for service provision and legal compliance purposes.
        </p>
      </div>

      <div className="mx-auto mt-7">
        <h3 className="mt-5 text-lg font-bold">Technical Information</h3>
        <p className="my-2 text-base font-medium text-justify">
          Our systems automatically collect certain technical data such as
          browser type, device information, and interaction patterns with our
          platform. This helps us optimize our services and enhance user
          experience.
        </p>
      </div>

      <div className="mx-auto mt-7">
        <h3 className="mt-2 text-lg font-bold">Cookie Usage</h3>
        <p className="my-2 text-base font-medium leading-relaxed text-justify">
          We utilize cookies and similar technologies to improve site
          functionality and user experience. These tools help us understand
          usage patterns and provide personalized services. Users can manage
          cookie preferences through their browser settings.
        </p>
      </div>

      <div className="mx-auto mt-7">
        <h3 className="mt-5 text-lg font-bold">Data Protection</h3>
        <p className="my-2 mb-5 text-base font-medium leading-relaxed text-justify">
          We implement robust security measures to protect your information from
          unauthorized access, alteration, or disclosure. Our security protocols
          are regularly updated to maintain the highest standards of data
          protection.
        </p>
      </div>

      <div className="mx-auto mt-7">
        <h3 className="mt-2 text-lg font-bold">Information Sharing</h3>
        <p className="my-2 text-base font-medium leading-relaxed text-justify">
          Your personal information is shared only when necessary for service
          provision or when required by law. We never sell personal data to
          third parties.
        </p>
      </div>

      <div className="mx-auto mt-7">
        <h3 className="mt-2 text-lg font-bold">Policy Updates</h3>
        <p className="my-2 text-base font-medium leading-relaxed text-justify">
          This privacy policy may be updated periodically to reflect changes in
          our practices or regulatory requirements. We encourage users to review
          this policy regularly to stay informed about how we protect their
          information.
        </p>
      </div>
    </div>
  );
};

export default page;
