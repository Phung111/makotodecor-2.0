import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Thực hiện đăng ký người dùng ở đây (gọi API, lưu dữ liệu, v.v.)
        // Giả lập thành công và chuyển hướng đến trang đăng nhập
        navigate("/login");
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Đăng Ký</h1>
            <form
                onSubmit={handleSubmit}
                className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
            >
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="name">
                        Họ và tên
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 mb-2"
                        htmlFor="password"
                    >
                        Mật khẩu
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 mb-2"
                        htmlFor="confirmPassword"
                    >
                        Xác nhận mật khẩu
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                >
                    Đăng Ký
                </button>
                <p className="mt-4 text-gray-600 text-center">
                    Đã có tài khoản?{" "}
                    <Link
                        to="/auth/login"
                        className="text-blue-600 hover:underline"
                    >
                        Đăng nhập ngay
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Register;
