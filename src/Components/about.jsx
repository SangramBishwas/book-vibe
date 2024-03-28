const About = () => {
    return (
        <div className="bg-[#2d3436] p-5 my-5 lg:my-10 lg:p-10">
            <h2 className="text-3xl font-bold text-white pb-5">About Us</h2>
            <p className="text-white font-medium text-lg pb-5">Welcome to our vibrant online book haven, where every click opens a door to new worlds and adventures! Dive into our diverse selection of literary treasures, ranging from gripping mysteries to soul-stirring classics. Explore an extensive collection spanning genres from riveting thrillers to heartwarming romances. With user-friendly navigation, secure transactions, and swift delivery, we ensure your journey through the pages is as delightful as the stories within. With seamless browsing, secure transactions, and prompt delivery, we are your trusted companion in the pursuit of knowledge and imagination.</p>
            <div className="flex flex-col lg:flex-row gap-10 lg:p-16 text-white justify-between items-center">
                <div className="border-b-2 lg:border-r-2 pb-5 lg:pr-5">
                    <h3 className="text-xl font-bold pb-2">Service</h3>
                    <p>Discover the convenience of our online bookshop service! Browse our vast selection from the comfort of your home, with genres to suit every taste. Enjoy hassle-free transactions and prompt delivery, ensuring your favorite reads reach you swiftly. Let us be your guide to a world of literary delights, just a click away!</p>
                </div>
                <div className="border-b-2 lg:border-r-2 pb-5 lg:pr-5">
                    <h3 className="text-xl font-bold pb-2">Terms & Policy</h3>
                    <p>Our online bookshop operates with transparency and integrity, guided by clear terms and policies. We prioritize your satisfaction and security, outlining our commitments regarding purchases, returns, and data protection. Your privacy is paramount, and we adhere to strict guidelines to safeguard your information. Trust in our reliability and commitment to your peace of mind.</p>
                </div>
                <div className="">
                    <h3 className="text-xl font-bold pb-2">Contact</h3>
                    <p>Phone: 01XXXXXXXXX <br />
                        Email: abc@gmail.com <br />
                        Facebook: facebook.page/bookHouse <br />
                        Instagram: Instagram.page/bookHouse 
                        </p>
                </div>

            </div>
        </div>
    );
};

export default About;