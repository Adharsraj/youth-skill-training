import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center">
        <div className="mb-4 md:mb-0">
          <p className="font-bold text-[12px] lg:text-[18px]">DIRECTOR / REGIONAL DEPUTY<br /> DIRECTOR</p>
          <p className='mt-4'>
            <img src="/footer/location.svg" alt="Location Icon" className="inline-block h-7 w-auto mr-3" />
            <span className='text-[12px] md:text-[14px] lg:text-[16px]'>Directorate Office</span>
          </p>
          <p className='ml-8 text-[12px] md:text-[14px] lg:text-[16px]'>Youth Employability Skill Training</p>
          <p className='ml-8 text-[12px] md:text-[14px] lg:text-[16px]'>686A-Indra Park</p>
          <p className='ml-8 text-[12px] md:text-[14px] lg:text-[16px]'>Main Road, Palam</p>
          <p className='ml-8 text-[12px] md:text-[14px] lg:text-[16px]' >New Delhi 45</p>
          <p className='mt-4 text-[12px] md:text-[14px] lg:text-[16px]'>
            <img src="/header/mail.svg" alt="Location Icon" className="inline-block h-7 w-auto mr-2 " />
            officer@nationalyouthprogramme.in
          </p>
        </div>
        <div className="text-left mt-4 md:mt-4 lg:ml-12">
          <div className="flex flex-col items-left">
            <div className="md:flex md:items-center">
              <img src="/footer/leftlogo.svg" alt="leftlogo" className="h-16 w-auto mr-1 md:block hidden" />
              <img src="/footer/rightlogo.svg" alt="rightlogo" className="h-16 w-auto ml-2 md:block hidden" />
              <div className='ml-4'>
                <p className="text-left lg:text-2xl md:text-lg sm:text-[8px]">Opening Hours</p>
                <div className="ml-0 mt-4">
                  <p className='flex justify-start md:text-[14px] text-[12px] lg:text-[16px]'>Office Working Time: Monday – Friday</p>
                  <p className='flex justify-start md:text-[14px] text-[12px] lg:text-[16px]'>(9:30 AM to 5:30 PM)</p>
                </div>
                <div className="flex items-center block md:hidden mt-4">
                <img src="/footer/leftlogo.svg" alt="leftlogo" className="h-16 w-auto mr-1 sm:block lg:hidden" />
              <img src="/footer/rightlogo.svg" alt="rightlogo" className="h-16 w-auto ml-2 sm:block lg:hidden" />
                </div>
              </div>
            </div>
            <div className="md:flex md:justify-center mt-4">
              <div className="text-center mr-12">
                <div className="text-gray-400 text-start text-[12px] lg:text-[16px]">Follow Us</div>
                <div className="flex justify-center mt-2">
                  <div className="h-10 w-10 rounded-full border border-gray-400 flex items-center justify-center mx-2">
                    <img src="/footer/facebook.svg" alt="Logo1" className="h-4 w-auto" />
                  </div>
                  <div className="h-10 w-10 rounded-full border border-gray-400 flex items-center justify-center mx-2">
                    <img src="/footer/g+.svg" alt="Logo2" className="h-4 w-auto" />
                  </div>
                  <div className="h-10 w-10 rounded-full border border-gray-400 flex items-center justify-center mx-2">
                    <img src="/footer/insta.svg" alt="Logo3" className="h-4 w-auto" />
                  </div>
                  <div className="h-10 w-10 rounded-full border border-gray-400 flex items-center justify-center mx-2">
                    <img src="/footer/youtube.svg" alt="Logo4" className="h-4 w-auto" />
                  </div>
                </div>
              </div>
              <div className="text-center mt-2 lg:mt-0">
                <div className="text-gray-400 text-start text-[12px] lg:text-[16px]">Let's Chat</div>
                <div className="flex justify-left mt-2">
                  <div className="h-10 w-10 rounded-full border border-gray-400 flex items-center justify-center mx-2">
                    <img src="/footer/stric.svg" alt="ChatLogo1" className="h-4 w-auto" />
                  </div>
                  <div className="h-10 w-10 rounded-full border border-gray-400 flex items-center justify-center mx-2">
                    <img src="/footer/telegram.svg" alt="ChatLogo2" className="h-4 w-auto" />
                  </div>
                  <div className="h-10 w-10 rounded-full border border-gray-400 flex items-center justify-center mx-2">
                    <img src="/footer/whatsapp.svg" alt="ChatLogo3" className="h-4 w-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-8 text-center">Total Visitors: 46748838</p>
    </footer>
  );
};

export default Footer;
