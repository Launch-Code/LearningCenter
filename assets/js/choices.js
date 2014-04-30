window['launch-data'] = [
    {
        "key": "0",
        "question": "Have you taken CS50, or do you have a background in programming?",
        "choices": [
            {
                "name": "Yes",
                "type": "success"
            },
            {
                "name": "No",
                "type": "danger"
            }
        ],
        "resources": null,
        "from": null
    },
    {
        "key": "1",
        "question": "What platform do you want to develop for?",
        "choices": [
            {
                "name": "Web",
                "type": "info"
            },
            {
                "name": "Desktop",
                "type": "info"
            },
            {
                "name": "Mobile",
                "type": "info disabled"
            }
        ],
        "resources": null,
        "from": "0:0"
    },
    {
        "key": "2",
        "question": "Do you want to develop on servers, or frontend?",
        "choices": [
            {
                "name": "Servers",
                "type": "info"
            },
            {
                "name": "Frontend",
                "type": "info"
            }
        ],
        "resources": null,
        "from": "1:0"
    },
    {
        "key": "3",
        "question": "Do you know HTML and have a basic understanding of CSS and JavaScript?",
        "choices": [
            {
                "name": "Yes",
                "type": "info"
            },
            {
                "name": "No",
                "type": "info disabled"
            }
        ],
        "resources": null,
        "from": "2:0"
    },
    {
        "key": "4",
        "question": "What server side language do you want to learn?",
        "choices": [
            {
                "name": "PHP",
                "type": "info"
            },
            {
                "name": "Ruby (on Rails)",
                "type": "info"
            },
            {
                "name": "Node.js",
                "type": "info disabled"
            },
            {
                "name": "Java (Spring)",
                "type": "info disabled"
            },
            {
                "name": "C# (MVC)",
                "type": "info disabled"
            }
        ],
        "resources": null,
        "from": "3:0"
    },
    {
        "key": "5",
        "question": null,
        "choices": null,
        "resources": [
            {
                "title": "PHP",
                "description": "PHP is a mature language that is widely known, and incredibly easy to get started with",
                "links": [
                    {
                        "description": "Google",
                        "href": "http://google.com"
                    }
                ]
            }
        ],
        "from": "4:0"
    },
    {
        "key": "6",
        "question": null,
        "choices": [],
        "resources": [
            {
                "title": "CS50",
                "description": "CS50x is the best introduction to Computer Science we have yet to find. Take the course, then come back here to figure out what to do after that.",
                "links": [
                    {
                        "description": "Harvard's CS50x",
                        "href": "https://www.edx.org/course/harvardx/harvardx-cs50x-introduction-computer-1022"
                    }
                ]
            }
        ],
        "from": "0:1"
    },
    {
        "key": "7",
        "question": "What language do you want to write in?",
        "choices": [
            {
                "name": "Java",
                "type": "info disabled"
            },
            {
                "name": "C#",
                "type": "info disabled"
            },
            {
                "name": "C/C++",
                "type": "info disabled"
            }
        ],
        "resources": null,
        "from": "1:1"
    },
    {
        "key": "8",
        "question": null,
        "choices": [],
        "resources": [
            {
                "title": "HTML5 and CSS3",
                "description": "HTML5 and CSS3 will allow you to design beautiful, modern websites.",
                "links": [
                    {
                        "description": "Dive into HTML5",
                        "href": "http://diveintohtml5.info/"
                    },
                    {
                        "description": "CSS Tricks",
                        "href": "http://css-tricks.com/"
                    },
                    {
                        "description": "CodePen - Live examples",
                        "href": "http://codepen.io/"
                    }
                ]
            }
        ],
        "from": "2:1"
    }
];
