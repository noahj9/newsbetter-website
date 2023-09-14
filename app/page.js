import Head from 'next/head';
import Image from 'next/image';

import logo from '../public/logo.png';

export default function Home() {
  return (
    <div className="bg-purple-400 min-h-screen flex flex-col">
      <Head>
        <title>Your App</title>
        <meta name="description" content="Your app description" />
      </Head>

      <nav className="bg-purple-400 p-6 text-white flex items-center justify-between mx-10">
          <Image src={logo} className="w-1/6" alt="logo" />
          <ul className="flex space-x-6 text-xl justify-center">
            <li>
              <a href="#about" className="hover:text-black">About</a>
            </li>
            <li>
              <a href="#team" className="hover:text-black">Our Team</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-black">Get in Touch</a>
            </li>
          </ul>

        <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-4 py-2 rounded-full">
          Join the Newsletter!
        </button>
      </nav>

      <section id="about" className="p-8 w-3/4 items-center mt-20 text-justify">
        <h1 className="text-4xl font-bold">AI Enabled Newsletter Discovery and Analytics.</h1>
        <p className="mt-4 text-lg w-3/4 text-justify">
        Optimize your reading time and take your learning to the next level. Understand more about your current interests and related topics that others are reading about. Newsbetter innately changes the way you read your newsletters. 
        </p>
        <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-4 py-2 rounded-full mt-5">
          Request Access!
        </button>
      </section>

      <section id="team" className="p-8">
        <h1 className="text-4xl font-bold">Our Team</h1>
        {/* Add team member information here */}
      </section>

      <section id="contact" className="p-8">
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        {/* Add contact form or information here */}
      </section>
    </div>
  );
}
