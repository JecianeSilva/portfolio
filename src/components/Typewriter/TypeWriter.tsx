import { useEffect, useState } from "react";

interface TypeWriterprops {
  textProps: string;
}
export function TypeWriter({ textProps, ...rest }: TypeWriterprops) {
  const [viewCursor, setViewCursor] = useState(false);
  const [text, setText] = useState('');


  const writerPrint = (text: string, pos = 0) => {
    if (pos < text.length) {
      setViewCursor(true);
      setText(text.slice(0, pos + 1));
      setTimeout(() => writerPrint(text, pos + 1), 100);
    } else {
      setTimeout(() => writerPrint(textProps), 2000);
    }
  };

  useEffect(() => {
    setTimeout(() => writerPrint(textProps), 200);
  }, []);

  return (
    <div>
      {text}
      {viewCursor && (
        <span className="animate-animar-cursor text-4xl"> |</span>
      )}
    </div>
  );
}