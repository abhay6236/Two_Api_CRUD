import { json, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function StuForm() {
  const param = useParams();
  const navigate = useNavigate();
  const [Fac, setFac] = useState({});
  useEffect(() => {
    if (param.id > 0) {
      fetch("https://650c2fcb47af3fd22f673c33.mockapi.io/Student/" + param.id)
        .then((res) => res.json())
        .then((res) => setFac(res));
    }
  }, [param.id]);

  return (
    <table>
      <tr>
        <td>StudentName</td>
        <td>:</td>
        <td>
          <input
            type="text"
            value={Fac.StuName}
            onChange={(e) => {
              setFac({ ...Fac, StuName: e.target.value });
            }}
          />
        </td>
      </tr>

      <tr>
        <td>StudentHobby</td>
        <td>:</td>
        <td>
          <input
            type="text"
            value={Fac.StuHobby}
            onChange={(e) => {
              setFac({ ...Fac, StuHobby: e.target.value });
            }}
          />
        </td>
      </tr>

      <tr>
        <td>StudentImg</td>
        <td>:</td>
        <td>
          <input
            type="text"
            value={Fac.StuImg}
            onChange={(e) => {
              setFac({ ...Fac, StuImg: e.target.value });
            }}
          />
        </td>
      </tr>

      {/* <tr>
        <td>FacultyId</td>
        <td>:</td>
        <td>
        <input type="text"
          value ={Fac.id}
          onChange={(e)=>{
            setFac({...Fac , id : e.target.value})
          }} />
        </td>
      </tr> */}
      <tr>
        <br />
        <br />
        <td>
          <button
            onClick={(e) => {
              if (param.id > 0) {
                fetch(
                  "https://650c2fcb47af3fd22f673c33.mockapi.io/Student/" +
                    param.id,
                  {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(Fac)
                  }
                ).then((res) => navigate("/"));
              } else {
                fetch("https://650c2fcb47af3fd22f673c33.mockapi.io/Student", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(Fac)
                }).then((res) => navigate("/"));
              }
            }}
          >
            Save
          </button>
        </td>
      </tr>
    </table>
  );
}
