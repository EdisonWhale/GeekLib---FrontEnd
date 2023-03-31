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
