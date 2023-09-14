import Head from 'next/head';
import Image from 'next/image';

import logo from '../public/logo.png';
import app from '../public/app.png';
import noahImage from '../public/noahImage.png';
import kadenImage from '../public/kadenImage.png';

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Head>
        <title>Your App</title>
        <meta name="description" content="Your app description" />
      </Head>

      <nav className="fixed w-full bg-white p-6 text-black flex items-center justify-between top-0 shadow-md z-10">
          <Image src={logo} className="w-1/6" alt="logo" />
          <ul className="flex space-x-6 text-xl justify-center">
            <li>
              <a href="#about" className="hover:font-bold">About</a>
            </li>
            <li>
              <a href="#team" className="hover:font-bold">Our Team</a>
            </li>
            <li>
              <a href="#contact" className="hover:font-bold">Get in Touch</a>
            </li>
          </ul>

        <button className="bg-gradient-to-r text-white from-purple-600 to-pink-600 hover:from-purple-400 hover:to-purple-600 px-4 py-2 rounded-full">
          Join the Newsletter!
        </button>
      </nav>

      <section id="about" className="p-8 w-full mt-20 justify-center text-justify flex text-black">
        <div className="w-1/2 mr-20 flex flex-col justify-center">
          <h1 className="text-4xl font-bold">AI Enabled. <br></br> Newsletter Discovery and Analytics.</h1>
          <p className="mt-4 text-lg w-3/4 text-justify">
          Optimize your reading time and take your learning to the next level. Understand more about your current interests and related topics that others are reading about. NewsBetter innately changes the way you read your newsletters. 
          </p>
          <button className="bg-gradient-to-r w-1/3 text-white from-purple-600 to-pink-600 hover:from-purple-400 hover:to-purple-600 px-4 py-2 rounded-full mt-5">
            Request Access!
          </button>
        </div>
        <div className="">
          <Image src={app} className="scale-75" alt="appDemoImage" />
        </div>
      </section>

      <section id="team" className="p-8 text-black">
        <h1 className="text-4xl font-bold mb-10">Our Team</h1>
        <div className='flex w-full justify-center'>
          
          <div className="w-1/3 mx-16">
            <div className="flex items-center mb-4">
              <div className="w-40 h-40 rounded-full overflow-hidden">
                <Image src={noahImage} alt="Noah Jina"/>
              </div>
              <div className="ml-4">
                <h2 className="text-3xl font-semibold">Noah Jina</h2>
                <p className="text-gray-600 text-md">Co-Founder</p>
              </div>
            </div>
            <p className="text-lg text-black">
              Hey, I'm Noah. I am a current HBA and Software Engineering student at the Ivey Business School and Western University. I have a passion for developing AI related projects, specifically web applications.
            </p>
            <a href="https://www.linkedin.com/in/noahjina/" className="text-blue-500 hover:underline">LinkedIn Profile</a>
          </div>

          <div className="w-1/3">
            <div className="flex items-center mb-4">
              <div className="w-40 h-40 rounded-full overflow-hidden">
                <Image src={kadenImage} alt="Kaden Gulamani" />
              </div>
              <div className="ml-4">
                <h2 className="text-3xl font-semibold">Kaden Gulamani</h2>
                <p className="text-gray-600 text-md">Co-Founder</p>
              </div>
            </div>
            <p className="text-lg text-black">
              Hey, I'm Kaden. I am a current HBA student at the Ivey Business School with a background in medical sciences. I'm passionate about entrepreneurship, and previously worked in consulting.
            </p>
            <a href="https://www.linkedin.com/in/kadensg/" className="text-blue-500 hover:underline">LinkedIn Profile</a>
          </div>
        </div>
        
    
      </section>
    </div>
  );
}
