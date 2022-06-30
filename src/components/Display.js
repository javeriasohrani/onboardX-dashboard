import React, { useEffect, useState } from "react";
import Options from "./Options";
import Drop from "./Drop";
import { stockData } from "./Data";
import { Item } from "../styles";
import { Typography, Box, Grid } from "@mui/material";
import { TextModalData } from "../modal/TextModal";
import axios from "axios";

export default function NewDisplay({ userID, formData }) {
  const [data, setData] = useState(formData?.form_fields?.form_fields ?? []);
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdated, setUpdated] = useState(!!formData?.form_id);

  useEffect(() => {
    userID && formDataById(userID);
  }, [userID]);

  const formDataById = async (id) => {
    setIsLoading(true);
    axios
      .get(
        `https://api-vx-onboarding.packagex.xyz/forms/getformbyemployeeid?employee_id=${id}`
      )
      .then((res) => {
        setData(res.data.body);
        setIsLoading(false);
      });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7} marginLeft={1.5}>
          <Box sx={{ backgroundColor: "#FFFFFF" }}>
            <Drop
              data={data}
              setData={setData}
              formRecord={formData ?? {}}
              isUpdated={isUpdated}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={4.6} marginLeft={1.5}>
          <Item>
            <Typography
              variant="h6"
              gutterBottom
              color="#232F57"
              align="center"
              fontWeight={700}
              fontSize={20}
              marginTop="15px"
            >
              ADD A FIELD
            </Typography>
            <Options data={data} setData={setData} />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
