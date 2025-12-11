import { useParams, useNavigate } from "react-router";
import { guides } from "./guidesData";
import { Button } from "react-bootstrap";
import { BookmarkButton } from "./BookmarksContext";

export default function GuideDetail() {
  const { guideId } = useParams();
  const navigate = useNavigate();

  const guide = guides.find(g => g.id === guideId);

  if (!guide) {
    return <p>Guide not found.</p>;
  }

  const bookmarkId = `guide-${guide.id}`;

  return (
    <div>
      <Button variant="link" onClick={() => navigate(-1)}>
      Back
      </Button>

      <div style={{ textAlign: "center", marginTop: "0.5rem", marginBottom: "1rem" }}>
        <h1 id={bookmarkId} style={{ marginBottom: "0.25rem" }}>
          {guide.title}
        </h1>

        <div style={{ display: "flex", justifyContent: "center", marginTop: "0.25rem" }}>
          <BookmarkButton id={bookmarkId} label="Save this guide" to={`/Guides/${guide.id}#${bookmarkId}`} size="sm" className="rules-bookmark" />
        </div>
      </div>

      <img src={guide.image} style={{width: 700, borderRadius: "12px", marginTop: "1rem"}} alt={guide.title}></img>

      {guide.sections.map((section, index) => (
        <section key={index} className="guide-section" style={{ textAlign: "left", marginTop: "1.5rem" }}>
          <h2>{section}</h2>
            {guide.paragraphs && guide.paragraphs[index] && (
              <p>{guide.paragraphs[index]}</p>
            )}
        </section>
      ))}
    </div>
  );
}
