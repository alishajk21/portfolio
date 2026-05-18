import { useState, useEffect } from "react";

export default function Typewriter({ words }) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[idx % words.length];
    const speed = deleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setTimeout(() => setDeleting(true), 1400);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setIdx((i) => i + 1);
        return;
      }
      setText(deleting ? text.slice(0, -1) : word.slice(0, text.length + 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, idx, words]);

  return (
    <span style={{ color: "var(--green)" }}>
      {text}
      <span
        style={{
          borderRight: "2px solid var(--green)",
          marginLeft: 2,
          animation: "blink 1s infinite",
        }}
      />
    </span>
  );
}
