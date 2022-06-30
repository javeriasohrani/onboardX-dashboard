import React, { useState } from "react";
import { Text } from "../styles";
import ListData from "./ListData";
import {
  Box,
  Typography,
  Divider,
  Button,
  Grid,
  TextField,
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import "../components/nav.css";
import { TextData } from "../App";
import { useContext } from "react";
import { TextDataContext } from "../context/TextDataContext";
import { createForm, updateForm } from "../Apis";
import { formData } from "../dummydata/Formdata";
import { useNavigate } from "react-router-dom";

export default function NewDrop({ data, setData, isUpdated, formRecord }) {
  
  const navigate = useNavigate();
  const [value, setValue] = React.useState("Controlled");
  const [formName, setFormName] = useState("");

  const { textDataFromModal, settextDataFromModal } =
    useContext(TextDataContext);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiFormLabel-root": {
        color: "#232F57",
        fontWeight: 700,
        fontSize: "15px",
      },
    },
  }));

  const classes = useStyles();

  const submitFormHandler = () => {
    console.log("Submit", data);
  };

  const createFormApi = async () => {
    let form = {
      form_id: 2,
      form_name: formName.name,
      form_fields: data,
      user_id: 265,
      // flow_name: "Onboarding Interns",
      flow_name: formName.description,
      created_by: "Javeria Baloch",
    };
    const res = await createForm(form);
  };

  const UpdateFormDataApi = async () => {
    let form = {
      form_id: formRecord.form_id,
      form_fields: data,
      // form_name: formName.name,
      // user_id: 265,
      // flow_name: formName.description,
      // created_by: "Javeria Baloch",
    };

    // update Form API
    const res = await updateForm(form);
    console.log("update res", res)
    res && navigate('/form')
  };

  return (
    <>
      <Box>
        <Grid container padding={2}>
          <Grid item sm={8} md={8} ml="50px">
            {/* <Typography sx={{ fontSize: '24px', fontWeight: '700', color: '#232F57' }}>
                            Add Title
                        </Typography> */}
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  id="name"
                  label="Add Title"
                  value={formData.name ?? formRecord.form_name}
                  onChange={(e) =>
                    setFormName((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }))
                  }
                  className={classes.root}
                />
              </div>
            </Box>
            <br />
            {/* <Typography sx={{ fontSize: '14px', fontWeight: '600', color: '#5D6C97' }}>
                            Add describtion
                        </Typography> */}
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  id="description"
                  label="Flow name"
                  // placeholder="333333"
                  multiline
                  className={classes.root}
                  value={formData.description ?? formRecord.flow_name}
                  onChange={(e) =>
                    setFormName((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }))
                  }
                />
              </div>
            </Box>
          </Grid>

          <Grid item sm={2} md={2} padding={2} ml="30px">
            {isUpdated ? (
              <Button onClick={UpdateFormDataApi} variant="contained">
                update
              </Button>
            ) : (
              <Button onClick={createFormApi} variant="contained">
                Save
              </Button>
            )}
          </Grid>
        </Grid>

        {/* <h1>{textDataFromModal}</h1> */}

        <Divider variant="middle" color="#F4F5F7" />
        <Box>
          {data.length === 0 ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "200px",
              }}
            >
              <Text>Place your Data here</Text>
            </div>
          ) : (
            <ListData data={data} setData={setData} />
          )}
        </Box>
      </Box>
    </>
  );
}
