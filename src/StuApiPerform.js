import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
export default function StuApiPerform() {
  const param = useParams();
  const [Fac, setFac] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://650c2fcb47af3fd22f673c33.mockapi.io/Student/" + param.id)
      .then((res) => res.json())
      .then((res) => setFac(res));
  }, []);
  return (
    <>
      <div class="card m-3 p-4" style={{ width: "18rem" }}>
        <img src={Fac.StuImg} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{Fac.StuName}</h5>
          <p class="card-text">{Fac.StuHobby}</p>
        </div>
      </div>
      <Link to="/Student" class="btn btn-primary">
        Go to Home
      </Link>
      <Link to={"/StuForm/" + Fac.id} class="btn btn-primary">
        update
      </Link>
      <button
        onClick={() => {
          fetch(
            "https://650c2fcb47af3fd22f673c33.mockapi.io/Student/" + param.id,
            {
              method: "DELETE"
            }
          ).then((res) => navigate("/"));
        }}
        class="btn btn-primary"
      >
        DELETE
      </button>
    </>
  );
}
