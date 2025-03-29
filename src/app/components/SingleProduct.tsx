import React from 'react';

import Link from "next/link";

export function SingleProduct({name, price}) {

    const nameIntoSlug = name.toLowerCase().replaceAll(' ', '-')
    console.log(nameIntoSlug)
    return (
        <Link href={`/products/${nameIntoSlug}`}>
        <div className='my-9 mx-9'>
            <div className='w-[200px] h-[200px] bg-gray-200'>This will be the product image</div>
            <div>{price}</div>
            <div>{name}</div>
        </div>
        </Link>     
    );
}

export default SingleProduct;