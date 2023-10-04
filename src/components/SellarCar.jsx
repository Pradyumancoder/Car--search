import React, { useState, useEffect } from 'react';

function SellarCar({ searchText }) {
  // Define the initial car items data
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
    // Add more car data items here
  ]);

  // Create a state to store the filtered car items
  const [filteredCarItems, setFilteredCarItems] = useState(carItems);

  // Create a state to manage the current page
  const [currentPage, setCurrentPage] = useState(1);

  // Define the number of items to display per page
  const itemsPerPage = 6; // 3 columns x 2 rows = 6 items per page

  // Calculate the total number of pages based on filtered car items and items per page
  const totalPages = Math.ceil(filteredCarItems.length / itemsPerPage);

  // useEffect to filter car items based on searchText and reset currentPage
  useEffect(() => {
    // Filter the car items based on searchText
    const filteredItems = carItems.filter((carItem) =>
      carItem.name.toLowerCase().includes(searchText.toLowerCase())
    );

    // Update the filtered car items
    setFilteredCarItems(filteredItems);

    // Reset to the first page when the search text changes
    setCurrentPage(1);
  }, [searchText, carItems]);

  // Calculate the start and end index for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredCarItems.length);

  // Get the subset of data for the current page
  const currentItems = filteredCarItems.slice(startIndex, endIndex);

  // Function to handle page navigation
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div id='carpage'>
      <div id='innerPage'>
        <div className='grid grid-cols-3 gap-4'>
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
                    className='h-4 mt-2'
                    src='https://cdn-icons-png.flaticon.com/512/8188/8188099.png'
                    alt=''
                  />
                  <h3>{carItem.VehicleType}</h3>
                </div>
              </div>
              <div className='flex justify-between'>
                <p>Price: ${carItem.price}</p>
                <button className='h-6 border border-blue-500 bg-blue-500 rounded-md text-white'>Rent Now</button>
              </div>
            </div>
            
          ))}
        </div>
        <div className='flex gap-10 justify-center mt-10'>
          <button
            className='bg-slate-700 p-2 text-white'
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={
                currentPage === index + 1
                  ? 'px-2 text-white bg-slate-500 border-solid border-2'
                  : 'px-2 text-black'
              }
            >
              {index + 1}
            </button>
          ))}
          <button
            className='bg-slate-700 p-2 text-white'
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