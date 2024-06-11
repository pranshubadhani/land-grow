import React from 'react';
import img from '../assets/images/realestate-bg.jpg';

const HomePage = () => {
    return (
        <div className="bg-cover h-screen" style={{ backgroundImage: `url(${img})` }}>

            {/* Hero Section */}
            <header className="flex flex-col items-center justify-center h-full text-center px-4">
                <h1 className="text-7xl font-bold mb-4">Invest in the Future of Land</h1>
                <p className="text-2xl mb-8 font-semibold">Discover best land investment opportunities across the country.</p>
                <a href="/properties" className="bg-regal-blue text-white px-6 py-3 rounded-full hover:bg-blue-800">Get Started</a>
            </header>

            {/* Overview Section */}
            <section className="bg-white py-16 px-4 text-center">
                <h2 className="text-3xl font-bold mb-8">Why Invest in Land?</h2>
                <p className="text-lg mb-4">Investing in land is a stable and profitable long-term strategy. Land is a finite resource, and its value typically appreciates over time.</p>
                <p className="text-lg mb-4">Our platform connects you with premium land investment opportunities tailored to your financial goals.</p>
            </section>

            {/* Featured Properties Section */}
            <section className="bg-gray-100 py-16 px-4 text-center">
                <h2 className="text-3xl font-bold mb-8">Featured Properties</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <img src="../assets/images/property1.jpg" alt="Property 1" className="w-full h-48 object-cover rounded-t-lg mb-4" />
                        <h3 className="text-xl font-bold mb-2">Sunny Acres</h3>
                        <p className="text-lg">A beautiful plot of land located in sunny California, perfect for agricultural investments.</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <img src="../assets/images/property2.jpg" alt="Property 2" className="w-full h-48 object-cover rounded-t-lg mb-4" />
                        <h3 className="text-xl font-bold mb-2">Mountain View</h3>
                        <p className="text-lg">Scenic land nestled in the foothills, ideal for residential development.</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <img src="../assets/images/property3.jpg" alt="Property 3" className="w-full h-48 object-cover rounded-t-lg mb-4" />
                        <h3 className="text-xl font-bold mb-2">Lakeside Retreat</h3>
                        <p className="text-lg">A picturesque lakeside plot, perfect for vacation homes and resorts.</p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="bg-white py-16 px-4 text-center">
                <h2 className="text-3xl font-bold mb-8">What Our Investors Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-100 shadow-md rounded-lg p-4">
                        <p className="text-lg mb-4">"Investing in land through LandInvest was one of the best decisions I've made. The process was seamless and the returns have been fantastic!"</p>
                        <h3 className="text-xl font-bold">John Doe</h3>
                    </div>
                    <div className="bg-gray-100 shadow-md rounded-lg p-4">
                        <p className="text-lg mb-4">"The team at LandInvest is knowledgeable and supportive. They helped me find the perfect investment property to meet my goals."</p>
                        <h3 className="text-xl font-bold">Jane Smith</h3>
                    </div>
                    <div className="bg-gray-100 shadow-md rounded-lg p-4">
                        <p className="text-lg mb-4">"I've seen great returns on my land investments. LandInvest makes it easy to diversify my portfolio with quality land assets."</p>
                        <h3 className="text-xl font-bold">Michael Johnson</h3>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer id="contact" className="bg-gray-800 text-white py-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="mb-4">Have questions? Get in touch with our team.</p>
                <p>Email: info@landinvest.com</p>
                <p>Phone: (123) 456-7890</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="https://facebook.com" className="text-blue-600 hover:underline">Facebook</a>
                    <a href="https://twitter.com" className="text-blue-400 hover:underline">Twitter</a>
                    <a href="https://linkedin.com" className="text-blue-700 hover:underline">LinkedIn</a>
                </div>
            </footer>
        </div>
    );
}

export default HomePage;
