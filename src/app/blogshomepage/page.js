"use client";

import Image from "next/image";
import { Container, Col } from "react-bootstrap";
import Capture2 from "../../assets/images/capture2.webp";

export default function Bloghomepage() {
  return (
    <div className="blog position-relative mt-4">
      <Container>
        <div className="row mt-5">
          <Col md={12}>
            <Image
              src={Capture2}
              alt="Blog Banner"
              className="w-100 h-auto"
              priority
            />
          </Col>
        </div>
      </Container>
    </div>
  );
}
