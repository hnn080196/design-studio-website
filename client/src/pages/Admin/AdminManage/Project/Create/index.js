import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import axios from "axios";
import ImportImage from "core/ImportImage";
import { TOKEN } from "config/config";

import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Enums from "config/enums";
import InputEditorHook from "core/InputEditor";
const actionRequest = {
  UPLOAD: 0,
  CREATE: 1
};
const CreateProject = (props) => {
  const [action, setAction] = useState(actionRequest.UPLOAD);
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const [data, setData] = useState({
    title: "",
    subTitle: "",
    content: "",
    type: 0,
    status: 1,
    images: ""
  });

  const createProject = async (imageList) => {
    data.images = JSON.stringify(imageList);
    const result = await axios.post("/api/admin/project", data, {
      headers: {
        token: localStorage.getItem(TOKEN)
      }
    });
    if (result.status === 200) {
      Swal.fire("Create Project Success!", "You clicked the button!", "success").then((result) => {
        navigate("/admin/project");
      });
    }
  };
  const uploadImages = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
    const result = await axios.post("/api/admin/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        token: localStorage.getItem(TOKEN)
      }
    });
    if (result.status === 200) {
      return result.data.data;
    }
  };
  const handleSubmit = async () => {
    const imageList = await Promise.all(images.map((item) => uploadImages(item.file)));
    createProject(imageList);
  };
  const handleOnChange = (name, value) => {
    setData((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleUploadImage = (name, value) => {
    try {
      setImages(value);
    } catch (e) {}
  };
  const handleSelectChange = (name, value) => {
    setData((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <Paper sx={{ width: " 900px", margin: "0 auto" }}>
      <Box p={3}>
        <Typography variant="h4" gutterBottom align="center">
          T???o m???i project
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
            multiline
            rows={4}
            placeholder="Please fill project subTitle"
            onChange={(event) => handleOnChange("subTitle", event.target.value)}
          />
          <InputEditorHook
            label="N???i dung"
            required={true}
            // className="input-default"
            id="content"
            name="content"
            onChange={handleOnChange}
          />

          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={data.type}
              label="Type"
              onChange={(event) => handleSelectChange("type", event.target.value)}
            >
              {Object.values(Enums.TYPE).map((item, index) => (
                <MenuItem key={index} value={item}>
                  {Enums.TYPE_PARSE[item]}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <ImportImage name="images" max={200} onChange={handleUploadImage} />
          <Box display={"flex"} justifyContent="flex-end">
            <Button
              variant="contained"
              onClick={(e) => {
                handleSubmit();
              }}
            >
              Create
            </Button>
          </Box>
        </Stack>
      </Box>
    </Paper>
  );
};

export default CreateProject;
