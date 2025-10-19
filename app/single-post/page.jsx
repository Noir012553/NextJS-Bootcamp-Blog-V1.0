import Layout1 from '@/components/layout/Layout1';

export default function SinglePostPage() {
  return (
    <Layout1>
      {/* Article Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="w-[56%] mx-auto px-4">
          <article className="flex flex-col gap-8">
            
            {/* Article Header */}
            <header className="flex flex-col gap-5">
              <div className="flex flex-col gap-4">
                <span className="self-start bg-brand-blue text-white text-sm font-medium leading-5 px-3 py-1.5 rounded-md">
                  Technology
                </span>
                <h1 className="font-sans text-3xl md:text-4xl font-semibold leading-tight md:leading-10 text-dark-heading">
                  The Impact of Technology on the Workplace: How Technology is Changing
                </h1>
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <div className="flex items-center gap-2">
                  <img 
                    className="w-7 h-7 rounded-full object-cover" 
                    src="/assets/Image (2).png" 
                    alt="Tracey Wilson" 
                  />
                  <p className="font-sans text-sm font-medium text-gray-meta">Tracey Wilson</p>
                </div>
                <p className="font-sans text-sm text-gray-meta">August 20, 2022</p>
              </div>
            </header>

            {/* Main Image */}
            <img 
              className="w-full rounded-xl" 
              src="/assets/Image (6).png" 
              alt="Architectural building at night" 
            />

            {/* Article Body */}
            <div className="font-serif text-xl leading-8 text-dark-content flex flex-col gap-6">
              <p>
                Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, 
                and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, 
                especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and 
                tricks for a memorable journey and how to make the most of your travels.
              </p>
              <p>
                One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. 
                This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. 
                Learning a few phrases in the local language can also go a long way in making connections and showing respect.
              </p>
            </div>

            {/* Sub-section: Research */}
            <div className="flex flex-col gap-4">
              <h2 className="font-sans text-2xl font-semibold leading-7 text-dark-heading">
                Research Your Destination
              </h2>
              <div className="font-serif text-xl leading-8 text-dark-content flex flex-col gap-6">
                <p>
                  Before embarking on your journey, take the time to research your destination. This includes 
                  understanding the local culture, customs, and laws, as well as identifying top attractions, 
                  restaurants, and accommodations. Doing so will help you navigate your destination with confidence 
                  and avoid any cultural faux pas.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                  labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci ac auctor. 
                  Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod elementum nisi quis 
                  eleifend quam adipiscing vitae. Viverra adipiscing at in tellus.
                </p>
              </div>
            </div>

            {/* Sub-section: Itinerary */}
            <div className="flex flex-col gap-4">
              <h2 className="font-sans text-2xl font-semibold leading-7 text-dark-heading">
                Plan Your Itinerary
              </h2>
              <div className="font-serif text-xl leading-8 text-dark-content flex flex-col gap-6">
                <p>
                  While it's essential to leave room for spontaneity and unexpected adventures, having a rough 
                  itinerary can help you make the most of your time and budget. Identify the must-see sights and 
                  experiences and prioritize them according to your interests and preferences. This will help you 
                  avoid overscheduling and ensure that you have time to relax and enjoy your journey.
                </p>
                <p>
                  Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis lectus magna fringilla. 
                  Nec ullamcorper sit amet risus nullam eget felis. Tincidunt arcu non sodales neque sodales ut 
                  etiam sit amet.
                </p>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="bg-light-bg border border-light-border rounded-xl p-8">
              <p className="font-serif text-2xl leading-8 text-dark-heading italic">
                “ Traveling can expose you to new environments and potential health risks, so it's crucial to take 
                precautions to stay safe and healthy. ”
              </p>
            </blockquote>

            {/* Second Image */}
            <img 
              className="w-full rounded-xl" 
              src="/assets/Image (7).png" 
              alt="Traveler looking at a sunset" 
            />

            {/* Advertisement */}
            <aside className="w-full h-[100px] bg-ad-bg rounded-xl flex flex-col justify-center items-center text-center p-4">
              <p className="font-sans text-sm text-gray-meta">Advertisement</p>
              <p className="font-sans text-xl font-semibold leading-6 text-gray-meta">You can place ads</p>
              <p className="font-sans text-lg text-gray-meta">750x100</p>
            </aside>

            {/* Sub-section: Pack Lightly */}
            <div className="flex flex-col gap-4">
              <h2 className="font-sans text-2xl font-semibold leading-7 text-dark-heading">
                Pack Lightly and Smartly
              </h2>
              <p className="font-serif text-xl leading-8 text-dark-content">
                Packing can be a daunting task, but with some careful planning and smart choices, you can pack 
                light and efficiently. Start by making a packing list and sticking to it, focusing on versatile 
                and comfortable clothing that can be mixed and matched. Invest in quality luggage and packing 
                organizers to maximize space and minimize wrinkles.
              </p>
            </div>

            {/* Sub-section: Stay Safe */}
            <div className="flex flex-col gap-4">
              <h2 className="font-sans text-2xl font-semibold leading-7 text-dark-heading">
                Stay Safe and Healthy
              </h2>
              <p className="font-serif text-xl leading-8 text-dark-content">
                Traveling can expose you to new environments and potential health risks, so it's crucial to take 
                precautions to stay safe and healthy. This includes researching any required vaccinations or 
                medications, staying hydrated, washing your hands frequently, and using sunscreen and insect 
                repellent. It's also essential to keep your valuables safe and secure and to be aware of your 
                surroundings at all times.
              </p>
            </div>

            {/* Sub-section: Immerse */}
            <div className="flex flex-col gap-4">
              <h2 className="font-sans text-2xl font-semibold leading-7 text-dark-heading">
                Immerse Yourself in the Local Culture
              </h2>
              <p className="font-serif text-xl leading-8 text-dark-content">
                One of the most rewarding aspects of traveling is immersing yourself in the local culture and 
                customs. This includes trying local cuisine, attending cultural events and festivals, and 
                interacting with locals. Learning a few phrases in the local language can also go a long way 
                in making connections and showing respect.
              </p>
            </div>

            {/* Sub-section: Capture Memories */}
            <div className="flex flex-col gap-4">
              <h2 className="font-sans text-2xl font-semibold leading-7 text-dark-heading">
                Capture Memories
              </h2>
              <p className="font-serif text-xl leading-8 text-dark-content">
                Finally, don't forget to capture memories of your journey. Whether it's through photographs, 
                journaling, or souvenirs, preserving the moments and experiences of your travels can bring joy 
                and nostalgia for years to come. However, it's also essential to be present in the moment and 
                not let technology distract you from the beauty of your surroundings.
              </p>
            </div>

            {/* Conclusion */}
            <div className="flex flex-col gap-4">
              <h2 className="font-sans text-2xl font-semibold leading-7 text-dark-heading">Conclusion:</h2>
              <p className="font-serif text-xl leading-8 text-dark-content">
                Traveling is an art form that requires a blend of planning, preparation, and spontaneity. 
                By following these tips and tricks, you can make the most of your journey and create memories 
                that last a lifetime. So pack your bags, embrace the adventure, and enjoy the ride.
              </p>
            </div>

          </article>
        </div>
      </section>
    </Layout1>
  );
}