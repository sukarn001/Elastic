GET _search
{
    "query": {
        "match":{
<<<<<<< HEAD
            "year": "2015"
=======
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
>>>>>>> 4b29b4745de6fd11ed82182fdf96c48afe830705
        }
    }
}





GET _search
{
    "query": {
        "match": {
            "name": {
                "query": "adams"
            }
        }
    }
}




PUT actor/
{
    "mappings": {
        "actor": {
            "properties": {
                "year": {
                    "type": "integer"
                }
            }
        }
    }
}


GET actor/_mapping