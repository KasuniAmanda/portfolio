import { Nav } from "react-bootstrap";

export const Projects = () => {
    
    const projects = [
        {
            title: "Project One",
            description: "Description for project one.",
            imgUrl: "https://via.placeholder.com/300",
        },
        {   
            title: "Project Two",
            description: "Description for project two.",
            imgUrl: "https://via.placeholder.com/300",
        },
        {
            title: "Project Three", 
            description: "Description for project three.",
            imgUrl: "https://via.placeholder.com/300",
        },
        {
            title: "Project Three", 
            description: "Description for project three.",
            imgUrl: "https://via.placeholder.com/300",
        },
        {
            title: "Project Three", 
            description: "Description for project three.",
            imgUrl: "https://via.placeholder.com/300",
        },
        {
            title: "Project Three", 
            description: "Description for project three.",
            imgUrl: "https://via.placeholder.com/300",
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>Here are some of my recent works.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link href="first">Tab One</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab Two</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Tab Three</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {projects.map((project, index) => {
                                    return (
                                        <p>{project.title}</p>
                                    )
                                })
                               }
                            </Row>
                        </Tab.Pane>  
                        <Tab.Pane eventKey="second">kkkkkkk</Tab.Pane>
                        <Tab.Pane eventKey="third">ppppppp</Tab.Pane>    
                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

