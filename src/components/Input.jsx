
import PropTypes from "prop-types";

function Input(props) {
  const { label, placeholder, value, icon, onChange } = props;

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="" className="text-[#2E7578] font-semibold text-[16px]">{label}</label>
      <div className="relative flex">
        {icon && (
          <img
            src={icon}
            alt="Icon"
            className="absolute left-3 top-1/2 transform -translate-y-1/2"
          />
        )}
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          className="pl-4 pr-4 py-3 bg-[#F2FAFC] rounded-lg w-full font-bold text-[24px] text-right text-[#2E7578]"
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string, // Icon prop as a string representing the image URL
  onChange: PropTypes.func.isRequired, // onChange handler function
};

export default Input;
