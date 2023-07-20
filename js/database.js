const products = [
  {
    id: 1,
    nameProduct: "Son Ysl Slim 07 – Hồng Đất Thiên Hồnng",
    price: 870000,
    description:
      "sở hữu sắc son màu hồng anh đào đẹp tựa bờ môi tự nhiên. Là một gam màu chẳng thể thiếu trong “item have must” hứa hẹn sẽ làm mưa làm gió trên thị trường son môi trong thời gian sắp tới.",
    img: "https://lipstick.vn/wp-content/uploads/2022/09/son-romand-kem-03.png",
    quantity: 100,
    type: "lipstick",
  },

  {
    id: 2,
    nameProduct: "Son Dưỡng Dior Collagen Addict Lip Maximizer",
    price: 950000,
    description: "là sự hòa quyện giữa vị ngọt ngào của hương vani",
    img: "https://kyo.vn/wp-content/uploads/2023/06/snapedit_1688049004211-768x768.jpeg",
    quantity: 99,
    type: "lipstick",
  },
  {
    id: 3,
    nameProduct: "Son louboutin Rococotte 013M",
    price: 890000,
    description:
      "là thỏi son cao cấp đến từ thương hiệu nổi tiếng thế giới Christian Louboutin sở hữu gam màu hồng đất nhẹ nhàng, tinh tế khiến hội chị em đổ gục.",
    img: "https://kyo.vn/wp-content/uploads/2023/06/son-dior-rouge-dior-forever-transfer-proof-lipstick-558-forever-grace-mau-hong-dat-1.png-768x768.png",
    quantity: 88,
    type: "lipstick",
  },
  {
    id: 4,
    nameProduct: "Son Dior Addict Rouge Brillant Couleur",
    price: 980000,
    description:
      "sở hữu chất son thạch trong veo như pha lê, được điểm xuyến vàng 24K bên trong khẳng định vị thế sang trọng, xa hoa bậc nhất của mình.",
    img: "https://kyo.vn/wp-content/uploads/2023/06/Son-Dior-Addict-Rouge-Brillant-Couleur-Intense-877-Blooming-Pink.pnh_-768x768.png",
    quantity: 70,
    type: "lipstick",
  },
  {
    id: 5,
    nameProduct: "Son Kem Tom Ford Liquid Lip Luxe",
    price: 990000,
    description:
      "được tạo ra là tổng hoà giữa sắc hồng và sắc tím, là sự hoà trộn của nét đẹp nữ tính, lãng mạn với sự kiêu sa, quyến rũ. Màu son trên môi như một sắc hoa đến độ nở rộ, tươi tắn và rạng ngời.",
    img: "https://kyo.vn/wp-content/uploads/2023/05/son-tom-ford-tf-liquid-lip-luxe-matte-124-mau-do-lanh-10-768x768.png",
    quantity: 150,
    type: "lipstick",
  },
  {
    id: 6,
    nameProduct: "Son Gucci Rouge De Beauté Brillant 516",
    price: 890000,
    description:
      "là sự kết hợp hoàn hảo giữa tông màu đỏ tươi tắn pha ánh hồng đầy rạng rỡ.",
    img: "https://kyo.vn/wp-content/uploads/2023/03/Son-Gucci-Rouge-De-Beaute-Brillant-516-Margaret-Ruby-768x768.png",
    quantity: 120,
    type: "lipstick",
  },
  {
    id: 7,
    nameProduct: "Son Tom Ford Lip Color Satin Matte 91 Lucky",
    price: 890000,
    description:
      "là sự kết hợp hoàn hảo giữa tông màu đỏ tươi tắn pha ánh hồng đầy rạng rỡ.",
    img: "https://lipstick.vn/wp-content/uploads/2022/09/son-romand-kem-03.png",
    quantity: 110,
    type: "lipstick",
  },
  {
    id: 8,
    nameProduct: "Son Shu Uemura Rouge Unlimited",
    price: 890000,
    description:
      "là sự kết hợp hoàn hảo giữa tông màu đỏ tươi tắn pha ánh hồng đầy rạng rỡ.",
    img: "https://kyo.vn/wp-content/uploads/2023/03/son-shu-uemura-rouge-unlimited-supreme-matte-344-mau-hong-dao-768x768.png",
    quantity: 110,
    type: "lipstick",
  },
  {
    id: 9,
    nameProduct: "Nước Hoa Unisex Roja Parfums Haute",
    price: 890000,
    description:
      "là sự kết hợp hoàn hảo giữa tông màu đỏ tươi tắn pha ánh hồng đầy rạng rỡ.",
    img: "https://kyo.vn/wp-content/uploads/2023/04/Nuoc-Hoa-Unisex-Roja-Parfums-Haute-Luxe-Scent-Makers-Scente-389.jpg",
    quantity: 80,
    type: "perfume",
  },
  {
    id: 10,
    nameProduct: "Nước Hoa Nữ Lancôme Miracle EDP",
    price: 890000,
    description:
      "là sự kết hợp hoàn hảo giữa tông màu đỏ tươi tắn pha ánh hồng đầy rạng rỡ.",
    img: "https://kyo.vn/wp-content/uploads/2023/03/Nuoc-Hoa-Nu-Lancome-Miracle-EDP-10.png",
    quantity: 100,
    type: "perfume",
  },
  {
    id: 11,
    nameProduct: "Set Nước Hoa Nữ YSL Black Opium",
    price: 890000,
    description:
      "là sự kết hợp hoàn hảo giữa tông màu đỏ tươi tắn pha ánh hồng đầy rạng rỡ.",
    img: "https://kyo.vn/wp-content/uploads/2023/03/Set-Nuoc-Hoa-Nu-YSL-Black-Opium-Holiday-Party-Kit-Set-3-Mon-dd-768x769.jpg",
    quantity: 111,
    type: "perfume",
  },
  {
    id: 12,
    nameProduct: "Son Ysl Slim 07 – Hồng Đất Thiên Hồng",
    price: 890000,
    description:
      "là sự kết hợp hoàn hảo giữa tông màu đỏ tươi tắn pha ánh hồng đầy rạng rỡ.",
    img: "https://lipstick.vn/wp-content/uploads/2022/09/son-romand-kem-03.png",
    quantity: 40,
    type: "perfume",
  },
  {
    id: 13,
    nameProduct: "Set Nước Hoa Nữ Mini Hermès Ladies",
    price: 890000,
    description:
      "là sự kết hợp hoàn hảo giữa tông màu đỏ tươi tắn pha ánh hồng đầy rạng rỡ.",
    img: "https://kyo.vn/wp-content/uploads/2023/02/Set-hermes-4-mon.jpg",
    quantity: 40,
    type: "perfume",
  },
  {
    id: 14,
    nameProduct: "Son Ysl Slim 07 – Hồng Đất Thiên Hồng",
    price: 890000,
    description:
      "là sự kết hợp hoàn hảo giữa tông màu đỏ tươi tắn pha ánh hồng đầy rạng rỡ.",
    img: "https://kyo.vn/wp-content/uploads/2023/03/nuoc-hoa-nu-ysl-yves-saint-laurent-black-opium-le-parfum-edp-1-768x768.png",
    quantity: 40,
    type: "perfume",
  },
  {
    id: 15,
    nameProduct: "Nước Hoa Nữ Dior Miss Dior Eau De",
    price: 890000,
    description:
      "là sự kết hợp hoàn hảo giữa tông màu đỏ tươi tắn pha ánh hồng đầy rạng rỡ.",
    img: "https://kyo.vn/wp-content/uploads/2023/02/miss-dior-eau-de-parfum-1-768x768.jpg",
    quantity: 40,
    type: "perfume",
  },
  {
    id: 16,
    nameProduct: "Nước Hoa Unisex Le Labo Thé Noir 29",
    price: 890000,
    description:
      "là sự kết hợp hoàn hảo giữa tông màu đỏ tươi tắn pha ánh hồng đầy rạng rỡ.",
    img: "https://kyo.vn/wp-content/uploads/2022/10/nuoc-hoa-Unisex-Le-Labo-The-Noir-29-EDP-768x768.png",
    quantity: 40,
    type: "perfume",
  },
  {
    id: 17,
    nameProduct: "Kem Chống Nắng Dành Cho Mọi Loại Da",
    price: 890000,
    description:
      "là sự kết hợp hoàn hảo giữa tông màu đỏ tươi tắn pha ánh hồng đầy rạng rỡ.",
    img: "https://kyo.vn/wp-content/uploads/2022/09/Zo-Skin-Health-Smart-Tone-SPF-50-768x768.jpg",
    quantity: 40,
    type: "sunscreen",
  },
  {
    id: 18,
    nameProduct: "Kem Chống Nắng Farmona Sun SPF 50",
    price: 890000,
    description:
      "là sự kết hợp hoàn hảo giữa tông màu đỏ tươi tắn pha ánh hồng đầy rạng rỡ.",
    img: "https://kyo.vn/wp-content/uploads/2022/04/kem-chong-nang-Farmona-sun-spf-50-oil-free-11.jpg",
    quantity: 40,
    type: "sunscreen",
  },
  {
    id: 19,
    nameProduct: "Kem Chống Nắng Dành Cho Mọi Loại Da",
    price: 890000,
    description:
      "là sự kết hợp hoàn hảo giữa tông màu đỏ tươi tắn pha ánh hồng đầy rạng rỡ.",
    img: "https://kyo.vn/wp-content/uploads/2021/04/Kem-Chong-Nang-Image-Skincare-Prevention-Daily-Matte-Moisturizer-SPF32.jpg",
    quantity: 40,
    type: "sunscreen",
  },
  {
    id: 20,
    nameProduct: "Kem Chống Nắng Image Skincare",
    price: 890000,
    description:
      "là sự kết hợp hoàn hảo giữa tông màu đỏ tươi tắn pha ánh hồng đầy rạng rỡ.",
    img: "https://kyo.vn/wp-content/uploads/2022/04/kem-chong-nang-clarins-lavender-1-768x768.jpg",
    quantity: 40,
    type: "sunscreen",
  },
  {
    id: 21,
    nameProduct: "Viên Uống Chống Nắng Murad Internal",
    price: 890000,
    description:
      "là sự kết hợp hoàn hảo giữa tông màu đỏ tươi tắn pha ánh hồng đầy rạng rỡ.",
    img: "https://kyo.vn/wp-content/uploads/2022/04/vien-uong-chong-nang-noi-sinh-murad-internal-skincare-60-vien-1.jpg",
    quantity: 40,
    type: "sunscreen",
  },
  {
    id: 22,
    nameProduct: "Set Kem Chống Nắng Cho Da Khô, Nhạy Cảm La",
    price: 890000,
    description:
      "là sự kết hợp hoàn hảo giữa tông màu đỏ tươi tắn pha ánh hồng đầy rạng rỡ.",
    img: "https://kyo.vn/wp-content/uploads/2022/04/set-kem-chong-nang-3-768x768.jpg",
    quantity: 40,
    type: "sunscreen",
  },
  {
    id: 23,
    nameProduct: "Kem Chống Nắng Cho Da Dầu, Mụn Cell Fusion",
    price: 890000,
    description:
      "là sự kết hợp hoàn hảo giữa tông màu đỏ tươi tắn pha ánh hồng đầy rạng rỡ.",
    img: "https://kyo.vn/wp-content/uploads/2022/04/Kem-chong-nang-Cell-Fusion-C-Advanced-Clear-Sunscreen-100-SPF50-6-768x768.png",
    quantity: 40,
    type: "sunscreen",
  },
  {
    id: 24,
    nameProduct: "Kem Chống Nắng Innisfree Intensive",
    price: 890000,
    description:
      "là sự kết hợp hoàn hảo giữa tông màu đỏ tươi tắn pha ánh hồng đầy rạng rỡ.",
    img: "https://kyo.vn/wp-content/uploads/2022/04/kem-chong-nang-innisfree-intensive-triple-1-768x768.webp",
    quantity: 40,
    type: "sunscreen",
  },
  {
    id: 25,
    nameProduct: "Phấn Má Hồng Mac Powder Blush Lisa",
    price: 890000,
    description:
      "là sự kết hợp hoàn hảo giữa tông màu đỏ tươi tắn pha ánh hồng đầy rạng rỡ.",
    img: "https://kyo.vn/wp-content/uploads/2023/02/phan-ma-hong-mac-powde-blush-lisa-melba-phien-ban-gioi-han-3-768x768.jpg",
    quantity: 40,
    type: "facemakeup",
  },
  {
    id: 26,
    nameProduct: "Phấn Nước YSL Le Cushion Encre De",
    price: 890000,
    description:
      "là sự kết hợp hoàn hảo giữa tông màu đỏ tươi tắn pha ánh hồng đầy rạng rỡ.",
    img: "https://kyo.vn/wp-content/uploads/2022/09/phan-nuoc-ysl-le-cushion-encre-de-peau-luminous-matte-cushion-foundation-768x768.jpg",
    quantity: 40,
    type: "facemakeup",
  },
  {
    id: 27,
    nameProduct: "Phấn Má Hồng 3CE Mood Recipe Face",
    price: 890000,
    description:
      "là sự kết hợp hoàn hảo giữa tông màu đỏ tươi tắn pha ánh hồng đầy rạng rỡ.",
    img: "https://kyo.vn/wp-content/uploads/2022/04/3ce-mood-recipe-face-blusher-1-768x768.webp",
    quantity: 40,
    type: "facemakeup",
  },
  {
    id: 28,
    nameProduct: "Phấn nước KLAVUU Urban Pearlsation",
    price: 890000,
    description:
      "là sự kết hợp hoàn hảo giữa tông màu đỏ tươi tắn pha ánh hồng đầy rạng rỡ.",
    img: "https://kyo.vn/wp-content/uploads/2022/04/Phan-nuoc-KLAVUU-Urban-Pearlsation-High-Coverage-Tension-Cushion-Danh-cho-da-dau.jpeg",
    quantity: 40,
    type: "facemakeup",
  },
  {
    id: 29,
    nameProduct: "Kem Nền Make Up For Ever Watertone",
    price: 890000,
    description:
      "là sự kết hợp hoàn hảo giữa tông màu đỏ tươi tắn pha ánh hồng đầy rạng rỡ.",
    img: "https://kyo.vn/wp-content/uploads/2022/04/Kem-Nen-Make-Up-For-Ever-Watertone-Skin-Perfecting-Fresh-Foundation-40ml-768x768.jpeg",
    quantity: 40,
    type: "facemakeup",
  },
  {
    id: 30,
    nameProduct: "Phấn Má Hồng 3CE Mood Recipe Face",
    price: 890000,
    description:
      "là sự kết hợp hoàn hảo giữa tông màu đỏ tươi tắn pha ánh hồng đầy rạng rỡ.",
    img: "https://kyo.vn/wp-content/uploads/2022/04/phan-ma-hong-3ce-rose-beige-768x768.webp",
    quantity: 40,
    type: "facemakeup",
  },
  {
    id: 31,
    nameProduct: "Phấn nước KLAVUU Urban Pearlsation High",
    price: 890000,
    description:
      "là sự kết hợp hoàn hảo giữa tông màu đỏ tươi tắn pha ánh hồng đầy rạng rỡ.",
    img: "https://kyo.vn/wp-content/uploads/2022/04/Phan-nuoc-KLAVUU-Urban-Pearlsation-High-Coverage-Tension-Cushion-Danh-cho-da-dau.jpeg",
    quantity: 40,
    type: "facemakeup",
  },
  {
    id: 32,
    nameProduct: "Phấn Phủ MAC Studio Fix Powder Plus",
    price: 890000,
    description:
      "là sự kết hợp hoàn hảo giữa tông màu đỏ tươi tắn pha ánh hồng đầy rạng rỡ.",
    img: "https://kyo.vn/wp-content/uploads/2022/04/Phan-Phu-MAC-Studio-Fix-Powder-Plus-Foundation-768x768.jpeg",
    quantity: 40,
    type: "facemakeup",
  },
  {
    id: 33,
    nameProduct: "Mascara 2 đầu Browit By NongChat",
    price: 890000,
    description:
      "là sự kết hợp hoàn hảo giữa tông màu đỏ tươi tắn pha ánh hồng đầy rạng rỡ.",
    img: "https://kyo.vn/wp-content/uploads/2023/04/Mascara-2-dau-Browit-By-NongChat-Professional-Duo-Mascara-Sexy-Black-Cam-dd-768x768.jpg",
    quantity: 40,
    type: "eyemakeup",
  },
  {
    id: 34,
    nameProduct: "Phấn Mắt Clio Pro Eye Palette 12 Autumn",
    price: 890000,
    description:
      "là sự kết hợp hoàn hảo giữa tông màu đỏ tươi tắn pha ánh hồng đầy rạng rỡ.",
    img: "https://kyo.vn/wp-content/uploads/2022/09/phan-mat-clio-pro-eye-palette-12-autumn-768x768.jpg",
    quantity: 40,
    type: "eyemakeup",
  },
  {
    id: 35,
    nameProduct: "Bảng Phấn Mắt 9 Ô Black Rouge Colordation",
    price: 890000,
    description:
      "là sự kết hợp hoàn hảo giữa tông màu đỏ tươi tắn pha ánh hồng đầy rạng rỡ.",
    img: "https://kyo.vn/wp-content/uploads/2022/09/bang-phan-mat-9-o-black-rouge-colordation-mood-palette-mp02-rosydation-tone-hong.png",
    quantity: 40,
    type: "eyemakeup",
  },
  {
    id: 36,
    nameProduct: "Mascara Kiêm Dưỡng Mi Gold Collagen Volume",
    price: 890000,
    description:
      "là sự kết hợp hoàn hảo giữa tông màu đỏ tươi tắn pha ánh hồng đầy rạng rỡ.",
    img: "https://kyo.vn/wp-content/uploads/2022/04/Mascara-kiem-duong-mi-gold-collagen-volume-768x768.webp",
    quantity: 40,
    type: "eyemakeup",
  },
  {
    id: 37,
    nameProduct: "Mascara Dày Và Cong Mi Karadium On The Top",
    price: 890000,
    description:
      "là sự kết hợp hoàn hảo giữa tông màu đỏ tươi tắn pha ánh hồng đầy rạng rỡ.",
    img: "https://kyo.vn/wp-content/uploads/2022/04/Mascara-day-va-cong-mi-Karadium-on-th-top-fiber-13-768x768.png",
    quantity: 40,
    type: "eyemakeup",
  },
  {
    id: 38,
    nameProduct: "Kẻ Mắt Dạ Agapan Waterproof Eyeliner Blac",
    price: 890000,
    description:
      "là sự kết hợp hoàn hảo giữa tông màu đỏ tươi tắn pha ánh hồng đầy rạng rỡ.",
    img: "https://kyo.vn/wp-content/uploads/2022/04/1ke-mat-da-agapan-waterproof-eyeliner-black-768x768.png",
    quantity: 40,
    type: "eyemakeup",
  },
  {
    id: 39,
    nameProduct: "Kẹp Bấm Mi Shu Uemura Eyelash Curler",
    price: 890000,
    description:
      "là sự kết hợp hoàn hảo giữa tông màu đỏ tươi tắn pha ánh hồng đầy rạng rỡ.",
    img: "https://kyo.vn/wp-content/uploads/2022/03/kep-bam-mi-shu-uemura-eyelash-curler-3-768x768.jpg",
    quantity: 40,
    type: "eyemakeup",
  },
  {
    id: 40,
    nameProduct: "Bảng Phấn Mắt 4 ô 3CE Mini Multi Eye Color",
    price: 890000,
    description:
      "là sự kết hợp hoàn hảo giữa tông màu đỏ tươi tắn pha ánh hồng đầy rạng rỡ.",
    img: "https://kyo.vn/wp-content/uploads/2022/04/3ce-mini-eye-colour-palette-glittter-bomb-8.png",
    quantity: 40,
    type: "eyemakeup",
  },
  {
    id: 41,
    nameProduct: "Nước Tẩy Trang Cho Da Dầu La Roche-Posay",
    price: 890000,
    description:
      "là sự kết hợp hoàn hảo giữa tông màu đỏ tươi tắn pha ánh hồng đầy rạng rỡ.",
    img: "https://kyo.vn/wp-content/uploads/2023/06/Nuoc-Tay-Trang-Cho-Da-Dau-Mun-La-Roche-Posay-Effaclar-Micellar-Water-Ultra-Oily-Skin-dd.jpg",
    quantity: 40,
    type: "skincare",
  },
  {
    id: 42,
    nameProduct: "Nước Tẩy Trang Cho Da Nhạy Cảm La Roche-Posay",
    price: 890000,
    description:
      "là sự kết hợp hoàn hảo giữa tông màu đỏ tươi tắn pha ánh hồng đầy rạng rỡ.",
    img: "https://kyo.vn/wp-content/uploads/2023/05/Nuoc-Tay-Trang-Cho-Da-Nhay-Cam-La-Roche-Posay-Peaux-Sensibles-Eau-Micellaire-Ultra-Apaisante-400ml-dd.jpg",
    quantity: 40,
    type: "skincare",
  },
  {
    id: 43,
    nameProduct: "Nước Hoa Hồng SK-II Facial Treatment Clear",
    price: 890000,
    description:
      "là sự kết hợp hoàn hảo giữa tông màu đỏ tươi tắn pha ánh hồng đầy rạng rỡ.",
    img: "https://kyo.vn/wp-content/uploads/2022/10/SK-II-Facial-Treatment-Clear-Lotion-768x768.jpg",
    quantity: 40,
    type: "skincare",
  },
  {
    id: 44,
    nameProduct: "Son Ysl Slim 07 – Hồng Đất Thiên Hồng",
    price: 890000,
    description:
      "là sự kết hợp hoàn hảo giữa tông màu đỏ tươi tắn pha ánh hồng đầy rạng rỡ.",
    img: "https://kyo.vn/wp-content/uploads/2022/09/kem-tri-nam-Zo-Skin-Health-Pigment-Control-Creme-3-768x768.png",
    quantity: 40,
    type: "skincare",
  },
  {
    id: 45,
    nameProduct: "Sữa Rửa Mặt Dành Cho Mọi Loại Da ZO® Skin",
    price: 890000,
    description:
      "là sự kết hợp hoàn hảo giữa tông màu đỏ tươi tắn pha ánh hồng đầy rạng rỡ.",
    img: "https://kyo.vn/wp-content/uploads/2022/09/vSua-Rua-Mat-Danh-Cho-Moi-Loai-Da-ZO%C2%AE-Skin-Health-Gentle-Cleanser-All-Skin-Types-dd-768x768.jpg",
    quantity: 40,
    type: "skincare",
  },
  {
    id: 46,
    nameProduct: "Kem Phục Hồi Da ZO® Skin Health Daily Power",
    price: 890000,
    description:
      "là sự kết hợp hoàn hảo giữa tông màu đỏ tươi tắn pha ánh hồng đầy rạng rỡ.",
    img: "https://kyo.vn/wp-content/uploads/2022/09/kem-phu-hoi-da-Zo-Skin-Health-Daily-Power-Defense-768x768.jpg",
    quantity: 40,
    type: "skincare",
  },
  {
    id: 47,
    nameProduct: "Kem Phục Hồi Da ZO® Skin Health Daily Power",
    price: 890000,
    description:
      "là sự kết hợp hoàn hảo giữa tông màu đỏ tươi tắn pha ánh hồng đầy rạng rỡ.",
    img: "https://kyo.vn/wp-content/uploads/2022/09/tinh-chat-lam-trang-da-Zo-Skin-Health-10-Vitamin-C-Self-Activating-4-768x768.jpg",
    quantity: 40,
    type: "skincare",
  },
  {
    id: 48,
    nameProduct: "Sữa Rửa Mặt Dạng Gel CeraVe Foaming",
    price: 890000,
    description:
      "là sự kết hợp hoàn hảo giữa tông màu đỏ tươi tắn pha ánh hồng đầy rạng rỡ.",
    img: "https://kyo.vn/wp-content/uploads/2022/05/ceraVe-Foaming-Cleanser-For-normal-to-oily-skin-768x768.webp",
    quantity: 40,
    type: "skincare",
  },
];

// localStorage.setItem("products", JSON.stringify(products));
