import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, ProgressBar, Form } from "react-bootstrap";
import { Link } from "react-router";

const progressKey = "bb-progress-";

// JSON list that keep track of the information per step
const Steps = [
    {
        id: "basics",
        title: "Step 1: Learn the basics",
        description: "Start by learning about rods, reels, lures, and simple rigs so you know what gear to bring to the lake.",
        linkTo: "/Guides/basics",
        linkLabel: "Open the beginner gear guide",
        quiz: {
            question: "Where can you find beginner guides about rods, lures, and simple rigs on this site?",
            options: ["The Guides page", "The Tournaments page", "The Bookmarks page"],
            correctIndex: 0
        }
    },
    {
        id: "rules",
        title: "Step 2: Know the Wisconsin rules",
        description: "Before you fish, make sure you understand seasons, bag limits, and license types so you stay legal.",
        linkTo: "/LicensesAndRules",
        linkLabel: "Go to Licenses & Rules",
        quiz: {
            question: "Which page should you visit to review seasons, limits, and license types?",
            options: ["Guides", "Licenses & Rules", "Home"],
            correctIndex: 1
        }
    },
    {
        id: "bookmarks",
        title: "Step 3: Save helpful info with bookmarks",
        description: "Use bookmarks to quickly jump back to the guides or rules you care about most, like your favorite rigs or a zone’s limits.",
        linkTo: "/Bookmarks",
        linkLabel: "View your bookmarks",
        quiz: {
            question: "What is the main purpose of the Bookmarks page?",
            options: [
                "Saving guides or rules you want to revisit",
                "Registering for tournaments",
                "Changing your password"
            ],
            correctIndex: 0
        }
    },
    {
        id: "tournaments",
        title: "Step 4: Try a mock tournament",
        description:
            "Once you understand the basics and the rules, try registering for a mock tournament to see how competitive fishing works.",
        linkTo: "/Tournaments",
        linkLabel: "See mock tournaments",
        quiz: {
            question: "What do you need to do before you can register for a tournament on this site?",
            options: [
                    "Be logged in with a Badger Baitbox account",
                    "Catch a 40\" musky first",
                    "Buy a real-life license online"
            ],
            correctIndex: 0
        }
    }
];

export default function ProgressTracker() {
    const [currentUser, setCurrentUser] = useState("");
    const [completedSteps, setCompletedSteps] = useState({});
    const [quizAnswers, setQuizAnswers] = useState({});
    const [hasShownCongrats, setHasShownCongrats] = useState(false);

    // Load user and their saved progress
    useEffect(() => {
        const savedUser = localStorage.getItem("bb-user");
        if (!savedUser) return;

        setCurrentUser(savedUser);

        const data = localStorage.getItem(progressKey + savedUser);
        if (!data) return;

        const parsed = JSON.parse(data);
        const loadedCompleted = parsed.completedSteps || {};
        setCompletedSteps(loadedCompleted);
        setQuizAnswers(parsed.quizAnswers || {});

        // if hasShownCongrats was saved, use it otherwise if all steps assume it was shown already
        const allDone = Steps.every(step => loadedCompleted[step.id]);
        setHasShownCongrats( typeof parsed.hasShownCongrats === "boolean" ? parsed.hasShownCongrats : allDone)
    }, []);

    // Save progress whenever it changes for the current user
    useEffect(() => {
        if (!currentUser) return;

        const data = {
            completedSteps,
            quizAnswers, 
            hasShownCongrats
        };
        localStorage.setItem(progressKey + currentUser, JSON.stringify(data));
    }, [currentUser, completedSteps, quizAnswers, hasShownCongrats]);

    const totalSteps = Steps.length;
    const completedCount = Steps.filter(step => completedSteps[step.id]).length;
    const completionPercent = totalSteps > 0 ? Math.round((completedCount / totalSteps) * 100) : 0;
  
    useEffect(() => {
        if(completionPercent === 100 && !hasShownCongrats) {
            alert("Great job! Youve completed all the steps in the Badger Baitbox roadmap!\n\n" +
                  "You now know where to find guides, check Wisconsin rules, how to save bookmarks, and register for a tournament");
            setHasShownCongrats(true);
        }
    }, [completionPercent, hasShownCongrats]);

    if (!currentUser) {
        return (
            <Container>
                <h1>Progress tracker</h1>
                <p>
                The progress tracker lets you follow a simple roadmap for learning the basics of
                Wisconsin freshwater fishing. To keep track of your steps on this device, youll
                need to be logged in.
                </p>
                <Card style={{ maxWidth: 520 }}>
                    <Card.Body>
                        <Card.Title>Log in to start tracking</Card.Title>
                        <p className="text-muted">
                        Create a simple local account, then come back here to mark steps complete and
                        save your progress.
                        </p>
                        <Button as={Link} to="/Account" variant="primary">
                        Go to Account page
                        </Button>
                    </Card.Body>
                </Card>
            </Container>
        );
    }

    return (
        <Container>
            <h1>Progress tracker</h1>

            <Row className="mb-4">
                <Col md={4} className="mb-3">
                    <Card>
                        <Card.Img variant="top" src="fish.JPEG" alt="Angler holding a brown trout in Wisconsin"/>
                    </Card>
                </Col>
                <Col md={8}>
                    <p>
                    This progress tracker is a roadmap to help you move from total beginner to
                    confident Wisconsin freshwater angler. Each step links to a part of the site and
                    includes a quick check question. Mark a step as complete once you feel comfortable
                    with it.
                    </p>
                    <p className="text-muted">Your progress is saved for your account <strong>{currentUser}</strong></p>

                    <div className="mb-2">
                        <strong>Overall progress: {completedCount} / {totalSteps} steps complete</strong>
                    </div>
                    <ProgressBar now={completionPercent} label={`${completionPercent}%`} variant={completionPercent=== 100 ? "success" : "info"}/>
                </Col>
            </Row>

            <Row>
                <Col>
                    {Steps.map((step, index) => {
                        const isComplete = !!completedSteps[step.id];
                        const selectedAnswer = quizAnswers[step.id];
                        const isCorrect =  typeof selectedAnswer === "number" && selectedAnswer === step.quiz.correctIndex;

                        return (
                        <Card key={step.id} className="mb-3">
                            <Card.Body>
                                <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.5rem"}}>
                                    <div>
                                        <span
                                            style={{
                                            display: "inline-block",
                                            minWidth: "2rem",
                                            height: "2rem",
                                            borderRadius: "999px",
                                            border: "1px solid #ccc",
                                            textAlign: "center",
                                            lineHeight: "2rem",
                                            marginRight: "0.5rem",
                                            fontWeight: "bold"
                                            }}
                                            aria-hidden="true">
                                            {index + 1}
                                        </span>
                                        <strong>{step.title}</strong>
                                    </div>

                                    <Form.Check type="checkbox" id={`step-complete-${step.id}`} label="Mark complete" checked={isComplete} onChange={() =>
                                        setCompletedSteps(prev => ({
                                            ...prev,
                                            [step.id]: !prev[step.id]
                                        }))
                                    }/>
                                </div>
                                <Card.Text>{step.description}</Card.Text>

                                <div className="mb-3">
                                    <Button as={Link} to={step.linkTo} variant="primary" size="sm">
                                        {step.linkLabel}
                                    </Button>
                                </div>
                                <div>
                                    <p style={{ marginBottom: "0.25rem" }}>
                                        <strong>Quick check:</strong> {step.quiz.question}
                                    </p>
                                    <div style={{textAlign: "center"}}>
                                        <Form style={{display: "inline-block", textAlign: "left"}}>
                                            {step.quiz.options.map((opt, optIndex) => (
                                            <Form.Check key={optIndex} type="radio" id={`${step.id}-option-${optIndex}`} name={`quiz-${step.id}`}
                                                label={opt} checked={selectedAnswer === optIndex}
                                                onChange={() =>
                                                    setQuizAnswers(prev => ({
                                                        ...prev,
                                                        [step.id]: optIndex
                                                    }))
                                                }/>
                                            ))}
                                        </Form>
                                    </div>

                                    {typeof selectedAnswer === "number" && (
                                        <p style={{ marginTop: "0.25rem", fontSize: "0.9rem", color: isCorrect ? "green" : "red"}}>
                                            {isCorrect ? "Correct! You're on the right track.": "Not quite—try another choice or revisit that page above."}
                                        </p>
                                    )}
                                </div>
                            </Card.Body>
                        </Card>
                        );
                    })}
                </Col>
            </Row>
        </Container>
    );
}