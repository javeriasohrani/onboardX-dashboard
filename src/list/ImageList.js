import React, { useState } from "react";
import { Heading } from "../styles";
import { DropzoneArea } from "material-ui-dropzone";
import {
  Box,
  ListItem,
  IconButton,
  ListItemAvatar,
  Avatar,
  Divider,
  ListItemText,
  cardMedia,
} from "@mui/material";
import ControlCameraOutlinedIcon from "@mui/icons-material/ControlCameraOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ImageModal from "../modal/ImageModal";
import "../modal/index.css";

export default function ImageList({ key, data, handleSubmit, handleDelete }) {
  const [image, setImage] = useState(false);
  const open = () => {
    setImage(true);
  };
  const close = () => {
    setImage(false);
  };

  return (
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
                        primary={<Heading>{data.name}</Heading>}
                    /> */}
          <DropzoneArea
            acceptedFiles={["image/*"]}
            dropzoneText={"Drag and drop an image here or click"}
            onChange={(files) => console.log("Files:", files)}
          />
        </ListItem>
        <Divider color="#F4F5F7" />
      </Box>
      <ImageModal
        key={key}
        data={data}
        handleSubmit={handleSubmit}
        image={image}
        handleClose={close}
      />
    </Box>
  );
}
