import Tag from "./Tag.jsx";
import "./TaskForm.css";
import { useState } from "react";

const TaskForm = () => {
  const [TaskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(TaskData);
  };

  const checkTag = (tag) => {
    return TaskData.tags.some((item) => item === tag);
  };

  const selectTag = (tag) => {
    if (TaskData.tags.includes(tag)) {
      setTaskData((prev) => ({
        ...prev,
        tags: prev.tags.filter((item) => item !== tag),
      }));
    } else {
      setTaskData((prev) => ({
        ...prev,
        tags: [...prev.tags, tag],
      }));
    }
  };

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="task_input"
          placeholder="Enter your task"
          name="task"
          onChange={handleChange}
        />
        <div className="task_form_bottom_line">
          <div>
            <Tag
              selectTag={selectTag}
              tagName="HTML"
              selected={checkTag("HTML")}
            />
            <Tag
              selectTag={selectTag}
              tagName="CSS"
              selected={checkTag("CSS")}
            />
            <Tag
              selectTag={selectTag}
              tagName="JavaScript"
              selected={checkTag("JavaScript")}
            />
            <Tag
              selectTag={selectTag}
              tagName="React"
              selected={checkTag("React")}
            />
          </div>
          <div>
            <select
              className="task_status"
              name="status"
              onChange={handleChange}
              value={TaskData.status}
            >
              <option value="todo">To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button type="submit" className="task_submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
