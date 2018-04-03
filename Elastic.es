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

##Deleting Document
DELETE /product/default/1

POST /product/default
{
    "name": "Processing logs from Logstash",
    "catagory": "Course"
}

POST /product/default/2000
{
    "name": "Scaling Elasticsearch",
    "catagory": "Book"
}

DELETE /product

PUT /product/default/_mappings
{
    "properties":{
        "discount":{
            "type": "integer"
        }
    }
}

PUT /product/default/_mappings
{
    "properties":{
        "description":{
            "type": "text"
        },
        "name": {
            "type": "text",
            "fields": {
                "keyword":{
                    "type": "keyword"
                }
            }
        },
        "tags": {
            "type":"text",
            "fields": {
                "keyword": {
                    "type": "keyword"
                }
            }
        }
    }
}

PUT product/default/_mappings/
{
    "properties": {
        "created": {
            "type": "date",
            "format": "yyyy/MM/dd HH:mm:ss||yyyy/MM/dd"
        }
    }
}


