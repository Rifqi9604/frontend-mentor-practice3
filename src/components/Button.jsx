import PropTypes from "prop-types";


function Button(props) {
    const { text, width, bgColor, textColor, value, onClick } = props
  return (
    <div className={`bg-[#${bgColor}] w-[${width}%] flex justify-center items-center py-2 text-[${textColor}] font-bold text-[28px] rounded-lg`}>
        <button value={value} onClick={onClick}>{text}</button>
    </div>
  )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    bgColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    value: PropTypes.number,
    onClick: PropTypes.func
  };

  Button.defaultProps = {
    bgColor: "2E7578",
    textColor: "#FFFFFF"
  }
export default Button