
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif">
            Welcome to Genetic Insights
          </h1>
          <p className="text-lg md:text-xl font-light italic">
            Exploring the fascinating world of genetic engineering
          </p>
        </section>

        {/* About Me Section */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-8">
            About Me
          </h2>
          <div className="bg-white shadow-lg rounded-lg p-6 md:p-12 transition-transform transform hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-xl md:text-2xl font-bold text-purple-700 mb-4">
              Meet a Genetic Engineer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Hello, I’m a passionate genetic engineer with a mission to unravel
              the complexities of DNA and transform them into practical
              solutions. With a background in cutting-edge research, I specialize in genetic modification, bioinformatics, and biotechnological advancements.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              My work spans across multiple domains of genetic engineering,
              including CRISPR technology, genetic therapy, and sustainable
              agriculture. I believe in the potential of genetic science to
              revolutionize healthcare, food production, and environmental
              sustainability. Through this platform, I aim to educate, inspire,
              and engage readers who share my curiosity about the genetic code
              that defines life.
            </p>
            <h4 className="text-lg md:text-xl font-bold text-pink-600 mb-3">
              Professional Experience
            </h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              With several years of experience in laboratory research and
              real-world applications, I have collaborated with leading
              scientists and institutions to tackle some of the biggest
              challenges in biotechnology. My projects include developing
              disease-resistant crops, exploring gene editing as a therapeutic
              tool, and decoding complex genetic pathways for rare diseases.
            </p>
            <h4 className="text-lg md:text-xl font-bold text-pink-600 mb-3">
              My Vision
            </h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              I envision a world where genetic engineering becomes an accessible
              tool for solving humanity&apos;s most pressing problems, from curing
              genetic disorders to ensuring food security for a growing global
              population. By demystifying the science behind genetic
              engineering, I hope to make it less intimidating and more
              approachable for everyone.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Author of multiple articles on cutting-edge genetic tools</li>
              <li>Advocate for ethical applications of genetic technologies</li>
              <li>Mentor to aspiring scientists in the field of biotechnology</li>
              <li>Innovator in the development of sustainable biotechnologies</li>
            </ul>
          </div>
        </section>

        {/* More About Me Section */}
        <section className="container mx-auto px-4 py-12 bg-white shadow-lg rounded-lg p-6 md:p-12 transition-transform transform hover:-translate-y-2 hover:shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            Why I Started This Blog
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Genetic engineering has the power to change lives, but it’s often
            misunderstood or misrepresented. I created this blog to bridge the
            gap between scientific communities and the public. My goal is to
            make advanced genetic concepts accessible, spark curiosity, and
            provide a trusted resource for anyone looking to understand this
            fascinating field.
          </p>
          <h4 className="text-lg md:text-xl font-bold text-purple-700 mb-3">
            Topics I Cover
          </h4>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>CRISPR and its groundbreaking applications</li>
            <li>Gene editing for human health and agriculture</li>
            <li>Bioethical considerations in genetic engineering</li>
            <li>Innovations in biotechnology and future trends</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-6">
            If you’re a student, researcher, or just someone curious about the
            genetic sciences, this blog is your gateway to learning more. Let’s
            explore the genetic blueprint of life together!
          </p>
        </section>

        {/* Explore Blogs Section */}
        <section className="bg-white text-black py-12 border-spacing-2">
          <div className="container mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Explore My Work
            </h3>
            <p className="mb-6">
              Discover how genetic engineering is reshaping our future. Click
              below to read my latest blogs and stay informed.
            </p>
            <Link href="/blogsPage">
              <span className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-md transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer">
                Visit My Blogs
              </span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

