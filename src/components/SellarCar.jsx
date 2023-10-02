import React from 'react';

function SellarCar() {
    // Dummy data for the car items (you can replace this with your data)
    const carItems = [
        {
            id: 1,
            imageSrc: 'https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1666008987698.jpg?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=10&w=800',
            price: 10000,
            name: "toyota",
            year: 2021,
            people: "4 people",
            type: "Gasoline",
            Milage: "4-km / 1-litter",
            VehicalType: "Automatic",
        },
        {
            id: 2,
            imageSrc: 'https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1666008987698.jpg?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=10&w=800',
            price: 12000,
            name: "toyota",
            year: 2021,
            people: "4 people",
            type: "Gasoline",
            Milage: "4-km / 1-litter",
            VehicalType: "Automatic",
        },
        {
            id: 3,
            imageSrc: 'https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1666008987698.jpg?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=10&w=800',
            price: 9000,
            name: "toyota",
            year: 2021,
            people: "4 people",
            type: "Gasoline",
            Milage: "4-km / 1-litter",
            VehicalType: "Automatic",
        },
        {
            id: 4,
            imageSrc: 'https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1666008987698.jpg?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=10&w=800',
            price: 11000,
            name: "toyota",
            year: 2021,
            people: "4 people",
            type: "Gasoline",
            Milage: " 4-km / 1-litter",
            VehicalType: "Automatic",
        },
        {
            id: 5,
            imageSrc: 'https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1666008987698.jpg?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=10&w=800',
            price: 9500,
            name: "toyota",
            year: 2021,
            people: "4 people",
            type: "Gasoline",
            Milage: "4-km / 1-litter",
            VehicalType: "Automatic",
        },
        {
            id: 6,
            imageSrc: 'https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1666008987698.jpg?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=10&w=800',
            price: 10500,
            name: "toyota",
            year: 2021,
            people: "4 people",
            type: "Gasoline",
            Milage: "4-km / 1-litter",
            VehicalType: "Automatic",
        },
    ];

    return (
        <div id='carpage'>
            <div id='innerPage'>
                <div className='grid grid-cols-3 gap-4'>
                    {carItems.map((carItem) => (
                        <div key={carItem.id} className='bg-gray-200 p-4'>
                            <img src={carItem.imageSrc} alt={`Car ${carItem.id}`} />
                            <div className='flex justify-between'>
                                <h3>{carItem.name}</h3>
                                <h3>{carItem.year}</h3>

                            </div>

                            <div className='flex justify-between '>
                                <div className='flex gap-2'>
                                    <img className='h-6' src="https://cdn-icons-png.flaticon.com/128/2118/2118701.png" alt="peole icon" />
                                    <h3>{carItem.people}</h3>
                                </div>

                                <div className='flex gap-2'>
                                    <img className='h-6' src="https://cdn-icons-png.flaticon.com/128/10695/10695327.png" alt="" />
                                    <h3>{carItem.type}</h3>
                                </div>

                            </div>

                            <div className='flex justify-between '>
                                <div className='flex gap-2'>
                                    <img className='h-6' src="https://cdn-icons-png.flaticon.com/512/4341/4341506.png" alt="" />
                                    <h3>{carItem.Milage}</h3>
                                </div>

                                <div className='flex gap-2'>
                                    <img className='h-6' src="https://cdn-icons-png.flaticon.com/512/8188/8188099.png" alt="" />
                                    <h3>{carItem.VehicalType}</h3>
                                </div>

                            </div>

                            <div className='flex justify-between'>
                                <p>Price: ${carItem.price}</p>
                                <button>RentNow</button>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SellarCar;
