import React from "react";

const Services = () => {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6">Dịch vụ của chúng tôi</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-3">
                        Tư vấn thiết kế
                    </h2>
                    <p className="text-gray-700 mb-4">
                        Đội ngũ chuyên gia của chúng tôi sẽ tư vấn và đưa ra các
                        giải pháp thiết kế phù hợp với không gian, nhu cầu và
                        ngân sách của bạn.
                    </p>
                    <button className="btn-primary">Tìm hiểu thêm</button>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-3">Thiết kế 3D</h2>
                    <p className="text-gray-700 mb-4">
                        Chúng tôi cung cấp dịch vụ thiết kế 3D chuyên nghiệp,
                        giúp bạn hình dung rõ ràng về không gian trước khi quyết
                        định.
                    </p>
                    <button className="btn-primary">Tìm hiểu thêm</button>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-3">
                        Thi công nội thất
                    </h2>
                    <p className="text-gray-700 mb-4">
                        Dịch vụ thi công nội thất trọn gói, từ sản xuất đến lắp
                        đặt, đảm bảo chất lượng và tiến độ.
                    </p>
                    <button className="btn-primary">Tìm hiểu thêm</button>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-3">
                        Bảo trì và sửa chữa
                    </h2>
                    <p className="text-gray-700 mb-4">
                        Chúng tôi cung cấp dịch vụ bảo trì và sửa chữa nội thất,
                        giúp kéo dài tuổi thọ và duy trì vẻ đẹp cho không gian
                        của bạn.
                    </p>
                    <button className="btn-primary">Tìm hiểu thêm</button>
                </div>
            </div>

            <div className="mt-10 bg-blue-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4 text-center">
                    Quy trình làm việc
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                            1
                        </div>
                        <h3 className="font-semibold mt-3">Tư vấn</h3>
                        <p className="text-sm">
                            Trao đổi và hiểu rõ nhu cầu của khách hàng
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                            2
                        </div>
                        <h3 className="font-semibold mt-3">Thiết kế</h3>
                        <p className="text-sm">
                            Phác thảo ý tưởng và thiết kế 3D
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                            3
                        </div>
                        <h3 className="font-semibold mt-3">Thi công</h3>
                        <p className="text-sm">
                            Sản xuất và lắp đặt theo thiết kế
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                            4
                        </div>
                        <h3 className="font-semibold mt-3">Bàn giao</h3>
                        <p className="text-sm">
                            Kiểm tra chất lượng và bàn giao công trình
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
