import { BarChart, PlusCircle, ShoppingBasket } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import AnalyticsTab from "../components/AnalyticsTab";
import CreateProductForm from "../components/CreateProductForm";
import ProductsList from "../components/ProductsList";
import { useProductStore } from "../stores/useProductStore";

const tabs = [
	{ id: "create", label: "Add Product", icon: PlusCircle },
	{ id: "products", label: "Product List", icon: ShoppingBasket },
	{ id: "analytics", label: "Analytics", icon: BarChart },
];

const AdminPage = () => {
	const [activeTab, setActiveTab] = useState("create");
	const { fetchAllProducts } = useProductStore();

	useEffect(() => {
		fetchAllProducts();
	}, [fetchAllProducts]);

	return (
		<div className='min-h-screen bg-fashion-beige py-16 px-4'>
			<div className='max-w-5xl mx-auto'>
				<motion.h1
					className='text-4xl font-bold text-center text-fashion-charcoal mb-10'
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					Admin Dashboard
				</motion.h1>

				<div className='flex justify-center mb-10'>
					{tabs.map((tab) => {
						const Icon = tab.icon;
						return (
							<button
								key={tab.id}
								onClick={() => setActiveTab(tab.id)}
								className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium shadow-sm transition
									${activeTab === tab.id
										? "bg-fashion-charcoal text-white"
										: "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
									}`}
							>
								<Icon className='h-5 w-5' />
								{tab.label}
							</button>
						);
					})}
				</div>

				<div className='bg-white shadow rounded-xl p-6 border border-gray-200'>
					{activeTab === "create" && <CreateProductForm />}
					{activeTab === "products" && <ProductsList />}
					{activeTab === "analytics" && <AnalyticsTab />}
				</div>
			</div>
		</div>
	);
};

export default AdminPage;
