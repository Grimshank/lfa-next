import React from 'react';
import InquiryForm from '@/components/InquiryForm';
import Footer from '@/components/Footer';
import SmallHeader from '@/components/SmallHeader';

export default async function Inquire({ params }) {
  return (
    <div>
      <SmallHeader />
      <div
        className="w-full px-8 grid grid-cols-1"
      >
        <h1 className="text-3xl mb-4 font-medium m-auto text-center pt-14" style={{fontFamily: 'mrs-eaves-roman-small-caps'}}>
          Inquire About a Commission</h1>
        <div className="md:ml-8 mb-4">
          <InquiryForm title='Commission'/>
        </div>
        <Footer />
      </div>
    </div>
  );
}
