import { EXPECTED_ADDITIONAL_TIME_FOR_CODE_BLOCK, EXPECTED_READING_PER_CHARACTER } from "../constants/constants";
import { TutorialPartContent } from "../model/tutorial-part-content.model"

export const ExpectedDurationForTutorialPart = (content: TutorialPartContent): number => {
    const contentStr = content.content;

    const codeBlocks = countOfCodeBlocks(contentStr);

    return contentStr.length * EXPECTED_READING_PER_CHARACTER + codeBlocks * EXPECTED_ADDITIONAL_TIME_FOR_CODE_BLOCK;
}

const countOfCodeBlocks = (str: string): number => {
    const re = /```/g
    return ((str || '').match(re) || []).length / 2;
}