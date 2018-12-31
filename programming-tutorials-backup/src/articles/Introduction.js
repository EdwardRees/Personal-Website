import React, { Component } from "react";

import { ArticleHeader, ArticleBody, Paragraph } from "../components";

class Introduction extends Component {
  render() {
    return (
      <div>
        <ArticleHeader title="Introduction" author="Edward Rees" />
        <ArticleBody>
          <Paragraph>
            Learning programming can be difficult, however, it doesn’t have to
            be. Programming is an art in itself. It’s pretty much everywhere
            now. From operating systems for computers and phones to the software
            to edit a picture or audio to an individual website. Programming
            exists all around us. Programming is something that, generally
            speaking, you can learn once and apply elsewhere. With programming
            languages, if you learn one well, generally speaking, you can pick
            up another one quite easily. The logic between languages remain
            about the same, it only comes down to actually writing the code in
            other languages. At that point, the hardest part is learning the
            syntax and applying that. This will make more sense later in future
            lessons.
          </Paragraph>
          <Paragraph>
            So where do you start? I normally ask people what they want to make
            and build towards? For a lot of the people I’ve talked to, it’s come
            down to Mobile Application Development. However, I’ve also talked to
            people who only want to go over Web Application Development or just
            Website Development. I’ve met people who want to go down the path of
            Software Development, or Game Development, and others who want to go
            more towards System Security. Each path has its own learning curve
            and, in general, its own programming language associated with it.
            These path’s don’t even scratch the surface of all the possible ways
            you can go, but that’s up to you. Personally, I’ve focused myself
            into more Mobile, Web, and Game development. In the meantime, I’ve
            learned Swift, Java, JavaScript, and C#. Each of these targeting a
            different part of the aforementioned paths I’ve gone down.
          </Paragraph>
          <Paragraph>Back to you, what do you want to develop?</Paragraph>
          <Paragraph>
            If it’s Mobile, I would suggest looking into Swift, Java, and
            JavaScript or C#. Swift would be used for only developing for iOS,
            Java, primarily used for Android, and JavaScript or C# – using
            NativeScript, React Native, Xamarin, or another cross-platform
            framework – for writing to both iOS and Android. Despite the option
            of writing to both using JavaScript or C#, I would still advise
            specializing in Swift [iOS] or Java [Android] as companies are still
            prioritising the specialized apps over cross-platforms.
          </Paragraph>
          <Paragraph>
            If it’s Web, I would ask if it’s Front-end, Back-end, or Fullstack.
            Front-end covers what you see, Back-end covers the logic behind a
            website – database, authentication, etc – and Fullstack covers both,
            so combining both Front-end and Back-end to create a more wholesome
            website. If you’re heading down Front-end, I would suggest learning
            HTML, CSS, and JavaScript. With JavaScript, learn the basics of
            JavaScript then the framework of jQuery. jQuery is a framework that
            handles changing parts of the HTML and CSS code with actions like
            buttons. It’s more complicated but that’s the simplified explanation
            of jQuery. After you learn those, if you want to go more in-depth, I
            would suggest looking into JavaScript front-end frameworks like
            Angular.js, React.js, or Vue.js, to name a few. There are tons of
            others, but those are the three most widely used now. I would
            suggest looking more in-depth into front-end frameworks as they can
            help develop websites faster with component reusability. If you’re
            looking into Back-end development, I would suggest JavaScript,
            Python, or Ruby. For JavaScript, look into Node.js, Python, look
            into Django or Flask, for Ruby, look into Ruby on Rails. Each of
            these are different frameworks that help with back-end development
            for Websites. If you’re looking into writing full-stack websites, I
            would suggest looking into at least one component from what’s just
            been mentioned.
          </Paragraph>
          <Paragraph>
            If it’s Game Development, I would suggest looking into C#, C++, or C
            as they are all primary languages for game development. I personally
            can’t explain Game Development well as I haven’t spent much time on
            that, however, I do plan to start on that path soon. Same goes for
            if you are heading towards Software Development or System Security.
            I haven’t had much experience so I’m only guessing or going off of
            what I’ve heard.{" "}
          </Paragraph>
          <Paragraph>
            Regardless, my question still lies of, what exactly is it that you
            want to do and learn? Each product has its own languages and
            frameworks associated with it, making it important to learn at least
            one language. From there, learning another language gets easier as
            the concepts and theory is about the same, the only difference being
            syntax.
          </Paragraph>
          <Paragraph>
            In the lessons coming up, I cover Python, JavaScript, and Java. I
            figured Python is a good introduction to normal or basic programming
            as its syntax is simple and straightforward. In addition to a simple
            syntax, Python’s usage lies in both Game Development and Web
            Application Development. It’s not the biggest language on Game
            Development, but it does have a framework that can simplify the load
            and help create a game. I chose to also include JavaScript as I felt
            it’s becoming more practical and helpful to know, given it can be
            used to write both Web and Mobile Applications now, and with its
            simplified syntax with the introduction of ECMAScript, I felt it
            could be more practical to learn. I add Java as it still remains to
            be a really strong language to learn Object Oriented Programming
            with its syntax. I understand I’ve used a number of words that may
            seem alien but they’ll make sense once you start going more in-depth
            with these languages.
          </Paragraph>
          <Paragraph>
            I understand the content I cover may not be what exactly you need,
            but I hope if you learn the languages well, going into any other
            language will be easier conceptually and practically.
          </Paragraph>
          <Paragraph>
            Please click on the appropriate links to go to the language you
            would like to learn. I am currently working on Swift and C# to get
            into the list. Beyond just the languages, I also have a module
            teaching Front End Website Development. This goes more in-depth with
            HTML, CSS, and the JavaScript framework called jQuery. This module
            is separate from the others as HTML and CSS aren’t really considered
            a programming language, instead considered as Markup Languages and
            Stylesheet Languages, respectively. If you’re curious about Markup
            and Stylesheet Languages, go into the Front End module and I’ll have
            an explanation there. Regardless, in the module, there will be a
            section on JavaScript Front-end frameworks such as React, Vue, and
            Angular along with the distinction.
          </Paragraph>
          <Paragraph>
            I wish you all the best! If you have any questions, feel free to
            contact me at{" "}
            <a href="mailto:erees.hk@splusgroup.net">
              {" "}
              erees.hk@splusgroup.net
            </a>
            .
          </Paragraph>
        </ArticleBody>
      </div>
    );
  }
}

export { Introduction };
