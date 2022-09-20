import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { TOKEN } from "config/config";
import { Button } from "@mui/material";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
];
const ProjectList = (props) => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/admin/project", {
        headers: {
          token: localStorage.getItem(TOKEN)
        }
      })
      .then(({ data }) => {
        setList(data.data);
      });
  }, []);

  const getListProject = () => {
    axios
      .get("/admin/project", {
        headers: {
          token: localStorage.getItem(TOKEN)
        }
      })
      .then(({ data }) => {
        setList(data.data);
      });
  };
  const handleDeleteProject = (name, id) => {
    Swal.fire({
      title: `Are you sure delete project ${name}?`,
      text: "You won't be able to revert this!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete("/admin/project", {
            headers: {
              token: localStorage.getItem(TOKEN)
            },
            data: { id: id }
          })
          .then((result) => {
            getListProject();
          });
      }
    });
  };
  const handleRedirectUpdate = (row) => {
    navigate(`/admin/project/update/${row.id}`, { state: row });
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="center">Type</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((row) => (
            <TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left">{row.title}</TableCell>
              <TableCell align="left">{row.name ? row.name : "-"}</TableCell>

              <TableCell align="center">{row.type}</TableCell>
              <TableCell align="center">
                <Button
                  size="small"
                  variant="outlined"
                  sx={{ marginRight: "5px" }}
                  onClick={(e) => {
                    handleRedirectUpdate(row);
                  }}
                >
                  Edit
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  color="error"
                  onClick={(e) => handleDeleteProject(row.title, row.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProjectList;
