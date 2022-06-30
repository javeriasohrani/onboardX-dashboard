import React, { useState } from "react";
import { Heading } from "../styles";
import {
  Box,
  ListItem,
  IconButton,
  ListItemAvatar,
  Avatar,
  Divider,
  ListItemText,
  Input,
} from "@mui/material";
import ControlCameraOutlinedIcon from "@mui/icons-material/ControlCameraOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AttachmentModal from "../modal/AttachmentModal";
import "../modal/index.css";
import { DropzoneArea } from "material-ui-dropzone";
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => createStyles({
  previewChip: {
    minWidth: 160,
    maxWidth: 210
  },
}));
export default function AttachmentList({
  key,
  data,
  handleSubmit,
  handleDelete,
}) {
  const [attach, setAttach] = useState(false);
  const open = () => {
    setAttach(true);
  };
  const close = () => {
    setAttach(false);
  };

  
const classes = useStyles();

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

          <DropzoneArea
            showPreviews={true}
            showPreviewsInDropzone={false}
            useChipsForPreview
            previewGridProps={{ container: { spacing: 1, direction: "row" } }}
            previewChipProps={{ classes: { root: classes.previewChip } }}
            previewText="Selected files"
          />
        </ListItem>
        <Divider color="#F4F5F7" />
      </Box>
      <AttachmentModal
        key={key}
        data={data}
        handleSubmit={handleSubmit}
        attach={attach}
        handleClose={close}
      />
    </Box>
  );
}
