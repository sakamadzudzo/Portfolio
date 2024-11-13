import { useEffect, useState, useCallback } from "react";
import { NavLink, useNavigate, useOutletContext } from "react-router-dom";
import { Featured, HotDeal, Product, ProductType, Promotion } from "../types/types";
import { MediaViewer } from "../components/MediaViewer"; // For displaying product images
import "../assets/css/Homepage.css"; // Optional: styles for the homepage
import { getFeatured, getHotDeals, getPromotions } from "../components/service/productService";
import { useSelector } from "react-redux";
import { OverlayContextType } from "../components/Layout";
import { AuthState } from "../components/utils/authSlice";
import { getProductTypeAll } from "../components/service/productTypeService";
import { getFileLinkFromMediaId } from "../components/service/fileService";
import { Hero } from "../components/Hero";

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
        <div className="wrapper h-full block justify-start overflow-y-auto divide-yn divide-dark-50 dark:divide-light-50">
            <div className="h-2/3 w-full bg-light-50 dark:bg-dark-50 flex">
                <Hero className="h-full w-full">
                    <div className="flex flex-col gap-3 justify-center w-full h-full px-8">
                        <div className="font-bold text-4xl">Sit back and relax</div>
                        <div className="font-light text-lg">And enjoy hastle-free shopping from the comfort of your home.</div>
                        <NavLink to={`products`} className={`btn-hollow p-2 rounded-md w-fit`}>View products</NavLink>
                    </div>
                </Hero>
            </div>
            <div className="h-2/3 w-full bg-light-200 dark:bg-dark-100/30 text-3xl flex justify-center items-center">
                TechTrendz
            </div>
            <div className="h-2/3 w-full bg-light-50 dark:bg-dark-50 text-3xl flex justify-center items-center">
                TechTrendz
            </div>
        </div>
    );
};