import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate} from "react-router";

const Events = [
  {
    id: "spring-bass",
    name: "Spring Bass Opener",
    lake: "Lake Mendota",
    date: "2025-05-10",
    style: "Boat / shore mixed",
    description: "Kick off spring chasing largemouth and smallmouth on Mendota."
  },
  {
    id: "summer-walleye",
    name: "Summer Walleye Night Bite",
    lake: "Lake Winnebago",
    date: "2025-07-20",
    style: "Night shore & boat",
    description: "Evening and night tournament focused on classic Wisconsin walleye."
  },
  {
    id: "ice-panfish",
    name: "Ice Panfish Derby",
    lake: "Pewaukee Lake",
    date: "2025-01-18",
    style: "Ice fishing",
    description: "Family-friendly panfish derby through the ice with bluegill and crappie."
  },
  {
    id: "don-hinze",
    name: "41st Annual Don Hinze Memorial Lake Wisconsin Open Bass Tournament",
    lake: "Lake Wisconsin",
    date: "2026-03-18",
    style: "Bass fishing by boat",
    description: "Secure your boat position and sign up! Boats will be released by registration number."
  },
  {
    id: "walleye-weekend",
    name: "Walleye Weekend",
    lake: "Lake Mendota",
    date: "2026-01-11",
    style: "Ice fishing",
    description: "A weekends worth of walleye fishing!"
  }
];
const registrationKey = "bb-tournament-reg"

export default function Tournaments(props) {
  const [currentUser, setCurrentUser] = useState("");
  const [registrations, setRegistrations] = useState({});
  const navigate = useNavigate();

  // Load saved user and registrations
  useEffect(() => {
    const savedUser = localStorage.getItem("bb-user");
    if (savedUser) {
      setCurrentUser(savedUser);
    }

    const savedRegs = localStorage.getItem(registrationKey);
    if (savedRegs) {
      setRegistrations(JSON.parse(savedRegs));
    }
  }, []);

  // Save registrations when they change
  useEffect(() => {
    localStorage.setItem(registrationKey, JSON.stringify(registrations));
  }, [registrations]);

  function isRegisteredFor (eventId) {
    if (!currentUser) return false;
    const list = registrations[eventId] || [];
    return list.includes(currentUser)
  }

  function handleRegister(eventId) {
    if (!currentUser) {
      const goToAccount = window.confirm("You must be logged in to register for a tournament. Go to the Account page now?");
      if (goToAccount) {
        navigate("/account");
      }
      return;
    }

    setRegistrations(prev => {
      const list = prev[eventId] || [];
      if (list.includes(currentUser)) {
        return prev;
      };
      alert("Successfully registered!");
      return { ...prev, [eventId]: [...list, currentUser] };
    });
  }

  function handleRemoveRegistration(eventId) {
    if(!currentUser) return;

    setRegistrations(prev => {
      const list = prev[eventId] || [];
      const newList = list.filter(name => name !== currentUser);
      const updated = {...prev};
      if (newList.length > 0) {
        updated[eventId] = newList;
      } else {
        delete updated[eventId];
      }
      alert("Successfully removed from registration!");
      return updated;
    })
  }
  const userEventIds = currentUser ?
  Object.keys(registrations).filter(id => isRegisteredFor(id)) : [];

  return (
    <Container>
      <h1>Mock Tournaments</h1>
      <p>Fishing tournaments are a fun way for Wisconsin anglers to challenge themselves, connect with other fishers,
      and experience new lakes across the state. Even beginner anglers can join these tournaments to get a feel
      for how real competitive events work without any pressure. Each tournament listed includes basic information,
      like lake details and the style of fishing. Don't feel pressured if you're new to fishing as some of
      these events are beginner friendly!</p>
        
      <Row className="g-4 mb-4">
        {/* Events list */}
        <Col md={8}>
          <h2>Upcoming events</h2>

          <Row xs={1} md={2} className="g-3">
            {Events.map(ev => {
            const registered = isRegisteredFor(ev.id);
            const regCount = (registrations[ev.id] || []).length;

            return (
              <Card key={ev.id} className="mb-3">
                <Card.Body>
                  <Card.Title>{ev.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {ev.lake} --- {ev.date} --- {ev.style}
                  </Card.Subtitle>
                  <Card.Text>{ev.description}</Card.Text>
                  {regCount > 0 && (
                    <Card.Text className="text-muted" style={{ fontSize: "0.9rem" }}>
                      {regCount} angler{regCount === 1 ? "" : "s"} registered.
                    </Card.Text>
                  )}

                  {/* Register / Remove buttons */}
                  {registered ? (
                    <Button
                      variant="danger"
                      onClick={() => handleRemoveRegistration(ev.id)}
                    >
                      Remove registration
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      onClick={() => handleRegister(ev.id)}
                    >
                      Register for this event
                    </Button>
                  )}
                </Card.Body>
              </Card>
            );
          })}
          </Row>
        </Col>

        {/* Sidebar with user registrations */}
        <Col md={4}>
          <h2>Your registrations</h2>
          {!currentUser ? (
            <p className="text-muted">
              Log in on the <strong>Account</strong> page to register and see your events here.
            </p>
          ) : userEventIds.length === 0 ? (
            <p className="text-muted">
              You haven't registered for any events yet.
            </p>
          ) : (
            <ul>
              {userEventIds.map(id => {
                const ev = Events.find(e => e.id === id);
                if (!ev) return null;
                return (
                  <li key={id} style={{ marginBottom: "0.25rem"}}>
                    <strong>{ev.name}</strong>
                    <br />
                    <span style={{ fontSize: "0.9rem" }}>
                      {ev.lake} - {ev.date}
                    </span>
                  </li>
                );
              })}
            </ul>
          )}

          <hr />

          <h3 style={{ fontSize: "1.1rem" }}>All event signups</h3>
          <ul style={{ paddingLeft: "1.2rem" }}>
            {Events.map(ev => {
              const regCount = (registrations[ev.id] || []).length;
              const dateLabel = ev.date;
              return (
                <li key={ev.id} style={{ marginBottom: "0.25rem" }}>
                  <strong>{dateLabel}</strong> – {ev.name} at {ev.lake}
                  {regCount > 0 && (
                    <span style={{ marginLeft: "0.5rem", fontSize: "0.9rem" }}>
                      ({regCount} registered)
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </Col>
      </Row>
    </Container>
  ); 
}