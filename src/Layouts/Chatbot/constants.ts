export const API_KEY = process.env.REACT_APP_API_KEY || '';
export const systemMessage = {
  role: 'system',
  content: "Hello, I'm GeekLib AIChatbot! Ask me anything!",
};

export type MessageObj = {
  content: string;
  sentTime: string;
  sender: 'ChatGPT' | 'user';
  direction?: 'incoming' | 'outgoing';
};
