import React, { useState } from "react";
import {
  Modal,
  Box,
  IconButton,
  Select,
  MenuItem,
  FormControlLabel,
  Button,
  Switch,
  TextField,
} from "@mui/material";
import { Heading, style } from "../styles";
import CloseIcon from "@mui/icons-material/Close";

export default function AttachmentModal({
  key,
  data,
  handleSubmit,
  attach,
  handleClose,
}) {
  const [old, setOld] = useState(data);
  const [selectedFile, setSelectedFile] = useState();
  const [attachselect, setAttachSelect] = useState(60);
  const handleAttachSelect = (event) => {
    setAttachSelect(event.target.value);
  };

  const changeAttachHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    setOld({
      ...old,
      name: e.target.files[0].name,
      attachment: e.target.files[0],
    });
  };

  let [isRequired, setIsRequired] = useState(false);

  const requireHandler = (event) => {
    setIsRequired(!isRequired);
    setOld({ ...old, [event.target.name]: event.target.checked });
  };

  return (
    <Modal open={attach} onClose={handleClose}>
      <Box sx={style}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "#000000",
          }}
        >
          <CloseIcon />
        </IconButton>
        <Heading>Field Name</Heading>
        <TextField
          hiddenLabel
          name="number"
          onChange={handleAttachSelect}
          placeholder="Enter Field Name"
          id="margin-normal"
          margin="normal"
        />
        <Heading>Placeholder</Heading>
        <TextField
          hiddenLabel
          name="number"
          onChange={handleAttachSelect}
          placeholder="Upload your Attachment"
          id="margin-normal"
          margin="normal"
        />
        {/* <input type="file" name="file" onChange={changeAttachHandler} /> */}
        <Heading sx={{ marginBottom: "5px" }}>Field Type</Heading>
        <Select
          value={attachselect}
          onChange={handleAttachSelect}
          displayEmpty
          sx={{ width: "100%" }}
        >
          <MenuItem value={10}>
            <Heading>Text</Heading>
          </MenuItem>
          <MenuItem value={20}>
            <Heading>Text Field</Heading>
          </MenuItem>
          <MenuItem value={30}>
            <Heading>Drop Down</Heading>
          </MenuItem>
          <MenuItem value={40}>
            <Heading>Date</Heading>
          </MenuItem>
          <MenuItem value={50}>
            <Heading>Date and Time</Heading>
          </MenuItem>
          <MenuItem value={60}>
            <Heading>Attachment</Heading>
          </MenuItem>
          <MenuItem value={70}>
            <Heading>Number</Heading>
          </MenuItem>
          <MenuItem value={80}>
            <Heading>Image Video</Heading>
          </MenuItem>
        </Select>
        <Heading>
          <FormControlLabel
            value="start"
            control={
              <Switch
                checked={isRequired}
                onChange={requireHandler}
                name="required"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
            }
            label={<Heading>Required</Heading>}
            labelPlacement="start"
          />
        </Heading>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={() => handleSubmit(key, old)} variant="contained">
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
