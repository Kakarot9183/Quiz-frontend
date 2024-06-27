import "./QuizDetails.css"

function QuizDetails() {
    return (
        <>
            <div className="quiz-container">
                <div className="quiz-form shadow-lg">
                    <form>
                        <div className="mb-5">
                            <label className="form-label">Quiz Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="mb-5">
                            <label className="form-label">Description</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="void"></div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default QuizDetails;