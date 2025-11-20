import { useParams, useNavigate } from "react-router";
import { guides } from "./guidesData";
import { Button } from "react-bootstrap";

export default function GuideDetail() {
  const { guideId } = useParams();
  const navigate = useNavigate();

  const guide = guides.find(g => g.id === guideId);

  if (!guide) {
    return <p>Guide not found.</p>;
  }

  return (
    <div>
      <Button variant="link" onClick={() => navigate(-1)}>
        Back to guides
      </Button>

      <h1>{guide.title}</h1>

      <img src={guide.image} style={{width: 700, borderRadius: "12px"}} alt={guide.title}></img>

      {guide.sections.map((section, index) => (
        <div key={index}>
            <h2>{section}</h2>
            <p>Will add paragraphs later</p>
        </div>
      ))}
    </div>
  );
}
