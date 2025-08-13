import React from 'react'

const ProductsSection = () => {
    return (
        <div>
            <section id="products" className="py-20 bg-orange-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4">
                            Premium Collection
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover our range of luxury car seats designed for the most discerning drivers
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Executive Series",
                                price: "From $2,999",
                                image: "/images/image6.jpg",
                            },
                            { name: "Sport Elite", price: "From $3,499", image: "/images/image10.jpg" },
                            {
                                name: "Comfort Plus",
                                price: "From $2,499",
                                image: "/images/image15.jpg",
                            },
                            { name: "Custom Signature", price: "From $4,999", 
                                image: "/images/image5.jpg" },
                            { name: "Racing Pro", price: "From $3,999", image: 
                                "/images/image3.jpg" },
                            {
                                name: "Presidential",
                                price: "From $5,999",
                                image: "/images/image12.jpg",
                            },
                        ].map((product, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
                            >
                                <div className="relative h-64">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <span className="absolute top-4 left-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                        Premium
                                    </span>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-serif font-bold text-xl mb-2 text-gray-900">{product.name}</h3>
                                    <p className="text-orange-600 font-semibold text-lg mb-4">{product.price}</p>
                                    <button className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white hover:opacity-90 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductsSection
