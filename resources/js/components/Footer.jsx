import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            Makotodecor-2.0
                        </h3>
                        <p className="text-gray-300">
                            Thiết kế nội thất cao cấp cho không gian sống của
                            bạn.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            Liên kết nhanh
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-300 hover:text-white transition"
                                >
                                    Trang chủ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/products"
                                    className="text-gray-300 hover:text-white transition"
                                >
                                    Sản phẩm
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/services"
                                    className="text-gray-300 hover:text-white transition"
                                >
                                    Dịch vụ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="text-gray-300 hover:text-white transition"
                                >
                                    Giới thiệu
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="text-gray-300 hover:text-white transition"
                                >
                                    Liên hệ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">Liên hệ</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>123 Đường ABC, Quận XYZ</li>
                            <li>Thành phố Hồ Chí Minh, Việt Nam</li>
                            <li>Email: info@makotodecor.com</li>
                            <li>Điện thoại: (84) 123-456-789</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            Theo dõi chúng tôi
                        </h3>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-gray-300 hover:text-white transition"
                            >
                                Facebook
                            </a>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-white transition"
                            >
                                Instagram
                            </a>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-white transition"
                            >
                                Pinterest
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
                    <p>
                        &copy; {new Date().getFullYear()} Makotodecor-2.0. Tất
                        cả các quyền được bảo lưu.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
