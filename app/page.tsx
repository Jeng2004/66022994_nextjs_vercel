import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <div className="font-sans text-gray-800">
        <header className="bg-blue-500 text-white text-center py-6">
          <img
            src="/12345.jpg"
            alt="Profile Picture"
            className="w-[400px] mx-auto mb-10"
          />
          <h1 className="text-4xl font-bold">Surapong Promlok</h1>
          <br></br>
          <p className="text-lg">This My Portfolio</p>
        </header>

        <main className="p-6">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">About me .</h2>
            <p>
              Hello, I m a developer with a passion for technology. and web application development to solve problems and create new value.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Educational Record</h2>
            <ul className="list-disc pl-6">
              <li>Bachelor,s Degree: Software Engineering, University of Phayao</li>
              <li>Secondary School: Poolcharoen Witthayakhom School</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Experience</h2>
            <ul className="list-disc pl-6">
              <li>HTML CSS</li>
              <li>Figma</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p>Email: jenglovegtas@gmail.com</p>
            <p>Phone: 0811329758</p>
            <p>
              
              <a
                href="https://www.facebook.com/surapong.promlok.5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black-500 hover:underline"
              >
                Facebook
              </a>
            </p>

            <p>
              
              <a
                href="https://www.instagram.com/jeng_surapong/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black-500 hover:underline"
              >
                instagram
              </a>
            </p>


          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
