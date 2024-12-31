// Add metadata
export const metadata = {
  title: 'Privacy Policy - Indian e-Visa US',
  description: 'Our digital privacy policy for e-visa services',
  alternates: {
    canonical: '/privacy-policy',
  },
};

const page = () => {
  return (
    <div className="container px-4 pb-12 bg-white lg:pt-24 lg:py-10 lg:px-0 md:pt-28 md:pb-0 pt-28">
      <div className="mx-auto">
        <h1 className="mb-6 text-4xl font-bold text-gray-900 lg:py-6">
          Privacy Policy
        </h1>
        <p className="my-4 text-lg leading-relaxed text-gray-700">
          At Indian e-Visa US, we prioritize digital security and data
          protection in our e-visa services. This privacy policy outlines our
          commitment to safeguarding your information throughout the electronic
          visa application process.
        </p>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          Digital Information Collection
        </h2>
        <div className="mt-4 space-y-4">
          <h3 className="text-xl font-medium text-gray-800">
            Electronic Data Requirements
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Our e-visa platform collects:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Digital passport information</li>
            <li>Electronic application data</li>
            <li>Digital photographs</li>
            <li>Online payment details</li>
            <li>Electronic communication records</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          Digital Data Processing
        </h2>
        <div className="mt-4 space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Your electronic information is processed for:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Online visa application processing</li>
            <li>Digital verification procedures</li>
            <li>Electronic status updates</li>
            <li>Online support services</li>
            <li>System improvements</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          Digital Security Measures
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Our electronic security infrastructure includes:
        </p>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-700">
          <li>SSL/TLS encryption protocols</li>
          <li>Secure cloud storage systems</li>
          <li>Automated security monitoring</li>
          <li>Digital access controls</li>
          <li>Regular security updates</li>
        </ul>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          Electronic Data Sharing
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Your digital information is shared with:
        </p>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-700">
          <li>Indian e-Visa authorities</li>
          <li>Digital payment processors</li>
          <li>Online verification partners</li>
          <li>Electronic security services</li>
        </ul>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          Digital Rights Management
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Through our online platform, you can:
        </p>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-700">
          <li>Access your digital records</li>
          <li>Update electronic information</li>
          <li>Manage online preferences</li>
          <li>Request data downloads</li>
          <li>Control digital communications</li>
        </ul>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          Electronic Tracking
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Our website utilizes digital tracking technologies to enhance user
          experience and security. You can manage these preferences through your
          browser settings.
        </p>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">Policy Updates</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          This digital privacy policy is regularly updated to reflect
          technological advancements and regulatory changes. Updates are posted
          on our website and may be notified through electronic communications.
        </p>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          Contact Information
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          For privacy-related inquiries or to exercise your digital rights,
          please contact our privacy team at privacy@indian-evisa.us
        </p>
      </div>
    </div>
  );
};

export default page;
