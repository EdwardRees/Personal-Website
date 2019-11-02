import React from "react";
import { ArticleHeader, ArticleBody, Paragraph } from "../../../components";

const ProgrammingLanguageDifferences = () => (
  <div>
    <ArticleHeader
      title="Markup vs. StyleSheet vs. Programming Language"
      author="Edward Rees"
    />
    <ArticleBody>
      <Paragraph>
        I’ve mentioned that HTML isn’t a programming languages, it’s a markup
        languages. What does that actually mean? What’s the difference between
        markup and programming languages? Markup languages are usually for
        document annotations. They are usually used to describe code and
        distinguish it from the actual code. A clear example comes from the use
        of the language Markdown [md]. It’s commonly used when creating a README
        file for platforms like Github, as Github would read the file and
        showcase the information. Markup language files are commonly used over
        regular text files as they format text in a simple way using tags.
      </Paragraph>
      <Paragraph>
        The interesting part of markup languages comes from the fact that they
        aren’t all tag specific. So HTML, the markup language we’ll cover, has
        predefined tags that tell the Website what to show and how to show it.
        However, languages like XML don’t, as the tags are more general. The
        important component of Markup languages lie in the use of tags. There’s
        a separate lesson on HTML tags in the Front End modules so please check
        that out if you want to know more.
      </Paragraph>
      <Paragraph>
        There’s one more type that I’ve mentioned a couple times, being
        Stylesheet languages. Stylesheet languages are used to describe the
        presentation of a Markup language. CSS is a prime example of a
        stylesheet language. It’s used to explain and describe the exact design
        of the website, while HTML, the markup language, describes the actual
        content. Similar to markup languages, stylesheet languages have a
        universal syntax that describes the presentation of the document.
        Stylesheet languages and Markup languages work in unison as the former
        defines the presentation while the latter defines the content to be
        presented.
      </Paragraph>
      <Paragraph>
        So how do markup and stylesheet languages differ from Programming
        Languages? Markup languages use the aforementioned tags, stylesheet
        languages use selectors, properties, and values. Meanwhile, Programming
        languages don’t use any of those and have very specific syntax but rely
        on the programming to create most parts. Markup languages are used to
        show data without a reliance on logic. Stylesheet languages are used to
        format and style the displayed data, also without a reliance on logic.
        Programming languages, despite having universal concepts – conditional
        statements, iteration, data types, variables, functions, etc –
        programming relies on the use of logic to apply these concepts to create
        new programs. With markup languages, the predefined components (tags)
        are used to show data, instead of creating new programs. This is similar
        to stylesheet languages, as they are only used to style the data in a
        more presentable format. Many markup languages are used to showcase or
        store data, whereas programming languages would read that data stored
        and interpret it. For example, with XML [Extensible Markup Language],
        data can be stored in tags. A programming language can then read the
        data in the XML file and interpret or read that data. HTML is a prime
        example of a markup language as the tags dictate what to show and how to
        show that data. CSS is the popular example of a stylesheet language as
        it uses selectors to select HTML components, then uses properties and
        values to style aspects of the HTML components and files. In the scope
        of Web Development, JavaScript is a perfect example of a Programming
        Language used. JavaScript creates the animations and behaviors of the
        website – menu animations, changing text values with inputs, etc.
      </Paragraph>
      <Paragraph>
        There’s one analogy I often use when it comes to HTML, CSS, and
        JavaScript or Markup, Stylesheet, and Programming languages
        respectively. If you think about a Human being, HTML or the Markup
        language is the bones, it’s the general structure. CSS or the Stylesheet
        language is the skin, it’s the visual component. JavaScript or the
        Programming language is the muscles and the brain, it’s the processing
        and functional component. Programming languages are the logical part of
        a website, implementing logic to change the behaviors of the website to
        not only show data but to animate the data or enhance the User
        Experience.
      </Paragraph>
      <Paragraph>
        I hope that clears up some of the confusion caused by the distinction
        between a markup language and a programming language. Now, onto the
        lessons!
      </Paragraph>
    </ArticleBody>
  </div>
);

export { ProgrammingLanguageDifferences };
