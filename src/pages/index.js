import { ToDo } from "@/components/ToDo";
import { useState } from "react";

export default function Home(props) {
  const [text, setText] = useState(0);
  return (
    <div>
      <ToDo />
    </div>
  );
}
