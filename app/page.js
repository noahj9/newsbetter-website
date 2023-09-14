import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <Head>
        <title>NewsBetter</title>
        <meta name="description" content="Your app description" />
      </Head>

      <nav className="mb-8">
        <ul className="flex space-x-4">
          <li>
            <a href="#about" className="hover:text-blue-500">About</a>
          </li>
          <li>
            <a href="#team" className="hover:text-blue-500">Our Team</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-500">Get in Touch</a>
          </li>
        </ul>
      </nav>

      <section id="about" className="mb-16">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4">
          Your app's mission and description go here.
        </p>
      </section>

      <section id="team" className="mb-16">
        <h1 className="text-4xl font-bold">Our Team</h1>
        {/* Add team member information here */}
      </section>

      <section id="contact">
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        {/* Add contact form or information here */}
      </section>
    </div>
  )
}
