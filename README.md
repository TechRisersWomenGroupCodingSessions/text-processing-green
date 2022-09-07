This project is following the steps in this kata: https://katalyst.codurance.com/text-processing

1. Find the top 10 most common words in a piece of text (DONE)
2. Count number of distinct words in a string - these are not case sensitive (DONE)
3. Work out total word count from length of word array (DONE)
4. Work out the average reading time for given paragraph based on 200 words per minute (DONE)
5. Create a way of inputting a piece of text that should be ignored

Potentional use-cases:

- hyphenated words

Second challenge (4)
Now I would like to know how much time would it take the user to read my post, for that I should apply the following formula:

(The average reading rate is actually 238, according to this study, but 200 is a nice compromise and is easier to remember.)

Here's the formula:

Get your total word count (including the headline and subhead).
Divide total word count by 200. The number before the decimal is your minutes.
Take the decimal points and multiply that number by .60. That will give you your seconds.
Example:

783 words ÷ 200 = 3.915 (3 = 3 minutes)
.915 × .60 = .549 (a little over 54 seconds, so I'd bump it up to 60 seconds, or a full minute)
reading time for this example article is 4 minutes.
