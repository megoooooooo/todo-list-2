"use client";
// {icon-import}
import CheckIcon from "@mui/icons-material/Check";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import * as React from "react";
// {iconimport}
import { useContext } from "react";
import "./stay.css";
import { DispatContext } from "./reduceContext";
export default function Text({ todo, delw, ediw }) {
  // const { todos, setTodos } = useContext(TodosContext);
  const { todoss, dispatch } = useContext(DispatContext);
  function ediw2() {
    ediw(todo);
  }

  function delw2() {
    delw(todo);
  }

  // {check function}
  function c() {
    dispatch({ type: "complete", payload: todo });
    // const ch = todos.map((t) => {
    //   if (t.id == todo.id) {
    //       t.isCompleted =!t.isCompleted;
    //   }return t;
    // });
    // setTodos (ch);
    // localStorage.setItem("todos", JSON.stringify(ch));
  }

  // {check function}

  return (
    <>
      {/* {text-area} */}
      <div
        className="text"
        style={{
          color: "white",
          backgroundColor: "#0c2ec2",
          display: "flex",
          justifyContent: "space-between",
          width: "96%",
          margin: "10px",
          borderRadius: "6px",
          alignItems: "center",
          padding: "10px",
        }}
      >
        {/* {text}   */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h3>{todo.title}</h3>
          <h4>{todo.discription}</h4>
        </div>

        {/* {text}   */}

        {/* {icons} */}
        <div style={{ display: "flex", gap: "5px" }}>
          <IconButton
            onClick={() => {
              c();
            }}
            className={"check"}
            style={{
              color: todo.isCompleted ? "white" : "green",
              backgroundColor: todo.isCompleted ? "green" : "white",
              border: "solid",
            }}
            aria-label="delete"
          >
            <CheckIcon />
          </IconButton>

          <IconButton
            onClick={() => {
              ediw2();
            }}
            className="edit"
            style={{
              color: "orange",
              backgroundColor: "white",
              border: "solid",
            }}
            aria-label="delete"
          >
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              delw2();
            }}
            className="delete"
            style={{ color: "red", backgroundColor: "white", border: "solid" }}
            aria-label="delete"
          >
            <DeleteOutlineIcon />
          </IconButton>
        </div>
        {/* {icons} */}
      </div>
      {/* {text-area} */}
    </>
  );
}
