import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
export default function StuApi() {
  const [Fac, setFac] = useState([]);
  useEffect(() => {
    fetch("https://650c2fcb47af3fd22f673c33.mockapi.io/Student")
      .then((res) => res.json())
      .then((res) => {
        console.warn(res);
        setFac(res);
      });
  }, []);

  const FacultyFormeted = Fac.map((fo) => {
    return (
      <>
        <div class="card m-3 p-4" style={{ width: "18rem" }}>
          <img src={fo.StuImg} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{fo.StuName}</h5>
            <p class="card-text">{fo.StuHobby}</p>
            <Link to={"/Student/" + fo.id} class="btn btn-primary">
              View
            </Link>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <table className="table  ">
        <tr>
          <td></td>
          <td>
            {" "}
            <div class="text mt-20 ">CRUD OPRATION</div>
          </td>
        </tr>
      </table>

      <table className="table mt-44">
        <tr>
          <td></td>

          <td className="">
            <Link to="/" className="ml-96 font-serif  text-5xl ">
              FACULTY
            </Link>
          </td>
          <td>
            <Link to="/Student" className="mr-20 text-5xl font-serif ">
              STUDENT
            </Link>
          </td>
          <td></td>
        </tr>
      </table>

      <div className="container-fluid  d-flex justify-content-center align-center flex-wrap">
        {FacultyFormeted}
      </div>
      <div className="text-center">
        <Link to={"/StuForm/0"} class="btn btn-primary">
          INSERT IN STUDENT
        </Link>
      </div>
    </>
  );
}
