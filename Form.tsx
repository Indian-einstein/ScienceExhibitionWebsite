import "../index.css";

function Form() {
  return (
    <>
      <div id="Container">
        <h1>Contact Us</h1>
        <br />
        <br />
        <form
          action="https://pet-tidy-crayfish.ngrok-free.app/xzyxan.com/ScienceExhibitionWebsite/submit.php"
          method="POST"
        >
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item" onClick={(event) => console.log(event)}>
                Name <br />
                <input type="text" id="name1" name="name" required />
              </li>
              <li className="page-item">
                Email <br />
                <input type="email" id="email" name="email" required />
              </li>
              <li className="page-item">
                Message <br />
                <textarea id="message" name="message" required></textarea>
              </li>
            </ul>
          </nav>
          <button
            type="submit"
            className="btn btn-outline-warning"
            onClick={() => {
              alert("Form Submitted.");
            }}
          >
            <b>Submit</b>
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
