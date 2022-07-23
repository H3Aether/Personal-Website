-------------------------------------------------------------
How to create a json article using article_txt_to_json.py ?
-------------------------------------------------------------

1. Create a .txt file
2. On the first line, write the article title
3. On the second line, write the date
4. Add a title by using #title <title name>
5. Add a subtitle by using #subtitle <subtitle name>
6. Add an image by using #image <image path> <description>
7. Add a paragraph by simply writing some text
8. Add some comments by using // <comment>
9. End the article by using #end
10. Run the following command : python3 article_txt_to_json_converter.py <file name>

The json file obtained is ready to be converted to html.

Example txt file :
-------------------------------------------------------------

This is my article title
July 22, 2022

#title This a title

#subtitle This is a subtitle

Some content. Same paragraph content.
Other paragraph content

#image ../../dummy_image.jpg Here I describe the image I just added

// A comment that will not figure in the json file and the html page

#end

-------------------------------------------------------------
How to create an html article using article_json_to_html.html ?
-------------------------------------------------------------

1. Open article_json_to_html_converter.html
2. Select the json file of the article you want to display
3. Copy the html code
4. Save the html file in articles/<new folder>/<file name>.html
5. Delete the following line : <script type="text/javascript" src="converter_script.js"></script>
6. (Optional) Use an online html formatter to format the html code and further modify it : https://www.freeformatter.com/html-formatter.html
7. (Optional) Add code snippets by using the following syntax :

    <pre><code class="<programming language, refer to highlight.js documentation>">
        Some code
    </code></pre>

And voila ! The html file is ready to be used on the blog.