import React, { useState } from 'react';
import styles from './AddProductPage.module.css';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function AddProductPage() {
  const [productData, setProductData] = useState({
    productName: '',
    productDescription: '',
    productType: '',
    productColor: '',
    productPrice: '',
    newPrice: '0',
    offerPercentage: '0',
    productLabel: '',
    productImage: null as File | null,
  });

  const [open, setOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProductData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setProductData(prevData => ({
        ...prevData,
        productImage: e.target.files![0],
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(productData);
    setOpen(true);
    setProductData({
      productName: '',
      productDescription: '',
      productType: '',
      productColor: '',
      productPrice: '',
      newPrice: '0',
      offerPercentage: '0',
      productLabel: '',
      productImage: null as File | null,
    });
  };
  
  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );


  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1>Add Product</h1>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>Product Name:</label>
        <input type="text" name="productName" value={productData.productName} onChange={handleChange} required />

        <label>Product Description:</label>
        <textarea name="productDescription" value={productData.productDescription} onChange={handleChange} required></textarea>

        <label>Product Type:</label>
        <select name="productType" value={productData.productType} onChange={handleChange} required>
          <option value="">Select a type</option>
          <option value="saree">Saree</option>
          <option value="kurti">Kurti</option>
          <option value="lehenga">Lehenga</option>
          <option value="salwar-kameez">Salwar Kameez</option>
          <option value="anarkali">Anarkali Suit</option>
          <option value="sharara">Sharara Suit</option>
        </select>

        <label>Product Color:</label>
        <input type="text" name="productColor" value={productData.productColor} onChange={handleChange} required />

        <label>Product Price:</label>
        <input type="number" name="productPrice" value={productData.productPrice} onChange={handleChange} required />

        <label>New Price:</label>
        <input type="number" name="newPrice" value={productData.newPrice} onChange={handleChange} required />

        <label>Offer Percentage:</label>
        <input type="number" name="offerPercentage" value={productData.offerPercentage} onChange={handleChange} required />

        <label>Product Label:</label>
        <select name="productLabel" value={productData.productLabel} onChange={handleChange} required>
          <option value="">Select a label</option>
          <option value="new">New</option>
          <option value="offer">Offer</option>
          <option value="trend">Trend</option>
          <option value="most-sale">Most Sale</option>
        </select>

        <label>Product Image:</label>
        <input type="file" name="productImage" onChange={handleFileChange} required />

        <button type="submit">Add Product</button>
      </form>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Product Added Successfully"
        action={action}
      />
    </div>
  );
}

export default AddProductPage;