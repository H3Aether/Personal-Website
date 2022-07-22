-------------------------------------------------------------
How to create a json article using article_txt_to_json.py ?
-------------------------------------------------------------

1. Create a .txt file
2. On the first line, write the article title
3. Add a title by using #title <title name>
4. Add a subtitle by using #subtitle <subtitle name>
5. Add a paragraph by simply writing some text
6. Add some comments by using // <comment>
7. End the article by using #end
8. Run the following command : python3 article_txt_to_json_converter.py <file name>

The json file obtained is ready to be converted to html.

Example txt file :
-------------------------------------------------------------

This is my article title

#title 1st title

#subtitle 1st subtitle

Some content. Same line content
Other paragraph content

// A comment that will not figure in the json file

#end

-------------------------------------------------------------
How to create a html article using article_json_to_html.html ?
-------------------------------------------------------------

1. Open article_json_to_html.html
2. Select the json file of the article you want to display
3. Right click, save as
4. Delete the following line : <script type="text/javascript" src="converter_script.js"></script>

The html file is ready to be used on the blog.