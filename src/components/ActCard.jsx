import React from 'react';

const ActCard = ({ imgUrl, videoUrl }) => {
  return (
    <div className='w-full h-auto justify-center flex-col flex items-center'>
      <div className="m-5 border-1 border-gray-400 w-140 rounded-2xl h-auto">
        <div className='flex w-full h-20 m-3'>
          <div
            className="w-15 h-15 mr-2 rounded-full z-10 relative bg-gray-500"
            style={{
              backgroundImage: `url('/src/imgs/photo.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div
              className="absolute inset-1 w-[100%] h-[100%] rounded-full overflow-hidden"
              style={{
                backgroundImage: `url('/src/imgs/profile.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
          <div className='m-2'>
            <h1 className='font-semibold'>Anushka Desai</h1>
            <h1 className='text-xs text-gray-400'>Student at SNDT</h1>
            <h1 className='text-xs text-gray-400'>4m.</h1>
          </div>
        </div>
        <h1 className='m-5 mt-2 text-sm'>
          I’m happy to share that I’ve obtained a new certification: Certificate of Participation in TATA Crucible Campus Quiz 2024 from Unstop!
        </h1>

        {/* Dynamically render image or video */}
        <div className='w-full h-70'>
          {videoUrl ? (
            <video
              className='w-full h-auto '
              controls
              src={videoUrl}
            ></video>
          ) : (
            <div
              style={{
                backgroundImage: `url(${imgUrl})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '100%',
                width: '100%',
              }}
            ></div>
          )}
        </div>

        <div className='w-full mt-2'>
          <h1 className='text-sm text-gray-600 font-semibold ml-4'>50</h1>
        </div>
        <hr className="border-gray-300 mt-1 ml-5 mr-5" />
        <div className='flex w-full mt-2 mb-2 justify-center items-center'>
          <h1 className='ml-5 txet-sm font-semibold text-gray-400'>Like</h1>
          <h1 className='ml-20 txet-sm font-semibold text-gray-400'>Comment</h1>
          <h1 className='ml-20 txet-sm font-semibold text-gray-400'>Share</h1>
          <h1 className='ml-20 txet-sm font-semibold text-gray-400'>Report</h1>
        </div>
      </div>
    </div>
  );
};

export default ActCard;
