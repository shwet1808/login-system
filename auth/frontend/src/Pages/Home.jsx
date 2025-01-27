import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';

function Home() {
    const [loggedInUser, setLoggedInUser] = useState('');
    const [products, setProducts] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedINUser'))
    }, [])

    const handleLogout = (e) => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        handleSuccess('User Logged out');
        setTimeout(() => {
            navigate('/login');
        }, 1000)
    }

    const fetchProducts = async () => {
        try {
            const url = "http://localhost:8080/products";
            const headers = {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
            }
            const response = await fetch(url, headers);
            const result = await response.json();
            setProducts(result);
        } catch (err) {
            handleError(err);
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className="home-container">
            <style>
                {`
                    .home-container {
                        margin-top: 60px; /* Add margin to fix the navbar overlap */
                        padding: 20px;
                        font-family: Arial, sans-serif;
                    }

                    h1 {
                        font-size: 2rem;
                        color: #333;
                        margin-bottom: 20px;
                    }

                    .logout-btn {
                        background-color: #ff4d4d;
                        color: white;
                        border: none;
                        padding: 10px 15px;
                        border-radius: 5px;
                        cursor: pointer;
                        font-size: 1rem;
                        margin-bottom: 20px;
                        transition: background-color 0.3s ease;
                    }

                    .logout-btn:hover {
                        background-color: #e60000;
                    }

                    .products-container {
                        margin-top: 30px;
                    }

                    .product-item {
                        list-style-type: none;
                        padding: 5px 0;
                        border-bottom: 1px solid #ddd;
                    }

                    .product-item li {
                        font-size: 1rem;
                        color: #555;
                    }
                `}
            </style>
            <h1>Welcome {loggedInUser}</h1>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
            <div className="products-container">
                {
                    products && products?.map((item, index) => (
                        <ul key={index} className="product-item">
                            <li>{item.name} : {item.price}</li>
                        </ul>
                    ))
                }
            </div>
            <ToastContainer />
        </div>
    )
}

export default Home;
