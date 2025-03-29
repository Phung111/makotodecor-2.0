import React from "react";
import { Outlet, Link } from "react-router-dom";

const ProductLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header đơn giản hơn cho trang chi tiết sản phẩm */}
            <header className="bg-white shadow-md">
                <div className="container mx-auto py-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <Link
                                to="/"
                                className="text-2xl font-bold text-blue-600"
                            >
                                Makotodecor-2.0
                            </Link>
                        </div>

                        <nav className="hidden md:flex space-x-8">
                            <Link
                                to="/"
                                className="text-gray-700 hover:text-blue-600 transition"
                            >
                                Trang chủ
                            </Link>
                            <Link
                                to="/products"
                                className="text-gray-700 hover:text-blue-600 transition"
                            >
                                Sản phẩm
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Main content */}
            <main className="flex-grow">
                {/* Breadcrumb navigation */}
                <div className="bg-gray-100 py-2">
                    <div className="container mx-auto">
                        <div className="flex items-center text-sm text-gray-600">
                            <Link to="/" className="hover:text-blue-600">
                                Trang chủ
                            </Link>
                            <span className="mx-2">/</span>
                            <Link
                                to="/products"
                                className="hover:text-blue-600"
                            >
                                Sản phẩm
                            </Link>
                            <span className="mx-2">/</span>
                            <span className="text-gray-800">
                                Chi tiết sản phẩm
                            </span>
                        </div>
                    </div>
                </div>

                {/* Content outlet */}
                <div className="container mx-auto py-6">
                    <Outlet />
                </div>
            </main>

            {/* Footer đơn giản hơn */}
            <footer className="bg-gray-800 text-white py-6">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row justify-between">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Makotodecor-2.0
                            </h3>
                            <p className="text-gray-300">
                                Thiết kế nội thất cao cấp
                            </p>
                        </div>

                        <div className="mt-4 md:mt-0">
                            <h4 className="font-semibold mb-2">Liên hệ</h4>
                            <p className="text-gray-300">
                                Email: info@makotodecor.com
                            </p>
                            <p className="text-gray-300">
                                Điện thoại: (84) 123-456-789
                            </p>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400">
                        <p>
                            &copy; {new Date().getFullYear()} Makotodecor-2.0.
                            Tất cả các quyền được bảo lưu.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ProductLayout;
