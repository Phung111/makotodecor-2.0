import React from "react";

const Contact = () => {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6">Liên hệ với chúng tôi</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">
                            Gửi tin nhắn cho chúng tôi
                        </h2>
                        <form>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 mb-2"
                                    htmlFor="name"
                                >
                                    Họ và tên
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                    placeholder="Nhập họ và tên của bạn"
                                />
                            </div>

                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 mb-2"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                    placeholder="Nhập email của bạn"
                                />
                            </div>

                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 mb-2"
                                    htmlFor="message"
                                >
                                    Tin nhắn
                                </label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                    placeholder="Nhập nội dung tin nhắn"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn-primary w-full"
                            >
                                Gửi tin nhắn
                            </button>
                        </form>
                    </div>
                </div>

                <div>
                    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                        <h2 className="text-xl font-semibold mb-4">
                            Thông tin liên hệ
                        </h2>
                        <div className="space-y-3">
                            <p>
                                <strong>Địa chỉ:</strong> 123 Đường ABC, Quận
                                XYZ, TP. Hồ Chí Minh
                            </p>
                            <p>
                                <strong>Email:</strong> info@makotodecor.com
                            </p>
                            <p>
                                <strong>Điện thoại:</strong> (84) 123-456-789
                            </p>
                            <p>
                                <strong>Giờ làm việc:</strong> Thứ 2 - Thứ 6:
                                8:00 - 17:00
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Bản đồ</h2>
                        <div className="h-64 bg-gray-200 flex items-center justify-center">
                            <p>Bản đồ Google Maps sẽ được hiển thị ở đây</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
