"use client";
import React, { useState } from "react";
import { Send } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";

const formSchema = z.object({
  prompt: z.string().min(5, {
    message: "Prompt must be at least 5 characters.",
  }),
});

export function EnterChat({ setAIResponse }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  async function onSubmit(values) {
    console.log("Prompt Submitted:", values.prompt);

    try {
      const response = await fetch("/api/groq-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: values.prompt }),
      });

      const data = await response.json();
      console.log(data, "response");

      // Set AI Response
      setAIResponse(data.response);
    } catch (error) {
      console.error("Error:", error);
      setAIResponse("Error: Unable to fetch response");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex flex-row  justify-center gap-4">
          <div className="flex flex-row items-center justify-between gap-4 bg-gray-800 p-2 rounded-3xl w-full">
            <FormField
              control={form.control}
              name="prompt"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Type your prompt here..."
                      className="text-lg border-0 border-none outline-none focus:outline-none active:outline-none bg-transparent focus-visible:ring-0"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              variant={"default"}
              className="rounded-full"
              size="icon"
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
