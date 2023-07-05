import "../Task.css"



export default function Task () {

    const User = false

    if (User) {
        return (
            <div className="background">
                <div className="col">
                    <div className="row">
                        <p className="title">Task Name:</p>
                        <p>(axios task name)</p>
                    </div>
                    <div className="row">
                        <p className="title">Project Name:</p>
                        <p>(axios project name here)</p>
                    </div>
                </div>
                <div className="col">
                    <p className="title"> Due Date:</p>
                    <p className="date">(axios duedate)</p>
                </div>
                <div className="col">
                    <p className="title">Description:</p>
                    <p>(description here)</p>
                </div>
                <div className="col">
                    <button>Completed</button>
                </div>
            </div>
        )
    } else {
        return (
        <div className="background">
            <div className="col">
                <div className="row">
                    <p className="title">Task Name:</p>
                    <p>(axios task name)</p>
                </div>
                <div className="row">
                    <p className="title">Project Name:</p>
                    <p>(axios project name here)</p>
                </div>
            </div>
            <div className="col">
                <p className="title"> Due Date:</p>
                <p className="date">(axios duedate)</p>
            </div>
            <div className="col">
                <p className="title"> Submited By:</p>
                <p>(axios call of who submited)</p>
            </div>
            <div className="col">
                <p className="title">Description:</p>
                <p>(description here)</p>
            </div>
            <div className="col">
                <button>Reviewed & Completed</button>
                <button>Reviewed & Rejected</button>
            </div>
        </div>
        )
    }

}