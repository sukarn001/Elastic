POST _analyze
{
    "tokenizer": "standard",
    "text": "I m in the mood of eating"
}

POST _analyze
{
    "filter": ["lowercase"],
    "text": "I m in the mood of eating"
}

POST _analyze
{
    "analyzer": "standard",
    "text": "I m in the mood of eating"
}

PUT /existing_analyzer_config
{
    "settings": {
        "analysis": {
            "analyzer": {
                "english_stop": {
                    "type": "standard",
                    "stopwords": "_english_"
                }
            },
            "filter": {
                "my_stemmer": {
                    "type": "stemmer",
                    "name": "english"
                }
            }
        }
    }
}

POST /existing_analyzer_config/_analyze
{
    "analyzer": "english_stop",
    "text": "I'm in the mood for drinking semi-dry red wine"
}

POST /existing_analyzer_config/_analyze
{
    "tokenizer": "standard",
    "filter": ["my_stemmer"],
    "text": "I'm in the mood for drinking semi-dry red wine!"
}

PUT /analyzer_test
{
    "settings": {
        "analysis": {
            "analyzer": {
                "english_stop": {
                    "type": "standard",
                    "stopwords": "_english_"
                },
                "my_analyzer": {
                    "type":"custom",
                    "tokenizer":"standard",
                    "char_filter": [
                        "html_strip"
                    ],
                    "filter":[
                        "standard",
                        "lowercase",
                        "trim",
                        "my_stemmer"
                    ]
                }
            },
            "filter": {
                "my_stemmer": {
                    "type": "stemmer",
                    "name": "english"
                }
            }
        }
    }
}

POST /analyzer_test/_analyze
{
    "analyzer": "my_analyzer",
    "text": "I'm in the mood for drinking <strong>semi-dry</strong> red wine!"
}



POST /analyzer_test/_close

PUT /analyzer_test/_settings
 {
     "analysis":{
         "analyzer":{
             "french_stop":{
                 "type":"standard",
                 "stopwords": "_french_"
             }
         }
     }
 }

POST /analyzer_test/_open
