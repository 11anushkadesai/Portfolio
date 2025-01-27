import React, { useState } from 'react';
import Card from '../Card';

const Skill = () => {
  const [showAllSkills, setShowAllSkills] = useState(false); 

  const toggleSkills = () => {
    setShowAllSkills(!showAllSkills); 
  };

  return (
    <div>
      <Card>
        <div className="p-5">
          <h2 className="text-xl font-semibold">Skill</h2>

          
          <div className="w-full m-5">
            <div className="ml-5">
              <h1 className="font-medium">Dart</h1>
              <h1 className="font-normal text-sm">
                2 educational experiences at SNDT Women's University - P.G. Department of Computer Science
              </h1>
            </div>
          </div>
          <hr className="border-gray-300"/>

          <div className="flex w-full m-5">
            <div className="ml-5">
              <h1 className="font-medium">React</h1>
              <h1 className="font-normal text-sm">
                2 educational experiences at SNDT Women's University - P.G. Department of Computer Science
              </h1>
            </div>
          </div>
          

        
          {showAllSkills && (
            <div>
              <hr className="border-gray-300" />
              <div className="flex w-full m-5">
                <div className="ml-5">
                  <h1 className="font-medium">JavaScript</h1>
                  <h1 className="font-normal text-sm">
                  2 educational experiences at SNDT Women's University - P.G. Department of Computer Science
                  </h1>
                </div>
              </div>
              <hr className="border-gray-300" />
              <div className="flex w-full m-5">
                <div className="ml-5">
                  <h1 className="font-medium">Flutter</h1>
                  <h1 className="font-normal text-sm">
                  2 educational experiences at SNDT Women's University - P.G. Department of Computer Science
                  </h1>
                </div>
              </div>
              <hr className="border-gray-300" />
              <div className="flex w-full m-5">
                <div className="ml-5">
                  <h1 className="font-medium">HTML</h1>
                  <h1 className="font-normal text-sm">
                  2 educational experiences at SNDT Women's University - P.G. Department of Computer Science
                  </h1>
                </div>
              </div>
              <hr className="border-gray-300" />
              <div className="flex w-full m-5">
                <div className="ml-5">
                  <h1 className="font-medium">CSS</h1>
                  <h1 className="font-normal text-sm">
                  2 educational experiences at SNDT Women's University - P.G. Department of Computer Science
                  </h1>
                </div>
              </div>
              <hr className="border-gray-300" />
              <div className="flex w-full m-5">
                <div className="ml-5">
                  <h1 className="font-medium">Php</h1>
                  <h1 className="font-normal text-sm">
                  2 educational experiences at SNDT Women's University - P.G. Department of Computer Science
                  </h1>
                </div>
              </div>
              <hr className="border-gray-300" />
              <div className="flex w-full m-5">
                <div className="ml-5">
                  <h1 className="font-medium">Java</h1>
                  <h1 className="font-normal text-sm">
                  2 educational experiences at SNDT Women's University - P.G. Department of Computer Science
                  </h1>
                </div>
              </div>
              <hr className="border-gray-300" />
              <div className="flex w-full m-5">
                <div className="ml-5">
                  <h1 className="font-medium">Python</h1>
                  <h1 className="font-normal text-sm">
                  2 educational experiences at SNDT Women's University - P.G. Department of Computer Science
                  </h1>
                </div>
              </div>
              <hr className="border-gray-300" />
              <div className="flex w-full m-5">
                <div className="ml-5">
                  <h1 className="font-medium">C++</h1>
                  <h1 className="font-normal text-sm">
                  2 educational experiences at SNDT Women's University - P.G. Department of Computer Science
                  </h1>
                </div>
              </div>
              <hr className="border-gray-300" />
              <div className="flex w-full m-5">
                <div className="ml-5">
                  <h1 className="font-medium">SQL</h1>
                  <h1 className="font-normal text-sm">
                  2 educational experiences at SNDT Women's University - P.G. Department of Computer Science
                  </h1>
                </div>
              </div>
              <hr className="border-gray-300" />
              <div className="flex w-full m-5">
                <div className="ml-5">
                  <h1 className="font-medium">GreenSock Animation Platform</h1>
                  <h1 className="font-normal text-sm">
                  2 educational experiences at SNDT Women's University - P.G. Department of Computer Science
                  </h1>
                </div>
              </div>
              <hr className="border-gray-300" />
              <div className="flex w-full m-5">
                <div className="ml-5">
                  <h1 className="font-medium">Android Studio</h1>
                  <h1 className="font-normal text-sm">
                  2 educational experiences at SNDT Women's University - P.G. Department of Computer Science
                  </h1>
                </div>
              </div>
              
            </div>
            
          )}
        </div>
        <button
          onClick={toggleSkills}
          className="w-full h-10 rounded-b-2xl border-t-gray-300 border-t-2 justify-center font-semibold text-gray-900 hover:bg-gray-100"
        >
          {showAllSkills ? 'Show Less' : 'Show All Skills'}
        </button>
      </Card>
    </div>
  );
};

export default Skill;
