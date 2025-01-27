import React, { useRef } from 'react';
import Card from '../Card';
import Education from './Education';
import Skill from './Skill';
import Certificate from './certificate';
import Activities from './Activities';




const Profile = () => {

  const eduRef=useRef(null);
  const skillRef=useRef(null);
  const cerRef=useRef(null);
  const actRef=useRef(null);
  const scrolledu = ()=>{
    eduRef.current?.scrollIntoView({ behavior: 'smooth' });
  }
  const scrollskill = ()=>{
    skillRef.current?.scrollIntoView({ behavior: 'smooth' });
  }
  const scrollcer = ()=>{
    cerRef.current?.scrollIntoView({ behavior: 'smooth' });
  }
  const scrollact = ()=>{
    actRef.current?.scrollIntoView({ behavior: 'smooth' });
  }
  
  
  return (
    <div>
      <Card>
        <div className='w-full  h-50 m-0 rounded-t-xl ' style={{backgroundImage: `URL('/src/imgs/profile_bg.jpg') `, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}></div>
        <div
          className="w-40 h-40  overflow-hidden rounded-full border-4 border-white z-10 ml-10 -mt-30 relative  bg-gray-200"
          style={{
            backgroundImage: `url('/src/imgs/photo.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}

        >
          <div
            className="absolute inset-1 w-[100%] h-[100%] rounded-full overflow-hidden "
            style={{
              backgroundImage: `url('/src/imgs/profile.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
        <div className='w-full h-70 p-4 pr-12 '>
          <h1 className='text-2xl font-semibold'>Anushka Desai</h1>
          <h3 className='text-zinc-700 '>Student at SNDT</h3>
          <h4 className='text-zinc-500 '>Mumbai, Maharashtra, India. <a className='text-blue-900 font-semibold cursor-pointer 'href='https://tailwindcss.com/docs/background-image'>Contact Info</a></h4>
          <div className='-mt-20 w-60 ml-130 text-sm absolute'><a href="" className='underline' >SNDT Women's University- P.G.Department of Computer Science</a></div>

          {/* buttons */}
          <div className='w-full mt-5 flex h-auto'>
            {/* open to  */}
          <button className='w-25 bg-blue-900 h-9 text-white font-semibold rounded-3xl cursor-pointer hover:bg-blue-950'>Open to</button>
          {/* education */}
          <button onClick={scrolledu}  className=' w-30 border-blue-600  ml-2 border-2 h-9 text-blue-600 font-semibold rounded-3xl cursor-pointer hover:border-blue-900 hover:bg-opacity-0 hover:bg-blue-100 hover:text-blue-900  '>Education</button>
          {/* skill */}
          <button onClick={scrollskill} className='w-25 border-blue-600  ml-2 border-2 h-9 text-blue-600 font-semibold rounded-3xl cursor-pointer hover:border-blue-900 hover:bg-opacity-0 hover:bg-blue-100 hover:text-blue-900'>Skill</button>
          {/* project */}
          <button onClick={scrollact} className='w-30 border-blue-600  ml-2 border-2 h-9 text-blue-600 font-semibold rounded-3xl cursor-pointer hover:border-blue-900 hover:bg-opacity-0 hover:bg-blue-100 hover:text-blue-900'>Projects</button>
          {/* certificates */}
          <button onClick={scrollcer} className='w-35 border-blue-600  ml-2 border-2 h-9 text-blue-600 font-semibold rounded-3xl cursor-pointer hover:border-blue-900 hover:bg-opacity-0 hover:bg-blue-100 hover:text-blue-900'>Certificates</button>
          </div>

          <div className="mt-5 w-80 bg-gray-200 h-auto rounded-xl p-2">
          <h5 className="text-black font-semibold ml-3 text-sm">Open to</h5>
          <h5 className="text-black ml-3 text-sm">Software Developer</h5>
          <h6 className="text-blue-600 ml-3 text-sm"><a href="#">Show details</a></h6>
          </div>

        </div>
        
      </Card>
      <div ref={eduRef}>
          <Education/>
        </div>
        <div ref={skillRef}>
          <Skill/>
        </div>
        <div ref={actRef}>
          <Activities/>
        </div>
        <div ref={cerRef}>
          <Certificate/>
        </div>
        
    </div>
  );
};

export default Profile;
