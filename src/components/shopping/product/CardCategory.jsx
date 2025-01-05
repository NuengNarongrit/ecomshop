import React from 'react';
import PropTypes from 'prop-types';

export default function CardCategory({ img, name, count }) {
    return (
        <div className='border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform duration-300 ease-in-out rounded-lg'>
            <div className="flex justify-between items-center p-6">
                <div className="space-y-4">
                    <h3 className='font-medium text-xl' data-aos="zoom-y-out">{name}</h3>
                    <p className="text-gray-500" data-aos="zoom-y-out">{count}</p>
                </div>
                <img src={img} alt={name} className="w-[100px]" />
            </div>
        </div>
    );
}

CardCategory.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    count: PropTypes.string,
};

CardCategory.defaultProps = {
    count: '0',
};
