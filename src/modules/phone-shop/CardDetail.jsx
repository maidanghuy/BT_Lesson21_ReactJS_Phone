/**
 * props
 * - name
 * - image
 * - screen
 * - os
 * - frontCamera
 * - backCamera
 * - ram
 * - rom
 */

export function CardDetail(props) {
  return (
    <>
      <div className="grid grid-cols-[1fr_2fr]">
        <div className="left">
          <h2 className="font-bold text-[2rem]">{props.name} </h2>
          <img className="m-auto object-cover" src={props.image} alt="" />
        </div>
        <div className="right">
          <h2 className="font-bold text-[2rem] text-left">Thong so ky thuat</h2>
          <div className="grid grid-cols-[1fr_1fr] border-t border-solid border-gray-500 p-[1rem] ">
            <p>Man hinh</p>
            <p>{props.screen}</p>
          </div>
          <div className="grid grid-cols-[1fr_1fr] border-t border-solid border-gray-500 p-[1rem]">
            <p>He dieu hanh</p>
            <p>{props.os}</p>
          </div>
          <div className="grid grid-cols-[1fr_1fr] border-t border-solid border-gray-500 p-[1rem]">
            <p>Cam truoc</p>
            <p>{props.frontCamera}</p>
          </div>
          <div className="grid grid-cols-[1fr_1fr] border-t border-solid border-gray-500 p-[1rem]">
            <p>Cam sau</p>
            <p>{props.backCamera}</p>
          </div>
          <div className="grid grid-cols-[1fr_1fr] border-t border-solid border-gray-500 p-[1rem]">
            <p>Ram</p>
            <p>{props.ram}</p>
          </div>
          <div className="grid grid-cols-[1fr_1fr] border-t border-solid border-gray-500 p-[1rem]">
            <p>Rom</p>
            <p>{props.rom}</p>
          </div>
        </div>
      </div>
    </>
  );
}
