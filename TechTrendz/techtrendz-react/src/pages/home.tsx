import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Product, ProductType } from "../types/types"; // Assuming you have types defined for products and productTypes
import { getFeaturedProducts, getHotDeals, getProductTypes } from "../components/service/homepageService"; // Example services to fetch homepage data
import { MediaViewer } from "../components/MediaViewer"; // For displaying product images
import "../assets/css/Homepage.css"; // Optional: styles for the homepage

const Home = () => {
    const navigate = useNavigate();
    const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
    const [productTypes, setProductTypes] = useState<ProductType[]>([]);
    const [hotDeals, setHotDeals] = useState<Product[]>([]);
    
    const loadFeaturedProducts = useCallback(async () => {
        const products = await getFeaturedProducts();
        setFeaturedProducts(products);
    }, []);

    const loadProductTypes = useCallback(async () => {
        const categoriesList = await getProductTypes();
        setProductTypes(categoriesList);
    }, []);

    const loadHotDeals = useCallback(async () => {
        const deals = await getHotDeals();
        setHotDeals(deals);
    }, []);

    useEffect(() => {
        loadFeaturedProducts();
        loadProductTypes();
        loadHotDeals();
    }, [loadFeaturedProducts, loadProductTypes, loadHotDeals]);

    const openProduct = (id: number) => {
        navigate(`/product/${id}`);
    };

    return (
        <div className="homepage">
            {/* Hero Section */}
            <div className="hero">
                <img src="/assets/adventure-banner.png" alt="Adventure Banner" className="hero-image" />
                <div className="hero-text">
                    <h1>Ready for a new adventure?</h1>
                    <p>Start the season with the latest in clothing and equipment.</p>
                </div>
            </div>

            {/* Featured Products */}
            <div className="section featured-products">
                <h2>Featured Products</h2>
                <div className="product-grid">
                    {featuredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="product-card"
                            onClick={() => openProduct(product.id)}
                        >
                            <MediaViewer
                                id={`featured-product-${product.id}`}
                                value={{ url: product.imageUrl, type: "image", token: "" }} // Customize how you manage images
                                className="product-image"
                            />
                            <div className="product-info">
                                <div className="product-name">{product.name}</div>
                                <div className="product-price">${product.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ProductTypes Section */}
            <div className="section categories">
                <h2>Shop by ProductType</h2>
                <div className="productType-grid">
                    {productTypes.map((productType) => (
                        <div key={productType.id} className="productType-card" onClick={() => navigate(`/productType/${productType.id}`)}>
                            <img src={productType.imageUrl} alt={productType.name} className="productType-image" />
                            <div className="productType-name">{productType.name}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Hot Deals Section */}
            <div className="section hot-deals">
                <h2>Hot Deals</h2>
                <div className="product-grid">
                    {hotDeals.map((deal) => (
                        <div key={deal.id} className="product-card" onClick={() => openProduct(deal.id)}>
                            <MediaViewer
                                id={`hot-deal-${deal.id}`}
                                value={{ url: deal.imageUrl, type: "image", token: "" }}
                                className="product-image"
                            />
                            <div className="product-info">
                                <div className="product-name">{deal.name}</div>
                                <div className="product-price">${deal.price} <span className="discount">-{deal.discount}%</span></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;