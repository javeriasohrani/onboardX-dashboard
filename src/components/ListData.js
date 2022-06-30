import React, { useState } from "react";
import {
  TextList,
  TextFieldList,
  DropDownList,
  DateList,
  TimeList,
  AttachmentList,
  NumberList,
  ImageList,
} from "../list";
// import { TextModal, TextFieldModal, DropDownModal, DateModal, TimeModal, AttachmentModal, NumberModal, ImageModal } from '../modal'
import { Box } from "@mui/material";

export default function NewListData({ data, setData }) {
  //delete from list
  const handleDelete = (id) => {
    const newdata = data.filter((d, Index) => id !== d.id);
    setData(newdata);
  };
  //Edit the list
  const handleSubmit = (key, old) => {
    // let filtered = data.filter((d, Index) => old.id !== d.id);
    let modified = data.map((d, Index) => (old.id === d.id ? old : d));
    // const newData = [...filtered, old];
    // newData[key] = old;
    setData(modified);
    // console.log("listdata", newData, key , old);
    // console.log("already", data);
    console.log("updated", modified);
  };
  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      {data.map((data, key) => {
        return (
          <Box>
            {data.type === "text" && (
              <TextList
                key={key}
                data={data}
                handleSubmit={handleSubmit}
                handleDelete={handleDelete}
              />
            )}
            {data.type === "textfield" && (
              <TextFieldList
                key={key}
                data={data}
                handleSubmit={handleSubmit}
                handleDelete={handleDelete}
              />
            )}
            {data.type === "dropdown" && (
              <DropDownList
                key={key}
                data={data}
                handleSubmit={handleSubmit}
                handleDelete={handleDelete}
              />
            )}
            {data.type === "date" && (
              <DateList
                key={key}
                data={data}
                handleSubmit={handleSubmit}
                handleDelete={handleDelete}
              />
            )}
            {data.type === "time" && (
              <TimeList
                key={key}
                data={data}
                handleSubmit={handleSubmit}
                handleDelete={handleDelete}
              />
            )}
            {data.type === "attachment" && (
              <AttachmentList
                key={key}
                data={data}
                handleSubmit={handleSubmit}
                handleDelete={handleDelete}
              />
            )}
            {data.type === "number" && (
              <NumberList
                key={key}
                data={data}
                handleSubmit={handleSubmit}
                handleDelete={handleDelete}
              />
            )}
            {data.type === "image" && (
              <ImageList
                key={key}
                data={data}
                handleSubmit={handleSubmit}
                handleDelete={handleDelete}
              />
            )}
          </Box>
        );
      })}
    </Box>
  );
}
