import React from "react";

const About = () => {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6">Về chúng tôi</h1>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="mb-4">
                    Makotodecor-2.0 là công ty thiết kế nội thất hàng đầu,
                    chuyên cung cấp các giải pháp thiết kế không gian sống và
                    làm việc hiện đại, sang trọng.
                </p>
                <p className="mb-4">
                    Được thành lập vào năm 2010, chúng tôi đã không ngừng phát
                    triển và khẳng định vị thế trên thị trường nội thất Việt
                    Nam. Với đội ngũ thiết kế giàu kinh nghiệm và sáng tạo,
                    chúng tôi cam kết mang đến những sản phẩm chất lượng cao,
                    phù hợp với nhu cầu và phong cách của từng khách hàng.
                </p>
                <p className="mb-4">
                    Tầm nhìn của chúng tôi là trở thành đơn vị thiết kế nội thất
                    hàng đầu tại Việt Nam, mang đến không gian sống hoàn hảo cho
                    mọi gia đình.
                </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">
                Đội ngũ của chúng tôi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((member) => (
                    <div
                        key={member}
                        className="bg-white p-6 rounded-lg shadow-md text-center"
                    >
                        <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
                        <h3 className="font-semibold text-lg">
                            Thành viên {member}
                        </h3>
                        <p className="text-gray-600">Chức vụ</p>
                        <p className="mt-2">
                            Mô tả ngắn về kinh nghiệm và chuyên môn.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
