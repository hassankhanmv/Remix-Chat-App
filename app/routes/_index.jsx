import { Button } from "~/components/ui/button";

export const meta = () => {
  return [
    { title: "Remix Chat App" },
    { name: "description", content: "Welcome to Remix Chat App!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Button>Click me</Button>
    </div>
  );
}
