import React from "react";

function makeEmojiList(minutes) {
  const interval = minutes < 30 ? 5 : 10;
  const emoji = minutes < 30 ? "☕️" : "🍱";

  let emojis = "";
  for (let n = 0; n < minutes; n += interval) {
    emojis += emoji;
  }
  return emojis;
}

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const emoji = makeEmojiList(minutes);

  return (
    <article>
      <h3>{title}</h3>
      <small>
      {date} • {emoji} {minutes} min read 
        </small>
      <p>{preview}</p>
    </article>
  );
}
export default Article;
