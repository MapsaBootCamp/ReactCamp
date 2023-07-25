import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addByStep, decrement, increment } from "../redux/actions";
import { ThemeContext } from "../context";
import Button from "../components/Button";

export default function Counter({ children }) {
  const theme = useContext(ThemeContext);

  const [step, setStep] = useState(5);
  const count = useSelector((state) => state.handleCount);
  const dispatch = useDispatch();
  return (
    <>
      <div className="d-flex flex-column align-items-center mt-5">
        <div className="d-flex flex-row">
          <button
            className="btn btn-primary m-2 fs-2"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
          <span className="badge bg-secondary w-10 p-4 fs-2">{count}</span>
          <button
            className="btn btn-primary m-2 fs-2"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
        </div>
        <div className="d-flex flex-row align-items-center justify-content-around">
          <input
            type="text"
            className="w-25 h-25"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
          <Button
            value={"addByStep"}
            className="btn btn-secondary m-2 fs-4"
            onClick={() => dispatch(addByStep(step))}
            theme={theme}
          />
        </div>
        {children}
        {theme}
      </div>
    </>
  );
}
