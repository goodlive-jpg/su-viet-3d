const ERAS = [
  {
    id: 1, slide: 1, label: "Hồng Bàng", tag: "Khởi nguyên", accent: "#d9a441",
    years: "2879 – 258 TCN", title: "Buổi đầu dựng nước", artifact: "Trống đồng Đông Sơn",
    img: "assets/img/drum.svg",
    lead: "Từ huyền thoại Lạc Long Quân – Âu Cơ đến nhà nước Văn Lang của 18 đời Hùng Vương, người Việt cổ dựng nên nền văn minh lúa nước bên sông Hồng.",
    body: [
      "Truyền thuyết kể rằng Lạc Long Quân và Âu Cơ sinh ra một trăm trứng, nở thành trăm người con: năm mươi người theo cha xuống biển, năm mươi người theo mẹ lên núi. Người con trưởng lập nên nước Văn Lang, đặt kinh đô tại Phong Châu, vùng đất nay thuộc tỉnh Phú Thọ.",
      "Văn Lang được tổ chức thành 15 bộ, đứng đầu là vua Hùng, giúp việc có lạc hầu và lạc tướng. Cư dân trồng lúa nước, chăn nuôi, đánh cá, làm gốm và luyện đồng. Trống đồng Đông Sơn là hiện vật tiêu biểu, thể hiện trình độ kỹ thuật và đời sống tinh thần phong phú của cư dân Việt cổ."
    ],
    facts: [["Nhà nước", "Văn Lang – 15 bộ"], ["Kinh đô", "Phong Châu, Phú Thọ"], ["Kinh tế", "Lúa nước, đúc đồng"], ["Dấu ấn", "Trống đồng Đông Sơn"]],
    quote: "“Dù ai đi ngược về xuôi / Nhớ ngày giỗ Tổ mùng mười tháng ba.” — Ca dao Việt Nam"
  },
  {
    id: 2, slide: 2, label: "Âu Lạc", tag: "Dựng thành", accent: "#b9783b",
    years: "257 – 179 TCN", title: "Thành Cổ Loa và nỏ thần", artifact: "Thành Cổ Loa",
    img: "assets/img/coloa.svg",
    lead: "Thục Phán hợp nhất Văn Lang với Âu Việt, lập nước Âu Lạc và xây thành Cổ Loa — kinh đô xoáy ốc kiên cố bậc nhất thời cổ.",
    body: [
      "An Dương Vương xây thành Cổ Loa gồm ba vòng thành xoáy ốc lồng vào nhau, có hào nước và lũy đất bao quanh. Truyền thuyết kể thần Kim Quy giúp vua xây thành và tặng móng rùa làm lẫy nỏ thần, bắn một phát hạ hàng loạt quân địch.",
      "Năm 179 TCN, Triệu Đà đem quân xâm lược. Mỵ Châu — con gái An Dương Vương — lỡ trao bí mật nỏ thần cho Trọng Thủy, khiến Âu Lạc mất nước. Câu chuyện Mỵ Châu – Trọng Thủy trở thành bài học về cảnh giác và lòng tin."
    ],
    facts: [["Nhà nước", "Âu Lạc"], ["Kinh đô", "Cổ Loa, Đông Anh"], ["Công trình", "3 vòng thành xoáy"], ["Kết thúc", "Mất nước năm 179 TCN"]],
    quote: "Thành trì kiên cố đến đâu cũng không thay được sự cảnh giác và lòng dân."
  },
  {
    id: 3, slide: 3, label: "Hai Bà Trưng", tag: "Bắc thuộc", accent: "#c8452f",
    years: "40 – 43 SCN", title: "Hai Bà Trưng dựng cờ khởi nghĩa", artifact: "Hai Bà Trưng",
    img: "assets/img/trung.svg",
    lead: "Sau hơn hai thế kỷ Bắc thuộc, cuộc khởi nghĩa Mê Linh của Trưng Trắc và Trưng Nhị bùng nổ, giải phóng 65 thành trì.",
    body: [
      "Mùa xuân năm 40, Trưng Trắc cùng em gái Trưng Nhị phất cờ khởi nghĩa tại Mê Linh, được nhân dân khắp Âu Lạc hưởng ứng. Quân khởi nghĩa đánh bại thái thú Tô Định và lập chính quyền tự chủ trong ba năm.",
      "Năm 43, nhà Đông Hán cử Mã Viện đem quân sang đàn áp. Hai Bà Trưng chiến đấu đến cùng và tuẫn tiết tại Hát Môn. Hình tượng hai nữ anh hùng cưỡi voi ra trận trở thành biểu tượng bất diệt của tinh thần độc lập."
    ],
    facts: [["Thời gian", "40 – 43 SCN"], ["Căn cứ", "Mê Linh, Vĩnh Phúc"], ["Thành quả", "Giải phóng 65 thành"], ["Biểu tượng", "Tinh thần nữ nhi bất khuất"]],
    quote: "“Tôi muốn cưỡi cơn gió mạnh, đạp luồng sóng dữ… chứ không chịu khom lưng làm tì thiếp người ta.” — Trưng Trắc"
  },
  {
    id: 4, slide: 4, label: "Bạch Đằng", tag: "Độc lập", accent: "#5c8fa8",
    years: "938", title: "Ngô Quyền và trận Bạch Đằng", artifact: "Bãi cọc Bạch Đằng",
    img: "assets/img/bachdang.svg",
    lead: "Bằng kế cọc gỗ trên sông Bạch Đằng, Ngô Quyền đánh tan quân Nam Hán, chấm dứt hơn 1.000 năm Bắc thuộc.",
    body: [
      "Ngô Quyền cho đóng cọc gỗ bịt sắt xuống lòng sông, lợi dụng thủy triều lên xuống. Khi chiến thuyền Nam Hán tiến vào, quân ta nhử địch vào bãi cọc; thủy triều rút, thuyền giặc bị xuyên thủng, quân ta phản công.",
      "Chiến thắng năm 938 mở ra thời kỳ độc lập tự chủ. Ngô Quyền xưng vương, đóng đô ở Cổ Loa, đặt nền móng cho nhà nước phong kiến độc lập đầu tiên sau nghìn năm Bắc thuộc."
    ],
    facts: [["Năm", "938"], ["Địa điểm", "Sông Bạch Đằng"], ["Kế sách", "Cọc gỗ + thủy triều"], ["Ý nghĩa", "Kết thúc 1.000 năm Bắc thuộc"]],
    quote: "Một trận thủy chiến đã định hình cả một thiên niên kỷ."
  },
  {
    id: 5, slide: 5, label: "Nhà Lý", tag: "Văn hiến", accent: "#d8a45c",
    years: "1010 – 1225", title: "Dời đô, mở nền văn hiến", artifact: "Khuê Văn Các",
    img: "assets/img/thanglong.svg",
    lead: "Lý Công Uẩn dời đô từ Hoa Lư về Đại La, đổi tên Thăng Long — mở ra thời kỳ hưng thịnh của văn minh Đại Việt.",
    body: [
      "Năm 1010, vua Lý Thái Tổ ban Chiếu dời đô, chọn Đại La là nơi “trung tâm trời đất”, đổi tên thành Thăng Long. Kinh đô mới phát triển thành trung tâm chính trị, kinh tế và văn hóa của cả nước.",
      "Thời Lý xây Văn Miếu (1070), lập Quốc Tử Giám (1076) — trường đại học đầu tiên. Phật giáo hưng thịnh với chùa Một Cột, chùa Dâu. Nhà Lý còn đánh bại quân Tống (1075–1077) và mở mang bờ cõi về phía Nam."
    ],
    facts: [["Năm 1010", "Chiếu dời đô"], ["Kinh đô", "Thăng Long, Hà Nội"], ["Giáo dục", "Văn Miếu – Quốc Tử Giám"], ["Dấu ấn", "Chùa Một Cột"]],
    quote: "“Thành Đại La… ở giữa khu vực trời đất, được thế rồng cuộn hổ ngồi.” — Chiếu dời đô"
  },
  {
    id: 6, slide: 6, label: "Nhà Trần", tag: "Hào khí Đông A", accent: "#c04a30",
    years: "1258 – 1288", title: "Ba lần đánh bại Nguyên Mông", artifact: "Hào khí Đông A",
    img: "assets/img/tran.svg",
    lead: "Ba lần đánh bại quân Nguyên Mông — đội quân từng chinh phục gần như cả châu Á — triều Trần khẳng định bản lĩnh Đại Việt.",
    body: [
      "Năm 1258, 1285 và 1288, quân dân nhà Trần dưới sự chỉ huy của Trần Hưng Đạo đã ba lần đánh bại quân Nguyên. Hội nghị Diên Hồng (1284) thể hiện ý chí toàn dân; hội nghị Bình Than bàn kế đánh giặc.",
      "Chiến thắng Bạch Đằng năm 1288 với kế cọc gỗ của Trần Hưng Đạo là đỉnh cao. Tinh thần “Sát Thát” và hào khí Đông A trở thành biểu tượng của lòng yêu nước."
    ],
    facts: [["Ba lần", "1258 · 1285 · 1288"], ["Chỉ huy", "Trần Hưng Đạo"], ["Hội nghị", "Diên Hồng, Bình Than"], ["Đỉnh cao", "Bạch Đằng 1288"]],
    quote: "“Nếu bệ hạ muốn hàng giặc thì trước hãy chém đầu thần rồi hãy hàng.” — Trần Hưng Đạo"
  },
  {
    id: 7, slide: 7, label: "Lam Sơn", tag: "Khởi nghĩa", accent: "#c9a25c",
    years: "1418 – 1428", title: "Khởi nghĩa Lam Sơn", artifact: "Gươm thần Lam Sơn",
    img: "assets/img/lamsong.svg",
    lead: "Mười năm gian khổ từ vùng rừng núi Thanh Hóa, nghĩa quân Lam Sơn đánh đuổi quân Minh, giành lại độc lập.",
    body: [
      "Năm 1418, Lê Lợi dựng cờ khởi nghĩa ở Lam Sơn. Trải qua những năm tháng khó khăn, nghĩa quân dần lớn mạnh nhờ chiến lược của Nguyễn Trãi và sự ủng hộ của nhân dân.",
      "Chiến thắng Chi Lăng – Xương Giang (1427) buộc quân Minh rút về nước. Năm 1428, Lê Lợi lên ngôi, lập nhà Lê, ban Bình Ngô đại cáo — bản tuyên ngôn độc lập thứ hai của dân tộc."
    ],
    facts: [["Bắt đầu", "1418 tại Lam Sơn"], ["Kéo dài", "10 năm"], ["Chiến thắng", "Chi Lăng – Xương Giang"], ["Văn bản", "Bình Ngô đại cáo"]],
    quote: "“Việc nhân nghĩa cốt ở yên dân / Quân điếu phạt trước lo trừ bạo.” — Nguyễn Trãi"
  },
  {
    id: 8, slide: 8, label: "Tây Sơn", tag: "Thần tốc", accent: "#cf6a38",
    years: "1771 – 1792", title: "Quang Trung đại phá quân Thanh", artifact: "Quang Trung",
    img: "assets/img/tayson.svg",
    lead: "Từ cuộc khởi nghĩa nông dân, anh em Tây Sơn thống nhất đất nước và làm nên chiến thắng thần tốc mùa xuân 1789.",
    body: [
      "Ba anh em Nguyễn Nhạc, Nguyễn Huệ, Nguyễn Lữ dựng cờ khởi nghĩa năm 1771. Năm 1785, Nguyễn Huệ đánh tan quân Xiêm tại Rạch Gầm – Xoài Mút.",
      "Cuối 1788, quân Thanh kéo sang. Nguyễn Huệ lên ngôi Hoàng đế, hiệu Quang Trung, hành quân thần tốc ra Bắc. Đêm mồng 5 Tết Kỷ Dậu 1789, quân Tây Sơn đại thắng tại Ngọc Hồi – Đống Đa, giải phóng Thăng Long."
    ],
    facts: [["Khởi nghĩa", "1771"], ["Rạch Gầm – Xoài Mút", "1785"], ["Ngọc Hồi – Đống Đa", "1789"], ["Hoàng đế", "Quang Trung – Nguyễn Huệ"]],
    quote: "“Đánh cho để dài tóc / Đánh cho để đen răng…” — Quang Trung"
  },
  {
    id: 9, slide: 9, label: "Nhà Nguyễn", tag: "Kinh thành Huế", accent: "#a94f4a",
    years: "1802 – 1945", title: "Kinh thành Huế và triều Nguyễn", artifact: "Ngọ Môn",
    img: "assets/img/hue.svg",
    lead: "Gia Long thống nhất đất nước, đặt kinh đô tại Huế; triều Nguyễn để lại quần thể cung đình đồ sộ bên sông Hương.",
    body: [
      "Năm 1802, Nguyễn Ánh lên ngôi, hiệu Gia Long, lập nhà Nguyễn, đóng đô ở Phú Xuân (Huế). Năm 1804, quốc hiệu Việt Nam được sử dụng; thời Minh Mạng đổi thành Đại Nam.",
      "Triều Nguyễn xây dựng kinh thành Huế, Hoàng thành và Tử Cấm Thành — quần thể kiến trúc tiêu biểu. Tuy nhiên, chế độ phong kiến dần suy yếu trước áp lực phương Tây; năm 1858, Pháp nổ súng xâm lược."
    ],
    facts: [["Năm 1802", "Gia Long lập nhà Nguyễn"], ["Kinh đô", "Phú Xuân – Huế"], ["Quốc hiệu", "Việt Nam (1804), Đại Nam (1838)"], ["Di sản", "Quần thể di tích Cố đô Huế"]],
    quote: "Huế — nơi thời gian chậm lại giữa kinh thành, lăng tẩm và sông Hương."
  },
  {
    id: 10, slide: 10, label: "Pháp thuộc", tag: "Đêm dài nô lệ", accent: "#8d7b4e",
    years: "1858 – 1945", title: "Đêm dài nô lệ và những ngọn lửa", artifact: "Ngọn lửa Cần Vương",
    img: "assets/img/phapthuoc.svg",
    lead: "Gần một thế kỷ thuộc địa, nhưng chưa bao giờ phong trào yêu nước ngừng cháy.",
    body: [
      "Từ 1858, Pháp từng bước xâm chiếm Việt Nam. Triều Nguyễn ký các hiệp ước nhượng bộ; phong trào Cần Vương (1885–1896) do vua Hàm Nghi và Tôn Thất Thuyết phát động đã kéo dài nhiều năm.",
      "Đầu thế kỷ XX, các nhà yêu nước như Phan Bội Châu, Phan Chu Trinh, Nguyễn Ái Quốc tìm con đường cứu nước mới. Năm 1930, Đảng Cộng sản Việt Nam ra đời, mở ra bước ngoặt của cách mạng."
    ],
    facts: [["1858", "Pháp nổ súng Đà Nẵng"], ["1885–1896", "Phong trào Cần Vương"], ["1930", "Thành lập Đảng"], ["1941", "Mặt trận Việt Minh"]],
    quote: "“Không có gì quý hơn độc lập, tự do.” — Hồ Chí Minh"
  },
  {
    id: 11, slide: 11, label: "1945", tag: "Mùa thu độc lập", accent: "#d94a2c",
    years: "1945", title: "Mùa thu độc lập", artifact: "Ba Đình 1945",
    img: "assets/img/cachmang.svg",
    lead: "Cách mạng tháng Tám thành công, ngày 2/9/1945 Chủ tịch Hồ Chí Minh đọc Tuyên ngôn độc lập tại Quảng trường Ba Đình.",
    body: [
      "Tháng 8/1945, khi Nhật đầu hàng Đồng minh, thời cơ chín muồi. Cách mạng tháng Tám bùng nổ và giành chính quyền trong cả nước chỉ trong hai tuần.",
      "Ngày 2/9/1945, tại Quảng trường Ba Đình, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa — nhà nước công nông đầu tiên ở Đông Nam Á."
    ],
    facts: [["19/8/1945", "Khởi nghĩa Hà Nội"], ["2/9/1945", "Tuyên ngôn độc lập"], ["Địa điểm", "Quảng trường Ba Đình"], ["Tên nước", "Việt Nam Dân chủ Cộng hòa"]],
    quote: "“Tất cả các dân tộc trên thế giới đều sinh ra bình đẳng…” — Hồ Chí Minh"
  },
  {
    id: 12, slide: 12, label: "1954 – 1975", tag: "Thống nhất", accent: "#c0452e",
    years: "1954 – 1975", title: "Từ Điện Biên Phủ đến mùa xuân đại thắng", artifact: "Dinh Độc Lập",
    img: "assets/img/thongnhat.svg",
    lead: "Chiến thắng Điện Biên Phủ lừng lẫy năm châu, rồi cuộc tổng tiến công mùa xuân 1975 thống nhất non sông.",
    body: [
      "Chiến dịch Điện Biên Phủ (13/3 – 7/5/1954) kết thúc bằng lá cờ “Quyết chiến quyết thắng” trên hầm De Castries. Hiệp định Genève được ký kết, chia cắt đất nước tạm thời ở vĩ tuyến 17.",
      "Trải qua 21 năm kháng chiến, cuộc Tổng tiến công và nổi dậy mùa xuân 1975 kết thúc bằng chiến dịch Hồ Chí Minh. Trưa 30/4/1975, xe tăng quân giải phóng tiến vào Dinh Độc Lập — non sông thu về một mối."
    ],
    facts: [["7/5/1954", "Điện Biên Phủ"], ["21/7/1954", "Hiệp định Genève"], ["30/4/1975", "Giải phóng miền Nam"], ["1976", "Nước CHXHCN Việt Nam"]],
    quote: "Điện Biên Phủ — một mốc son chói lọi của lịch sử dân tộc."
  },
  {
    id: 13, slide: 13, label: "Đổi Mới", tag: "Mở cửa", accent: "#5f9c84",
    years: "1986", title: "Đổi Mới — mở cửa và cất cánh", artifact: "Cánh cửa Đổi Mới",
    img: "assets/img/doimoi.svg",
    lead: "Đại hội VI (12/1986) khởi xướng công cuộc Đổi Mới, chuyển sang kinh tế thị trường định hướng xã hội chủ nghĩa.",
    body: [
      "Trước những khó khăn sau chiến tranh và cơ chế bao cấp, Đại hội VI của Đảng (tháng 12/1986) đề ra đường lối Đổi Mới: phát triển kinh tế hàng hóa nhiều thành phần, mở cửa và hội nhập.",
      "Đổi Mới đưa Việt Nam thoát khỏi khủng hoảng, đời sống nhân dân được cải thiện. Năm 1995, Việt Nam gia nhập ASEAN; năm 2007, gia nhập WTO — dấu mốc hội nhập sâu rộng."
    ],
    facts: [["12/1986", "Đại hội VI"], ["Chủ trương", "Kinh tế thị trường"], ["1995", "Gia nhập ASEAN"], ["2007", "Gia nhập WTO"]],
    quote: "Đổi Mới là bước ngoặt mở đường cho Việt Nam hội nhập và phát triển."
  },
  {
    id: 14, slide: 14, label: "Hôm nay", tag: "Tương lai", accent: "#7fbac0",
    years: "1986 – 2026", title: "Việt Nam hôm nay & ngày mai", artifact: "Việt Nam hôm nay",
    img: "assets/img/hiennay.svg",
    lead: "Hơn 100 triệu dân, nền kinh tế năng động, 8 di sản thế giới — Việt Nam đang viết tiếp trang sử của mình.",
    body: [
      "Từ một trong những nước nghèo nhất thế giới, Việt Nam vươn lên thành nền kinh tế thu nhập trung bình, hội nhập sâu rộng với hơn 190 quốc gia và vùng lãnh thổ. Kinh tế số, chuyển đổi xanh và công nghệ là những trụ cột tương lai.",
      "Văn hóa Việt Nam — từ áo dài, phở, nhã nhạc cung đình đến vịnh Hạ Long — được thế giới biết đến. Với 34 tỉnh, thành phố sau sắp xếp đơn vị hành chính, thế hệ trẻ hôm nay nối tiếp tinh thần của cha ông bằng sáng tạo và bản lĩnh."
    ],
    facts: [["Dân số", "Hơn 100 triệu người"], ["Di sản UNESCO", "8 di sản thế giới"], ["Diện tích", "Hơn 331.000 km²"], ["Khát vọng", "Thịnh vượng, hội nhập"]],
    quote: "“Dân tộc Việt Nam — 4.000 năm không ngừng đi tới.”"
  }
];
