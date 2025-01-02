'use client';
import { useRef } from 'react';

const Banner = () => {
  const ref = useRef(null);

  return (
    <div className="relative">
      <div
        className="relative mt-20 bg-no-repeat bg-cover transition-all duration-500 ease-in-out overflow-hidden
          min-h-[600px] md:min-h-[calc(100vh-5rem)] flex items-center justify-center"
        style={{
          backgroundImage: 'url("/assets/images/india/home/banner.png")',
          backgroundPosition: 'center',
        }}
      >
        {/* Unique Wave Pattern Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-transparent"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23ffffff' fill-opacity='0.05'/%3E%3C/svg%3E")`,
            backgroundSize: '100px auto',
          }}
        ></div>

        {/* Unique Animated Borders */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-[2px]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange/40 to-transparent animate-wave"></div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[2px]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-wave-reverse"></div>
          </div>
        </div>

        {/* Content with Modern Layout */}
        <div className="relative w-full text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center mx-auto max-w-4xl text-center">
              <div className="relative mb-6 md:mb-8">
                <span className="block text-sm md:text-base font-medium text-orange/90 mb-3 tracking-wider uppercase">
                  e-Visa Services
                </span>
                <h1 className="relative text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
                  Digital Gateway to{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-orange via-white to-primary bg-clip-text text-transparent">
                      Indian e-Visa
                    </span>
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange via-primary to-orange opacity-50 blur-sm"></span>
                  </span>
                </h1>

                {/* Unique Wave Frame */}
                <div className="absolute -inset-4 md:-inset-6">
                  <div className="absolute inset-0 border border-white/10 rounded-lg"></div>
                  <div className="absolute inset-0 border border-white/10 rounded-lg transform scale-105"></div>
                </div>
              </div>

              <p className="text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed text-gray-200 max-w-3xl backdrop-blur-sm bg-white/5 p-4 rounded-lg">
                Apply for your Indian e-Visa through our secure digital
                platform. Fast processing, real-time updates, and expert
                assistance available 24/7.
              </p>

              {/* Unique Animated Elements */}
              <div className="absolute top-1/3 left-1/3 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-orange/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/3 right-1/3 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Announcement Bar */}
      <div className="absolute bottom-0 w-full bg-gradient-to-r from-primary/95 via-primary/90 to-primary/95 backdrop-blur-lg border-t border-white/10">
        <div className="container mx-auto py-3 md:py-4">
          <div className="flex items-center justify-between text-white">
            <div className="w-full overflow-hidden">
              <marquee
                className="text-xs sm:text-sm md:text-base font-medium tracking-wide"
                behavior="scroll"
                direction="left"
                scrollamount="5"
              >
                <span className="inline-flex items-center">
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 mr-2 md:mr-4 bg-gradient-to-r from-orange to-primary rounded-full animate-pulse"></span>
                  Avail Indian Visa plus services through &quot;Official app
                  Indian Visa Su-Swagatam&quot; mobile App for 60 countries
                  <span className="mx-4 md:mx-8 text-orange">•</span>
                  One stop solution for all Visa related services
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 ml-2 md:ml-4 bg-gradient-to-r from-primary to-orange rounded-full animate-pulse"></span>
                </span>
              </marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
