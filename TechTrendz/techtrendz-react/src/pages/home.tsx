import { useEffect, useState, useCallback } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Featured, HotDeal, Product, ProductType, Promotion } from "../types/types";
import { MediaViewer } from "../components/MediaViewer"; // For displaying product images
import "../assets/css/Homepage.css"; // Optional: styles for the homepage
import { getFeatured, getHotDeals, getPromotions } from "../components/service/productService";
import { useSelector } from "react-redux";
import { OverlayContextType } from "../components/Layout";
import { AuthState } from "../components/utils/authSlice";
import { getProductTypeAll } from "../components/service/productTypeService";
import { getFileLinkFromMediaId } from "../components/service/fileService";

export const Home = () => {
    const token = useSelector((state: AuthState) => state.auth ? state.auth.token : "")
    const { setLoading, setEmpty } = useOutletContext<OverlayContextType>();
    const navigate = useNavigate();
    const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
    const [productTypes, setProductTypes] = useState<ProductType[]>([]);
    const [hotDeals, setHotDeals] = useState<Product[]>([]);
    const [promotions, setPromotions] = useState<Promotion[]>([]);

    const loadFeaturedProducts = useCallback(async () => {
        const hotdeals = await getFeatured(token!, {} as Featured);
        const products: Product[] = hotdeals ? hotdeals.map(deal => { return deal.product }) : [] as Product[]
        setFeaturedProducts(products);
    }, [token]);

    const loadProductTypes = useCallback(async () => {
        const categoriesList = await getProductTypeAll(token!);
        setProductTypes(categoriesList);
    }, [token]);

    const loadHotDeals = useCallback(async () => {
        const featureds = await getHotDeals(token!, {} as HotDeal);
        const products: Product[] = featureds ? featureds.map(feat => { return feat.product }) : [] as Product[]
        setHotDeals(products);
    }, [token]);

    const loadPromotions = useCallback(async () => {
        const promotions = await getPromotions(token!, {} as Promotion);
        setPromotions(promotions ? promotions : [] as Promotion[]);
    }, [token]);

    useEffect(() => {
        loadHotDeals();
    }, [loadHotDeals]);

    useEffect(() => {
        loadFeaturedProducts();
    }, [loadFeaturedProducts])

    useEffect(() => {
        loadProductTypes();
    }, [loadProductTypes])

    useEffect(() => {
        loadPromotions()
    }, [loadPromotions])

    const openProduct = (id: number) => {
        navigate(`/product/${id}`);
    };

    return (
        <div className="homepage overflow-auto">
            {/* Hero Section */}
            {/* <div className="hero">
                <img src="/assets/adventure-banner.png" alt="Adventure Banner" className="hero-image" />
                <div className="hero-text">
                    <h1>Ready for a new adventure?</h1>
                    <p>Start the season with the latest in clothing and equipment.</p>
                </div>
            </div> */}

            {/* Featured Products */}
            {/* <div className="section featured-products">
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
                                value={{ url: getFileLinkFromMediaId(product.pictures[0].id), type: "image", token: token! }}
                                className="product-image"
                            />
                            <div className="product-info">
                                <div className="product-name">{product.name}</div>
                                <div className="product-price">${product.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}

            {/* ProductTypes Section */}
            {/* <div className="section categories">
                <h2>Shop by ProductType</h2>
                <div className="productType-grid">
                    {productTypes.map((productType) => (
                        <div key={productType.id} className="productType-card" onClick={() => navigate(`/productType/${productType.id}`)}>
                            <img src={productType.imageUrl} alt={productType.name} className="productType-image" />
                            <div className="productType-name">{productType.name}</div>
                        </div>
                    ))}
                </div>
            </div> */}

            {/* Hot Deals Section */}
            <div className="section hot-deals">
                <h2>Hot Deals</h2>
                <div className="product-grid">
                    {hotDeals.map((deal) => (
                        <div key={deal.id} className="product-card" onClick={() => openProduct(deal.id)}>
                            <MediaViewer
                                id={`hot-deal-${deal.id}`}
                                value={{ url: getFileLinkFromMediaId(deal.pictures[0].id), type: "image", token: token! }}
                                className="product-image"
                            />
                            <div className="product-info">
                                <div className="product-name">{deal.name}</div>
                                <div className="product-price">${deal.price} <span className="discount">-{0}%</span></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Promotions Section */}
            <div className="section promotion">
                <h2>Promotions</h2>
                <div className="product-grid">
                    {promotions.map((promo) => (
                        <div key={promo.product.id} className="product-card" onClick={() => openProduct(promo.product.id)}>
                            <MediaViewer
                                id={`hot-deal-${promo.id}`}
                                value={{ url: getFileLinkFromMediaId(promo.product.pictures[0].id), type: "image", token: token! }}
                                className="product-image"
                            />
                            <div className="product-info">
                                <div className="product-name">{promo.product.name}</div>
                                <div className="product-price">${promo.product.price} <span className="discount">-{promo.discount}%</span></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};