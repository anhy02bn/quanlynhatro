-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost:3307
-- Thời gian đã tạo: Th1 03, 2024 lúc 11:27 AM
-- Phiên bản máy phục vụ: 8.0.30
-- Phiên bản PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `timphongtro`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `category`
--

CREATE TABLE `category` (
  `id` bigint NOT NULL,
  `deleted` int DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `category`
--

INSERT INTO `category` (`id`, `deleted`, `name`) VALUES
(1, 0, 'Phòng trọ'),
(2, 0, 'Chung cư mini'),
(3, 0, 'Căn Hộ'),
(4, 0, 'Nhà nguyên căn');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comments`
--

CREATE TABLE `comments` (
  `id` bigint NOT NULL,
  `content` varchar(255) DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  `created_time` time DEFAULT NULL,
  `star` float DEFAULT NULL,
  `room_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `comments`
--

INSERT INTO `comments` (`id`, `content`, `created_date`, `created_time`, `star`, `room_id`, `user_id`) VALUES
(3, 'sfdasfasf', '2024-01-03', '17:25:51', 5, 2, 3),
(4, 'dqwdwqd', '2024-01-03', '17:26:10', 4, 2, 3),
(5, 'hehheeh\newrfgewfwef', '2024-01-03', '17:32:02', 4, 3, 3);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comment_image`
--

CREATE TABLE `comment_image` (
  `id` bigint NOT NULL,
  `link_image` varchar(255) DEFAULT NULL,
  `comment_id` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `comment_image`
--

INSERT INTO `comment_image` (`id`, `link_image`, `comment_id`) VALUES
(5, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1704277510/wdtzuer4gdvcma0drhbk.jpg', 3),
(6, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1704277515/uwikrsfyc1qmfqle6dpd.jpg', 3),
(7, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1704277516/p4gc62lhfuhwwevfabz4.jpg', 3),
(8, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1704277888/vs0uhepp0lx3el6opjtk.jpg', 5),
(9, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1704277888/nlufqyit2yni5ngmge5i.jpg', 5);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `image_room`
--

CREATE TABLE `image_room` (
  `id` bigint NOT NULL,
  `link_image` varchar(255) DEFAULT NULL,
  `room_id` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `image_room`
--

INSERT INTO `image_room` (`id`, `link_image`, `room_id`) VALUES
(4, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1704252608/qpvdunmlirtz3q4azxqb.jpg', 2),
(5, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1704252611/zvrpdrur3dd8j2wbqaw0.jpg', 2),
(6, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1704252613/bb0q6zkctoieff9qg0am.jpg', 2),
(7, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1704257057/uczqqeoggirzcfzwwvdu.jpg', 3),
(8, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1704257059/mkpdhztenegvyiqftj9p.jpg', 3);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `report`
--

CREATE TABLE `report` (
  `id` bigint NOT NULL,
  `content` varchar(255) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `room_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `report`
--

INSERT INTO `report` (`id`, `content`, `created_date`, `room_id`, `user_id`) VALUES
(1, 'báo cáo nè', '2024-01-03 18:02:12', 2, 3),
(2, 'fgwefewfwe', '2024-01-03 18:07:05', 2, 3);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `room`
--

CREATE TABLE `room` (
  `id` bigint NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `area` float DEFAULT NULL,
  `banner` varchar(255) DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  `created_time` time DEFAULT NULL,
  `description` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `price` double DEFAULT NULL,
  `status_room` int DEFAULT NULL,
  `title_room` varchar(255) DEFAULT NULL,
  `category_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `room`
--

INSERT INTO `room` (`id`, `address`, `area`, `banner`, `created_date`, `created_time`, `description`, `price`, `status_room`, `title_room`, `category_id`, `user_id`) VALUES
(2, 'trâu quỳ gia lâm', 24, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1704252606/jstg8ydpho8uerblzliv.jpg', '2024-01-03', '10:30:39', '<section class=\"section post-main-content\">\n<div class=\"section-header\">\n<h2 class=\"section-title\">Th&ocirc;ng tin m&ocirc; tả</h2>\n</div>\n<div class=\"section-content\">\n<p>Đ&oacute;n năm mới 2024 giảm gi&aacute; v&agrave; c&oacute; hỗ trợ cọc cho c&aacute;c bạn thu&ecirc; ph&ograve;ng kh&oacute; khăn.</p>\n<p>Ph&ograve;ng ri&ecirc;ng chung cư Long Sơn Building , Huỳnh Tấn Ph&aacute;t , Ph&uacute; Thuận , Quận 7</p>\n<p>Những điểm mạnh của tại chung cư l&agrave; mặt tiền đường lớn thuận tiện đi lại, kh&ocirc;ng ngập nước, 2 hầm xe rộng r&atilde;i để gửi &ocirc; t&ocirc; v&agrave; xe m&aacute;y, camera an ninh từng tầng, thang tho&aacute;t hiểm ph&ograve;ng r&aacute;c ph&ograve;ng điện ph&ograve;ng nước quản lỹ ri&ecirc;ng biệt. Đặc biệt &iacute;t kh&aacute;ch thu&ecirc; ph&ograve;ng đa số l&agrave; cư d&acirc;n thu&ecirc; nguy&ecirc;n căn hộ n&ecirc;n đi lại nhanh ch&oacute;ng, d&acirc;n tr&iacute; cao. Trong căn hộ c&oacute; th&ocirc;ng gi&oacute; lấy s&aacute;ng , gần bờ s&ocirc;ng n&ecirc;n tho&aacute;ng m&aacute;t.</p>\n<p>- Ph&ograve;ng 10m2 c&oacute; th&ocirc;ng gi&oacute; v&aacute;ch ngăn gi&aacute; 1tr7.</p>\n<p>- Ph&ograve;ng 15m2 c&oacute; ban c&ocirc;ng view Ph&uacute; Mỹ Hưng gi&aacute; 2tr4</p>\n<p>- Ph&ograve;ng 13m2-15m2 c&oacute; cửa sổ view Ph&uacute; Mỹ Hưng tuờng nguy&ecirc;n gi&aacute; 2tr2-2tr4</p>\n<p>- Ph&ograve;ng master duy nhất 1 ph&ograve;ng 22m2 c&oacute; tolet ri&ecirc;ng trong ph&ograve;ng ở dc 3 bạn gi&aacute; 3tr5.</p>\n<p>Căn hộ th&ocirc;ng gi&oacute; nhiều tho&aacute;ng m&aacute;t v&agrave; rất mạnh.</p>\n<p>- Kh&ocirc;ng chung chủ, Giờ giấc tự do. C&oacute; tủ lạnh bảo quản thức ăn - nước uống v&agrave; m&aacute;y giặt d&ugrave;ng chung cho 1 căn hộ. Bảo vệ an ninh camera 24/24 ngo&agrave;i h&agrave;ng lang thang m&aacute;y v&agrave; trong căn hộ, mỗi tầng chỉ c&oacute; 6 căn hộ, thiết kế căn hộ ri&ecirc;ng biệt n&ecirc;n rất y&ecirc;n tĩnh.</p>\n<p>Wifi 5G mạnh vi vu. C&oacute; 2 tầng hầm gửi xe.</p>\n<p>Tiện &iacute;ch ngay chung cư:</p>\n<p>- C&oacute; 8 tầng trung t&acirc;m thương mại cho thu&ecirc; ph&iacute;a trước.</p>\n<p>- Kinh doanh Ph&ograve;ng Gym Power - Fisnet yoga, S&acirc;n chơi Gold 3D, Trung t&acirc;m anh ngữ ila, Văn ph&ograve;ng c&ocirc;ng ty</p>\n<p>- Ngay cạnh Ph&uacute; Mỹ Hưng, Quận 7, Co. Op Mart, Crescent Mall, Cầu Ph&uacute; Mỹ,...</p>\n<p>- Ngay mặt tiền đường Huỳnh Tấn Ph&aacute;t b&aacute;n k&iacute;nh 100m xung quanh đầy đủ quắn ăn, cafe, gara, tạp ho&aacute;, si&ecirc;u thị đầy đủ.</p>\n<p>Li&ecirc;n hệ hoặc nhắn zalo để th&ecirc;m th&ocirc;ng tin v&agrave; hẹn xem ph&ograve;ng.</p>\n<p>Vui l&ograve;ng đọc kỹ b&agrave;i viết . Xin cảm ơn..!</p>\n</div>\n</section>\n<section class=\"section post-overview\">\n<div class=\"section-header\">\n<h3 class=\"section-title\">Đặc điểm tin đăng</h3>\n</div>\n<div class=\"section-content\">\n<table class=\"table\">\n<tbody>\n<tr>\n<td class=\"name\">M&atilde; tin:</td>\n<td>#629520</td>\n</tr>\n<tr>\n<td class=\"name\">Khu vực</td>\n<td>Cho thu&ecirc; ph&ograve;ng trọ Hồ Ch&iacute; Minh</td>\n</tr>\n<tr>\n<td class=\"name\">Loại tin rao:</td>\n<td>Ph&ograve;ng trọ, nh&agrave; trọ</td>\n</tr>\n<tr>\n<td class=\"name\">Đối tượng thu&ecirc;:</td>\n<td>Tất cả</td>\n</tr>\n<tr>\n<td class=\"name\">G&oacute;i tin:</td>\n<td>Tin VIP nổi bật</td>\n</tr>\n<tr>\n<td class=\"name\">Ng&agrave;y đăng:</td>\n<td><time title=\"Thứ 3, 13:24 02/01/2024\">Thứ 3, 13:24 02/01/2024</time></td>\n</tr>\n<tr>\n<td class=\"name\">Ng&agrave;y hết hạn:</td>\n<td><time title=\"Chủ Nhật, 13:24 07/01/2024\">Chủ Nhật, 13:24 07/01/2024</time></td>\n</tr>\n</tbody>\n</table>\n</div>\n</section>\n<section class=\"section post-contact\">\n<div class=\"section-header\">\n<h3 class=\"section-title\">Th&ocirc;ng tin li&ecirc;n hệ</h3>\n</div>\n<div class=\"section-content\">\n<table class=\"table\">\n<tbody>\n<tr>\n<td class=\"name\">Li&ecirc;n hệ:</td>\n<td>L&ecirc; T&uacute;</td>\n</tr>\n<tr>\n<td class=\"name\">Điện thoại:</td>\n<td>0815777735</td>\n</tr>\n<tr>\n<td class=\"name\">Zalo</td>\n<td>0815777735</td>\n</tr>\n</tbody>\n</table>\n</div>\n</section>', 2300000, 0, 'Phòng trọ chung cư Long Sơn mặt tiền Huỳnh Tấn Phát , Quận 7. An ninh- Thoáng mát.', 1, 2),
(3, ' 24 Đường Sơn Kỳ, Phường Sơn Kỳ, Quận Tân Phú, Hồ Chí Minh', 15, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1704257055/lh920yledyo3hhjgqmcs.jpg', '2024-01-03', '11:44:49', '<section class=\"section post-main-content\">\n<div class=\"section-content\">\n<p>PH&Ograve;NG TRỌ 24 SƠN KỲ T&Acirc;N PH&Uacute;, GẦN ĐH C&Ocirc;NG NGHỆ THỰC PHẨM</p>\n<p>- C&aacute;ch trường Đại Học C&ocirc;ng nghệ Thực Phẩm 700m, c&aacute;ch AeOnMall T&acirc;n Ph&uacute; 500m, Gần eTown, PanDoRa Trường Chinh,.... thuận tiện đi lại c&aacute;c quận.</p>\n<p>- Ph&ograve;ng c&oacute; CỬA SỔ, nhiều ph&ograve;ng c&oacute; BAN C&Ocirc;NG, đảm bảo &aacute;nh s&aacute;ng ban ng&agrave;y rất tho&aacute;ng m&aacute;t. (Xem h&igrave;nh thật)</p>\n<p>- Toilet trong ph&ograve;ng đầy đủ c&aacute;c thiết bị vệ sinh, c&oacute; kệ BẾP nấu ăn, c&oacute; G&Aacute;C LỮNG c&aacute;c ph&ograve;ng được ốp gạch cao sạch sẽ.</p>\n<p>- Trong nh&agrave; c&oacute; Thang m&aacute;y đi lại, C&oacute; Camera an ninh quan s&aacute;t, c&oacute; PCCC tự động</p>\n<p>- Internet c&aacute;p quang mạnh, nhanh. C&oacute; c&aacute;p Tivi</p>\n<p>- Bỏ xe dưới tầng trệt c&oacute; bảo vệ trong coi. Kh&oacute;a v&acirc;n tay giờ giấc tự do.</p>\n<p>- Bảo vệ trong coi 24/24 (kh&ocirc;ng chung chủ) gi&uacute;p Bạn c&oacute; cảm gi&aacute;c an to&agrave;n, được bảo vệ.</p>\n<p>___________________________</p>\n<p>- Địa chỉ: 24 Sơn Kỳ, phường Sơn Kỳ, quận T&acirc;n Ph&uacute;, Tp. Hồ Ch&iacute; Minh.</p>\n<p>- Diện t&iacute;ch ph&ograve;ng: Từ 20 m2 &ndash; 25 m2.</p>\n<p>- Gi&aacute; Rẻ: 2,9tr &ndash; 3tr/th&aacute;ng.</p>\n<p>___________________________</p>\n<p>(MỜI BẠN ĐẾN XEM PH&Ograve;NG, C&Oacute; QUẢN L&Yacute; TIẾP KH&Aacute;CH)</p>\n<p>Li&ecirc;n hệ: 0918 18 00 57 hoặc 0931897679&nbsp; A Hiếu.</p>\n</div>\n</section>\n<section class=\"section post-overview\">\n<div class=\"section-header\">\n<h3 class=\"section-title\">Đặc điểm tin đăng</h3>\n</div>\n<div class=\"section-content\">\n<table class=\"table\">\n<tbody>\n<tr>\n<td class=\"name\">M&atilde; tin:</td>\n<td>#135699</td>\n</tr>\n<tr>\n<td class=\"name\">Khu vực</td>\n<td>Cho thu&ecirc; ph&ograve;ng trọ Hồ Ch&iacute; Minh</td>\n</tr>\n<tr>\n<td class=\"name\">Loại tin rao:</td>\n<td>Ph&ograve;ng trọ, nh&agrave; trọ</td>\n</tr>\n<tr>\n<td class=\"name\">Đối tượng thu&ecirc;:</td>\n<td>Tất cả</td>\n</tr>\n<tr>\n<td class=\"name\">G&oacute;i tin:</td>\n<td>Tin VIP nổi bật</td>\n</tr>\n<tr>\n<td class=\"name\">Ng&agrave;y đăng:</td>\n<td><time title=\"Thứ 4, 09:24 27/12/2023\">Thứ 4, 09:24 27/12/2023</time></td>\n</tr>\n<tr>\n<td class=\"name\">Ng&agrave;y hết hạn:</td>\n<td><time title=\"Thứ 5, 09:24 11/01/2024\">Thứ 5, 09:24 11/01/2024</time></td>\n</tr>\n</tbody>\n</table>\n</div>\n</section>\n<section class=\"section post-contact\">\n<div class=\"section-header\">\n<h3 class=\"section-title\">Th&ocirc;ng tin li&ecirc;n hệ</h3>\n</div>\n<div class=\"section-content\">\n<table class=\"table\">\n<tbody>\n<tr>\n<td class=\"name\">Li&ecirc;n hệ:</td>\n<td>hieuthanh2006 (*)</td>\n</tr>\n<tr>\n<td class=\"name\">Điện thoại:</td>\n<td>0918180057</td>\n</tr>\n<tr>\n<td class=\"name\">Zalo</td>\n<td>0918180057</td>\n</tr>\n</tbody>\n</table>\n</div>\n</section>', 1600000, 0, 'CHO THUÊ PHÒNG TRỌ MỚI CHÍNH CHỦ, GIẢM GIÁ, QUẬN TÂN PHÚ - GẦN BÊN TRƯỜNG ĐẠI HỌC CÔNG NGHỆ THỰC PHẨM', 4, 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `id` bigint NOT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`id`, `fullname`, `password`, `phone`, `role`, `username`) VALUES
(1, 'admin', 'admin', '0832468233', 'ROLE_ADMIN', 'admin'),
(2, 'Nguyễn ngọc ánh', '12345', '0923428324', 'ROLE_USER', 'ngocanh@gmail.com'),
(3, 'Hoàng minh tú', '12345', '093247283', 'ROLE_USER', 'minhtu@gmail.com');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKinaksbb3c62s9qb42slo1lsyy` (`room_id`),
  ADD KEY `FKqi14bvepnwtjbbaxm7m4v44yg` (`user_id`);

--
-- Chỉ mục cho bảng `comment_image`
--
ALTER TABLE `comment_image`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK2n6pxbtn1k81o8rwftdlr75eh` (`comment_id`);

--
-- Chỉ mục cho bảng `image_room`
--
ALTER TABLE `image_room`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKaxqwhp7syt0s1k8dhq0qxbmo8` (`room_id`);

--
-- Chỉ mục cho bảng `report`
--
ALTER TABLE `report`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK81kyf7whu1ovcesffi8vk8o4a` (`room_id`),
  ADD KEY `FKj62onw73yx1qnmd57tcaa9q3a` (`user_id`);

--
-- Chỉ mục cho bảng `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKllkgnps1iryk3347aokxwbxxm` (`category_id`),
  ADD KEY `FKj8a5tk6wghd3x2sxgksj2fv3o` (`user_id`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `category`
--
ALTER TABLE `category`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `comments`
--
ALTER TABLE `comments`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `comment_image`
--
ALTER TABLE `comment_image`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `image_room`
--
ALTER TABLE `image_room`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `report`
--
ALTER TABLE `report`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `room`
--
ALTER TABLE `room`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `FKinaksbb3c62s9qb42slo1lsyy` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`),
  ADD CONSTRAINT `FKqi14bvepnwtjbbaxm7m4v44yg` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Các ràng buộc cho bảng `comment_image`
--
ALTER TABLE `comment_image`
  ADD CONSTRAINT `FK2n6pxbtn1k81o8rwftdlr75eh` FOREIGN KEY (`comment_id`) REFERENCES `comments` (`id`);

--
-- Các ràng buộc cho bảng `image_room`
--
ALTER TABLE `image_room`
  ADD CONSTRAINT `FKaxqwhp7syt0s1k8dhq0qxbmo8` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`);

--
-- Các ràng buộc cho bảng `report`
--
ALTER TABLE `report`
  ADD CONSTRAINT `FK81kyf7whu1ovcesffi8vk8o4a` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`),
  ADD CONSTRAINT `FKj62onw73yx1qnmd57tcaa9q3a` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Các ràng buộc cho bảng `room`
--
ALTER TABLE `room`
  ADD CONSTRAINT `FKj8a5tk6wghd3x2sxgksj2fv3o` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FKllkgnps1iryk3347aokxwbxxm` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
