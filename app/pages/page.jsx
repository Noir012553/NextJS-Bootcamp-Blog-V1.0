import Layout1 from '@/components/layout/Layout1';
import LatestPosts1 from '@/components/home/LatestPosts1';

export default function AuthorPage() {
  return (
    <Layout1>
      {/* Author Bio Section */}
      <section className="bg-white font-sans antialiased">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto bg-author-bg rounded-xl flex justify-center items-center p-6 md:p-12">
            <div className="flex flex-col items-center gap-6">

              {/* Author Profile */}
              <div className="flex items-center gap-4">
                <img
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                  src="/assets/Image.svg"
                  alt="Profile picture of Jonathan Doe"
                />
                <div>
                  <h3 className="text-author-name font-medium text-xl leading-7">Jonathan Doe</h3>
                  <p className="text-author-role text-sm leading-5">Collaborator & Editor</p>
                </div>
              </div>

              {/* Author Bio */}
              <p className="text-author-bio-text text-lg leading-[26px] text-justify max-w-2xl">
                Meet Jonathan Doe, a passionate writer and blogger with a love for technology and travel.
                Jonathan holds a degree in Computer Science and has spent years working in the tech industry,
                gaining a deep understanding of the impact technology has on our lives.
              </p>

              {/* Social Media Links */}
              <div className="flex items-center gap-2">
                <a href="#" aria-label="Visit our Facebook page" className="w-8 h-8 bg-author-role rounded-md flex items-center justify-center hover:opacity-80 transition-opacity">
                  <img className="w-4 h-4" src="/assets/logo-facebook.png" alt="Facebook icon" />
                </a>
                <a href="#" aria-label="Visit our Twitter profile" className="w-8 h-8 bg-author-role rounded-md flex items-center justify-center hover:opacity-80 transition-opacity">
                  <img className="w-4 h-4" src="/assets/logo-twitter.png" alt="Twitter icon" />
                </a>
                <a href="#" aria-label="Visit our Instagram profile" className="w-8 h-8 bg-author-role rounded-md flex items-center justify-center hover:opacity-80 transition-opacity">
                  <img className="w-4 h-4" src="/assets/logo-instagram.png" alt="Instagram icon" />
                </a>
                <a href="#" aria-label="Visit our YouTube channel" className="w-8 h-8 bg-author-role rounded-md flex items-center justify-center hover:opacity-80 transition-opacity">
                  <img className="w-4 h-4" src="/assets/logo-youtube.png" alt="YouTube icon" />
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
      <LatestPosts1/>
    </Layout1>
  );
}