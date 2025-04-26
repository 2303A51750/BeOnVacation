
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();

  // Sample blog posts data
  const blogPosts = [
    {
      id: '1',
      title: 'Top 10 Beaches in India You Must Visit',
      content: `
        <p class="mb-4">India's vast coastline stretching over 7,500 kilometers offers a diverse range of beautiful beaches. From the party shores of Goa to the serene beaches of the Andaman Islands, there's something for every type of traveler. Here are our top 10 picks for the most beautiful beaches in India that you must add to your travel bucket list.</p>
        
        <h3 class="text-xl font-semibold mb-3">1. Radhanagar Beach, Andaman Islands</h3>
        <p class="mb-4">Often ranked as one of Asia's best beaches, Radhanagar Beach on Havelock Island features pristine white sands, turquoise waters, and lush greenery. The sunset views here are absolutely magical, making it perfect for nature lovers and photographers.</p>
        
        <h3 class="text-xl font-semibold mb-3">2. Palolem Beach, Goa</h3>
        <p class="mb-4">A crescent-shaped beach lined with coconut palms, Palolem offers a more relaxed atmosphere compared to North Goa's beaches. It's ideal for swimming due to its calm waters and features colorful beach huts for accommodation.</p>
        
        <h3 class="text-xl font-semibold mb-3">3. Varkala Beach, Kerala</h3>
        <p class="mb-4">Unique for its clifftop setting, Varkala Beach offers stunning views of the Arabian Sea. The red laterite cliffs rising above the beach create a dramatic landscape, with restaurants and shops perched along the cliff offering panoramic vistas.</p>
        
        <h3 class="text-xl font-semibold mb-3">4. Agonda Beach, Goa</h3>
        <p class="mb-4">A tranquil and less crowded option in South Goa, Agonda Beach is perfect for those seeking peace and relaxation. Its long stretch of sand provides ample space, and it's also a nesting site for Olive Ridley turtles.</p>
        
        <h3 class="text-xl font-semibold mb-3">5. Kovalam Beach, Kerala</h3>
        <p class="mb-4">Comprising three adjacent crescent beaches, Kovalam is known for its shallow waters and low tidal waves, making it safe for swimming. The lighthouse beach section offers panoramic views from its 35-meter lighthouse.</p>
        
        <p class="mb-4">Whether you're looking for adventure, relaxation, or stunning photography spots, India's coastline has a beach that's perfect for you. Plan your next beach vacation to one of these gorgeous destinations for an unforgettable experience.</p>
      `,
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      date: 'April 15, 2023',
      author: 'Priya Sharma',
    },
    {
      id: '2',
      title: 'Budget Travel Tips for Southeast Asia',
      content: `
        <p class="mb-4">Southeast Asia has long been a favorite destination for budget travelers, offering an incredible mix of cultures, cuisines, landscapes, and experiences at prices that are often a fraction of what you'd pay in Western countries. Here are some practical tips to make your money go further while traveling through this diverse region.</p>
        
        <h3 class="text-xl font-semibold mb-3">Accommodation Strategies</h3>
        <p class="mb-4">Hostels are abundant throughout Southeast Asia, with dorm beds typically ranging from ₹300-800 per night. For a little more privacy without breaking the bank, look for guesthouses and budget hotels, which can be found for ₹800-1,500 per night. In less touristy areas, you might find even better deals.</p>
        <p class="mb-4">Booking platforms like Hostelworld and Booking.com are useful, but don't overlook the benefits of simply walking in and negotiating rates directly, especially for longer stays. Many places offer significant discounts for stays of a week or more.</p>
        
        <h3 class="text-xl font-semibold mb-3">Transportation Tips</h3>
        <p class="mb-4">Local transportation in Southeast Asia is incredibly cheap and often an adventure in itself. From Bangkok's tuk-tuks to Vietnam's motorbike taxis, embracing local transport methods not only saves money but enriches your travel experience.</p>
        <p class="mb-4">For longer distances, overnight buses and trains can save you both time and accommodation costs. Book these directly at stations or through your accommodation for the best rates.</p>
        
        <h3 class="text-xl font-semibold mb-3">Food & Dining</h3>
        <p class="mb-4">Street food is not only the most budget-friendly option but often the most delicious way to experience authentic local cuisine. In countries like Thailand, Vietnam, and Malaysia, you can enjoy a flavorful meal for as little as ₹100-200.</p>
        <p class="mb-4">Night markets are food paradises for budget travelers, offering a wide variety of dishes at low prices. They're also great places to mingle with locals and fellow travelers.</p>
        
        <h3 class="text-xl font-semibold mb-3">Activities & Sightseeing</h3>
        <p class="mb-4">Many temples, parks, and natural attractions have minimal entrance fees or are completely free. Research free walking tours, which operate on a tip-based system in many major cities.</p>
        <p class="mb-4">For paid attractions, check if there are discounted days or times. Some places offer reduced rates for early morning visits or during low season.</p>
        
        <p class="mb-4">With careful planning and these budget-conscious strategies, you can explore the wonders of Southeast Asia without emptying your wallet. The memories you'll create will be priceless, regardless of how much you spend.</p>
      `,
      image: 'https://images.unsplash.com/photo-1540329957110-119f56dc7e5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      date: 'March 22, 2023',
      author: 'Raj Mehta',
    },
    {
      id: '3',
      title: 'Cultural Etiquette When Traveling Abroad',
      content: `
        <p class="mb-4">One of the most rewarding aspects of international travel is experiencing different cultures. However, what's considered polite in one country might be offensive in another. Being aware of cultural differences and showing respect for local customs not only enriches your travel experience but also helps you build meaningful connections with the people you meet along the way.</p>
        
        <h3 class="text-xl font-semibold mb-3">Research Before You Go</h3>
        <p class="mb-4">Before visiting a new country, take some time to learn about its cultural norms, traditions, and taboos. Understanding basic greeting customs, dining etiquette, appropriate dress codes, and religious practices can help you avoid unintentional disrespect.</p>
        <p class="mb-4">Even learning a few basic phrases in the local language—like "hello," "thank you," and "please"—can go a long way in showing respect and building goodwill.</p>
        
        <h3 class="text-xl font-semibold mb-3">Dress Appropriately</h3>
        <p class="mb-4">In many countries, particularly those with strong religious influences, modest dress is appreciated or even required. This is especially important when visiting religious sites such as temples, mosques, and churches, where shoulders and knees should typically be covered.</p>
        <p class="mb-4">In some Middle Eastern and Asian countries, women may need to cover their hair. Always carry a scarf or shawl in your bag when traveling in these regions.</p>
        
        <h3 class="text-xl font-semibold mb-3">Dining Customs</h3>
        <p class="mb-4">Table manners vary widely across cultures. In Japan, slurping noodles is a compliment to the chef, while in China, leaving a bit of food on your plate shows that your host provided plenty. In many Middle Eastern and Indian cultures, eating is done with the right hand only, as the left hand is considered unclean.</p>
        <p class="mb-4">When in doubt, observe what locals are doing and follow their lead. If you're invited to someone's home for a meal, consider bringing a small gift as a token of appreciation.</p>
        
        <h3 class="text-xl font-semibold mb-3">Photography Etiquette</h3>
        <p class="mb-4">Always ask permission before taking photos of people, particularly in more traditional societies. Some cultures believe that a photograph captures a piece of the soul, while others may simply value their privacy.</p>
        <p class="mb-4">Be especially respectful at religious sites, markets, and ceremonies. Some places prohibit photography altogether, so watch for signs or ask if you're unsure.</p>
        
        <p class="mb-4">Respecting cultural differences doesn't mean you have to become an expert in every local custom, but showing a genuine interest and willingness to learn goes a long way. When you inevitably make a cultural misstep, respond with humility, apologize if necessary, and use it as an opportunity to deepen your understanding. After all, these cross-cultural exchanges are what make travel such a powerful way to broaden our perspectives.</p>
      `,
      image: 'https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      date: 'February 10, 2023',
      author: 'Anjali Gupta',
    },
  ];

  // Find the blog post with the matching ID
  const blogPost = blogPosts.find(post => post.id === id);

  // If no matching blog post is found, show a not found message
  if (!blogPost) {
    return (
      <>
        <Navbar />
        <div className="container-custom my-12 text-center">
          <h2 className="text-3xl font-bold">Blog Post Not Found</h2>
          <p className="mt-4">The blog post you're looking for doesn't exist or has been removed.</p>
          <Link to="/blogs" className="btn-primary mt-6 inline-block">
            Back to Blogs
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      
      {/* Blog Post Header */}
      <div 
        className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-cover bg-center text-white" 
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${blogPost.image})` }}
      >
        <div className="container-custom text-center z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">{blogPost.title}</h1>
          <div className="flex items-center justify-center gap-4 text-gray-200">
            <span>{blogPost.date}</span>
            <span>|</span>
            <span>By {blogPost.author}</span>
          </div>
        </div>
      </div>
      
      {/* Blog Content */}
      <div className="container-custom my-12">
        <Link to="/blogs" className="flex items-center text-travel-blue hover:text-travel-ocean mb-6 transition-colors">
          <ArrowLeft size={18} className="mr-2" />
          Back to Blogs
        </Link>
        
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: blogPost.content }} />
          
          <div className="mt-10 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Share this article:</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">Facebook</a>
              <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">Twitter</a>
              <a href="#" className="text-gray-500 hover:text-blue-700 transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-500 hover:text-green-600 transition-colors">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default BlogPost;
