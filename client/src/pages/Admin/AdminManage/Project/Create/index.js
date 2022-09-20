import { Box, Button, Paper, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import ImportImage from "core/ImportImage";
import { TOKEN } from "config/config";

import React, { useState } from "react";
const actionRequest = {
  UPLOAD: 0,
  CREATE: 1
};
const CreateProject = (props) => {
  const [action, setAction] = useState(actionRequest.UPLOAD);
  const [data, setData] = useState({
    title: "",
    subTitle: "",
    content: "",
    type: 0
  });
  const handleOnChange = (name, value) => {
    setData((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = async () => {
    axios
      .post("/admin/upload", {
        headers: {
          token: localStorage.getItem(TOKEN)
        }
      })
      .then(reus);
  };
  return (
    <Paper sx={{ width: " 900px", margin: "0 auto" }}>
      <Box p={3}>
        <Typography variant="h4" gutterBottom align="center">
          Tạo mới project
        </Typography>
        <Stack direction={"column"} gap={3}>
          <TextField
            fullWidth
            required
            id="title"
            label="Title"
            placeholder="Please fill project name"
            onChange={(event) => handleOnChange("title", event.target.value)}
          />

          <TextField
            fullWidth
            required
            id="subTitle"
            label="Sub Title"
            placeholder="Please fill project subTitle"
            onChange={(event) => handleOnChange("subTitle", event.target.value)}
          />

          <TextField
            fullWidth
            required
            id="content"
            label="Description"
            multiline
            rows={4}
            onChange={(event) => handleOnChange("content", event.target.value)}
            placeholder="Please fill project Description"
          />
          <ImportImage name="images" max={10} onChange={() => {}} />
          <Box display={"flex"} justifyContent="flex-end">
            <Button variant="contained">Create</Button>
          </Box>
        </Stack>
      </Box>
    </Paper>
  );
};

export default CreateProject;
