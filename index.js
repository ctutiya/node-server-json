const http = require('http')

const port = 5050

const server = http.createServer((req, res) => {
	//change the MIME type to 'application/json' 
    res.writeHead(200, {'Content-Type': 'application/json'});

    // create json
    const json_response = {
        "glossary": {
            "title": "example glossary",
            "GlossDiv": {
                "title": "S",
                "GlossList": {
                    "GlossEntry": {
                        "ID": "SGML",
                        "SortAs": "SGML",
                        "GlossTerm": "Standard Generalized Markup Language",
                        "Acronym": "SGML",
                        "Abbrev": "ISO 8879:1986",
                        "GlossDef": {
                            "para": "A meta-markup language, used to create markup languages such as DocBook.",
                            "GlossSeeAlso": ["GML", "XML"]
                        },
                        "GlossSee": "markup"
                    }
                }
            }
        }
    }

    res.end(JSON.stringify(json_response))
})

server.listen(port, (error) => {
    if (error) return console.log('Error occured:', error)

    console.log(`Server running at http://localhost:${port}/`)
})