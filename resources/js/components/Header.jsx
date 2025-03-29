import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
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
                        <Link
                            to="/services"
                            className="text-gray-700 hover:text-blue-600 transition"
                        >
                            Dịch vụ
                        </Link>
                        <Link
                            to="/about"
                            className="text-gray-700 hover:text-blue-600 transition"
                        >
                            Giới thiệu
                        </Link>
                        <Link
                            to="/contact"
                            className="text-gray-700 hover:text-blue-600 transition"
                        >
                            Liên hệ
                        </Link>
                    </nav>

                    <div className="flex items-center space-x-4">
                        <Link
                            to="/auth/login"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300"
                        >
                            Đăng nhập
                        </Link>
                        <Link
                            to="/auth/register"
                            className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded transition duration-300"
                        >
                            Đăng ký
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
