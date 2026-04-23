export const FREE_SPACE = 'FREE SPACE'

export type QuestionSetId = 'travel' | 'social'

export interface QuestionSet {
  id: QuestionSetId
  label: string
  description: string
  questions: string[]
}

export const questionSets: Record<QuestionSetId, QuestionSet> = {
  travel: {
    id: 'travel',
    label: 'Travel Tales',
    description: 'Passport stamps, road trips, and memorable detours.',
    questions: [
      'has taken a plane ride',
      'has visited another country',
      'has been to a beach',
      'has stayed in a hotel',
      'has a valid passport',
      'has taken a selfie at a landmark',
      'has eaten food from a different country',
      'has taken a road trip',
      'has visited a national park',
      'has bought a souvenir',
      'has traveled solo',
      'has been to more than 5 countries',
      'has taken a cruise',
      'has visited Europe',
      'has visited Asia',
      'has been jet-lagged',
      'has gotten lost in a new city',
      'has tried street food abroad',
      'speaks a second language for travel',
      'has a stamp collection from travels',
      'can teach a 10-second travel hack',
      'has changed travel plans spontaneously',
      'has taken the worst travel selfie ever',
      'has a scar with a travel story',
    ],
  },
  social: {
    id: 'social',
    label: 'Social Sparks',
    description: 'Easy intros, side quests, and playful conversation starters.',
    questions: [
      'has a pet photo ready to show',
      'has tried a hobby in the last year',
      'prefers tea over coffee',
      'has a favorite comfort snack',
      'has watched the same movie more than three times',
      'likes to make playlists',
      'has cooked a recipe from the internet',
      'has rearranged a room just for fun',
      'has a go-to karaoke song',
      'has a favorite local spot to recommend',
      'has learned something from a YouTube tutorial',
      'has started a project and renamed it halfway through',
      'has a hobby that surprises people',
      'can recommend a podcast in 10 seconds',
      'has stayed up way too late finishing something fun',
      'has a tiny routine that improves their day',
      'has made a gift by hand',
      'has an unexpectedly strong opinion about a snack',
      'has a skill they can demo in 5 seconds',
      'has discovered a new favorite song this month',
      'can teach a fast party trick',
      'has a story behind something they are wearing',
      'has a nickname with a backstory',
      'has a hilariously bad old photo somewhere',
    ],
  },
}

export const questionSetOptions = Object.values(questionSets)
export const DEFAULT_QUESTION_SET_ID: QuestionSetId = 'travel'

export const questions = questionSets[DEFAULT_QUESTION_SET_ID].questions

export function getQuestionsForSet(questionSetId: QuestionSetId): string[] {
  return questionSets[questionSetId].questions
}
