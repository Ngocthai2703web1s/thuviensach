// File chứa dữ liệu sách (mock data)
const mockBookData = [{
        bookName: "Ma Y Thần Toán Tử - Kỵ Mã Điếu Ngư",
        categories: ["Trinh Thám", "Kinh Dị", "Y Học", "Tiểu Thuyết"],
        downloadLink: "https://vuotnhanh.com/JYg7",
        buyLink: "#",
        imageLink: "https://i.ibb.co/ksLDyT2C/Ma-Y-Th-n-To-n-T-K-M-i-u-Ng.jpg"
    },
    {
        bookName: "Tôi Đọc Sách Ít, Bạn Đừng Lừa Tôi – Mã Bá Dung",
        categories: ["Sảng Văn"],
        downloadLink: "https://vuotnhanh.com/CX6qhttps://vuotnhanh.com/CX6q",
        buyLink: "#",
        imageLink: "https://i.ibb.co/6ccDyWsC/826878610-3053050721703489-6611599889872195356-n.jpg"
    },
    {
        bookName: "Miêu Cương Cổ Sự Trọn Bộ - Nam Vô Ca",
        categories: ["Huyền Môn", "Linh Dị", "Vu Cổ", "Tiểu Thuyết"],
        downloadLink: "https://vuotnhanh.com/M3gC",
        buyLink: "#",
        imageLink: "https://i.ibb.co/FbfY4Jst/825353252-3050940255247869-8944814064889152008-n.jpg"
    },
    {
        bookName: "Bác Sĩ Dịch Bệnh - Ngõa Lực",
        categories: ["Cthulhu Mythos", "Giật Gân Sinh Học", "Y Học Lâm Sàng", "Trinh Thám Đô Thị"],
        downloadLink: "https://vuotnhanh.com/4AlV",
        buyLink: "#",
        imageLink: "https://i.ibb.co/PZKnGYL4/833882745-3060436520964909-8270881983214118857-n.jpg"
    },
	{
        bookName: "Miêu Cương Đạo Sự - Nam Vô Cà Sa Lý Khoa Phật",
        categories: ["Huyền Môn", "Linh Dị", "Vu Cổ"],
        downloadLink: "https://vuotnhanh.com/cH5j",
        buyLink: "#",
        imageLink: "https://i.ibb.co/nqyywHm3/837360047-3062019880806573-3937241524697526472-n.jpg"
    },
	{
        bookName: "Cổ Mộ Mật Mã - Ngũ Nhất Thư",
        categories: ["Trinh Thám", "Kinh Dị", "Y Học", "Tiểu Thuyết"],
        downloadLink: "https://vuotnhanh.com/EnYb",
        buyLink: "#",
        imageLink: "https://i.ibb.co/dhC5Hjn/840333337-3062912340717327-5732256984555039930-n.jpg"
    },
	{
        bookName: "Tương Tây Cản Thi Quỷ Sự - Vu Môn Lão Cửu",
        categories: ["Trinh Thám", "Kinh Dị", "Y Học", "Tiểu Thuyết"],
        downloadLink: "https://vuotnhanh.com/sumO",
        buyLink: "#",
        imageLink: "https://i.ibb.co/gLMfgBSv/845892307-3067203030288258-8758688273808853230-n.jpg"
    },
	{
        bookName: "Chân Tướng Suy Lý Sư Thiện Biến - Hô Diên Vân",
        categories: ["Trinh Thám", "Tâm Lý Học Tội Phạm"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "https://i.ibb.co/cKCVwZ5r/841653180-3065082890500272-6765951272084687808-n.jpg"
    },
	{
        bookName: "Bồ Câu Không Đưa Thư - Nguyễn Nhật Ánh",
        categories: ["Tuổi Học Trò", "Truyện Ngắn"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "https://i.ibb.co/4BgcS9B/B-C-u-Kh-ng-a-Th.jpg"
    },
	{
        bookName: "Bong Bóng Lên Trời - Nguyễn Nhật Ánh",
        categories: ["Tuổi Học Trò", "Truyện Ngắn"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "Buổi Chiều Windows - Nguyễn Nhật Ánh",
        categories: ["Tuổi Học Trò", "Truyện Ngắn"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "Cánh Đàn Ông Chúng Mình - Nguyễn Nhật Ánh",
        categories: ["Tuổi Học Trò", "Truyện Ngắn"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "Chú Bé Rắc Rối - Nguyễn Nhật Ánh",
        categories: ["Tuổi Học Trò", "Truyện Ngắn"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "Chuyện Cổ Tích Dành Cho Người Lớn - Nguyễn Nhật Ánh",
        categories: ["Tuổi Học Trò", "Truyện Ngắn"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "Cô Gái Đến Từ Hôm Qua - Nguyễn Nhật Ánh",
        categories: ["Tuổi Học Trò", "Truyện Ngắn"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "Đi Qua Hoa Cúc - Nguyễn Nhật Ánh",
        categories: ["Tuổi Học Trò", "Truyện Ngắn"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "Đoàn Kịch Tỉnh Lẻ - Nguyễn Nhật Ánh",
        categories: ["Tuổi Học Trò", "Truyện Ngắn"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "Hoa Hồng Xứ Khác - Nguyễn Nhật Ánh",
        categories: ["Tuổi Học Trò", "Truyện Ngắn"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "Họa Mi Một Mình - Nguyễn Nhật Ánh",
        categories: ["Tuổi Học Trò", "Truyện Ngắn"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "Những Năm Làm Thầy Phong Thủy Giới Showbiz - Khổ Qua Xào Cua Hoa",
        categories: ["Đô Thị", "Huyền Bí", "Linh Dị", "Phong Thủy"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "https://i.ibb.co/q366h3s1/849147186-122236581206315355-6441488231542497565-n.jpg"
    },
	{
        bookName: "Âm Gian Thần Thám - Đạo Môn Lão Cửu",
        categories: ["Trinh Thám"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "https://i.ibb.co/8n0srXQ8/849911300-3071673243174570-7302270222479485939-n.jpg"
    },
	{
        bookName: "Ngô Thừa Ân Tróc Yêu Ký 1 - Mã Bá Dung",
        categories: ["Trinh Thám"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "https://i.ibb.co/cXpjZF0q/Ng-Th-a-n-Tr-c-Y-u-K-1.jpg"
    },
	{
        bookName: "Ngô Thừa Ân Tróc Yêu Ký 2 - Mã Bá Dung",
        categories: ["Trinh Thám"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "https://i.ibb.co/0pYKNLbR/Ng-Th-a-n-Tr-c-Y-u-K-2.jpg"
    },
	{
        bookName: "28 - Jeong You-Jeong",
        categories: ["Trinh Thám"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "Bá Võ - Khai Hoang",
        categories: ["Trinh Thám"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "Bậc Thầy Phong Thủy - Đào Hoa Độ",
        categories: ["Trinh Thám"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "Bách Hóa Giấc Mơ Của Ngài Dollargut - Lee Miye",
        categories: ["Trinh Thám"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "Bảo Ngươi Làm Trò Chơi Ngươi Lại Làm Video CG - Tiềm Thủy Đích Oa Ba",
        categories: ["Trinh Thám"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "Bắt Đầu Đánh Dấu Hoang Cổ Thánh Thể - J Thần",
        categories: ["Trinh Thám"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "Bắt Đầu Nạp Tiền Một Tỷ - Tiểu Tiểu Yêu Tiên",
        categories: ["Trinh Thám"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "Dân Gian Quỷ Văn Thực Lục - La Tiều Sâm",
        categories: ["Linh Dị"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "https://i.ibb.co/8nWwK5GS/854188459-3073051903036704-3124978966163879115-n.jpg"
    },
	{
        bookName: "Bắt Đầu Quá Mạnh Làm Sao Bây Giờ - Phạm Thần",
        categories: ["Trinh Thám"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "Bắt Đầu Từ Hỗn Độn Thể - Tiên Nữ Xuyên Liễu Bàn Thứ",
        categories: ["Trinh Thám"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["Trinh Thám"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    }
];
