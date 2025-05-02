export function CustomButton(props) {
  return (
    <button
      className={`px-4 py-3 rounded-[6px] cursor-pointer ${props.style}`}
      onClick={props.onClickDetail}
    >
      {props.label}
    </button>
  );
}
