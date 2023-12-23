import React, { useState, useEffect } from 'react';

const ListPost = () => {
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
        " https://suitmedia-backend.suitdev.com/api/ideas"
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
  
  // ...
  
  return (
    <div className="post-list mx-20 justify-end">
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <img src={post.small_image} alt={post.title} loading="lazy" className="post-thumbnail" />
          <div className="post-content">
            <h3 className="post-title">{post.title}</h3>
            <p>{post.content}</p>
          </div>
        </div>
      ))}

      <div className="pagination-controls">
        {/* Pilihan sort */}
        <select onChange={(e) => handleConfigChange('sort', e.target.value)}>
          <option value="latest">Terbaru</option>
          <option value="oldest">Terlama</option>
        </select>

        {/* Pilihan items per page */}
        <select onChange={(e) => handleConfigChange('itemsPerPage', parseInt(e.target.value))}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>
    </div>
  );
};

export default ListPost;
