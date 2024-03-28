const Faq = () => {
    return (
        <div className="my-10 space-y-2">
            <div className="flex justify-center items-center py-6 bg-base-200 my-6 rounded-xl">
                <h1 className="font-bold text-3xl">Frequently Asked Questions</h1>
            </div>
            <div className="collapse collapse-plus bg-base-200 hover:bg-base-300">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-2xl font-medium">
                How do I place an order on your online bookshop?
                </div>
                <div className="collapse-content">
                    <p>Placing an order on our online bookshop is simple. First, browse through our collection of books by using the search bar or navigating through categories. Once you find the book(s) you wish to purchase, click on the Add to Cart button. After you have finished selecting your items, proceed to the checkout page where you can review your order and enter your shipping and payment information. Finally, click on the Place Order button to confirm your purchase.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 hover:bg-base-300">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-2xl font-medium">
                What payment methods do you accept?
                </div>
                <div className="collapse-content">
                    <p>We accept a variety of payment methods to ensure convenience for our customers. These include major credit and debit cards such as Visa, Mastercard, American Express, as well as PayPal, Apple Pay, Google Pay, and in some regions, cash on delivery (COD).</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 hover:bg-base-300">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-2xl font-medium">
                How long will it take to receive my order?
                </div>
                <div className="collapse-content">
                    <p>The delivery time for your order depends on various factors such as your location, shipping method selected, and the availability of the item(s) you ordered. Generally, orders are processed and dispatched within 1-2 business days. After dispatch, delivery times typically range from 3 to 7 business days for standard shipping, while expedited shipping options may deliver within 1-3 business days.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 hover:bg-base-300">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-2xl font-medium">
                Do you offer gift wrapping or gift cards for purchases?
                </div>
                <div className="collapse-content">
                    <p>Yes, we offer both gift wrapping services and electronic gift cards to enhance your shopping experience. During the checkout process, you can select the option for gift wrapping and include a personalized message for the recipient. Additionally, you can purchase electronic gift cards in various denominations which can be redeemed towards any product on our online bookshop. Gift cards are delivered via email and can be used for multiple purchases until the balance is depleted.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 hover:bg-base-300">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-2xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;