import { useEffect, useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";

  const accountsKey = "bb-accounts"
  const currentUserKey = "bb-user"
  
export default function Account() {
  const [currentUser, setCurrentUser] = useState("");
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  useEffect(() => {
    const savedUser = localStorage.getItem(currentUserKey);
    if (savedUser) {
      setCurrentUser(savedUser);
    }
  }, []);

  function loadAccounts() {
    const data = localStorage.getItem(accountsKey);
    if (!data) return {};
    return JSON.parse(data) || {};
  }

  function saveAccounts(accounts) {
    localStorage.setItem(accountsKey, JSON.stringify(accounts))
  }

  function handleAuth(e) {
    e.preventDefault();
    
    const username = usernameInput.trim();
    const password = passwordInput.trim();

    if (!username || !password) {
      alert("Please enter both a username and password");
      return;
    } else if (username.length < 5) {
      alert("Username should be at least 5 characters")
      return;
    } else if (password.length < 7) {
      alert("Password should be at least 7 characters")
      return;
    }

    const accounts = loadAccounts();

    if (accounts[username]) {

      if (accounts[username] !== password) {
        alert("Incorrect password for username")
        return;
      }
      setCurrentUser(username);
      localStorage.setItem(currentUserKey, username)
      alert("Logged in successfully");
    } else {
      const shouldCreate = window.confirm("No account with that username exists, Createa a new account with this information?")
      if (!shouldCreate) {
        return;
      }

      const updated = {...accounts, [username]:password};
      saveAccounts(updated);
      setCurrentUser(username);
      localStorage.setItem(currentUserKey, username)
      alert("Account created and logged in")
    }

    setUsernameInput("");
    setPasswordInput("");
    return;
  } 
  function handleLogout() {
    setCurrentUser("");
    localStorage.removeItem(currentUserKey);
    alert("Successfully logged out")
  }

  return (
    <Container>
      <h1>Badger Bait Account</h1>

      <Card style={{ maxWidth: 480 }}>
        <Card.Img
        variant="top"
        src="Musky.png"
        alt="Someone holding a Musky"
        />
        <Card.Body>
          {currentUser ? (
            <>
              <Card.Title>Logged in</Card.Title>
              <p>
                Signed in as <strong>{currentUser}</strong>.
              </p>
              <p className="text-muted">
                You can now register for tournaments and use the progress tracker on this device.
              </p>
              <Button variant="outline-secondary" onClick={handleLogout}>
                Log out
              </Button>
            </>
          ) : (
            <>
              <Card.Title>Log in / Register</Card.Title>
              <p className="text-muted">
                This is a simple local account system. Everything is stored in your browser,
                there's no real server.
              </p>

              <Form onSubmit={handleAuth}>
                <Form.Group className="mb-2" controlId="accountUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    value={usernameInput}
                    onChange={e => setUsernameInput(e.target.value)}
                    placeholder="e.g. WalleyeWizard"
                  />
                </Form.Group>

                <Form.Group className="mb-2" controlId="accountPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={passwordInput}
                    onChange={e => setPasswordInput(e.target.value)}
                    placeholder="Choose a password"
                  />
                </Form.Group>

                <div className="mt-3">
                  <Button type="submit" variant="primary" disabled={!usernameInput || !passwordInput}>
                    Continue
                  </Button>
                </div>
              </Form>
            </>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}