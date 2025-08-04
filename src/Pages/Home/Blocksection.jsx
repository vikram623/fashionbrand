import React from "react";

const cards = [
  {
    title: "Fast Delivery",
    description: "We deliver your order within 24 hours.",
    image: "https://www.shutterstock.com/image-vector/fast-delivery-service-concept-courier-260nw-2529822853.jpg",
  },
  {
    title: "Secure Payment",
    description: "All transactions are end-to-end encrypted.",
    image: "https://img.freepik.com/premium-vector/100-secure-payment-green-badge-isolated-transparent-background_105700-1800.jpg",
  },
  {
    title: "Top Brands",
    description: "We offer products from premium brands only.",
    image: "https://png.pngtree.com/png-clipart/20220302/original/pngtree-top-brand-gold-badge-label-png-image_7360230.png",
  },
  {
    title: "24/7 Support",
    description: "We're here to help anytime, anywhere.",
    image: "https://c8.alamy.com/comp/GRHTK2/blue-247-support-button-GRHTK2.jpg",
  },
];

const BlockCardSection = () => {
  return (
    <>
    <div className="max-w-7xl mx-auto px-4 py-10 mt-20">
      <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-40 object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default BlockCardSection;
