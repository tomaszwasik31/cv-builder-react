import React from "react";

export default function AllWork(props) {
  const allWork = props.workHistory.map((work, i) => (
    <div className="work-container" key={work.id}>
      <h3 className="work-counter">{`Workspace ${i + 1}`}</h3>

      <div className="work-inputs">
        <input
          type="text"
          placeholder="workspace"
          onChange={(e) => props.handleWorkChange(e, work.id)}
          name="workspace"
          value={work.workspace}
        />
        <input
          type="text"
          placeholder="start Date"
          onChange={(e) => props.handleWorkChange(e, work.id)}
          name="startDate"
          value={work.startDate}
        />
        <input
          type="text"
          placeholder="end Date"
          onChange={(e) => props.handleWorkChange(e, work.id)}
          name="endDate"
          value={work.endDate}
        />
        <button
          className="remove-work"
          onClick={(e) => props.removeWork(e, work.id)}
        >
          Remove
        </button>
      </div>
    </div>
  ));

  return (
    <div className="all-work-container">
      {allWork}
      <button className="add-work" onClick={props.addWork}>
        New workspace
      </button>
    </div>
  );
}
