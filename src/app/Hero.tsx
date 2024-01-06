import { useContext } from "react";
// import Logo from "../../../../public/logo_2_bw.png";
import Image from "next/image";
import DownloadAlert from "@/app/components/DownLoadAlert";
// import Logo from "../../../../public/logo.svg";
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
          <div className="grid justify-center items-center">
            <Image
              className="object-scale-down h-60 w-60 md:h-80 md:w-80 "
              src={require("../../public/logo_2_bw.png")}
              alt=""
            />
            {/* <Logo/> */}
            {/* <Image src={Logo} className="object-scale-down h-60 w-60 md:h-80 md:w-80 "/> */}
          </div>
          <div className="flex justify-center my-5">
            <p className="text-white text-8xl md:text-9xl ">
              <span>S</span>
              <span>Q</span>
              <span>U</span>
              <span>I</span>
              <span>G</span>
            </p>
          </div>

          <div className="flex justify-center mx-5 h-20 mt-10">
            <DownloadAlert />

            <a
              className="active:text-blue-700 hover:text-blue-400 cursor-pointer text-white m-2 p-4"
              href="https://www.linkedin.com/in/harish-m-b96903266"
            >
              Follow Me
            </a>
          </div>
          <div className="flex justify-center m-5">
            <p className="text-center w-[22rem] text-sm">
              Squig: Where Simple Meets Infinite - Unleash Creativity in Every
              Line of Code.
            </p>
          </div>
        </div>
      </div>
      <div className="h-screen md:mb-0">
        <div className="flex justify-center">
          <p className="text-white text-3xl md:text-5xl my-10">About</p>
        </div>
        <div className="flex flex-col">
          <p className="p-10 md:text-2xl  tracking-widest md:text-justify max-md:hidden">
            {`Introducing Squig, a dynamic interpreted programming language designed for simplicity and ease of use. Developed using Python 3, Squig features an uncomplicated syntax, making it an ideal starting point for beginners to explore core programming concepts. This lightweight language includes essential elements such as functions, variables, input statements, conditional statements, and file handling. Squig's interpreted nature provides a nimble and interactive development environment, eliminating the need for compilation. Powered by Python 3, Squig inherits the reliability and versatility of the Python ecosystem. Whether you're a novice coder or seeking a playful introduction to programming, Squig serves as a delightful and educational tool. Refer to the comprehensive documentation to get started and note that Squig is currently considered a toy language, perfect for experimentation and learning. Dive into the coding journey with Squig and discover the potential of dynamic, accessible programming. However, it's important to note some limitations in Squig. The language currently exhibits suboptimal error handling and messaging, which may pose challenges for developers in identifying and resolving issues. `}
          </p>
          <p className="p-10 md:text-2xl  tracking-widest md:text-justify max-md:hidden">
            {`Additionally, Squig lacks built-in libraries, limiting the availability of pre-built functions and modules commonly found in other programming languages. Users should be aware that the language might encounter occasional crashes without providing specific information about the root cause. While Squig offers a straightforward and educational coding experience, these limitations highlight areas for potential improvement and consideration when working with more complex or critical applications.`}
          </p>
          {/* <p className="p-5 md:text-2xl  tracking-wide md:text-justify md:hidden">
            {` Introducing Squig, a user-friendly programming language with a
            Python-inspired syntax for easy learning and efficient coding.
            Seamlessly implemented in Python 3, Squig offers simplicity and
            versatility, making it ideal for both beginners and seasoned
            developers. Its minimalist design integrates with Python libraries,
            expanding your toolkit. Squig encourages interactive development,
            promoting rapid prototyping. Join the dynamic Squig community on
            GitHub for endless possibilities. Experience joy in coding with
            Squig – where modernity meets simplicity. Happy coding!`}
          </p> */}
          {/* <p className="text-gray-400 md:text-2xl tracking-wide px-4">
              {`For the past two years , we have been working diligently on squig
              , and we have finally launched it for public use.`}
              As of now, Squig has been downloaded by <span className='text-blue-500'>#{downloadUnit(downloade)} users.</span><br/><br/>
              <span className="block text-red-500">
                Since we are in <span className="text-blue-500">#ALPHA</span>{" "}
                stage things may change frequently and the programs that you
                write might crash sometimes.
              </span>
            </p> */}
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
