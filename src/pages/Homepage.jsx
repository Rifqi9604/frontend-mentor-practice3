import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import dollar from "../assets/images/icon-dollar.svg";
import people from "../assets/images/icon-person.svg";

function Homepage() {
  const [billValue, setBillValue] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [customTip, setCustomTip] = useState("");
  const [tip, setTip] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [foodBillTotal, setFoodBillTotal] = useState(0);
  const [customTipClicked, setCustomTipClicked] = useState(false);
  const [submit, setIsSubmit] = useState(false);
  const [recount, setRecount] = useState(false);

  const handleRecount = () => {
    setRecount(!recount);
    handleSubmit();
    setIsSubmit(false);
  };

  const handleReset = () => {
    setBillValue("");
    setNumberOfPeople("");
    setTip(0);
    setTipAmount(0);
    setTotalAmount(0);
    setFoodBillTotal(0);
    setCustomTipClicked(false);
    setIsSubmit(false);
  };

  const handleTipClick = () => {
    setCustomTipClicked(!customTipClicked);
  };

  const handleBillChange = (value) => {
    if (!/^\d*\.?\d*$/.test(value)) {
      alert("Bill value must be a number.");
      return;
    }
    setBillValue(value);
  };

  const handlePeopleChange = (value) => {
    if (!/^\d*\.?\d*$/.test(value)) {
      alert("Number of People must be a number.");
      return;
    }
    setNumberOfPeople(value);
  };

  const handleTipChange = (value) => {
    if (!/^\d*\.?\d*$/.test(value)) {
      alert("Tip percentage must be a number.");
      return;
    }
    setTip(value);
    setCustomTipClicked(false);
  };

  const handleCustomTipChange = (value) => {
    if (!/^\d*\.?\d*$/.test(value)) {
      alert("Custom tip percentage must be a number.");
      return;
    }
    setCustomTip(value);
  };

  const handleSubmit = () => {
    if (!billValue || isNaN(parseFloat(billValue))) {
      alert("Bill value must be a valid number.");
      return;
    }

    if (!numberOfPeople || isNaN(parseFloat(numberOfPeople))) {
      alert("Number of People must be a valid number.");
      return;
    }

    setIsSubmit(true);
    let tipPercentage = tip; // Use predefined tip percentage by default

    // Check if custom tip is entered and valid
    if (customTipClicked && customTip >= 0 && !isNaN(parseFloat(customTip))) {
      tipPercentage = customTip; // Use custom tip percentage if available
    }

    const tipAmount = (billValue * (tipPercentage / 100)) / numberOfPeople;
    const totalAmount = billValue / numberOfPeople + tipAmount;
    const foodBillTotal = billValue / numberOfPeople;
    setFoodBillTotal(foodBillTotal.toFixed(2));
    setTipAmount(tipAmount.toFixed(2));
    setTotalAmount(totalAmount.toFixed(2));
  };

  return (
    <div className="h-screen overflow-visible relative md:mb-0 md:min-h-full">
      <div className="flex flex-col h-[40%] bg-[#B4E3E8] justify-center items-center text-[#2E7578] font-bold text-[28px] mix-blend-overlay pb-10 md:h-screen md:pb-0 md:pt-6 md:justify-start ">
        <p>S P L I</p>
        <p>T T E R</p>
      </div>
      <div className="md:flex justify-center items-center w-[100%]">
        <div className="min-h-screen p-6 bg-white absolute w-full top-52 z-10 rounded-t-[28px] flex flex-col gap-8 md:mt-24 md:w-[70%] md:min-h-[50%] md:flex-row md:top-6 md:justify-center md:items-center md:rounded-[28px]">
          <div className="md:w-[50%] flex flex-col gap-4">
            <div>
              <Input
                label="Bill"
                placeholder="0"
                icon={dollar}
                value={billValue}
                onChange={handleBillChange}
              />
            </div>

            <div className="flex flex-col gap-4 w-full text-[#2E7578] font-semibold flex-wrap">
              <p>Select Tip %</p>
              <div className="grid grid-cols-2 gap-4">
                <Button
                  text="5%"
                  width={50}
                  style="bg-[#2E7578] text-white"
                  value={5}
                  onClick={() => handleTipChange(5)}
                />
                <Button
                  text="10%"
                  width={50}
                  style="bg-[#2E7578] text-white"
                  value={10}
                  onClick={() => handleTipChange(10)}
                />
                <Button
                  text="15%"
                  width={50}
                  style="bg-[#2E7578] text-white"
                  value={15}
                  onClick={() => handleTipChange(15)}
                />
                <Button
                  text="25%"
                  width={50}
                  style="bg-[#2E7578] text-white"
                  value={25}
                  onClick={() => handleTipChange(25)}
                />
                <Button
                  text="50%"
                  width={50}
                  style="bg-[#2E7578] text-white"
                  value={50}
                  onClick={() => handleTipChange(50)}
                />
                <Button
                  text="Custom"
                  width={50}
                  style="bg-[#2E7578] text-white"
                  onClick={handleTipClick}
                />
              </div>
            </div>

            <div className={customTipClicked ? "block" : "hidden"}>
              <Input
                label="Tip Percentage (Custom)"
                placeholder="0"
                icon={people}
                value={customTip}
                onChange={handleCustomTipChange}
              />
            </div>

            <div>
              <Input
                label="Number of People"
                placeholder="0"
                icon={people}
                value={numberOfPeople}
                onChange={handlePeopleChange}
              />
            </div>
          </div>

          <div className="w-full min-h-[300px] bg-[#002F36] rounded-lg px-6 py-8 flex flex-col justify-between gap-10 md:max-w-[50%]">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[#FFFFFF] font-semibold text-[20px]">
                  Tip Amount
                </p>
                <p className="text-slate-400 font-bold text-[14px]">/ person</p>
              </div>
              <div className="text-[#F2FAFC] font-bold text-[32px]">
                ${tipAmount}
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-[#FFFFFF] font-semibold text-[20px]">
                  Food Bill
                </p>
                <p className="text-slate-400 font-bold text-[14px]">/ person</p>
              </div>
              <div className="text-[#F2FAFC] font-bold text-[32px]">
                ${foodBillTotal}
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-[#FFFFFF] font-semibold text-[20px]">
                  Total
                </p>
                <p className="text-slate-400 font-bold text-[14px]">/ person</p>
              </div>
              <div className="text-[#F2FAFC] font-bold text-[32px]">
                ${totalAmount}
              </div>
            </div>
            <div>
              <div>
                {submit ? (
                  <div className="flex flex-col gap-4">
                    <Button
                      text="Reset"
                      bgColor="F2FAFC"
                      textColor="2E7578"
                      onClick={handleReset}
                    />
                    <Button
                      text="Re-Count"
                      bgColor="F2FAFC"
                      textColor="2E7578"
                      onClick={handleRecount}
                    />
                  </div>
                ) : (
                  <Button text="Count" onClick={handleSubmit} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
