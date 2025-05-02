import { useState } from "react";
import { CustomButton } from "./CustomButton";

/**
 * props
 * - data
 */
export function Cart(props) {
  const [open, setOpen] = useState(false);

  const handleOpenCart = () => {
    setOpen(true);
  };

  const handleCloseCart = () => {
    setOpen(false);
  };

  const handleIncrementQuantity = (id) => {
    // console.log("test:::", id);
    const cloneArray = [...props.data];
    const findItem = cloneArray.find((phone) => {
      return phone.maSP === id;
    });

    findItem.soLuong += 1;

    props.setCarts(cloneArray);
  };

  const handleDecrementQuantity = (id) => {
    // console.log("test:::", id);
    //deep clone
    //salow clone
    const cloneArray = [...props.data];
    const index = cloneArray.findIndex((phone) => phone.maSP === id);

    if (index !== -1) {
      if (cloneArray[index].soLuong > 1) {
        cloneArray[index].soLuong -= 1;
      } else {
        // Xoá sản phẩm nếu số lượng <= 1
        cloneArray.splice(index, 1);
      }

      props.setCarts(cloneArray);
    }
  };
  return (
    <>
      <CustomButton
        onClickDetail={handleOpenCart}
        label={`Giỏ hàng (${props.data.reduce(
          (sum, item) => sum + item.soLuong,
          0
        )})`}
        style="bg-white-600 text-black"
      />
      {open && (
        <div className="w-[90vw] max-w-5xl h-[80vh] overflow-y-auto border rounded-2xl shadow-xl fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6">
          {/* Nút đóng */}
          <button
            onClick={handleCloseCart}
            className="absolute top-4 right-4 text-xl font-bold text-gray-500 hover:text-red-500 transition"
          >
            ✕
          </button>

          <table className="w-full table-auto border-collapse mt-4">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="p-3 border">Mã sản phẩm</th>
                <th className="p-3 border">Hình ảnh</th>
                <th className="p-3 border">Tên sản phẩm</th>
                <th className="p-3 border">Số lượng</th>
                <th className="p-3 border">Đơn giá</th>
                <th className="p-3 border">Thành tiền</th>
              </tr>
            </thead>
            <tbody>
              {props.data.map((phone) => (
                <tr
                  key={phone.maSP}
                  className="text-center hover:bg-gray-50 transition"
                >
                  <td className="p-3 border">{phone.maSP}</td>
                  <td className="p-3 border">
                    <img
                      src={phone.hinhAnh}
                      className="w-[50px] h-[50px] object-cover rounded"
                      alt={phone.tenSP}
                    />
                  </td>
                  <td className="p-3 border">{phone.tenSP}</td>
                  <td className="p-3 border">
                    <div className="flex gap-2 items-center justify-center">
                      <button
                        onClick={() => {
                          handleDecrementQuantity(phone.maSP);
                        }}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        -
                      </button>
                      <p className="px-3 py-1 border rounded">
                        {phone.soLuong}
                      </p>
                      <button
                        onClick={() => {
                          handleIncrementQuantity(phone.maSP);
                        }}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="p-3 border">
                    {phone.giaBan.toLocaleString()}đ
                  </td>
                  <td className="p-3 border">
                    {(phone.soLuong * phone.giaBan).toLocaleString()}đ
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
