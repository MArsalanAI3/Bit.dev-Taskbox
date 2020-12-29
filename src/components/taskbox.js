import React from 'react';
import './style.css';


function tasks() {
    return (
        <div>
            <section className="tasks">
                <header className="tasks-header">
                    <h2 className="tasks-title">Tasks</h2>
                    <a href="index.html" className="tasks-lists">Lists</a>
                </header>
                <fieldset className="tasks-list">
                    <label className="tasks-list-item">
                        <input type="checkbox" name="task_1" defaultValue={1} className="tasks-list-cb" defaultChecked />
                        <span className="tasks-list-mark" />
                        <span className="tasks-list-desc">Muhammad Arsalan</span>
                    </label>
                    <label className="tasks-list-item">
                        <input type="checkbox" name="task_2" defaultValue={1} className="tasks-list-cb" defaultChecked />
                        <span className="tasks-list-mark" />
                        <span className="tasks-list-desc">Check This</span>
                    </label>
                    <label className="tasks-list-item">
                        <input type="checkbox" name="task_3" defaultValue={1} className="tasks-list-cb" />
                        <span className="tasks-list-mark" />
                        <span className="tasks-list-desc">And Go!</span>
                    </label>
                </fieldset>
            </section>



        </div>
    );
}

export default tasks;

