import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  Button,
  Input,
  Modal,
  Toast,
  Loader,
} from "../components/ui";

function ComponentsDemo({ darkMode, setDarkMode }) {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  return (
    <div className="page-wrapper">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="main-content page-content">
        <h1>Component Library</h1>

        <div
          style={{
            display: "grid",
            gap: "2rem",
            marginTop: "2rem",
          }}
        >
          <Button text="Primary Button" />

          <Button text="Secondary Button" variant="secondary" />

          <Input
            label="Review Input"
            placeholder="Enter review..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <Button text="Open Modal" onClick={() => setOpen(true)} />

          <Button
            text="Show Toast"
            onClick={() => {
              setShowToast(true);

              setTimeout(() => setShowToast(false), 3000);
            }}
          />

          <Loader />
        </div>

        <Modal
          isOpen={open}
          onClose={() => setOpen(false)}
          title="Demo Modal"
        >
          <p>This is a reusable modal component.</p>
        </Modal>

        <Toast
          show={showToast}
          message="Toast notification!"
        />
      </main>

      <Footer />
    </div>
  );
}

export default ComponentsDemo;