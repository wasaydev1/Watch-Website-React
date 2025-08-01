import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AdminPanel = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('desc', desc);
    formData.append('price', price);
    formData.append('image', image);

    try {
      const res = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Watch Uploaded Successfully!")
        // reset form
        setTitle('');
        setDesc('');
        setPrice('');
        setImage(null);
        e.target.reset();
      } else {
        toast.error("Upload failed!");
      }
    } catch (error) {
      toast.error("Server error!");
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-10 max-w-xl mx-auto mt-10 bg-white shadow-lg rounded-xl"
    >
      <h2 className="text-3xl font-bold text-center">Add New Watch</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-2 border border-gray-300 rounded"
        required
      />

      <textarea
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        className="p-2 border border-gray-300 rounded"
        rows="4"
        required
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="p-2 border border-gray-300 rounded"
        required
      />

      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        className="p-2 border border-gray-300 rounded"
        required
      />

      <button
        type="submit"
        className="bg-black text-white py-2 rounded hover:bg-gray-800 transition duration-200"
      >
        Upload Watch
      </button>
    </form>
  );
};

export default AdminPanel;
