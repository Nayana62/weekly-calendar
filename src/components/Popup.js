import React, { useState } from "react";
import "./Popup.css";
import addIcon from "../icons/Add-icon.png";
import deleteIcon from "../icons/Delete.png";

function Popup({ onClose, onSubmit }) {
  const [title, setTitle] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [repeatOnDays, setRepeatOnDays] = useState([]);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [color, setColor] = useState("");
  const [isSelected, setIsSelected] = useState(false);

  const handleColorClick = (value) => {
    setColor(value);
    setIsSelected(true);
  };

  const handleRepeatOnDayClick = (day) => {
    if (repeatOnDays.includes(day)) {
      setRepeatOnDays(repeatOnDays.filter((d) => d !== day));
    } else {
      setRepeatOnDays([...repeatOnDays, day]);
    }
  };

  const handleButtonColor = (day) => {
    return repeatOnDays.includes(day) ? "#5364FF" : "";
  };

  const handleSubmit = () => {
    const newEvent = {
      title,
      startTime,
      endTime,
      repeatOnDays,
      fromDate,
      toDate,
      color,
    };

    onSubmit(newEvent);
  };

  const handleDelete = () => {
    setTitle("");
    setStartTime("");
    setEndTime("");
    setRepeatOnDays([]);
    setFromDate("");
    setToDate("");
    setColor("");
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Add Period</h2>
          <span className="close" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="modal-body">
          <div className="input-container">
            <label>Peroid name</label>
            <input
              type="text"
              value={title}
              placeholder="Enter Period Name"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="container">
            <div className="input-container">
              <label>Start Time</label>
              <input
                type="time"
                min="01:00"
                max="24:00"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label>End Time</label>
              <input
                type="time"
                min="01:00"
                max="24:00"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </div>
          </div>
          <div className="repeatOnDays">
            <label>Repeat On Days:</label>
            <div>
              {["S", "M", "T", "W", "Th", "F", "Sa"].map((day) => (
                <button
                  key={day}
                  className={repeatOnDays.includes(day) ? "selected" : ""}
                  style={{ backgroundColor: handleButtonColor(day) }}
                  onClick={() => handleRepeatOnDayClick(day)}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
          <div className="container">
            <div className="input-container">
              <label>From</label>
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label>To</label>
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
              />
            </div>
          </div>
          <div className="modal-footer">
            <div className="colors">
              <p
                value="#F8EBF1"
                className={`red color ${
                  color === "#F8EBF1" && isSelected ? "selected" : ""
                }`}
                onClick={() => handleColorClick("#F8EBF1")}
              >
                {color === "#F8EBF1" && isSelected ? "✓" : ""}
              </p>
              <p
                value="#E9E8FD"
                className={`blue color ${
                  color === "#E9E8FD" && isSelected ? "selected" : ""
                }`}
                onClick={() => handleColorClick("#E9E8FD")}
              >
                {color === "#E9E8FD" && isSelected ? "✓" : ""}
              </p>
              <p
                value="#FFFBDA"
                className={`yellow color ${
                  color === "#FFFBDA" && isSelected ? "selected" : ""
                }`}
                onClick={() => handleColorClick("#FFFBDA")}
              >
                {color === "#FFFBDA" && isSelected ? "✓" : ""}
              </p>
              <p
                value="#CFFFF1"
                className={`green color ${
                  color === "#CFFFF1" && isSelected ? "selected" : ""
                }`}
                onClick={() => handleColorClick("#CFFFF1")}
              >
                {color === "#CFFFF1" && isSelected ? "✓" : ""}
              </p>
            </div>
            <div className="button">
              <img
                className="delete-btn"
                src={deleteIcon}
                alt=""
                onClick={handleDelete}
              />
              <div className="add-btn" onClick={handleSubmit}>
                <img src={addIcon} alt="" />
                <button className="btn">Add Event</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
