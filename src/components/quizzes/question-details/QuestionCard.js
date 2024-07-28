function QuestionCard({number, id}) {
    return (
        <>
            <div id={id} className="question-container rounded-4">
                <div className="text-start fs-5 fw-medium my-3 ms-4">
                    Question {number}
                </div>
            </div>
        </>
    );
}

export default QuestionCard;