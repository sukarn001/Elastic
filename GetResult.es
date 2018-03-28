GET _search
{
    "query": {
        "match":{
            "name": "ABC"
        }
    }
}


GET _search
{
    "query":{
        "match":{
            "year": {
                "query": "2016",
                "operator":"or",
                "fuzziness": "auto"
            }
        }
    }
}


GET _cat/indices?v


GET actor/_mapping



PUT actor/
{
    "mappings": {
        "actors":{
           "properties": {
               "name":{
                   "type": "text"
               },
               "year": {
                   "type": "integer"
               }
           }
        }
    }
}