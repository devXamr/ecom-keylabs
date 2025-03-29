import React from 'react';
import SingleProduct from "@/app/components/SingleProduct";

const gmkKeycapSets = [
    {
        name: "GMK CYL Fabrik",
        slug: "gmk-cyl-fabrik",
        description: "A low-contrast, minimalist keycap set designed by MVKB, based on the original GMK blue tone.",
        features: [
            "Premium double-shot ABS keycap kit",
            "1.5 mm thick ABS plastic",
            "Compatible with MX-switches",
            "Developed and manufactured in Germany"
        ],
        price: "€149.00",
        availability: "Available, delivery time: 1-3 days",
        productUrl: "https://www.gmk.net/shop/en/gmk-cyl-fabrik/fptk2065"
    },
    {
        name: "GMK CYL BoW (Black on White)",
        slug: "gmk-cyl-bow-(black-on-white)",
        description: "Enhances your keyboard with its classic color scheme, offering many available sets optimized for your needs.",
        features: [
            "Premium double-shot ABS keycap kit",
            "1.5 mm thick ABS plastic",
            "Compatible with MX-switches",
            "Developed and manufactured in Germany"
        ],
        price: "From €19.00",
        availability: "Available",
        productUrl: "https://www.gmk.net/shop/en/gmk-cyl-bow-black-on-white/fptk5021.0"
    },
    {
        name: "GMK CYL WoB (White on Black)",
        slug: "gmk-cyl-wob-(white-on-black)",
        description: "Features a classic white-on-black color scheme, offering a timeless aesthetic for your keyboard.",
        features: [
            "Premium double-shot ABS keycap kit",
            "1.5 mm thick ABS plastic",
            "Compatible with MX-switches",
            "Developed and manufactured in Germany"
        ],
        price: "From €19.00",
        availability: "Available",
        productUrl: "https://www.gmk.net/shop/en/gmk-cyl-wob-white-on-black/fptk5007.0"
    },
    {
        name: "GMK CYL Mars Cadet",
        slug: "gmk-cyl-mars-cadet",
        description: "A keycap set inspired by space exploration, designed by Nephlock, featuring a unique colorway.",
        features: [
            "Premium double-shot ABS keycap kit",
            "1.5 mm thick ABS plastic",
            "Compatible with MX-switches",
            "Developed and manufactured in Germany"
        ],
        price: "From €29.00",
        availability: "Available",
        productUrl: "https://www.gmk.net/shop/en/gmk-cyl-mars-cadet/gmk10024"
    },
    {
        name: "GMK CYL Monochrome R2",
        slug: "gmk-cyl-monochrome-r2",
        description: "A monochromatic keycap set designed by Full, offering a sleek and modern look for your keyboard.",
        features: [
            "Premium double-shot ABS keycap kit",
            "1.5 mm thick ABS plastic",
            "Compatible with MX-switches",
            "Developed and manufactured in Germany"
        ],
        price: "From €49.00",
        availability: "Available",
        productUrl: "https://www.gmk.net/shop/en/gmk-cyl-monochrome-r2/fptk1460.0"
    }
];

function ProductPage() {
    return ( <div className='flex max-w-[70%] mx-auto'>
            {gmkKeycapSets.map(eachProduct => <SingleProduct key={eachProduct.name} name={eachProduct.name} price={eachProduct.price} />)}
        </div>
    );
}

 export async function SingleProductPage({params})  {

    const {slug} = await params

     const product = gmkKeycapSets.find(product => product.slug === slug)

    return (
        <div className='flex justify-center pt-10 gap-10'>
            <div className='w-[700px] h-[900px] bg-gray-200'>
                image here
            </div>

            <div>
            <div className='font-bold'>{product?.name}</div>

            <div>{product?.availability === 'Available' ? 'Available': 'Out of Stock'}</div>
            <div>description: {product?.description}</div>

            <div>features of the product: </div>
            {product?.features.map(eachFeature => <div>
                {eachFeature}
            </div>)}
            </div>




        </div>
    );
}

export default SingleProductPage;