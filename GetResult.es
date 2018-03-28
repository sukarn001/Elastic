GET _search
{
    "query": {
        "match":{
            "name": "adams"
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