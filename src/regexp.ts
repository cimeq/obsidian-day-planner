const ulToken = `[-*+]`;
const olToken = `\\d+\\.`;
const listToken = `(${ulToken}|${olToken})\\s+`;

const checkbox = `\\[(?<completion>[^\\]])]\\s+`;
const checkboxOrNothing = `(${checkbox})?`;

const durationSeparator = `\\s*-{1,2}\\s*`;

const hours = `\\d{1,2}`;
const minutes = `\\d{2}`;
const hourMinuteSeparator = `[hH:. ]`;

const time = `(${hours})(?:${hourMinuteSeparator}?(${minutes}))?\\s*([apAP][mM])?`;

export const timeRegExp = new RegExp(time);
export const timestampRegExp = new RegExp(
  `^\\s*(?<listTokens>${listToken}${checkboxOrNothing})(?<times>(?<start>${time})(?:${durationSeparator}(?<end>${time}))?)(?<text>.+)$`,
  "im",
);
