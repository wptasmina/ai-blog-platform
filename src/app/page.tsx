import { Button } from "@/components/ui/button";
import Image from "next/image";
import AllBloge from "./allBloge";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <AllBloge />
          <Button>Click me</Button>
        </div>
      </main>

  );
}
