
export interface Choice {
  text: string;
  nextNodeId: string;
  isJumpscare?: boolean;
}

export interface StoryNode {
  id: string;
  text: string;
  choices: Choice[];
  imagePrompt?: string;
  isEnding?: boolean;
  endingTitle?: string;
  // Added isJumpscare to allow specific nodes to trigger the jumpscare effect
  isJumpscare?: boolean;
}

export interface AIReponse {
  text: string;
  isJumpscare: boolean;
  isEnding?: boolean;
  endingTitle?: string;
  choices: { text: string; nextNodeId: string }[];
}