import React, { useState } from 'react';
import Card from '../Card';

const Certificate = () => {
  const [showAllCer, setshowAllCer] = useState(false); 

  const toggleCer = () => {
    setshowAllCer(!showAllCer); 
  };

  const accenture =()=>{
    window.open(
        "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_7HJQS9hnrMDTMyPAP_1726500393884_completion_certificate.pdf"
    )
  }
  const tata =()=>{
    window.open(
        "https://unstop.com/certificate-preview/e74d8854-6dec-4ec2-85ec-111d95eb96bb"
    )
  }
  const cer =()=>{
    window.open(
        "https://unstop.com/certificate-preview/9a90fe6c-100c-4b42-a1d5-0afd77755851"
    )
  }
  const jpm =()=>{
    window.open(
        "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/JPMorgan%20Chase%20%26%20Co./XiuvjcwqWRqH9oy38_JPMorgan%20Chase%20%26%20Co._7HJQS9hnrMDTMyPAP_1686558247938_completion_certificate.pdf"
    )
  }
  return (
    <div>
      <Card>
        <div className="p-5">
          <h2 className="text-xl font-semibold">Certificates</h2>

          
          <div className="flex w-full m-5">
            <div className='w-10 h-10 '><img src="/src/imgs/forage.png" alt="" /></div>
            <div className="ml-5">
              <h1 className="font-bold">Accenture North America - Data Analytics and Visualization Job Simulation</h1>
              <h1 className="font-normal text-sm">
                Forage
              </h1>
              <h1 className="font-normal text-gray-400 text-sm">
                Issused Sep 2024
              </h1>
              <button  onClick={accenture} className='w-50 h-10 border-2 border-gray-700 justify-center font-semibold rounded-3xl mt-2 hover:bg-gray-200 hover:border-black hover:border-2.10'>Show Credential </button>
              
            </div>
          </div>
          <hr className="border-gray-300"/>

          <div className="flex w-full m-5">
            <div className='w-10 h-10 '><img src="/src/imgs/unstop.png" alt="" /></div>
            <div className="ml-5">
              <h1 className="font-bold">Certificate of Participation in TATA Crucible Campus Quiz 2024 </h1>
              <h1 className="font-normal text-sm">
                Unstop
              </h1>
              <h1 className="font-normal text-gray-400 text-sm">
                Issused Sep 2024
              </h1>
              <button  onClick={tata} className='w-50 h-10 border-2 border-gray-700 justify-center font-semibold rounded-3xl mt-2 hover:bg-gray-200 hover:border-black hover:border-2.10'>Show Credential </button>
              
            </div>
          </div>
          

        
          {showAllCer && (
            <div>
                <hr className="border-gray-300"/>
               <div className="flex w-full m-5">
            <div className='w-10 h-10 '><img src="/src/imgs/forage.png" alt="" /></div>
            <div className="ml-5">
              <h1 className="font-bold">Certificate of Participation </h1>
              <h1 className="font-normal text-sm">
                Unstop
              </h1>
              <h1 className="font-normal text-gray-400 text-sm">
                Issused Aug 2024
              </h1>
              <button  onClick={cer} className='w-50 h-10 border-2 border-gray-700 justify-center font-semibold rounded-3xl mt-2 hover:bg-gray-200 hover:border-black hover:border-2.10'>Show Credential </button>
              
            </div>
          </div>
          <hr className="border-gray-300"/>

          <div className="flex w-full m-5">
            <div className='w-10 h-10 '><img src="/src/imgs/forage.png" alt="" /></div>
            <div className="ml-5">
              <h1 className="font-bold">JPMorgan Chase&Co. Excel Skills Job Simulation </h1>
              <h1 className="font-normal text-sm">
                Forage
              </h1>
              <h1 className="font-normal text-gray-400 text-sm">
                Issused Jun 2023
              </h1>
              <button  onClick={jpm} className='w-50 h-10 border-2 border-gray-700 justify-center font-semibold rounded-3xl mt-2 hover:bg-gray-200 hover:border-black hover:border-2.10'>Show Credential </button>
              
            </div>
          </div>
          
            </div>
            
          )}
        </div>
        <button
          onClick={toggleCer}
          className="w-full h-10 rounded-b-2xl border-t-gray-300 border-t-2 justify-center font-semibold text-gray-900 hover:bg-gray-100"
        >
          {showAllCer ? 'Show Less' : 'Show All Certificates'}
        </button>
      </Card>
    </div>
  );
};

export default Certificate;
