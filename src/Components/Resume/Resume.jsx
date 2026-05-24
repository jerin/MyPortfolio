import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle.jsx";
import pdf from "../../assets/Jerin_John_Resume_ReactJS.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function Resume() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Resume | Jerin John</title>
        <meta name="description" content="View and download Jerin John's resume — Software Engineer with experience in React, Node.js, TypeScript, .NET, and cloud-native systems." />
        <link rel="canonical" href="https://jerinjohn.dev/resume" />
        <meta property="og:title" content="Resume | Jerin John" />
        <meta property="og:description" content="View and download Jerin John's resume — Software Engineer with experience in React, Node.js, TypeScript, .NET, and cloud-native systems." />
        <meta property="og:url" content="https://jerinjohn.dev/resume" />
        <meta name="twitter:title" content="Resume | Jerin John" />
        <meta name="twitter:description" content="View and download Jerin John's resume — Software Engineer with experience in React, Node.js, TypeScript, .NET, and cloud-native systems." />
      </Helmet>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document
            file={pdf}
            className="d-flex justify-content-center"
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          >
            <Page pageNumber={pageNumber} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        {numPages && (
          <Row
            style={{
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
              marginTop: "1rem",
            }}
          >
            <Button
              variant="primary"
              onClick={() => setPageNumber((p) => Math.max(p - 1, 1))}
              disabled={pageNumber <= 1}
              style={{ maxWidth: "100px" }}
            >
              Previous
            </Button>
            <span style={{ color: "white" }}>
              Page {pageNumber} of {numPages}
            </span>
            <Button
              variant="primary"
              onClick={() => setPageNumber((p) => Math.min(p + 1, numPages))}
              disabled={pageNumber >= numPages}
              style={{ maxWidth: "100px" }}
            >
              Next
            </Button>
          </Row>
        )}
      </Container>
    </div>
  );
}

export default Resume;
