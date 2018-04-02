GET _search
{
    "query": {
        "match": {
            "year": "2015"
        }
    }
}






GET _cat/indices?v


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
        "actors": {
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


GET actor/_mapping


## Geting documents by ID

GET /product/default/1

