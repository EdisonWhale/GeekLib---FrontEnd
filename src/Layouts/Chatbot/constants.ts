export const API_KEY = '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'
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