import React, { useState, useEffect } from 'react';

const Nomor = () => {
  // State untuk menyimpan data post
  const [posts, setPosts] = useState([]);
  // State untuk menyimpan konfigurasi
  const [config, setConfig] = useState({
    sort: 'latest', // 'latest' atau 'oldest'
    itemsPerPage: 10,
    currentPage: 1,
  });

  // Fungsi untuk mengambil data post dari API
  // ...

// Fungsi untuk mengambil data post dari API
const fetchData = async () => {
    // Implementasikan pengambilan data dari API sesuai kebutuhan
    // Misalnya, menggunakan fetch atau axios
    try {
      const response = await fetch(
        // `https://suitmedia-backend.suitdev.com/api/ideas?page[number]=${config.currentPage}&page[size]=${config.itemsPerPage}&sort=${config.sort}&append[]=small_image&append[]=medium_image`
        "https://suitmedia-backend.suitdev.com/api/ideas"
        );
  
      if (response.ok) {
        const data = await response.json();
        setPosts(data.data);
      } else {
        console.error('Error fetching data:', response.status);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  console.log(posts)
  // ...
  
  return (
    <div className="post-list mx-20 justify-center">
      <div className="pagination-controls">
        {/* Navigasi halaman */}
        <button onClick={() => handlePageChange(config.currentPage - 1)} disabled={config.currentPage === 1}>
          Previous
        </button>
        <span className='w-8 flex justify-center my-2'>{config.currentPage}</span>
        <button onClick={() => handlePageChange(config.currentPage + 1)} disabled={posts.length < config.itemsPerPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Nomor;
