GET _search
{
    "query": {
        "match": {
            "year": "2015"
        }
    }
}






GET _cat/indices?v

GET _cat/health?v

GET _cat/nodes?v

GET _cat/shards?v


GET product/_search
{
    "query": {
        "match": {
            "name": {
                "query": "lettuce"
            }
        }
    }
}






GET product/_mapping


## Geting documents by ID

GET _search
{
    "query": {
        "term": {
            "discount": 215
        }
    }
}


GET product/default/_search