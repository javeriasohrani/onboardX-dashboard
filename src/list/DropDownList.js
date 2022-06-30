import React, { useState } from "react";
import { Heading, Description } from "../styles";
import {
  ListItem,
  IconButton,
  ListItemAvatar,
  Avatar,
  Divider,
  ListItemText,
  FormControl,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import ControlCameraOutlinedIcon from "@mui/icons-material/ControlCameraOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import DropDownModal from "../modal/DropDownModal";
import InputLabel from "@material-ui/core/InputLabel";
import "../modal/index.css";

export default function DropDownList({
  key,
  data,
  handleSubmit,
  handleDelete,
}) {
  const [dropdown, setDropDown] = useState(false);
  const open = () => {
    setDropDown(true);
  };
  const close = () => {
    setDropDown(false);
  };

  const [typed, setTyped] = useState(0);

  const handleChange = (event, index) => {
    setTyped(event.target.value);
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
          <Box sx={{ display: "flex", flexDirection: "column", flex: "1" }}>
            <InputLabel htmlFor="age-native-simple">
              {data.fieldname}
            </InputLabel>
            <Select
              fullWidth
              native
              variant="standard"
              value={data.options}
              onChange={handleChange}
              inputProps={{
                name: "age",
                id: "age-native-simple",
              }}
            >
              {data.options.map((item) => (
                <option value={item.data}>{item.data}</option>
              ))}
            </Select>
          </Box>
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
      <DropDownModal
        key={key}
        data={data}
        handleSubmit={handleSubmit}
        dropdown={dropdown}
        handleClose={close}
      />
    </Box>
  );
}
