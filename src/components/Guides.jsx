import { Card, Button } from 'react-bootstrap'

export default function Guides (props){
    return <div>
        <h1>Guides</h1>
        <div>
        <Card >
            <p>Tackle</p>
            <Button onClick={() => alert("go into article?")}> View</Button>
        </Card>
        </div>
    </div>
}