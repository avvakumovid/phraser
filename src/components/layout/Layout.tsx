import React, { ReactNode } from 'react';

interface ILayout {
  children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <div className='w-screen h-screen bg-[#3f454e] text-[#FF2CDF]'>
      <div className='max-w-2xl mx-auto my-0 bg-[#0E1621] h-full p-5 flex justify-center items-start'>
        {children}
      </div>
    </div>
  );
};

export default Layout;
