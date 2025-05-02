import { useState } from "react";
import { CardDetail } from "./CardDetail";
import { CardItem } from "./CardItem";
import { CardList } from "./CardList";
import { Cart } from "./Cart";

const mangSanPham = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "/phone/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "/phone/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "/phone/applephone.jpg",
  },
];

export function PhoneShop() {
  const [phoneDetail, setPhoneDetail] = useState(mangSanPham[1]);
  const [carts, setCarts] = useState(() => {
    let carts = localStorage.getItem("carts");
    if (carts) {
      return JSON.parse(carts);
    } else {
      return [];
    }
  });

  const handleAddToCart = (phone) => {
    console.log("add cart:::", phone);
    let newCarts;

    let findItem = carts.find((item) => {
      return item.maSP == phone.maSP;
    });

    if (findItem) {
      const clonePhone = [...carts];
      const findItem = clonePhone.find((phoned) => {
        return phoned.maSP == phone.maSP;
      });

      findItem.soLuong += 1;
      // setCarts(clonePhone);
      newCarts = clonePhone;
      console.log("carts:::", clonePhone);
    } else {
      // setCarts([{ ...phone, soLuong: 1 }, ...carts]);
      newCarts = [{ ...phone, soLuong: 1 }, ...carts];
    }
    handleUpdateCart(newCarts);
  };

  const handleUpdateCart = (newCarts) => {
    localStorage.setItem("carts", JSON.stringify(newCarts));
    setCarts(newCarts);
  };
  return (
    <>
      <div className="container text-end mb-[3rem]">
        <Cart data={carts} setCarts={handleUpdateCart} />
      </div>
      <CardList
        handleAddToCart={handleAddToCart}
        setPhoneDetail={setPhoneDetail}
        mangSanPham={mangSanPham}
      />
      <CardDetail
        name={phoneDetail.tenSP}
        image={phoneDetail.hinhAnh}
        screen={phoneDetail.manHinh}
        os={phoneDetail.heDieuHanh}
        frontCamera={phoneDetail.cameraTruoc}
        backCamera={phoneDetail.cameraSau}
        ram={phoneDetail.ram}
        rom={phoneDetail.rom}
      />
    </>
  );
}
