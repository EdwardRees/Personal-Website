import React from "react";
import { ArticleHeader, ArticleBody, Paragraph } from "../../../components/";
const Introduction = () => (
  <div>
    <ArticleHeader
      title="Welcome to the Front End Website Development Module!"
      author="Edward Rees"
    />
    <ArticleBody>
      <Paragraph>
        If you’re here then you’re interested in building the aesthetics to a
        website and transitioning from drawing or blueprint to product. Front
        end development may look complicated but the theory is quite simple. As
        someone who started with front end, I must say, it’s very different than
        programming. Front end uses tags and attributes rather than programming.
        With front end web development, coding comes down to declaring what must
        be shown with HTML and CSS, along with how some of the behavior works
        with JavaScript. The extent of programming falls to the JavaScript
        behavioural programming involved. I’ll explain the distinction between
        the three languages in the first lesson and why it’s important to learn
        all three to create a functional wholesome website. Considering I’m only
        explaining the basics of each concept, I’m only here to bring you to the
        stage of being able to write a basic website. Only recently, I’ve begun
        learning backend web development, meaning the more advanced part of a
        website – the logical assembly of a website.
      </Paragraph>
    </ArticleBody>
  </div>
);

export { Introduction };
