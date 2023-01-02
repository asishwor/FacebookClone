import React from "react";

const Event = () => {
  return (
    <div>
      <div>
        {/*  birthday event */}
        <div className="birthDay text-[15px] pb-2 border-b-2 border-gray-300 mb-2 text-[var(--heading-font-color)] ">
          <h4 className="font-bold text-[var(--body-font-color)] text-sm mb-1 ">
            Birthday
          </h4>
          <p>
            <span className="font-bold ">Hari Gharti</span> and{" "}
            <span className="font-bold">Uttam Bhattarai </span> have birthdays
            today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Event;
