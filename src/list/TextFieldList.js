import React, { useState } from "react";
import { Heading, Description } from "../styles";
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
import TextFieldModal from "../modal/TextFieldModal";
import "../modal/index.css";

export default function TextFieldList({
  key,
  data,
  handleSubmit,
  handleDelete,
}) {
  const [textfield, setTextfield] = useState(false);
  const open = () => {
    setTextfield(true);
  };
  const close = () => {
    setTextfield(false);
  };

  return (
    <Box>
      <Box onClick={open} className="hh">
        <ListItem>
          <ListItemAvatar sx={{ p: "10px" }}>
            <Avatar sx={{ bgcolor: "transparent" }}>
              <ControlCameraOutlinedIcon sx={{ color: "#BAB2D1" }} />
            </Avatar>
          </ListItemAvatar>

          <ListItem>
            <TextField fullWidth variant="standard" {...data} />
          </ListItem>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => handleDelete(data.id)}
            sx={{ mr: "20px" }}
          >
            <DeleteOutlinedIcon sx={{ color: "#FF3E3E" }} />
          </IconButton>
        </ListItem>
        <Divider color="#F4F5F7" />
      </Box>
      <TextFieldModal
        key={key}
        data={data}
        handleSubmit={handleSubmit}
        textfield={textfield}
        handleClose={close}
      />
    </Box>
  );
}
