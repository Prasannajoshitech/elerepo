import { BASE_SOCKET_URL } from "@/api/endpoints";
import { useEffect, useRef, useState } from "react";
import { IChatMessage } from "../interfaces/dto/message.type";
import { FileTypes } from "../interfaces/file.types";
export interface IMessage extends IChatMessage {
  status?: "sending" | "sent" | "failed" | "typing";
  sender: "user" | "bot" | "systemUser";
}

export const useChat = () => {
  const [isSending, setIsMessageSending] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const url = `${BASE_SOCKET_URL}`;
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    let socket: WebSocket | null = null;
    try {
      socket = new WebSocket(url);
      socketRef.current = socket;
    } catch (error) {
      console.error("Failed to create WebSocket connection", error);
      return;
    }

    return () => {
      socket?.close();
    };
  }, [url]);

  useEffect(() => {
    const socket = socketRef.current;
    if (!socket) return;

    const handleNewMessages = (event: MessageEvent) => {
      try {
        const socketData: IChatMessage = JSON.parse(event.data);

        const data: IMessage = {
          ...socketData,
          sender:
            socketData.sender_id === "user"
              ? "user"
              : socketData.is_bot == false
                ? "systemUser"
                : "bot",
        };
        if (data.type === "chat_message") {
          // handle suggestions
          if (data.sender !== "user") {
            setSuggestions(data.suggestions || []);
          }
          if (data.sender_id === "user") {
            setIsMessageSending(false);
            // update the last message with sending message status
            setMessages((prev) => {
              const sendingStatusIndex = prev.findIndex(
                (message) =>
                  message.sender === "user" && message.status === "sending"
              );
              if (prev.length > 0 && sendingStatusIndex !== -1) {
                const updatedMessages = [...prev];
                updatedMessages[sendingStatusIndex] = {
                  ...updatedMessages[sendingStatusIndex],
                  status: "sent" as const,
                };
                return updatedMessages;
              }
              return [...prev, data];
            });
          } else {
            setMessages((prev) => [...prev, data]);
          }
          setTimeout(() => {
            chatContainerRef.current?.scrollTo(
              0,
              chatContainerRef.current.scrollHeight
            );
          }, 1);
        }
      } catch (error) {
        console.error("Failed to parse message", error);
      }
    };

    socket.onopen = () => {
      setIsConnected(true);
    };

    socket.onmessage = (event) => {
      handleNewMessages(event);
    };
    // socket.onerror = (error) => {
    //   console.error("❌ WebSocket error occurred", error);
    // };
    socket.addEventListener("error", (event) => {
      console.error("❌ WebSocket error occurred", event);
      setIsMessageSending(false);
      setIsConnected(false);
    });

    socket.onclose = (event) => {
      console.warn(" WebSocket closed", {
        code: event.code,
        reason: event.reason,
        wasClean: event.wasClean,
      });
      setIsConnected(false);
    };
  }, [url]);

  const sendMessage = (
    message: string,
    file?: { file: string; type: FileTypes }
  ) => {
    if (!isConnected) {
      return;
    }
    const payload = JSON.stringify({
      type: "chat_message",
      message,
      file: file?.file,
      file_type: file?.type,
    });
    const newData: IMessage = {
      message,
      sender: "user",
      sender_id: "user",
      type: "chat_message",

      file: file?.file,
      file_type: file?.type,
      status: "sending",
    };

    setMessages((prev) => {
      return [...prev, newData];
    });
    setIsMessageSending(true);
    setTimeout(() => {
      chatContainerRef.current?.scrollTo(
        0,
        chatContainerRef.current.scrollHeight
      );
    }, 1);
    try {
      if (socketRef.current?.readyState === WebSocket.OPEN) {
        socketRef.current.send(payload);
      } else {
        handleMessageSendError();
      }
    } catch (error: unknown) {
      handleMessageSendError(error as Event);
    }
  };
  const handleMessageSendError = (error?: Event) => {
    console.error("❌ WebSocket error occurred", error);
    setIsMessageSending(false);
    setMessages((prev) => {
      const sendingStatusIndex = prev.findIndex(
        (message) => message.sender === "user" && message.status === "sending"
      );
      if (sendingStatusIndex !== -1) {
        const updatedMessages = [...prev];
        updatedMessages[sendingStatusIndex] = {
          ...updatedMessages[sendingStatusIndex],
          status: "failed" as const,
        };
        return updatedMessages;
      }
      return prev;
    });
  };

  return {
    isConnected,
    messages,
    sendMessage,
    chatContainerRef,
    isSending,
    suggestions,
  };
};
