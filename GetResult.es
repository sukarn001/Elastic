GET _search
{
    "query": {
        "match":{
            "year": "2015"
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