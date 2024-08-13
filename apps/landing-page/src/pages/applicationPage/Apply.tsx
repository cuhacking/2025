import { TextInput, MultipleChoice, Dropdown, ReviewQuestions, TitlePage, ProgressBar } from "./QuestionComponents"
import { useState, useEffect } from "react";

export interface Question {
    type: string,
    question: string,
    questionId: string,
    required: boolean,
    variable: string,
    setVar: React.Dispatch<React.SetStateAction<string>>,
    choices: string[]
}

export interface FormOutput {
    firstName: string,
    lastName: string,
    email: string,
    school: string,
    year: string
}

export const Apply = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [school, setSchool] = useState("");
    const [year, setYear] = useState("");
    const [dummy, setDummy] = useState(""); // for the pages with no content (i.e. title page, submit page)

    // const [scrollDiretion, setScrollDiretion] = useState("");
    // const [questionIndex, setQuestionIndex] = useState(0);
    const [animation] = useState("slideup");
    // const [wheel, setWheel] = useState(true);

    const questions: Question[] = [
        {
            type: "title",
            question: "",
            questionId: "title",
            required: false,
            variable: dummy,
            setVar: setDummy,
            choices: []
        },
        {
            type: "text",
            question: "First Name: ",
            questionId: "firstName",
            required: true,
            variable: fname,
            setVar: setFname,
            choices: []
        },
        {
            type: "text",
            question: "Last Name: ",
            questionId: "lastName",
            required: false,
            variable: lname,
            setVar: setLname,
            choices: []
        },
        {
            type: "text",
            question: "Email: ",
            choices: [],
            required: true,
            variable: email,
            setVar: setEmail,
            questionId: "email"
        },
        {
            type: "mc",
            question: "What school do you go to?",
            choices: [
                "Carleton University",
                "mouse U",
                "ravens U",
                "turkey U",
                "chicken U",
                "koala U",
                "Other"
            ],
            required: true,
            variable: school,
            setVar: setSchool,
            questionId: "school"
        },
        {
            type: "dropdown",
            question: "What year are you in?",
            choices: [
                "Select a choice...",
                "First year",
                "Second year",
                "Third year",
                "Fourth year",
                "Other"
            ],
            required: true,
            variable: year,
            setVar: setYear,
            questionId: "year"
        },
    ]

    // const listenToScroll = () => {
    //     let heightToHideFrom = 200;
    //     const winScroll = document.body.scrollTop ||
    //         document.documentElement.scrollTop;
        
    //     console.log(winScroll);
    //     if (winScroll > heightToHideFrom) {
    //     //    isVisible &&      // to limit setting state only the first time
    //          setQuestionIndex(questionIndex + 1);
    //     } else {
    //         setQuestionIndex(questionIndex - 1);
    //     }
    //   };

    // document.addEventListener("scroll", listenToScroll);

    // const handleWheelEvent = (event: WheelEvent) => {
    //     prevDeltaY += event.deltaY;
    //     console.log("total: ", prevDeltaY, " deltaY: ", event.deltaY);
    //     if (event.deltaY < 0){
    //         setScrollDiretion("up");
    //         // prevDeltaY = 0;
    //         // setQuestionIndex(questionIndex - 1);
    //         // setAnimation("slidedown");
    //         // setScrollDiretion("");
    //     } else if (event.deltaY > 0){
    //         setScrollDiretion("down");
    //         // prevDeltaY = 0;
    //         // setQuestionIndex(questionIndex + 1);
    //         // setAnimation("slideup");
    //         // setScrollDiretion("");
    //     }
    // }
    
    // const debounce = (fn: (e:WheelEvent)=>void, timeout = 400) => {
    //     let timer: NodeJS.Timeout;
    //     return (e:WheelEvent) => {
    //         if (timer){
    //             clearTimeout(timer);
    //         }
    //         timer = setTimeout(() => {
    //             fn.apply(this, [e]);
    //         }, timeout);
    //     }
    // }

    useEffect(() => {
        // window.scrollTo(0, 0);
        document.getElementById("question0")?.scrollIntoView();
        document.getElementById("prog0")?.classList.add("stop");

        // document.getElementById(questions[0].questionId)?.focus();

        // window.addEventListener('wheel', debounce(handleWheelEvent));

        // return () => window.removeEventListener('wheel', debounce(handleWheelEvent));
    }, []);

    // User's choices
    const output: FormOutput = {
        firstName: fname,
        lastName: lname,
        email: email,
        school: school,
        year: year
    };

    // if (scrollDiretion == "up" && questionIndex > 0){
    //     setQuestionIndex(questionIndex - 1);
    //     setAnimation("slidedown");
    //     setScrollDiretion("");
    // } else if (scrollDiretion == "down" && questionIndex < (questions.length -1)) {
    //     setQuestionIndex(questionIndex + 1);
    //     setAnimation("slideup");
    //     setScrollDiretion("");
    // }
    

    // window.addEventListener('scrollend', (event) => {
    //     if (scrollDiretion == "up" && questionIndex > 0){
    //         setQuestionIndex(questionIndex - 1);
    //     } else if (scrollDiretion == "down" && questionIndex < (questions.length -1)) {
    //         setQuestionIndex(questionIndex + 1);
    //     }
    // });

    // window.addEventListener('scrollend', (event) => {
    //     console.log("fired");
    //     if (scrollDiretion == "up" && questionIndex > 0){
    //         setQuestionIndex(questionIndex - 1);
    //     } else if (scrollDiretion == "down" && questionIndex < 5) {
    //         setQuestionIndex(questionIndex + 1);
    //     }
    // });

    const questionRender = (q: Question, index: number) => {
        if(q.type == "title") {
            return <TitlePage key={index} questions={questions} index={index} animation={animation} />
        }
        else if (q.type == "text") {
            return <TextInput key={index} question={q.question} questionId={q.questionId} variable={q.variable} setVar={q.setVar} index={index} questions={questions} animation={animation} />
        }
        else if (q.type == "mc") {
            return <MultipleChoice key={index} question={q.question} choices={q.choices} questionId={q.questionId} variable={q.variable} setVar={q.setVar} index={index} questions={questions} animation={animation} />
        }
        else if (q.type == "dropdown") {
            return <Dropdown key={index} question={q.question} choices={q.choices} questionId={q.questionId} variable={q.variable} setVar={q.setVar} index={index} questions={questions} animation={animation} />
        }
    }

    // console.log(output); // debugging: will remove later
    
    return (
        <div className="up">
            <div id="apply-background">
                <div id="apply-background_blue-gradient"></div>
                <div id="apply-background_pink-gradient"></div>
            </div>

            <ProgressBar numQuestions={questions.length}></ProgressBar>

            <form id="apply-form">
                { questions.map((q, index) => questionRender(q, index)) }
                { /*questionRender(questions[questionIndex], questionIndex)*/ }

                {/*// Review page here temporarily until further decided where to put it.
                // TODO: Aashna please add css to make it look nice TT
                 <ReviewQuestions questions={questions} answers={output}></ReviewQuestions>  */}

            </form>

            { <ReviewQuestions questions={questions} answers={output}></ReviewQuestions> }
        </div>
    );
}
