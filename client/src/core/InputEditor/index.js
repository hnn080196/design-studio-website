import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import PropTypes from "prop-types";

/*
 * Simple editor component that takes placeholder text as a prop
 */

const InputEditorHook = (props) => {
  const { onChange, defaultValue = "", name, placeholder, readOnly = false, label, required = false } = props;
  const [value, setValue] = useState({
    editorHtml: ""
  });

  const handleChange = (html) => {
    setValue({ editorHtml: html });
    onChange(name, html);
  };

  useEffect(() => {
    setValue({ editorHtml: defaultValue });
  }, [defaultValue]);

  return (
    <div style={{ marginBottom: "15px" }}>
      <h5
        style={{
          fontWeight: 600,
          lineHeight: "24px",
          fontSize: "18px",
          color: "#a4a4a4"
        }}
      >
        {label}
        {required && <span style={{ color: "#d32f2f", marginLeft: "10px" }}>*</span>}{" "}
      </h5>

      <ReactQuill
        readOnly={readOnly}
        theme="snow"
        // onChange={handleChange}
        onChange={(newValue, delta, source) => {
          if (source === "user") {
            if (newValue === `<p><br></p>`) {
              setValue({ editorHtml: "" });
              onChange(name, "");
              return;
            }
            setValue({ editorHtml: newValue });
            onChange(name, newValue);
          }
        }}
        value={value.editorHtml}
        modules={InputEditorHook.modules}
        formats={InputEditorHook.formats}
        bounds={".app"}
        placeholder={placeholder}
      />
    </div>
  );
};

/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
InputEditorHook.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
    ["link", "image", "video"],
    ["clean"]
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false
  }
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
InputEditorHook.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video"
];

/*
 * PropType validation
 */
InputEditorHook.propTypes = {
  placeholder: PropTypes.string
};

export default InputEditorHook;
