# Frontend Technical Specification

- Create a static website that serves an html resume.

## Resume Format Considerations

I live in the United States and resumes in word/pdf format typically exclude information that can be discrimitive. 

I'm going to use the [Harvard Resume Template format](https://careerservices.fas.harvard.edu/resources/bullet-point-resume-template/) as the template for my resume.

### Harvard Resume Template
I know HTML and CSS, so I used GenAI to generate out a HTML and CSS template and afterwords I will refactor the code. 

Prompt to ChatGPT: 

'''text
Convert this resume template into html.
Please don't use a css framework.
Please use the least amount of css tags.
'''

Image provided to LLM:
![](./docs/Screenshot%202026-07-22%20044020.jpg)

This is the [generated output](./docs/harvard-resume-format.html) that I will tweak.

This is what the unaltered generated HTML looks like:

![](./docs/unaltered-html-generated.jpg)

## HTML Adjustments

- UTF8 supports most languages. I plan to use English and potentially Japanese and German in the future, so I will leave this meta tag in.
- I want the website to apply mobile styling, so I'll keep the viewport meta tag width=device-width so mobile styling scales normallly.
- I plan to extract the CSS styles into it's own stylesheet after I am satisfied with the HTML markup.
- For the HTML page, I'll use hard tabs eight spaces because I mostly code in Java and C++ and that is the standard that I am accustomed to.