import React, { useState } from "react";
import { EnterChat } from "../components/chat/EnterChat";

export default function NewChat() {
  const [aiResponse, setAIResponse] = useState(""); // State to store AI response

  return (
    <div className="min-h-screen">
      <div className="flex flex-col min-h-screen p-2 py-6 justify-between w-[50%] m-auto">
        <div>
          {aiResponse && (
            <div className="flex flex-col gap-2 justify-center ">
              <h2 className="text-md font-semibold ml-1">AI Response:</h2>
              <div className="bg-gray-900 p-4 rounded-lg shadow-md">
                <p className="mt-2 text-sm">
                  {aiResponse || "No response yet. Ask something!"}
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="mb-4">
          <EnterChat setAIResponse={setAIResponse} />
        </div>
      </div>
    </div>
  );
}
