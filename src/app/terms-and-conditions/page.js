export const metadata = {
  title: 'Terms and Conditions',
  description: 'Terms and Conditions',
  alternates: {
    canonical: '/terms-and-conditions',
  },
};

const page = () => {
  return (
    <div className="container px-4 pb-12 bg-white lg:pt-24 lg:py-10 lg:px-0 md:pt-28 md:pb-0 pt-28">
      <div className="mx-auto">
        <h1 className="mb-3 text-4xl font-semibold lg:py-6">
          Terms and Conditions
        </h1>
        <p className="my-2 text-base font-medium leading-relaxed text-justify">
          By accessing and using our visa application services, you agree to
          comply with these terms and conditions. These terms may be updated
          periodically, and continued use of our services implies acceptance of
          any changes.
        </p>
      </div>

      <div className="mx-auto mt-7">
        <h3 className="mt-2 text-lg font-bold">Service Usage Guidelines</h3>
        <p className="my-2 text-base font-medium leading-relaxed text-justify">
          Users must:
        </p>
        <ul className="space-y-2 text-base font-medium leading-relaxed text-justify">
          <li>• Provide accurate and truthful information</li>
          <li>• Maintain confidentiality of account credentials</li>
          <li>• Use services only through authorized channels</li>
          <li>• Comply with all applicable laws and regulations</li>
          <li>• Accept responsibility for all account activities</li>
        </ul>
      </div>

      <div className="mx-auto mt-7">
        <h3 className="mt-2 text-lg font-bold">Service Modifications</h3>
        <p className="my-2 text-base font-medium leading-relaxed text-justify">
          We reserve the right to modify, suspend, or discontinue any part of
          our services at our discretion, with or without notice.
        </p>
      </div>

      <div className="mx-auto mt-7">
        <h3 className="mt-2 text-lg font-bold">Intellectual Property</h3>
        <p className="my-2 text-base font-medium leading-relaxed text-justify">
          All content, features, and functionality of our platform are protected
          by intellectual property laws. Unauthorized use or reproduction is
          strictly prohibited.
        </p>
      </div>

      <div className="mx-auto mt-7">
        <h3 className="mt-2 text-lg font-bold">Limitation of Liability</h3>
        <p className="my-2 text-base font-medium leading-relaxed text-justify">
          Our services are provided &quot;as is&quot; without warranties of any
          kind. We shall not be liable for any damages arising from the use of
          our services.
        </p>
      </div>

      <div className="mx-auto mt-7">
        <h3 className="mt-2 text-lg font-bold">Account Termination</h3>
        <p className="my-2 text-base font-medium leading-relaxed text-justify">
          We maintain the right to suspend or terminate access to our services
          for any violation of these terms or for any other reason deemed
          necessary.
        </p>
      </div>
    </div>
  );
};

export default page;
