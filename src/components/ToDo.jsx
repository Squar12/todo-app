import style from "./ToDo.module.css";

export const ToDo = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>To Do List</h1>
      <div className={style.back}>
        <input
          className={style.input}
          type=""
          placeholder="Add a new task..."
        />
        <button onClick={() => setText(text + 1)} className={style.button}>
          Add
        </button>
      </div>
      <div className={style.back2}>
        <button className={style.buttonAll}>All</button>
        <button className={style.buttonActive}>Active</button>
        <button className={style.buttonCompleted}>Completed</button>
      </div>
      <p className={style.dundText}>No tasks yet. Add one above!</p>
      <div className={style.footer}>
        <span className={style.powered}>Powered by</span>
        <span className={style.pinecone}>Pinecone academy</span>
      </div>
    </div>
  );
};
