import PropTypes from "prop-types";

function Button(props) {
  const { text, width, bgColor, textColor, value, onClick } = props;

  return (
    <div
      className={`bg-[#${bgColor}] flex justify-center items-center py-2  w-[${width}%] rounded-lg cursor-pointer` }
    >
      <button
        className={`rounded-lg flex justify-center items-center font-bold text-[28px] text-[#${textColor}] w-full h-full`}
        value={value}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  value: PropTypes.number,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  bgColor:"2E7578", // Ubah warna latar belakang untuk semua tombol ke warna yang sama
  textColor:"FFFFFF"
}

export default Button;
