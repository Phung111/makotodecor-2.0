import React from "react";

const Home = () => {
    return (
        <div className="container mx-auto py-8">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Chào mừng đến với Makotodecor-2.0
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                    Thiết kế nội thất cao cấp cho không gian sống của bạn
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-3">
                            Thiết kế hiện đại
                        </h2>
                        <p className="text-gray-700">
                            Các mẫu thiết kế nội thất hiện đại, phù hợp với xu
                            hướng.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-3">
                            Chất lượng cao
                        </h2>
                        <p className="text-gray-700">
                            Sử dụng các vật liệu cao cấp, đảm bảo độ bền và tính
                            thẩm mỹ.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-3">
                            Tư vấn chuyên nghiệp
                        </h2>
                        <p className="text-gray-700">
                            Đội ngũ tư vấn thiết kế chuyên nghiệp, giàu kinh
                            nghiệm.
                        </p>
                    </div>
                </div>

                <button className="mt-10 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                    Xem bộ sưu tập
                </button>
            </div>
        </div>
    );
};

export default Home;
