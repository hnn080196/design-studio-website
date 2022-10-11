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

import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import Enums from "config/enums";
import InputEditorHook from "core/InputEditor";
const actionRequest = {
  UPLOAD: 0,
  CREATE: 1
};
const UpdateProject = (props) => {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();
  let location = useLocation();
  const { state } = location;
  const [data, setData] = useState({});

  useEffect(() => {
    data.id = state.id;
    data.subTitle = state.subTitle;
    data.title = state.title;
    data.type = state.type;
    data.status = state.status ? state.status : 1;
    data.content = state.content;

    setData(state);
  }, []);

  useEffect(() => {
    const arrImages = JSON.parse(state.images).map((item) => ({ link: item }));
    setImages(arrImages);
  }, []);
  const handleOnChange = (name, value) => {
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const updateProject = async (imageList) => {
    if (imageList.length !== 0) {
      const arrLink = imageList.map((item) => item.link);
      data.images = JSON.stringify(arrLink);
    }
    const result = await axios.put("/api/admin/project", data, {
      headers: {
        token: localStorage.getItem(TOKEN)
      }
    });
    if (result.status === 200) {
      Swal.fire("Update Success!!", "You clicked the button!", "success").then((result) => {
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
      return { link: result.data.data };
    }
  };

  const handleSubmit = async () => {
    let imageList = [];
    const notExistedImages = images.filter((image) => "file" in image);
    if (notExistedImages.length !== 0) {
      imageList = await Promise.all(notExistedImages.map((item) => uploadImages(item.file)));
    }
    const mergeImages = [...images.filter((image) => !("file" in image)), ...imageList];
    updateProject(mergeImages);
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
          Update project
        </Typography>
        <Stack direction={"column"} gap={3}>
          <TextField
            fullWidth
            required
            id="title"
            label="Title"
            // placeholder="Please fill project name"
            defaultValue={state.title}
            onChange={(event) => handleOnChange("title", event.target.value)}
          />

          <TextField
            fullWidth
            required
            id="subTitle"
            label="Sub Title"
            multiline
            rows={4}
            defaultValue={state.subTitle}
            // placeholder="Please fill project subTitle"
            onChange={(event) => handleOnChange("subTitle", event.target.value)}
          />
          <InputEditorHook
            label="Nội dung"
            required={true}
            // className="input-default"
            id="content"
            name="content"
            onChange={handleOnChange}
            defaultValue={state.content}
          />

          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              // value={state.type}
              defaultValue={state.type}
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
          <ImportImage defaultValue={images} name="images" max={10} onChange={handleUploadImage} />
          <Box display={"flex"} justifyContent="flex-end">
            <Button
              variant="contained"
              onClick={(e) => {
                handleSubmit();
              }}
            >
              Update
            </Button>
          </Box>
        </Stack>
      </Box>
    </Paper>
  );
};

export default UpdateProject;
