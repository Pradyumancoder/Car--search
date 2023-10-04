import React, { useState, useEffect } from 'react';

function SellarCar({ searchText }) {
  const [carItems, setCarItems] = useState([
    {
        id: 1,
        imageSrc:
            'https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1666008987698.jpg?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=10&w=800',
        price: 10000,
        name: 'Toyota',
        year: 2021,
        people: '4 people',
        type: 'Gasoline',
        Mileage: '4-km / 1-liter',
        VehicleType: 'Automatic',
      },
      {
        id: 2,
        imageSrc:
            'https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1666008987698.jpg?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=10&w=800',
        price: 12000,
        name: 'BMW',
        year: 2021,
        people: '4 people',
        type: 'Gasoline',
        Mileage: '4-km / 1-liter',
        VehicleType: 'Automatic',
      },
      {
        id: 3,
        imageSrc:
            'https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1666008987698.jpg?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=10&w=800',
        price: 9000,
        name: 'Mercedis',
        year: 2021,
        people: '4 people',
        type: 'Gasoline',
        Mileage: '4-km / 1-liter',
        VehicleType: 'Automatic',
      },
      {
        id: 4,
        imageSrc:
            'https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1666008987698.jpg?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=10&w=800',
        price: 11000,
        name: 'Maruti',
        year: 2021,
        people: '4 people',
        type: 'Gasoline',
        Mileage: '4-km / 1-liter',
        VehicleType: 'Automatic',
      },
      {
        id: 5,
        imageSrc:
            'https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1666008987698.jpg?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=10&w=800',
        price: 9500,
        name: 'Toyota',
        year: 2021,
        people: '4 people',
        type: 'Gasoline',
        Mileage: '4-km / 1-liter',
        VehicleType: 'Automatic',
      },
      {
        id: 6,
        imageSrc:
            'https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1666008987698.jpg?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=10&w=800',
        price: 10500,
        name: 'Toyota',
        year: 2021,
        people: '4 people',
        type: 'Gasoline',
        Mileage: '4-km / 1-liter',
        VehicleType: 'Automatic',
      },
      {
        id: 7,
        imageSrc:
            'https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1666008987698.jpg?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=10&w=800',
        price: 10000,
        name: 'Suzuki',
        year: 2021,
        people: '4 people',
        type: 'Gasoline',
        Mileage: '4-km / 1-liter',
        VehicleType: 'Automatic',
      },
      {
        id: 8,
        imageSrc:
            'https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1666008987698.jpg?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=10&w=800',
        price: 12000,
        name: 'BMW',
        year: 2021,
        people: '4 people',
        type: 'Gasoline',
        Mileage: '4-km / 1-liter',
        VehicleType: 'Automatic',
      },
      {
        id: 9,
        imageSrc:
            'https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1666008987698.jpg?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=10&w=800',
        price: 9000,
        name: 'Safari',
        year: 2021,
        people: '4 people',
        type: 'Gasoline',
        Mileage: '4-km / 1-liter',
        VehicleType: 'Automatic',
      },
      {
        id: 10,
        imageSrc:
            'https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1666008987698.jpg?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=10&w=800',
        price: 11000,
        name: 'Maruti',
        year: 2021,
        people: '4 people',
        type: 'Gasoline',
        Mileage: '4-km / 1-liter',
        VehicleType: 'Automatic',
      },
      {
        id: 11,
        imageSrc:
            'https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1666008987698.jpg?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=10&w=800',
        price: 9500,
        name: 'Toyota',
        year: 2021,
        people: '4 people',
        type: 'Gasoline',
        Mileage: '4-km / 1-liter',
        VehicleType: 'Automatic',
      },
      {
        id: 12,
        imageSrc:
            'https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1666008987698.jpg?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=10&w=800',
        price: 10500,
        name: 'Toyota',
        year: 2021,
        people: '4 people',
        type: 'Gasoline',
        Mileage: '4-km / 1-liter',
        VehicleType: 'Automatic',
      },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Number of items to display per page (2 rows with 2 columns)
  const totalPages = Math.ceil(carItems.length / itemsPerPage);

  useEffect(() => {
    // Filter the car items based on searchText
    const filteredItems = carItems.filter((carItem) =>
      carItem.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setCarItems(filteredItems);
    setCurrentPage(1); // Reset to the first page when the search text changes
  }, [searchText, carItems]);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, carItems.length);

  // Get the subset of data for the current page
  const currentItems = carItems.slice(startIndex, endIndex);

  // Function to handle page navigation
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div id='carpage'>
      <div id='innerPage'>
        <div className='grid grid-cols-2 gap-4'>
          {currentItems.map((carItem) => (
            <div key={carItem.id} className='bg-gray-200 p-4'>
              <img src={carItem.imageSrc} alt={`Car ${carItem.id}`} />
              <div className='flex justify-between'>
                <h3>{carItem.name}</h3>
                <h3>{carItem.year}</h3>
              </div>
              <div className='flex justify-between '>
                <div className='flex gap-2'>
                  <img
                    className='h-6'
                    src='https://cdn-icons-png.flaticon.com/128/2118/2118701.png'
                    alt='people icon'
                  />
                  <h3>{carItem.people}</h3>
                </div>
                <div className='flex gap-2'>
                  <img
                    className='h-6'
                    src='https://cdn-icons-png.flaticon.com/128/10695/10695327.png'
                    alt=''
                  />
                  <h3>{carItem.type}</h3>
                </div>
              </div>
              <div className='flex justify-between '>
                <div className='flex gap-2'>
                  <img
                    className='h-6'
                    src='https://cdn-icons-png.flaticon.com/512/4341/4341506.png'
                    alt=''
                  />
                  <h3>{carItem.Mileage}</h3>
                </div>
                <div className='flex gap-2'>
                  <img
                    className='h-6'
                    src='https://cdn-icons-png.flaticon.com/512/8188/8188099.png'
                    alt=''
                  />
                  <h3>{carItem.VehicleType}</h3>
                </div>
              </div>
              <div className='flex justify-between'>
                <p>Price: ${carItem.price}</p>
                <button>Rent Now</button>
              </div>
            </div>
          ))}
        </div>
        <div className='pagination'>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default SellarCar;
