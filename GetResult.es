GET _search
{
    "query": {
        "match": {
            "name": "lettuce"
        }
    }
}






GET _cat/indices?v

GET _cat/health?v

GET _cat/nodes?v

GET _cat/ID


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






GET actor/


## Geting documents by ID

GET /product/default/_search?pretty

GET /product/default/_mapping

GET product/default/_mapping