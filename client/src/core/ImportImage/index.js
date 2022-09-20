import React, { useEffect, useState } from "react";
import "./styles.css";
import HelperService from "services/Helper";
import defaultImage from "assets/images/image.png";

const ImportImage = (props) => {
  const { name = "image", defaultValue, label, max = 4 } = props;
  const [images, setImages] = useState([]);
  useEffect(() => {
    if (!HelperService.isEmpty(defaultValue)) {
      setImages(defaultValue);
    }
  }, [defaultValue]);

  useEffect(() => {
    if (images.length > 0) {
    }
  }, [images]);

  useEffect(() => {
    const dropZone = document.getElementsByClassName("dropzone-wrapper")[0];
    dropZone.addEventListener("dragover", function (event) {
      this.classList.add("dragover");
    });
    dropZone.addEventListener("dragleave", function (event) {
      this.classList.remove("dragover");
    });
    return () => {
      dropZone.removeEventListener("dragover", function (event) {
        this.classList.remove("dragover");
      });
    };
  }, []);

  const handleInputFile = (event) => {
    const { files } = event.target;
    const arrLoop = Array.from(files);
    readFileAsync(arrLoop.splice(0, max - images.length));
  };
  const handleFile = (file, index) => {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.onload = function (event) {
        const { readyState, result } = event.target;

        switch (readyState) {
          case 0:
            reject(index);
            break;
          case 1:
            break;
          case 2:
            const fileResult = { file: file, link: result };
            resolve(fileResult);
            break;
          default:
            break;
        }
      };
      reader.readAsDataURL(file);
    });
  };
  const readFileAsync = async (files) => {
    return Promise.all(
      files.map(async (file, index) => {
        return await handleFile(file, index);
      })
    ).then((files) => {
      if (files.length == 0) return; //
      let newImages;
      newImages = [...files];

      if (max !== 1) {
        newImages = [...images, ...files];
      }

      props.onChange(name, newImages);
      setImages(newImages);
    });
  };

  const handleRemoveFile = (index) => {
    const newImages = [...images];

    newImages.splice(index, 1);
    props.onChange(name, newImages);
    setImages(newImages);
  };

  return (
    <div className="import__container">
      <p className="control-label">{label ? label : `Upload Image *`}</p>
      <div className="form-group">
        <div className="preview-zone" id="preview-zone">
          {images.map((image, index) => {
            return (
              <div className="box-images box-solid" key={index}>
                <div
                  className="box-body"
                  style={{
                    // backgroundImage: `url(${
                    //   "file" in image ? image.link : `${config.hostStaticResource}${image.link}`
                    // })`
                    backgroundImage: `url(${image.link})`
                  }}
                >
                  <div className="box-body__remove" onClick={() => handleRemoveFile(index)}>
                    ✕
                  </div>
                </div>
                {max == 1 ? <></> : <p>{`Hình ảnh ${index}`}</p>}
              </div>
            );
          })}
          {images.length == 0 && (
            <div className="preview-note">
              <img src={defaultImage} width={150} />
              <p className="preview-note__text">Choose an image file or drag it here.</p>
            </div>
          )}
        </div>
        <div className="dropzone-wrapper">
          <input type="file" name={name} multiple accept="image/*" className="dropzone" onChange={handleInputFile} />
        </div>
      </div>
    </div>
  );
};

export default ImportImage;
