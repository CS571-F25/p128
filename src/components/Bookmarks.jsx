import { Container, Card, Button, Badge } from "react-bootstrap";
import { Link } from "react-router";
import { useBookmarks } from "./BookmarksContext";

export default function Bookmarks() {
  const { bookmarks } = useBookmarks();

  // Maps bookmarks to cards
  const items = bookmarks.map(b => {
    let type = "Other";
    if (b.id?.startsWith("rules-")) type = "Licenses & Rules";
    else if (b.id?.startsWith("guide-")) type = "Guide";
    return { ...b, type };
  });

  return (
    <Container>
      <h1>Bookmarks</h1>

      {items.length === 0 ? (
        <p>
          You don't have any bookmarks yet. Look for the{" "}
          <strong>Bookmark</strong> buttons on the{" "}
          <strong>Licenses & Rules</strong> and <strong>Guides</strong> pages to
          save sections you want to revisit.
        </p>
      ) : (
        <>
          <p>
            These are the sections youve saved from around Badger Baitbox. Click
            a bookmark to jump back to that guide or rules section.
          </p>

          {/* Maps all bookmarks taken from localStorage into cards that when clicked directly send user to their bookmark section */}
          {items.map(b => (
            <Card key={b.id} className="mb-3">
              <Card.Body>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "0.75rem"
                  }}
                >
                  <div>
                    <Card.Title style={{ marginBottom: "0.25rem" }}>
                      {b.label || b.id}
                    </Card.Title>
                    <Badge bg="secondary">{b.type}</Badge>
                  </div>
                  <Button
                    as={Link}
                    to={b.to || "/"}
                    variant="primary"
                    size="sm"
                  >
                    Go to section
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </>
      )}
    </Container>
  );
}