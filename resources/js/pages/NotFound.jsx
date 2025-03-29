import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="container mx-auto py-16 text-center">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <h2 className="text-3xl font-semibold mb-6">
                Trang không tìm thấy
            </h2>
            <p className="text-gray-600 mb-8">
                Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã bị di
                chuyển.
            </p>
            <Link to="/" className="btn-primary inline-block">
                Quay về trang chủ
            </Link>
        </div>
    );
};

export default NotFound;
