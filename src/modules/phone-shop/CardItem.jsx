import { CustomButton } from "./CustomButton";

/**
 * props
 * - name
 * - image
 * - onClickDetail
 * - onClickAddToCart
 */
export function CardItem(props) {
  console.log(props);
  return (
    <>
      <div className="border border-solid border-black rounded-lg p-[0.5rem]">
        <img
          className="w-[200px] h-[200px] m-auto object-cover"
          src={props.image}
          alt=""
        />
        <h2 className="font-bold text-[2rem]">{props.name} </h2>
        <div className="flex gap-[1rem]">
          <CustomButton
            onClickDetail={props.onClickDetail}
            label="Xem chi tiết"
            style="bg-green-600 text-white"
          />
          <CustomButton
            onClickDetail={props.onClickAddToCart}
            label="Them vao gio hang"
            style="bg-red-600 text-white"
          />
        </div>
      </div>
    </>
  );
}
