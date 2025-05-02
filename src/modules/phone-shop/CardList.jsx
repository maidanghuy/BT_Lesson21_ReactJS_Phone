import { CardItem } from "./CardItem";

export function CardList(props) {
  console.log(props);
  return (
    <>
      <div className="flex justify-around">
        {props.mangSanPham.map((phone) => {
          return (
            <CardItem
              key={phone.maSP}
              image={phone.hinhAnh}
              name={phone.tenSP}
              onClickDetail={() => {
                props.setPhoneDetail(phone);
              }}
              onClickAddToCart={() => {
                props.handleAddToCart(phone);
              }}
            />
          );
        })}
      </div>
    </>
  );
}
