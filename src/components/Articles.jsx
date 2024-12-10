import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Articles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/api/articles');
                setArticles(response.data);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchArticles();
    }, []);

    return (
        <section id="articles" className="py-16 bg-success-50">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-10">Latest Articles</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                            <h3 className="text-2xl font-semibold text-gray-700">{article.title}</h3>
                            <p className="mt-4 text-gray-600">{article.description}</p>
                            <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 mt-4 block">
                                Read More
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Articles;