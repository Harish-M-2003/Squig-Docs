import { useContext } from "react";
// import Logo from "../../../../public/logo_2_bw.png";
import Image from "next/image";
import DownloadAlert from "@/app/components/DownLoadAlert";
// import DownloadContext from './context/DownloadContext';

export default function Hero() {
  // const {isPending , downloade } = useContext(DownloadContext);

  //   function downloadUnit(count) {
  //     let number = String(count);
  //     if (count > 100000) {
  //       return `${number[0]} M+`;
  //     } else {
  //       return `${number}`;
  //     }
  //   }

  return (
    <div id="landing">
      <div className="grid justify-center items-center h-screen">
        <div className="fade-up">
          <div
            className="grid justify-center items-center"
          >
            <Image
              className="object-scale-down h-60 w-60 md:h-80 md:w-80 "
              src={require("../../../../public/logo_2_bw.png")}
              alt=""
            />
          </div>
          <div className="flex justify-center my-5">
            <p
              className="text-white text-8xl md:text-9xl "
            >
              <span>S</span>
              <span>Q</span>
              <span>U</span>
              <span>I</span>
              <span>G</span>
            </p>
          </div>
          <div
            className="flex justify-center m-5"
          >
            <p className="text-center w-[22rem] text-sm">
              Squig: Where Simple Meets Infinite - Unleash Creativity in Every
              Line of Code.
            </p>
          </div>
          <div
            className="flex justify-center mx-5 h-20 mt-10"
          >
            <DownloadAlert />

            <a
              className="active:text-blue-700 hover:text-blue-400 cursor-pointer text-white m-2 p-4"
              href="https://www.linkedin.com/in/harish-m-b96903266"
            >
              Follow Me
            </a>
          </div>
        </div>
      </div>
      <div className="h-screen md:mb-0">
        <div
          className="flex justify-center"
        >
          <p className="text-white text-3xl md:text-5xl my-10">About</p>
        </div>
        <div  className="flex flex-col">
          <p className="p-5 md:text-2xl  tracking-wide md:text-justify max-md:hidden">
           {` Introducing Squig, a contemporary and user-friendly programming
            language designed for effortless learning and efficient coding
            experiences. Drawing inspiration from Python, Squig's syntax
            emphasizes clarity and user-friendliness, catering to both novices
            and seasoned developers. Built seamlessly on Python 3, Squig blends
            simplicity with versatility, empowering users to explore a wide
            spectrum of applications. Its minimalist design ensures a smooth
            integration with existing Python libraries, broadening the toolkit
            available to Squig developers. Embracing an interactive development
            approach, Squig encourages rapid prototyping and experimentation,
            cultivating a dynamic and engaging coding environment. Join the
            lively Squig community to connect with like-minded enthusiasts,
            actively contribute to the language's evolution on GitHub, and delve
            into the limitless possibilities that Squig offers for your coding
            endeavors. Immerse yourself in the joy of coding with Squig – where
            the convergence of modernity and simplicity transforms programming
            into an accessible and enjoyable art form. Happy coding!`}
          </p>
          <p className="p-5 md:text-2xl  tracking-wide md:text-justify md:hidden">
           {` Introducing Squig, a user-friendly programming language with a
            Python-inspired syntax for easy learning and efficient coding.
            Seamlessly implemented in Python 3, Squig offers simplicity and
            versatility, making it ideal for both beginners and seasoned
            developers. Its minimalist design integrates with Python libraries,
            expanding your toolkit. Squig encourages interactive development,
            promoting rapid prototyping. Join the dynamic Squig community on
            GitHub for endless possibilities. Experience joy in coding with
            Squig – where modernity meets simplicity. Happy coding!`}
          </p>
          <p className="text-gray-400 md:text-2xl tracking-wide px-4">
              {`For the past two years , we have been working diligently on squig
              , and we have finally launched it for public use.`}
              {/* As of now, Squig has been downloaded by <span className='text-blue-500'>#{downloadUnit(downloade)} users.</span><br/><br/> */}
              <span className="block text-red-500">
                Since we are in <span className="text-blue-500">#ALPHA</span>{" "}
                stage things may change frequently and the programs that you
                write might crash sometimes.
              </span>
            </p>
        </div>
        {/* <div
            data-aos="fade-right"
            data-aos-duration="700"
            className="flex justify-center md:mx-10"
          >
            
          </div> */}
      </div>
    </div>
  );
}
