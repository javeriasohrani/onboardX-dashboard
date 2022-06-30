import React from "react";
import { Heading } from "../styles";
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
import "../modal/index.css";
import TimeModal from "../modal/TimeModal";
import { useState } from "react";
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'

export default function TimeList({ key, data, handleSubmit, handleDelete,textfield }) {
  const [value, setValue] = useState(new Date("2014-08-18T21:11:54"));
  const [time, setTime] = useState(false);
  const open = () => {
    setTime(true);
  };
  const close = () => {
    setTime(false);
  };

  return (
    <>
      <Box>
        <Box onClick={open} className="hh">
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

            {/* <ListItemText sx={{ display: 'flex', justifyContent: 'center', mr: '10%' }}
                    primary={<Heading>{data.datetime}</Heading>}
                /> */}
            <TextField
              id="time"
              label={data.fieldname}
              // type="time"
              type="datetime-local"
              defaultValue="09:30"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
              variant="standard"
            />
          </ListItem>
          <Divider color="#F4F5F7" />
        </Box>
        <TimeModal
          key={key}
          label={data.fieldname}
          data={data}
          handleSubmit={handleSubmit}
          time={time}
          textfield={textfield}
          handleClose={close}
        />
      </Box>
    </>
  );
}
