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






GET actor/_mapping


## Geting documents by ID

GET /product/default/_search?pretty

