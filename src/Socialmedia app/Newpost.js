import React from 'react';
import './Newpost.css';

const Newpost = ({ updatetasks, setupdatetasks, handleSubmit, handleEdit }) => {
  const handleSubmitting = (e) => {
    e.preventDefault();
    if (!updatetasks.title.trim() || !updatetasks.body.trim()) return;

    if (updatetasks.id) {
      handleEdit(updatetasks.id);
    } else {
      handleSubmit();
    }

    setupdatetasks({ id: null, title: "", datetime: "", body: "" });
  };

  return (
    <div className="newpost" style={{ marginTop: "50px" }}>
      <form className='form' onSubmit={handleSubmitting}>
        <label className="title2">Title:</label>
        <input
          type="text"
          value={updatetasks.title}
          onChange={(e) =>
            setupdatetasks({ ...updatetasks, title: e.target.value })
          }
        />
        <br />
        <label className="post">Post:</label>
        <input
          type="text"
          value={updatetasks.body}
          onChange={(e) =>
            setupdatetasks({ ...updatetasks, body: e.target.value })
          }
        />
        <button className="postbutton" type="submit">
          {updatetasks.id ? "Save Changes" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Newpost;
