"use client"
import { useRef } from "react";

export default function Home() {
  const videoRef = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const videoRef4 = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
    videoRef2.current.play();
    videoRef3.current.play();
    videoRef4.current.play();

  };

  return (

    <div className="flex items-center items-center justify-center bg-white ">


      <div className="flex-col items-center justify-center ">

        <div className=" flex items-center justify-center text-black ">

          <span className="text-[50px]">Life Could Be Dream </span>

          <button
            onClick={handlePlay}
            className="flex px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 ml-12"
          >
            Oynat
          </button>

          


        </div>

        <div className="flex items-center justify-center">


          <video
            ref={videoRef}
            width="640"
            height="360"
            controls
            loop
          >
            <source src="/lcbd.mp4" type="video/mp4" />
            Tarayıcınız video etiketini desteklemiyor.
          </video>

          



        </div>



        <video
          ref={videoRef2}
          width="640"
          height="360"
          controls
          loop
          className="mt-5"
          
        >
          <source src="/lcbd.mp4" type="video/mp4" />
          Tarayıcınız video etiketini desteklemiyor.
        </video>

        <video
          ref={videoRef3}
          width="640"
          height="360"
          controls
          loop
          className="mt-5"
        >
          <source src="/lcbd.mp4" type="video/mp4" />
          Tarayıcınız video etiketini desteklemiyor.
        </video>

        <video
          ref={videoRef4}
          width="640"
          height="360"
          controls
          loop
          className="mt-5"
        >
          <source src="/lcbd.mp4" type="video/mp4" />
          Tarayıcınız video etiketini desteklemiyor.
        </video>



      </div>




    </div>





  );
}
