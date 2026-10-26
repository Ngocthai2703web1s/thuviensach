// File chứa dữ liệu sách (mock data)
const mockBookData = [{
        bookName: "Ma Y Thần Toán Tử - Kỵ Mã Điếu Ngư",
        categories: ["Trinh Thám", "Kinh Dị", "Y Học", "Tiểu Thuyết"],
        downloadLink: "https://vuotnhanh.com/Nww4",
        buyLink: "#",
        imageLink: "https://i.ibb.co/ksLDyT2C/Ma-Y-Th-n-To-n-T-K-M-i-u-Ng.jpg"
    },
    {
        bookName: "Tôi Đọc Sách Ít, Bạn Đừng Lừa Tôi – Mã Bá Dung",
        categories: ["Sảng Văn"],
        downloadLink: "https://vuotnhanh.com/cREZ",
        buyLink: "#",
        imageLink: "https://i.ibb.co/6ccDyWsC/826878610-3053050721703489-6611599889872195356-n.jpg"
    },
    {
        bookName: "Miêu Cương Cổ Sự Trọn Bộ - Nam Vô Ca",
        categories: ["Huyền Môn", "Linh Dị", "Vu Cổ", "Tiểu Thuyết"],
        downloadLink: "https://vuotnhanh.com/QbSi",
        buyLink: "#",
        imageLink: "https://i.ibb.co/FbfY4Jst/825353252-3050940255247869-8944814064889152008-n.jpg"
    },
    {
        bookName: "Bác Sĩ Dịch Bệnh - Ngõa Lực",
        categories: ["Cthulhu Mythos", "Giật Gân", "Sinh Học", "Y Học", "Trinh Thám", "Đô Thị"],
        downloadLink: "https://vuotnhanh.com/426L",
        buyLink: "#",
        imageLink: "https://i.ibb.co/PZKnGYL4/833882745-3060436520964909-8270881983214118857-n.jpg"
    },
	{
        bookName: "Miêu Cương Đạo Sự - Nam Vô Cà Sa Lý Khoa Phật",
        categories: ["Huyền Môn", "Linh Dị", "Vu Cổ"],
        downloadLink: "https://vuotnhanh.com/SkDG",
        buyLink: "#",
        imageLink: "https://i.ibb.co/nqyywHm3/837360047-3062019880806573-3937241524697526472-n.jpg"
    },
	{
        bookName: "Cổ Mộ Mật Mã - Ngũ Nhất Thư",
        categories: ["Trinh Thám", "Kinh Dị", "Y Học", "Tiểu Thuyết"],
        downloadLink: "https://vuotnhanh.com/xhBF",
        buyLink: "#",
        imageLink: "https://i.ibb.co/dhC5Hjn/840333337-3062912340717327-5732256984555039930-n.jpg"
    },
	{
        bookName: "Tương Tây Cản Thi Quỷ Sự - Vu Môn Lão Cửu",
        categories: ["Trinh Thám", "Kinh Dị", "Y Học", "Tiểu Thuyết"],
        downloadLink: "https://vuotnhanh.com/wQMa",
        buyLink: "#",
        imageLink: "https://i.ibb.co/gLMfgBSv/845892307-3067203030288258-8758688273808853230-n.jpg"
    },
	{
        bookName: "Chân Tướng Suy Lý Sư Thiện Biến - Hô Diên Vân",
        categories: ["Trinh Thám", "Tâm Lý Học", "Tội Phạm"],
        downloadLink: "https://vuotnhanh.com/90ql",
        buyLink: "#",
        imageLink: "https://i.ibb.co/cKCVwZ5r/841653180-3065082890500272-6765951272084687808-n.jpg"
    },
	{
        bookName: "Bồ Câu Không Đưa Thư - Nguyễn Nhật Ánh",
        categories: ["Tuổi Học Trò", "Truyện Ngắn"],
        downloadLink: "https://vuotnhanh.com/1UUB",
        buyLink: "#",
        imageLink: "https://i.ibb.co/4BgcS9B/B-C-u-Kh-ng-a-Th.jpg"
    },
	{
        bookName: "Bong Bóng Lên Trời - Nguyễn Nhật Ánh",
        categories: ["Tuổi Học Trò", "Truyện Ngắn"],
        downloadLink: "https://vuotnhanh.com/ZpKG",
        buyLink: "#",
        imageLink: "https://i.ibb.co/0jnhNF37/Eg-QIsa-y91cl.jpg"
    },
	{
        bookName: "Buổi Chiều Windows - Nguyễn Nhật Ánh",
        categories: ["Tuổi Học Trò", "Truyện Ngắn"],
        downloadLink: "https://vuotnhanh.com/JEuf",
        buyLink: "#",
        imageLink: "https://i.ibb.co/tw0PPp3Z/images.jpg"
    },
	{
        bookName: "Chú Bé Rắc Rối - Nguyễn Nhật Ánh",
        categories: ["Tuổi Học Trò", "Truyện Ngắn"],
        downloadLink: "https://vuotnhanh.com/Xp7L",
        buyLink: "#",
        imageLink: "https://i.ibb.co/9HvKSPsj/anh-da-che.png"
    },
	{
        bookName: "Chuyện Cổ Tích Dành Cho Người Lớn - Nguyễn Nhật Ánh",
        categories: ["Tuổi Học Trò", "Truyện Ngắn"],
        downloadLink: "https://vuotnhanh.com/nVIW",
        buyLink: "#",
        imageLink: "https://i.ibb.co/fzG6WZrf/images-1.jpg"
    },
	{
        bookName: "Cô Gái Đến Từ Hôm Qua - Nguyễn Nhật Ánh",
        categories: ["Tuổi Học Trò", "Truyện Ngắn"],
        downloadLink: "https://vuotnhanh.com/3HcG",
        buyLink: "#",
        imageLink: "https://i.ibb.co/Pv6hN0Z7/images.jpg"
    },
	{
        bookName: "Đi Qua Hoa Cúc - Nguyễn Nhật Ánh",
        categories: ["Tuổi Học Trò", "Truyện Ngắn"],
        downloadLink: "https://vuotnhanh.com/Dc0G",
        buyLink: "#",
        imageLink: "https://i.ibb.co/pjChHDXq/copy-21-NXBTre-Story-Full-05272014-082729.jpg"
    },
	{
        bookName: "Đoàn Kịch Tỉnh Lẻ - Nguyễn Nhật Ánh",
        categories: ["Tuổi Học Trò", "Truyện Ngắn"],
        downloadLink: "https://vuotnhanh.com/ELW0",
        buyLink: "#",
        imageLink: "https://i.ibb.co/hRB0vK3g/FDYH.jpg"
    },
	{
        bookName: "Hoa Hồng Xứ Khác - Nguyễn Nhật Ánh",
        categories: ["Tuổi Học Trò", "Truyện Ngắn"],
        downloadLink: "https://vuotnhanh.com/cJK3",
        buyLink: "#",
        imageLink: "https://i.ibb.co/FkqSw7Bz/31658.jpg"
    },
	{
        bookName: "Họa Mi Một Mình - Nguyễn Nhật Ánh",
        categories: ["Tuổi Học Trò", "Truyện Ngắn"],
        downloadLink: "https://vuotnhanh.com/evMT",
        buyLink: "#",
        imageLink: "https://i.ibb.co/ymybHTpg/3623.jpg"
    },
	{
        bookName: "Những Năm Làm Thầy Phong Thủy Giới Showbiz - Khổ Qua Xào Cua Hoa",
        categories: ["Đô Thị", "Huyền Bí", "Linh Dị", "Phong Thủy"],
        downloadLink: "https://vuotnhanh.com/bWHm",
        buyLink: "#",
        imageLink: "https://i.ibb.co/q366h3s1/849147186-122236581206315355-6441488231542497565-n.jpg"
    },
	{
        bookName: "Âm Gian Thần Thám - Đạo Môn Lão Cửu",
        categories: ["Trinh Thám"],
        downloadLink: "https://vuotnhanh.com/BAZn",
        buyLink: "#",
        imageLink: "https://i.ibb.co/8n0srXQ8/849911300-3071673243174570-7302270222479485939-n.jpg"
    },
	{
        bookName: "Ngô Thừa Ân Tróc Yêu Ký 1 - Mã Bá Dung",
        categories: ["Huyền Huyễn", "Cổ Trang", "Phiêu Lưu"],
        downloadLink: "https://vuotnhanh.com/Nd4n",
        buyLink: "#",
        imageLink: "https://i.ibb.co/cXpjZF0q/Ng-Th-a-n-Tr-c-Y-u-K-1.jpg"
    },
	{
        bookName: "Ngô Thừa Ân Tróc Yêu Ký 2 - Mã Bá Dung",
        categories: ["Huyền Huyễn", "Cổ Trang", "Phiêu Lưu"],
        downloadLink: "https://vuotnhanh.com/t7Jf",
        buyLink: "#",
        imageLink: "https://i.ibb.co/0pYKNLbR/Ng-Th-a-n-Tr-c-Y-u-K-2.jpg"
    },
	{
        bookName: "28 - Jeong You-Jeong",
        categories: ["Kinh Dị", "Giật Gân"],
        downloadLink: "https://vuotnhanh.com/eI5m",
        buyLink: "#",
        imageLink: "https://i.ibb.co/dw3qtb7r/74e8fada45b479bc75916999553372d4.webp"
    },
	{
        bookName: "Bá Võ - Khai Hoang",
        categories: ["Huyền Huyễn", "Xuyên Không", "Trọng Sinh", "Hệ Thống"],
        downloadLink: "https://vuotnhanh.com/M3Cf",
        buyLink: "#",
        imageLink: "https://i.ibb.co/99Cfq647/images.jpg"
    },
	{
        bookName: "Bậc Thầy Phong Thủy - Đào Hoa Độ",
        categories: ["Đô Thị", "Linh Dị", "Phong Thủy"],
        downloadLink: "https://vuotnhanh.com/3c2d",
        buyLink: "#",
        imageLink: "https://i.ibb.co/jPmnry4C/images.jpg"
    },
	{
        bookName: "Bách Hóa Giấc Mơ Của Ngài Dollargut - Lee Miye",
        categories: ["Tiểu Thuyết"],
        downloadLink: "https://vuotnhanh.com/ZuOu",
        buyLink: "#",
        imageLink: "https://i.ibb.co/pv36mZk6/images-1.jpg"
    },
	{
        bookName: "Bảo Ngươi Làm Trò Chơi Ngươi Lại Làm Video CG - Tiềm Thủy Đích Oa Ba",
        categories: ["Võng Du"],
        downloadLink: "https://vuotnhanh.com/pFBW",
        buyLink: "#",
        imageLink: "https://i.ibb.co/sdJyLJJg/images.jpg"
    },
	{
        bookName: "Bắt Đầu Đánh Dấu Hoang Cổ Thánh Thể - J Thần",
        categories: ["Huyền Huyễn"],
        downloadLink: "https://vuotnhanh.com/AotI",
        buyLink: "#",
        imageLink: "https://i.ibb.co/Jj6NBnYf/images-1.jpg"
    },
	{
        bookName: "Bắt Đầu Nạp Tiền Một Tỷ - Tiểu Tiểu Yêu Tiên",
        categories: ["Trinh Thám"],
        downloadLink: "https://vuotnhanh.com/fkE3",
        buyLink: "#",
        imageLink: "https://i.ibb.co/4R0ypgPV/images-2.jpg"
    },
	{
        bookName: "Dân Gian Quỷ Văn Thực Lục - La Tiều Sâm",
        categories: ["Linh Dị"],
        downloadLink: "https://vuotnhanh.com/tIE0",
        buyLink: "#",
        imageLink: "https://i.ibb.co/8nWwK5GS/854188459-3073051903036704-3124978966163879115-n.jpg"
    },
	{
        bookName: "Bắt Đầu Quá Mạnh Làm Sao Bây Giờ - Phạm Thần",
        categories: ["Huyền Huyễn"],
        downloadLink: "https://vuotnhanh.com/2jiY",
        buyLink: "#",
        imageLink: "https://i.ibb.co/RTM40Px2/213.jpg"
    },
	{
        bookName: "Bắt Đầu Từ Hỗn Độn Thể - Tiên Nữ Xuyên Liễu Bàn Thứ",
        categories: ["Huyền Huyễn"],
        downloadLink: "https://vuotnhanh.com/Pa4u",
        buyLink: "#",
        imageLink: "https://i.ibb.co/v4RNQfsp/sda.jpg"
    },
	{
        bookName: "Địa Cầu Lang Thang - Lưu Từ Hân",
        categories: ["Viễn Tưởng", "Sử Thi"],
        downloadLink: "https://vuotnhanh.com/isLq",
        buyLink: "#",
        imageLink: "https://i.ibb.co/pkdD6hz/847631225-122236671962315355-3916250618189379594-n.jpg"
    },
	{
        bookName: "Bảy Vị Sư Tỷ Tuyệt Sắc Của Ta - Lạp Mỗ Ca",
        categories: ["Đô Thị", "Trọng Sinh", "Sảng Văn"],
        downloadLink: "https://vuotnhanh.com/RLtb",
        buyLink: "#",
        imageLink: "https://i.ibb.co/9HN1n9Ch/images-3.jpg"
    },
	{
        bookName: "Bóng Tối Trỗi Dậy - Susan Cooper",
        categories: ["Huyền Ảo"],
        downloadLink: "https://vuotnhanh.com/IrUH",
        buyLink: "#",
        imageLink: "https://i.ibb.co/G4vh3Byx/sad.jpg"
    },
	{
        bookName: "Bột Mì Vĩnh Cửu - Alexander Romanovich Belyaev",
        categories: ["Viễn Tưởng"],
        downloadLink: "https://vuotnhanh.com/RX8C",
        buyLink: "#",
        imageLink: "https://i.ibb.co/1JzVvTYy/NXBTre-Story-Full-27242013-092431.jpg"
    },
	{
        bookName: "Cái Nguyền Rủa Này Thật Quá Tuyệt Vời - Hành Giả Hữu Tam",
        categories: ["Huyền Ảo"],
        downloadLink: "https://vuotnhanh.com/fne2",
        buyLink: "#",
        imageLink: "https://i.ibb.co/C3KQH8JW/cai-nguyen-rua-nay-that-qua-tuyet-voi-hanh-gia-huu-tam.jpg"
    },
	{
        bookName: "Càn Khôn Kiếm Thần - Trần Sơn",
        categories: ["Huyền Huyễn"],
        downloadLink: "https://vuotnhanh.com/Kz1K",
        buyLink: "#",
        imageLink: "https://i.ibb.co/tpktqLp4/images.jpg"
    },
	{
        bookName: "Cậu Cả Tu Chân - Vũ Hạ Đích Hảo Đại",
        categories: ["Tiên Hiệp", "Sảng Văn"],
        downloadLink: "https://vuotnhanh.com/22xJ",
        buyLink: "#",
        imageLink: "https://i.ibb.co/Kcp7gjnc/213.jpg"
    },
	{
        bookName: "Câu Lạc Bộ Thiên Tài - Thành Thành Dữ Thiền",
        categories: ["Trinh Thám", "Viễn Tưởng", "Đấu Trí"],
        downloadLink: "https://vuotnhanh.com/44zB",
        buyLink: "#",
        imageLink: "https://i.ibb.co/VY7p9PpM/632.jpg"
    },
	{
        bookName: "Cục Quản Lý Truyền Thuyết -  Sát Trùng Đội Đội Viên",
        categories: ["Vô Hạn Lưu", "Thần Thoại", "Huyền Ảo", "Trinh Thám", "Xuyên Không"],
        downloadLink: "https://vuotnhanh.com/rWII",
        buyLink: "#",
        imageLink: "https://i.ibb.co/yGKYfdq/857106882-122237312912315355-7816280979642420808-n.jpg"
    },
	{
        bookName: "Ngày Xưa Có Một Chuyện Tình - Nguyễn Nhật Ánh",
        categories: ["Truyện dài", "Tuổi Học Trò"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "https://i.ibb.co/7xnpvrfG/nxbtre-full-17392020-053912.jpg"
    },
	{
        bookName: "Ngày Xưa Có Một Chuyện Tình - Trịnh Đình Lê Minh",
        categories: ["Movie"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "https://i.ibb.co/KxS471hs/first-look-poster-1713322945213260277014.jpg"
    },
	{
        bookName: "Mao Sơn Hậu Duệ - Đại Lực Kim Cương Chưởng",
        categories: ["Trinh Thám", "Linh Dị"],
        downloadLink: "https://vuotnhanh.com/ZiVW",
        buyLink: "#",
        imageLink: "https://i.ibb.co/5h3BkLLc/856911931-3079348382407056-819681754064011494-n.jpg"
    },
	{
        bookName: "Cỗ Máy Thời Gian - Herbert George Wells",
        categories: ["Viễn Tưởng"],
        downloadLink: "https://vuotnhanh.com/2QvZ",
        buyLink: "#",
        imageLink: "https://i.ibb.co/QF4FsWKn/143.webp"
    },
	{
        bookName: "Bệnh Viện Số 444 - Hắc Sắc Hỏa Chủng",
        categories: ["Trinh Thám", "Linh Dị", "Sinh Tồn"],
        downloadLink: "https://vuotnhanh.com/Cddv",
        buyLink: "#",
        imageLink: "https://i.ibb.co/YBQ0CMx0/5487.jpg"
    },
	{
        bookName: "Thầy Xăm Âm Dương - Mặc Đại Tiên Sinh",
        categories: ["Linh Dị", "Phong Thủy", "Đô Thị", "Giật Gân"],
        downloadLink: "https://vuotnhanh.com/hkaQ",
        buyLink: "#",
        imageLink: "https://i.ibb.co/1JGtn43p/989.jpg"
    },
	{
        bookName: "Đạo Sĩ Không Dễ Chọc - Khốn Đích Thụy Bất Trứ",
        categories: ["Đô Thị", "Huyền Môn", "Linh Dị", "Phong Thủy", "Trộm Mộ"],
        downloadLink: "https://vuotnhanh.com/mRc0",
        buyLink: "#",
        imageLink: "https://i.ibb.co/C3QtgF6h/dskdc.jpg"
    },
	{
        bookName: "#",
        categories: ["Trinh Thám"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    }
];
