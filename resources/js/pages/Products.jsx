import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
    // Giả lập danh sách sản phẩm
    const products = [
        {
            id: 1,
            name: "Sofa hiện đại",
            price: 8500000,
            image: "/placeholder1.jpg",
        },
        {
            id: 2,
            name: "Bàn ăn gỗ",
            price: 5200000,
            image: "/placeholder2.jpg",
        },
        {
            id: 3,
            name: "Giường ngủ cao cấp",
            price: 12000000,
            image: "/placeholder3.jpg",
        },
        {
            id: 4,
            name: "Tủ quần áo",
            price: 6800000,
            image: "/placeholder4.jpg",
        },
        { id: 5, name: "Kệ tivi", price: 3500000, image: "/placeholder5.jpg" },
        {
            id: 6,
            name: "Bàn làm việc",
            price: 4200000,
            image: "/placeholder6.jpg",
        },
    ];

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6">Sản phẩm của chúng tôi</h1>
            <p className="mb-8">
                Khám phá bộ sưu tập nội thất cao cấp của Makotodecor-2.0
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-lg overflow-hidden shadow-md"
                    >
                        <div className="h-48 bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-500">
                                Hình ảnh sản phẩm
                            </span>
                        </div>
                        <div className="p-4">
                            <h3 className="font-semibold text-lg">
                                {product.name}
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Mô tả ngắn về sản phẩm nội thất cao cấp.
                            </p>
                            <div className="mt-4 flex justify-between items-center">
                                <span className="font-bold text-blue-600">
                                    {product.price.toLocaleString()}₫
                                </span>
                                <Link
                                    to={`/products/${product.id}`}
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300"
                                >
                                    Xem chi tiết
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
