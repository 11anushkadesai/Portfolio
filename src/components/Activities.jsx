import React, { useState } from 'react';
import Card from '../Card';
import ActCard from './ActCard';

const Activities = () => {
  const [showAllCer, setShowAllCer] = useState(false);

  const toggleCer = () => {
    setShowAllCer(!showAllCer);
  };

  return (
    <div>
      <Card>
        <div className="p-5">
          <h2 className="text-xl font-semibold">Activities</h2>
          <div className="w-full mt-2 flex">
            <button className="w-20 h-8 bg-emerald-700 justify-center rounded-3xl text-white font-semibold">Post</button>
            <button className="w-30 h-8 ml-2 border-gray-400 border-2 justify-center rounded-3xl text-gray-600 font-semibold">Comment</button>
            <button className="w-20 h-8 ml-2 border-gray-400 border-2 justify-center rounded-3xl text-gray-600 font-semibold">Images</button>
          </div>

          {!showAllCer && (
            <>
              <div className="m-5 ">
                <div className="text-xs font-semibold text-gray-600 flex">
                  Anushka Desai
                  <span className="text-xs text-gray-400"> posted this. 4m</span>
                </div>
                <div className="w-180 flex mt-1">
                  <div className="w-20 h-20"style={{backgroundImage: `URL('/src/imgs/act1.png') `, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}></div>
                  <div className="ml-2 text-xs font-semibold">
                    <h6>I’m happy to share that I’ve obtained a new certification: Certificate of Participation in TATA Crucible Campus Quiz 2024 from Unstop!</h6>
                  </div>
                </div>
                <div className="mt-5 text-sm">20</div>
                <hr className="border-gray-300" />
              </div>

              <div className="m-5">
                <div className="text-xs font-semibold text-gray-600 flex">
                  Anushka Desai
                  <span className="text-xs text-gray-400"> posted this. 4m</span>
                </div>
                <div className="w-180 flex mt-1">
                  <div className="w-20 h-20" style={{backgroundImage: `URL('/src/imgs/act1.png') `, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}></div>
                  <div className="ml-2 text-xs font-semibold">
                    <h6>I’m happy to share that I’ve obtained a new certification: Certificate of Participation in TATA Crucible Campus Quiz 2024 from Unstop!</h6>
                  </div>
                </div>
                <div className="mt-5 text-sm">20</div>
                <hr className="border-gray-300" />
              </div>
            </>
          )}

          {showAllCer && (
            <div className='w-full h-auto justify-center flex-col flex items-center'>
            <ActCard imgUrl={"/src/imgs/act1.png"}></ActCard>
            {/* 2nd activity */}
            <ActCard imgUrl={"/src/imgs/act1.png"}></ActCard>

             {/* 3r activity */}
             <ActCard videoUrl={"/src/imgs/Balloon.mp4"}>
              
             </ActCard>

            </div>

            
            
          )}
        </div>

        <button
          onClick={toggleCer}
          className="w-full h-10 rounded-b-2xl border-t-gray-300 border-t-2 justify-center font-semibold text-gray-900 hover:bg-gray-100">
          {showAllCer ? 'Show Less' : 'Show All Certificates'}
        </button>
      </Card>
    </div>
  );
};

export default Activities;
