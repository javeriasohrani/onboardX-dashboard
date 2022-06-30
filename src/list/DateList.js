import React from "react";
import {
  Box,
  ListItem,
  IconButton,
  ListItemAvatar,
  Avatar,
  Divider,
  ListItemText,
  TextField,
} from "@mui/material";
import ControlCameraOutlinedIcon from "@mui/icons-material/ControlCameraOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import DateModal from "../modal/DateModal";
import { useState } from "react";
import { Heading, style } from "../styles";
import "../modal/index.css";

export default function DateList({ key, data, handleSubmit, handleDelete }) {
  const [date, setDate] = useState(false);
  const open = () => {
    setDate(!date);
  };
  const close = () => {
    setDate(false);
  };

  return (
    <>
      <Box onClick={open} className="hh">
        <Box>
          <ListItem
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDelete(data.id)}
                sx={{ mr: "20px" }}
              >
                <DeleteOutlinedIcon sx={{ color: "#FF3E3E" }} />
              </IconButton>
            }
          >
            <ListItemAvatar sx={{ p: "10px" }}>
              <Avatar sx={{ bgcolor: "transparent" }}>
                <ControlCameraOutlinedIcon sx={{ color: "#BAB2D1" }} />
              </Avatar>
            </ListItemAvatar>

            <TextField
              id="date"
              label={data.fieldname}
              type="date"
              defaultValue="2017-05-24"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </ListItem>
          <Divider color="#F4F5F7" />
        </Box>
        <DateModal
          key={key}
          data={data}
          handleSubmit={handleSubmit}
          date={date}
          handleClose={close}
        />
      </Box>
    </>
  );
}
