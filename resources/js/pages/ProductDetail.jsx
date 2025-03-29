import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeImage, setActiveImage] = useState(0);
    const [quantity, setQuantity] = useState(1);

    // Giả lập dữ liệu sản phẩm - trong thực tế, bạn sẽ lấy dữ liệu từ API
    useEffect(() => {
        // Giả lập API call
        setTimeout(() => {
            const mockProduct = {
                id: id,
                name: `Sản phẩm nội thất ${id}`,
                price: 3500000,
                discount: 10,
                description:
                    "Sản phẩm nội thất cao cấp với thiết kế hiện đại, sang trọng. Được làm từ chất liệu gỗ tự nhiên, đảm bảo độ bền và tính thẩm mỹ cao. Phù hợp với nhiều không gian nội thất khác nhau.",
                features: [
                    "Chất liệu gỗ tự nhiên",
                    "Thiết kế hiện đại",
                    "Độ bền cao",
                    "Dễ dàng lắp đặt",
                    "Bảo hành 24 tháng",
                ],
                specifications: {
                    "Kích thước": "120 x 80 x 45 cm",
                    "Trọng lượng": "25 kg",
                    "Màu sắc": "Nâu gỗ tự nhiên",
                    "Xuất xứ": "Việt Nam",
                },
                images: [
                    "/placeholder1.jpg",
                    "/placeholder2.jpg",
                    "/placeholder3.jpg",
                    "/placeholder4.jpg",
                ],
                related: [1, 2, 3, 4],
            };

            setProduct(mockProduct);
            setLoading(false);
        }, 800);
    }, [id]);

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value);
        if (value > 0) {
            setQuantity(value);
        }
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    const discountedPrice = product.price * (1 - product.discount / 100);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Product Images */}
                <div>
                    <div className="bg-gray-200 h-96 mb-4 flex items-center justify-center rounded-lg overflow-hidden">
                        {/* Placeholder for main product image */}
                        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                            <span className="text-gray-600">
                                Hình ảnh {activeImage + 1}
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-4 gap-2">
                        {product.images.map((image, index) => (
                            <div
                                key={index}
                                className={`h-24 bg-gray-200 rounded cursor-pointer ${
                                    activeImage === index
                                        ? "ring-2 ring-blue-600"
                                        : ""
                                }`}
                                onClick={() => setActiveImage(index)}
                            >
                                {/* Thumbnail placeholder */}
                                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                                    <span className="text-xs text-gray-600">
                                        {index + 1}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Product Information */}
                <div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        {product.name}
                    </h1>

                    <div className="flex items-center mb-4">
                        <div className="flex text-yellow-400">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <svg
                                    key={star}
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            ))}
                        </div>
                        <span className="text-gray-600 ml-2">
                            (12 đánh giá)
                        </span>
                    </div>

                    <div className="mb-6">
                        {product.discount > 0 ? (
                            <div className="flex items-center">
                                <span className="text-3xl font-bold text-blue-600">
                                    {discountedPrice.toLocaleString()}₫
                                </span>
                                <span className="ml-2 text-lg text-gray-500 line-through">
                                    {product.price.toLocaleString()}₫
                                </span>
                                <span className="ml-2 bg-red-100 text-red-800 text-sm font-semibold px-2 py-1 rounded">
                                    -{product.discount}%
                                </span>
                            </div>
                        ) : (
                            <span className="text-3xl font-bold text-blue-600">
                                {product.price.toLocaleString()}₫
                            </span>
                        )}
                    </div>

                    <div className="mb-6">
                        <p className="text-gray-700">{product.description}</p>
                    </div>

                    <div className="mb-6">
                        <h3 className="font-semibold text-gray-800 mb-2">
                            Đặc điểm nổi bật:
                        </h3>
                        <ul className="list-disc pl-5 space-y-1">
                            {product.features.map((feature, index) => (
                                <li key={index} className="text-gray-700">
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-6">
                        <div className="flex items-center mb-4">
                            <div className="mr-6">
                                <label className="block text-gray-700 mb-2">
                                    Số lượng
                                </label>
                                <div className="flex">
                                    <button
                                        className="bg-gray-200 px-3 py-2 rounded-l-md"
                                        onClick={decreaseQuantity}
                                    >
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        className="w-16 text-center border-t border-b border-gray-300"
                                        value={quantity}
                                        onChange={handleQuantityChange}
                                        min="1"
                                    />
                                    <button
                                        className="bg-gray-200 px-3 py-2 rounded-r-md"
                                        onClick={increaseQuantity}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-2">
                                    Tình trạng
                                </label>
                                <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                                    Còn hàng
                                </span>
                            </div>
                        </div>

                        <div className="flex space-x-4">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex-grow">
                                Thêm vào giỏ hàng
                            </button>
                            <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex-grow">
                                Mua ngay
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Specifications */}
            <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4">Thông số kỹ thuật</h2>
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <table className="w-full">
                        <tbody>
                            {Object.entries(product.specifications).map(
                                ([key, value], index) => (
                                    <tr
                                        key={index}
                                        className={
                                            index % 2 === 0
                                                ? "bg-gray-50"
                                                : "bg-white"
                                        }
                                    >
                                        <td className="px-6 py-4 font-medium">
                                            {key}
                                        </td>
                                        <td className="px-6 py-4">{value}</td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Related Products */}
            <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4">Sản phẩm liên quan</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {product.related.map((id) => (
                        <div
                            key={id}
                            className="bg-white rounded-lg shadow overflow-hidden"
                        >
                            <div className="h-48 bg-gray-200"></div>
                            <div className="p-4">
                                <h3 className="font-semibold">
                                    Sản phẩm liên quan {id}
                                </h3>
                                <p className="text-blue-600 font-bold mt-2">
                                    2.800.000₫
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
