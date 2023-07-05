import "../Task.css"



export default function TaskList () {
    return (
        <div className="background task">
            <div className="row">
                <div className="col">
                    <p className="title">Not Completed:</p>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="titleSmall">Task Name:</p>
                        <p>(axios task)</p>
                    </div>
                    <div className="col">
                        <p className="titleSmall">Project Name:</p>
                        <p>(axios project)</p>
                    </div>
                    <div className="col">
                        <p className="titleSmall">Due Date:</p>
                        <p>(axios Duedate)</p>
                    </div>
                    <div className="col">
                        <p className="titleSmall">User:</p>
                        <p>(axios user)</p>
                    </div>
                    <div className="col">
                        <p className="titleSmall">Description:</p>
                        <p className="desc"> Descrition will go here, if it is tooo long, it will cut off end</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p className="title">Completed:</p>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="titleSmall">Task Name:</p>
                        <p>(axios task)</p>
                    </div>
                    <div className="col">
                        <p className="titleSmall">Project Name:</p>
                        <p>(axios project)</p>
                    </div>
                    <div className="col">
                        <p className="titleSmall">Due Date:</p>
                        <p>(axios Duedate)</p>
                    </div>
                    <div className="col">
                        <p className="titleSmall">User:</p>
                        <p>(axios user)</p>
                    </div>
                    <div className="col">
                        <p className="titleSmall">Description:</p>
                        <p className="desc"> Descrition will go here, if it is tooo long, it will cut off end</p>
                    </div>
                </div>
            </div>
        </div>
    )
}