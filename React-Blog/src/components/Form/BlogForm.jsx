import { useState } from "react";
import "./BlogForm.css";

function BlogForm() {
  const [blogName, setBlogName] = useState("");

  const titleChangeHandler = (event) => {
    setBlogName(event.target.value);
    console.log(blogName);
  };

  const [subject, setSubject] = useState("");
  const subjectChangeHandler = (event) => {
    setSubject(event.target.value);
  };

  const [desc, setDesc] = useState("");
  const descriptionChangeHandler = (event) => {
    setDesc(event.target.value);
  };

  return (
    <form className="blog-form">
      <div className="blog-form-input">
        <label>Başlık.:{blogName}</label>
        <input
          type="text"
          placeholder="Başlık Giriniz"
          onChange={titleChangeHandler}
        />
      </div>
      <div className="blog-form-input">
        <label>Konu görseli:{subject}</label>
        <input
          type="text"
          placeholder="Konu görseli giriniz."
          onChange={subjectChangeHandler}
        />
      </div>
      <div className="blog-form-input">
        <label>Açıklama</label>
        <input
          className="blog-description"
          type="text"
          placeholder="Açıklama detaylarını giriniz."
          onChange={descriptionChangeHandler}
        />
      </div>
      <button>Blog Ekle</button>
    </form>
  );
}

export default BlogForm;
