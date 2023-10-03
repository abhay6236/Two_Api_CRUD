import { json, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function FacForm() {
  const param = useParams();
  const navigate = useNavigate();
  const [Fac, setFac] = useState({});
  useEffect(() => {
    if (param.id > 0) {
      fetch("https://650c2fcb47af3fd22f673c33.mockapi.io/Faculty/" + param.id)
        .then((res) => res.json())
        .then((res) => setFac(res));
    } else {
      setFac({});
    }
  }, [param.id]);

  return (
    <table>
      <tr>
        <td>FacultyName</td>
        <td>:</td>
        <td>
          <input
            type="text"
            value={Fac.FacultyName}
            onChange={(e) => {
              setFac({ ...Fac, FacultyName: e.target.value });
            }}
          />
        </td>
      </tr>

      <tr>
        <td>FacultyExp</td>
        <td>:</td>
        <td>
          <input
            type="text"
            value={Fac.FacultyExp}
            onChange={(e) => {
              setFac({ ...Fac, FacultyExp: e.target.value });
            }}
          />
        </td>
      </tr>

      <tr>
        <td>FacultyImg</td>
        <td>:</td>
        <td>
          <input
            type="text"
            value={Fac.FacultyImg}
            onChange={(e) => {
              setFac({ ...Fac, FacultyImg: e.target.value });
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
                  "https://650c2fcb47af3fd22f673c33.mockapi.io/Faculty/" +
                    param.id,
                  {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(Fac)
                  }
                ).then((res) => navigate("/"));
              } else {
                fetch("https://650c2fcb47af3fd22f673c33.mockapi.io/Faculty", {
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
