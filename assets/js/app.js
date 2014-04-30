//TODO rewrite this using something less insane than vanilla JS
//TODO redesign this

function onready(callback) {
    if (typeof callback === "function") {
        var i = window.setInterval(function () {
            if (document.readyState === "loaded" || document.readyState === "complete") {
                window.clearInterval(i);
                callback();
            }
        }, 73);
    }
}

var DataSource = (function () {
    var rawData = null;

    var indexes = {};

    function foreach(data, handler) {
        for (var i = 0; i < data.length; i++) {
            handler(data[i]);
        }
    }

    function createIndex(field) {
        var newIndex = {};
        foreach(rawData, function (item) {
            if (item.hasOwnProperty(field) && typeof item[field] === "string") {
                newIndex[item[field]] = item;
            }
        });
        indexes[field] = newIndex;
    }

    function DataSource(dataObject, indexOn) {
        rawData = dataObject;
        foreach(indexOn, function (item) {
            if (typeof item === "string") {
                createIndex(item);
            }
        });
        this.find = function find(constraintField, constraintValue) {
            if (!(constraintField in indexes)) {
                createIndex(constraintField);
            }
            return indexes[constraintField][constraintValue];
        };
        return this;
    }

    return DataSource;
})();

var Flow = (function () {
    var breadCrumbs = [];
    var dataSource, root;

    function foreach(data, handler) {
        if (data instanceof Array)
        for (var i = 0; i < data.length; i++) {
            handler(data[i], i);
        }
    }

    function createQuestion(data) {
        var choices = [];
        var div = document.createElement("div");
        var h4 = document.createElement("h4");
        var span = document.createElement("span");
        if (data["question"]) h4.innerText =  data["question"] + " ";
        h4.appendChild(span);
        span.className = "small";
        div.className = "active-action col-xs-12";
        div.appendChild(h4);
        var place = breadCrumbs.push(div);

        foreach(data["choices"], function (item, index) {
            var button = document.createElement("button");
            button.className = "btn btn-lg btn-" + item["type"];
            button.onclick = function (event) {
                event.stopPropagation();
                span.innerText = button.innerText;
                div.className = "inactive-action clickable col-xs-12";
                var newQueston = dataSource.find("from", data["key"] + ":" + index);
                if (newQueston) createQuestion(newQueston);
                div.onclick = function() {
                    div.className = "active-action col-xs-12";
                    while(breadCrumbs.length > place) {
                        var item = breadCrumbs.pop();
                        root.removeChild(item);
                    }
                }
            };
            button.innerText = item["name"];
            choices.push(button);
            div.appendChild(button);
        });

        foreach(data["resources"], function(item) {
            var resource = document.createElement("div");
            resource.className = "col-xs-12 col-sm-6 col-md-4 resource";

            var panel = document.createElement("div");
            panel.className = "panel panel-default";

            var panelHead = document.createElement("div");
            panelHead.className = "panel-heading";
            panelHead.innerText = item["title"];

            var panelBody = document.createElement("div");
            panelBody.className = "panel-body";
            if (item["description"]) panelBody.innerText = item["description"];

            var ul = document.createElement("ul");
            foreach(item["links"], function(item) {
                var li = document.createElement("li");
                var a = document.createElement("a");
                a.innerText = item["description"];
                a.href = item["href"];
                li.appendChild(a);
                ul.appendChild(li);
            });

            panel.appendChild(panelHead);
            panelBody.appendChild(ul);
            panel.appendChild(panelBody);
            resource.appendChild(panel);
            div.appendChild(resource);
        });

        root.appendChild(div);
    }

    function Flow(data, container) {
        dataSource = data;
        root = container;
        createQuestion(data.find("key", "0"));
    }

    return Flow;
})();