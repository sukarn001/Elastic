Post actor/actors
{
    "name": "ABC",
    "year": "2016"
}

testing git


#Create Index
PUT /product?pretty


#Adding Document to Elastic
POST /product/default
{
    "name": "processing events",
    "instructor":{
        "Firstname": "Sukarn",
        "Lastname": "Nigam"
    }
}

# Adding ID
PUT /product/default/1
{
    "name": "processing events for Elastic",
    "instructor":{
        "Firstname": "Sukarn",
        "Lastname": "Nigam"
    }
}

## updating Document
PUT /product/default/1
{
    "name": "processing events for Elastic",
    "instructor":{
        "Firstname": "Sukarn",
        "Lastname": "Nigam"
    },
    "Price":195
}

POST product/default/1/_update
{
    "doc": {"Price":95, "TAGS":["Elasticsearch"]}
}

### updating through script.
POST /product/default/1/_update
{
    "script": "ctx._source.remove(\"price\")"
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