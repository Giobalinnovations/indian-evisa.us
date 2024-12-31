const ApplySectionContentSection = () => {
  const eligibleCountries = [
    'Albania',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antigua & Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Barbados',
    'Belgium',
    'Belize',
    'Brazil',
    'Bulgaria',
    'Cambodia',
    'Canada',
    'Chile',
    'Colombia',
    'Croatia',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Estonia',
    'Finland',
    'France',
    'Georgia',
    'Germany',
    'Greece',
    'Hungary',
    'Iceland',
    'Indonesia',
    'Ireland',
    'Israel',
    'Italy',
    'Japan',
    'Latvia',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Malaysia',
    'Malta',
    'Mexico',
    'Monaco',
    'Mongolia',
    'Netherlands',
    'New Zealand',
    'Norway',
    'Oman',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'South Korea',
    'Spain',
    'Sweden',
    'Switzerland',
    'Thailand',
    'UAE',
    'United Kingdom',
    'USA',
    'Vietnam',
  ];

  const popularDestinations = [
    {
      city: 'Delhi',
      description:
        'Historic capital showcasing ancient architecture and vibrant markets',
    },
    {
      city: 'Mumbai',
      description: 'Gateway of India and bustling business metropolis',
    },
    {
      city: 'Bangalore',
      description: 'Innovation hub with year-round spring climate',
    },
    {
      city: 'Jaipur',
      description: 'Pink City with majestic forts and royal palaces',
    },
    {
      city: 'Kochi',
      description: 'Coastal gem with rich spice trading history',
    },
    {
      city: 'Ahmedabad',
      description: 'UNESCO heritage city with unique step-wells',
    },
    {
      city: 'Rishikesh',
      description: 'Yoga capital nestled in Himalayan foothills',
    },
    {
      city: 'Mysore',
      description: 'City of Palaces with rich cultural heritage',
    },
  ];

  return (
    <div className="text-sm">
      {/* Header Section */}
      <div className="relative overflow-hidden rounded-t-xl bg-gradient-to-r from-secondary via-secondary to-primary">
        <div className="absolute inset-0 bg-[url('/assets/images/india/common/pattern.png')] opacity-10"></div>
        <h2 className="relative flex items-center justify-center py-4 text-base font-semibold text-center text-white md:text-lg">
          Fast-Track Indian e-Visa Processing Portal
        </h2>
      </div>

      {/* Introduction Section */}
      <div className="p-6 space-y-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-secondary">
            Your Digital Gateway to Indian Adventures
          </h2>
          <p className="leading-relaxed text-gray-600">
            Begin your Indian journey with our state-of-the-art e-Visa platform.
            From the mystical Himalayan peaks to the tranquil backwaters of
            Kerala, from ancient temples to modern urban landscapes, access
            India&apos;s wonders through our efficient digital visa processing
            system. We transform complex visa procedures into simple,
            streamlined steps.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: 'Swift Processing',
              description: 'Rapid visa processing with live status updates',
            },
            {
              title: 'Secure Systems',
              description: 'Bank-grade security protocols for data protection',
            },
            {
              title: 'Global Support',
              description: 'Multi-lingual assistance across time zones',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-4 transition-all duration-300 bg-white rounded-lg shadow-sm hover:shadow-md"
            >
              <h3 className="mb-2 text-base font-semibold text-secondary">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Eligible Countries Section */}
        <div className="p-6 space-y-4 bg-gray-50 rounded-xl">
          <h2 className="text-lg font-semibold text-secondary">
            International e-Visa Accessibility
          </h2>
          <p className="text-gray-600">
            Seamless e-Visa processing available for travelers from eligible
            nations. Experience our efficient digital application system with
            quick turnaround times.
          </p>
          <div className="flex flex-wrap gap-2">
            {eligibleCountries.map((country, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs text-gray-600 transition-all duration-300 bg-white rounded-full shadow-sm hover:shadow-md hover:text-primary"
              >
                {country}
              </span>
            ))}
          </div>
        </div>

        {/* Popular Destinations */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-secondary">
            Must-Visit Indian Destinations
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {popularDestinations.map((dest, index) => (
              <div
                key={index}
                className="p-4 transition-all duration-300 bg-white rounded-lg shadow-sm hover:shadow-md hover:scale-[1.02]"
              >
                <h3 className="mb-1 font-semibold text-primary">{dest.city}</h3>
                <p className="text-sm text-gray-600">{dest.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* About Section */}
        <div className="p-6 space-y-4 bg-gradient-to-r from-orange/5 to-primary/5 rounded-xl">
          <h2 className="text-lg font-semibold text-secondary">
            Advanced e-Visa Solutions
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Leverage our cutting-edge digital platform for seamless visa
              processing. We combine technological innovation with expert
              service to deliver a superior visa application experience.
            </p>
            <p>
              Access multiple visa categories - from tourism and business to
              medical and conference visas. Our intelligent system guides you
              through category-specific requirements, ensuring accurate
              submissions every time.
            </p>
            <p>
              Benefit from our end-to-end digital solution, featuring automated
              updates, secure payment channels, and expert application review.
              We&apos;ve optimized every aspect to make your Indian visa
              acquisition smooth and efficient.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplySectionContentSection;
